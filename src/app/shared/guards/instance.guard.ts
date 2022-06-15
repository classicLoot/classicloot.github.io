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
    const url = state.url;

    if (url.endsWith('10')) {
      this.optionsStore.updateSize(10);
    }
    else if (url.endsWith('25')) {
      this.optionsStore.updateSize(25);
    }

    return true;
  }

}
