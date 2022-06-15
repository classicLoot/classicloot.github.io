import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OptionsStoreService } from '../services/options-store.service';

@Injectable({
  providedIn: 'root'
})
export class InstanceGuard implements CanActivate {

  constructor(private optionsStore: OptionsStoreService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const size = this.optionsStore.getSize();
    const url = state.url;

    // e.g. Naxx10
    if (url.endsWith('10')) {
      if (size === 10) {
        return true;
      }
      else if (size === 25) {
        const newURL = url.replace('10', '25');
        this.router.navigate([newURL]);
        return false;
      }

      return true;
    }
    // e.g. Naxx25
    else if (url.endsWith('25')) {
      if (size === 25) {
        return true;
      }
      else if (size === 10) {
        const newURL = url.replace('25', '10');
        this.router.navigate([newURL]);
        return false;
      }

      return true;
    }

    return true;
  }

}
