"use strict";(self.webpackChunkclassicloot=self.webpackChunkclassicloot||[]).push([[592],{5755:(h,l,m)=>{m.d(l,{b:()=>x});var t=m(5e3),v=m(520);let d=(()=>{class n{constructor(e){this.http=e}getItemData$(e){return this.http.get(`../../../assets/items/${String(e)}.json`)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(v.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var u=m(4198),c=m(9808);function g(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",1),t._UZ(1,"img",2),t.TgZ(2,"div",3),t.NdJ("mousemove",function(i){const r=t.CHM(e).ngIf;return t.oxw().onMouseEvent(i,"move",r)})("mouseenter",function(i){const r=t.CHM(e).ngIf;return t.oxw().onMouseEvent(i,"enter",r)})("mouseleave",function(i){const r=t.CHM(e).ngIf;return t.oxw().onMouseEvent(i,"leave",r)}),t.TgZ(3,"div")(4,"a",4),t._uU(5),t.qZA()()()()}if(2&n){const e=s.ngIf,o=t.oxw();t.xp6(1),t.hYB("src","../../../../assets/icons/",o.itemSize,"/",e.icon,".jpg",t.LSH),t.xp6(2),t.Gre("itemName q",e.quality,""),t.xp6(1),t.s9C("href",e.link,t.LSH),t.xp6(1),t.hij(" ",e.name," ")}}let x=(()=>{class n{constructor(e,o){this.itemDataService=e,this.tooltipService=o,this.itemID=-1,this.itemSize="large",this.item$=this.itemDataService.getItemData$(-1)}ngOnInit(){}ngOnChanges(e){this.item$=this.itemDataService.getItemData$(this.itemID)}ngOnDestroy(){}onMouseEvent(e,o,i){this.tooltipService.onMouseEvent(e,o,i)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d),t.Y36(u.a))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-wow-item"]],inputs:{itemID:"itemID",itemSize:"itemSize"},features:[t.TTD],decls:2,vars:3,consts:[["class","item",4,"ngIf"],[1,"item"],[1,"itemIcon","border",3,"src"],[1,"itemText",3,"mousemove","mouseenter","mouseleave"],[3,"href"]],template:function(e,o){1&e&&(t.YNc(0,g,6,7,"div",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,o.item$))},directives:[c.O5],pipes:[c.Ov],styles:[".item[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;max-width:400px;overflow:visible}.itemTooltipBox[_ngcontent-%COMP%]{display:flex;gap:5px;max-width:400px;width:100%}.itemIcon[_ngcontent-%COMP%]{width:40px;height:40px}.itemIconBig[_ngcontent-%COMP%]{width:60px;height:60px}.itemName[_ngcontent-%COMP%]{font-size:larger;padding-left:.5rem}.itemName[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),n})()}}]);