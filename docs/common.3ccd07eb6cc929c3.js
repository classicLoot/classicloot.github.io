"use strict";(self.webpackChunkclassicloot=self.webpackChunkclassicloot||[]).push([[592],{1003:(M,d,c)=>{c.d(d,{b:()=>S});var e=c(5e3),w=c(520);let f=(()=>{class t{constructor(n){this.http=n}getItemData$(n){return this.http.get(`../../../assets/items/${String(n)}.json`)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(w.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var p=c(4198),m=c(9808);function r(t){switch(+t){case 1:return"Head";case 2:return"Neck";case 3:return"Shoulder";case 5:return"Chest";case 6:return"Waist";case 7:return"Legs";case 8:return"Feet";case 9:return"Wrist";case 10:return"Hands";case 11:return"Finger";case 12:return"Trinket";case 13:return"One-Hand";case 14:case 22:return"Off Hand";case 15:return"Ranged";case 16:return"Back";case 17:return"Two-Hand";case 18:return"Bag";case 21:return"Main Hand";case 25:return"Thrown";case 28:return"Relic";default:return"SlotNYI"}}let _=(()=>{class t{transform(n,...s){const a=`${n.wowClass} | ${n.wowSubClass} | ${n.slot}`;switch(+n.wowClass){case 0:return function I(t){return[45506,45786,45784,45788,45787,45038,45857].includes(+t.id)?"Quest Item":"Consumable"}(n);case 1:return"Container";case 2:return function h(t){switch(+t.wowSubClass){case 0:return r(t.slot)+", Axe";case 1:return"Two-handed, Axe";case 2:return"Ranged, Bow";case 3:return"Ranged, Gun";case 4:return r(t.slot)+", Mace";case 5:return"Two-handed, Mace";case 6:return r(t.slot)+", Polearm";case 7:return r(t.slot)+", Sword";case 8:return"Two-handed, Sword";case 10:return"Two-handed, Staff";case 13:return r(t.slot)+", Fist Weapon";case 15:return r(t.slot)+", Dagger";case 16:return"Ranged, Thrown";case 18:return"Ranged, Crossbow";case 19:return"Ranged, Wand";default:return"Weapon - NYI"}}(n);case 4:return function x(t){switch(+t.wowSubClass){case 1:return r(t.slot)+", Cloth";case 2:return r(t.slot)+", Leather";case 3:return r(t.slot)+", Mail";case 4:return r(t.slot)+", Plate";case 6:return r(t.slot)+", Shield";case 7:return r(t.slot)+", Libram";case 8:return r(t.slot)+", Idol";case 9:return r(t.slot)+", Totem";case-2:return"Ring";case-3:return"Neck";case-4:return"Trinket";case-5:return"Held In Off-Hand";case-6:return"Cloak";default:return"*Armor* - NYI"}}(n);case 7:return"Trade Goods";case 9:return function g(t){return 10==+t.wowSubClass?"Recipe - Jewelcrafting":"Recipe - NYI"}(n);case 10:return"Currency";case 12:return"Quest Item";case 13:return"Key";case 15:return function C(t){switch(+t.wowSubClass){case 0:return"Misc, Junk";case-2:return"Armor Token";case-7:return"Flying Mount";default:return"Misc - NYI"}}(n);default:return"NYI - "+a}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e.Yjl({name:"itemSubtext",type:t,pure:!0}),t})();function v(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"div",2),e._UZ(1,"img",3),e.TgZ(2,"div",4),e.NdJ("mousemove",function(a){const i=e.CHM(n).ngIf;return e.oxw().onMouseEvent(a,"move",i)})("mouseenter",function(a){const i=e.CHM(n).ngIf;return e.oxw().onMouseEvent(a,"enter",i)})("mouseleave",function(a){const i=e.CHM(n).ngIf;return e.oxw().onMouseEvent(a,"leave",i)}),e.TgZ(3,"a",5)(4,"div"),e._uU(5),e.qZA(),e.TgZ(6,"div",6),e._uU(7),e.ALo(8,"itemSubtext"),e.qZA()()()()}if(2&t){const n=o.ngIf,s=e.oxw();e.xp6(1),e.hYB("src","../../../../assets/icons/",s.itemSize,"/",n.icon,".jpg",e.LSH),e.xp6(2),e.MGl("href","",n.link,"&xml",e.LSH),e.xp6(1),e.Gre("itemName q",n.quality,""),e.xp6(1),e.hij(" ",n.name," "),e.xp6(2),e.hij(" ",e.lcZ(8,8,n)," ")}}function T(t,o){1&t&&(e.TgZ(0,"div",2),e._UZ(1,"div",7),e.TgZ(2,"div",8)(3,"div",9),e._UZ(4,"a",10),e.qZA()()())}let S=(()=>{class t{constructor(n,s){this.itemDataService=n,this.tooltipService=s,this.itemID=-1,this.itemSize="large",this.item$=this.itemDataService.getItemData$(-1)}ngOnInit(){}ngOnChanges(n){this.item$=this.itemDataService.getItemData$(this.itemID)}ngOnDestroy(){}onMouseEvent(n,s,a){this.tooltipService.onMouseEvent(n,s,a)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(f),e.Y36(p.a))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-wow-item"]],inputs:{itemID:"itemID",itemSize:"itemSize"},features:[e.TTD],decls:4,vars:4,consts:[["class","item",4,"ngIf","ngIfElse"],["loading",""],[1,"item"],[1,"itemIcon","border",3,"src"],[1,"itemText",3,"mousemove","mouseenter","mouseleave"],[3,"href"],[1,"itemSubText"],[1,"itemIcon","border"],[1,"itemText"],[1,"itemName","q0"],["href",""]],template:function(n,s){if(1&n&&(e.YNc(0,v,9,10,"div",0),e.ALo(1,"async"),e.YNc(2,T,5,0,"ng-template",null,1,e.W1O)),2&n){const a=e.MAs(3);e.Q6J("ngIf",e.lcZ(1,2,s.item$))("ngIfElse",a)}},directives:[m.O5],pipes:[m.Ov,_],styles:[".item[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;max-width:400px;overflow:visible}.itemTooltipBox[_ngcontent-%COMP%]{display:flex;gap:5px;max-width:400px;width:100%}.itemIcon[_ngcontent-%COMP%]{width:40px;height:40px}.itemIconBig[_ngcontent-%COMP%]{width:60px;height:60px}.itemText[_ngcontent-%COMP%]{padding-left:.5rem}.itemText[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.item[_ngcontent-%COMP%]:hover{background-color:#2e3a59}.itemName[_ngcontent-%COMP%]{font-size:larger}.itemSubText[_ngcontent-%COMP%]{color:#cd9f3a;font-size:small}"]}),t})()}}]);