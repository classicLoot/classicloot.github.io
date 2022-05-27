import { Injectable } from '@angular/core';

declare var aowow_tooltips: any;
declare var $WowheadPower: any;

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  constructor() { }

  public runScript(){
    if($WowheadPower){
      console.log('run WoWHead script...')
      $WowheadPower.refreshLinks();
    }
  }

  public attachScript() {


    if (aowow_tooltips === undefined) {
      console.log('UNDEFINED');
    }
    else {
      console.log('DEFINED');
    }
    //const test = window['aowow_tooltips'] as string;
    // var aowow_tooltips = { "colorlinks": true, "iconizelinks": true, "renamelinks": true }
  }
}
