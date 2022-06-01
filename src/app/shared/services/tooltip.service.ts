import { Injectable } from '@angular/core';

declare var aowow_tooltips: any;
declare var $WowheadPower: any;

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  constructor() { }

  public runScript() {
    if ($WowheadPower) {
      const start = performance.now();
      console.log('run WoWHead script...');
      $WowheadPower.refreshLinks();
      const dur = performance.now() - start;
      console.log('finished' + ' ' + dur);
    }
  }

  public iterateItemlinks() {
    const start = performance.now();
    console.log('iterate Itemlinks...');

    const docs = document.querySelectorAll('#itemlink')
    docs.forEach(doc => {
      //console.log( doc.getAttribute('style'))      
    })
    //console.log(docs.length);
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
