"use strict";(self.webpackChunkclassicloot=self.webpackChunkclassicloot||[]).push([[295],{9612:(P,b,g)=>{g.d(b,{b:()=>T});var e=g(4004),s=g(5e3),x=g(3342),m=g(9808);const w=function(u){return{selected:u}};function c(u,o){if(1&u){const i=s.EpF();s.TgZ(0,"div",7),s.NdJ("click",function(){const f=s.CHM(i).$implicit,C=s.oxw(2).ngIf;return s.oxw().handleClick(f.class,C.class)}),s.qZA()}if(2&u){const i=o.$implicit,d=s.oxw(2).ngIf;s.Udp("background-image","url(../../../../assets/icons/large/"+i.img+".jpg)"),s.Q6J("ngClass",s.VKq(3,w,d.class===i.class))}}function h(u,o){if(1&u){const i=s.EpF();s.TgZ(0,"div",4)(1,"div",5)(2,"div",6),s.NdJ("click",function(){s.CHM(i);const p=s.oxw().ngIf;return s.oxw().handleClick("all",p.class)}),s.qZA(),s.TgZ(3,"div",7),s.NdJ("click",function(){s.CHM(i);const p=s.oxw().ngIf;return s.oxw().handleClick("all",p.class)}),s.qZA(),s.YNc(4,c,1,5,"div",8),s.qZA()()}if(2&u){const i=s.oxw().ngIf,d=s.oxw();s.xp6(2),s.Udp("background-image","url(../../../../assets/icons/large/inv_misc_questionmark.jpg)"),s.xp6(1),s.Udp("background-image","url(../../../../assets/icons/large/inv_misc_questionmark.jpg)"),s.Q6J("ngClass",s.VKq(6,w,"all"===i.class)),s.xp6(1),s.Q6J("ngForOf",d.classArr)}}const S=function(u,o){return{selected:u,active:o}};function M(u,o){if(1&u){const i=s.EpF();s.TgZ(0,"div",1)(1,"div",2),s.NdJ("click",function(){return s.CHM(i),s.oxw().toggleOpen()}),s.qZA(),s.YNc(2,h,5,8,"div",3),s.qZA()}if(2&u){const i=o.ngIf,d=s.oxw();s.xp6(1),s.Udp("background-image","url(../../../../assets/icons/large/"+i.img+".jpg)"),s.Q6J("ngClass",s.WLB(4,S,"all"!=i.class,d.bOpen)),s.xp6(1),s.Q6J("ngIf",d.bOpen)}}let T=(()=>{class u{constructor(i,d,p){this.filterStore=i,this.elementRef=d,this.renderer=p,this.count=0,this.bOpen=!1,this.classArr=[{class:"Deathknight",img:"class_deathknight"},{class:"Druid",img:"class_druid"},{class:"Hunter",img:"class_hunter"},{class:"Mage",img:"class_mage"},{class:"Paladin",img:"class_paladin"},{class:"Priest",img:"class_priest"},{class:"Rogue",img:"class_rogue"},{class:"Shaman",img:"class_shaman"},{class:"Warlock",img:"class_warlock"},{class:"Warrior",img:"class_warrior"}],this.class$=this.filterStore.class$,this.classWithImg$=this.class$.pipe((0,e.U)(f=>this.classArr.find(v=>v.class===f)||{class:"all",img:"inv_misc_questionmark"}))}ngOnInit(){}handleClick(i,d){this.filterStore.updateClass("all"===i?i:i===d?"all":i),this.close()}toggleOpen(){this.bOpen?(this.unlistener(),this.close()):(this.open(),this.unlistener=this.renderer.listen("document","click",i=>{this.count>0?(this.close(),this.unlistener()):this.count++}))}open(){this.bOpen=!0,this.count=0}close(){this.bOpen=!1}}return u.\u0275fac=function(i){return new(i||u)(s.Y36(x.e),s.Y36(s.SBq),s.Y36(s.Qsj))},u.\u0275cmp=s.Xpm({type:u,selectors:[["app-filter-class"]],decls:2,vars:3,consts:[["class","base",4,"ngIf"],[1,"base"],[1,"image-base",3,"ngClass","click"],["class","border overlay",4,"ngIf"],[1,"border","overlay"],[1,"grid"],[1,"image-base","image-big","first",3,"click"],[1,"image-base","image-big",3,"ngClass","click"],["class","image-base image-big",3,"background-image","ngClass","click",4,"ngFor","ngForOf"]],template:function(i,d){1&i&&(s.YNc(0,M,3,7,"div",0),s.ALo(1,"async")),2&i&&s.Q6J("ngIf",s.lcZ(1,1,d.classWithImg$))},directives:[m.O5,m.mk,m.sg],pipes:[m.Ov],styles:[".image-base[_ngcontent-%COMP%]{width:24px;height:24px;background-image:url(class_deathknight.fb55acd2f7abad09.jpg);background-size:contain;border-radius:var(--button-rectangle-border-radius);border-style:var(--button-outline-border-style);border-width:var(--button-outline-border-width);text-transform:var(--button-outline-text-transform);background-color:var(--button-outline-basic-background-color);border-color:var(--button-outline-basic-border-color);color:var(--button-outline-basic-text-color);filter:brightness(50%);cursor:pointer}.image-base[_ngcontent-%COMP%]:hover{filter:brightness(125%)}.image-big[_ngcontent-%COMP%]{width:42px;height:42px}.active[_ngcontent-%COMP%]{border-color:var(--button-outline-warning-border-color);filter:brightness(100%)}.selected[_ngcontent-%COMP%]{filter:brightness(100%)}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:50% 50%;grid-template-rows:auto;align-self:stretch;width:100%;grid-gap:2px;gap:2px}.first[_ngcontent-%COMP%]{visibility:hidden}.base[_ngcontent-%COMP%]{position:relative}.overlay[_ngcontent-%COMP%]{position:absolute;z-index:25}"]}),u})()},811:(P,b,g)=>{g.d(b,{Q:()=>F});var e=g(5e3),s=g(4198),x=g(3342),m=g(5802),w=g(3285),c=g(9808),h=g(4343);let S=(()=>{class n{transform(t,r){return"all"===r||(4==+t.wowClass?this.checkArmor(t,r)&&this.checkClass(t,r)&&this.checkStats(t,r):2==+t.wowClass?this.checkWeapon(t,r)&&this.checkClass(t,r)&&this.checkStats(t,r):11==+t.wowClass?["Hunter"].includes(r):15!=+t.wowClass||![4,-2].includes(+t.wowSubClass)||this.checkClass(t,r))}checkClass(t,r){[4,2,11].includes(+t.wowClass);const _=t.htmlTooltip.replace("\\","");let k=[];return[..._.matchAll(/(<a href="\?class=\d*" class="\w\d*">(\w* {0,1}\w*)<\/a>)/g)].forEach(y=>{k.push("Death Knight"===y[2]?"Deathknight":y[2])}),!(k.length>0)||k.includes(r)}checkStats(t,r){const a=t.htmlTooltip.replace("\\","");return[...a.matchAll(/<!--stat1-->/g)].length>0&&console.log("1111"),[...a.matchAll(/<!--stat2-->/g)].length>0&&console.log("2222"),!([...a.matchAll(/<!--stat3-->/g)].length>0&&["Mage","Priest","Warlock"].includes(r)||[...a.matchAll(/<!--stat4-->/g)].length>0&&["Hunter","Mage","Priest","Warlock"].includes(r)||[...a.matchAll(/<!--stat5-->/g)].length>0&&["Deathknight","Rogue","Warrior"].includes(r)||[...a.matchAll(/<!--stat6-->/g)].length>0&&["Deathknight","Rogue","Warrior"].includes(r)||(a.matchAll(/<!--stat7-->/g),[...a.matchAll(/<!--stat8-->/g)].length>0&&console.log("8888"),[...a.matchAll(/defense rating/g)].length>0&&[,"Hunter","Mage","Priest","Rogue","Shaman","Warlock"].includes(r))||[...a.matchAll(/spell power/g)].length>0&&["Deathknight","Hunter","Rogue","Warrior"].includes(r)||[...a.matchAll(/attack power/g)].length>0&&["Mage","Priest","Warlock"].includes(r)||[...a.matchAll(/mana per 5/g)].length>0&&["Deathknight","Rogue","Warrior"].includes(r)||[...a.matchAll(/armor penetration/g)].length>0&&["Mage","Priest","Warlock"].includes(r)||[...a.matchAll(/dodge rating/g)].length>0&&["Hunter","Mage","Priest","Shaman","Warlock"].includes(r))}checkArmor(t,r){switch(+t.wowSubClass){case 1:return["Druid","Mage","Paladin","Priest","Shaman","Warlock"].includes(r);case 2:return["Deathknight","Druid","Hunter","Paladin","Rogue","Shaman","Warrior"].includes(r);case 3:return["Deathknight","Hunter","Paladin","Shaman","Warrior"].includes(r);case 4:return["Deathknight","Paladin","Warrior"].includes(r);case 6:return["Paladin","Warrior","Shaman"].includes(r);case 7:return["Paladin"].includes(r);case 8:return["Druid"].includes(r);case 9:return["Shaman"].includes(r);case 10:return["Deathknight"].includes(r);case-5:return["Druid","Mage","Paladin","Priest","Shaman","Warlock"].includes(r)}return!0}checkWeapon(t,r){if(20==+t.wowSubClass)return!0;switch(r){case"Deathknight":case"Paladin":return[0,1,4,5,6,7,8].includes(+t.wowSubClass);case"Druid":return[4,5,10,13,15,20].includes(+t.wowSubClass);case"Hunter":return[0,1,2,3,6,7,8,10,13,15,18,19].includes(+t.wowSubClass);case"Mage":case"Warlock":return[7,10,15,19].includes(+t.wowSubClass);case"Priest":return[4,10,15,19].includes(+t.wowSubClass);case"Rogue":return[0,2,3,4,7,13,15,16,18].includes(+t.wowSubClass);case"Shaman":return[0,1,4,5,10,13,15].includes(+t.wowSubClass);case"Warrior":return[0,1,2,3,4,5,6,7,8,10,13,15,16,18].includes(+t.wowSubClass)}return!0}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"itemVisibility",type:n,pure:!0}),n})();function o(n){switch(+n){case 1:return"Head";case 2:return"Neck";case 3:return"Shoulder";case 5:return"Chest";case 6:return"Waist";case 7:return"Legs";case 8:return"Feet";case 9:return"Wrist";case 10:return"Hands";case 11:return"Finger";case 12:return"Trinket";case 13:return"One-Hand";case 14:case 22:return"Off Hand";case 15:return"Ranged";case 16:return"Back";case 17:return"Two-Hand";case 18:return"Bag";case 21:return"Main Hand";case 25:return"Thrown";case 28:return"Relic";default:return"SlotNYI"}}let v=(()=>{class n{transform(t,...r){const a=`${t.wowClass} | ${t.wowSubClass} | ${t.slot}`;switch(+t.wowClass){case-69:return"Spell";case 0:return function d(n){return[45506,45786,45784,45788,45787,45038,45857].includes(+n.id)?"Quest Item":"Consumable"}(t);case 1:return"Container";case 2:return function T(n){switch(+n.wowSubClass){case 0:return o(n.slot)+", Axe";case 1:return"Two-handed, Axe";case 2:return"Ranged, Bow";case 3:return"Ranged, Gun";case 4:return o(n.slot)+", Mace";case 5:return"Two-handed, Mace";case 6:return o(n.slot)+", Polearm";case 7:return o(n.slot)+", Sword";case 8:return"Two-handed, Sword";case 10:return"Two-handed, Staff";case 13:return o(n.slot)+", Fist Weapon";case 15:return o(n.slot)+", Dagger";case 16:return"Ranged, Thrown";case 18:return"Ranged, Crossbow";case 19:return"Ranged, Wand";case 20:return"Fishing Pole";default:return"Weapon - NYI"}}(t);case 3:return"Gem";case 4:return function u(n){switch(+n.wowSubClass){case 0:return"Miscellaneous (Armor)";case 1:return o(n.slot)+", Cloth";case 2:return o(n.slot)+", Leather";case 3:return o(n.slot)+", Mail";case 4:return o(n.slot)+", Plate";case 6:return o(n.slot)+", Shield";case 7:return o(n.slot)+", Libram";case 8:return o(n.slot)+", Idol";case 9:return o(n.slot)+", Totem";case 10:return o(n.slot)+", Sigil";case-2:return"Ring";case-3:return"Neck";case-4:return"Trinket";case-5:return"Held In Off-Hand";case-6:return"Cloak";case-7:return"Tabard";case-8:return"Shirt";default:return"*Armor* - NYI"}}(t);case 6:return function p(n){switch(+n.wowSubClass){case 2:return"Projectile - Arrow";case 3:return"Projectile - Bullet"}return"Projectile - NYI "+n.wowSubClass}(t);case 7:return"Trade Goods";case 9:return function M(n){const l="Recipe -";switch(+n.wowSubClass){case 1:return l+" Leatherworking";case 2:return l+" Tailoring";case 3:return l+" Engineering";case 4:return l+" Blacksmithing";case 6:return l+" Alchemy";case 10:return l+" Jewelcrafting";default:return"Recipe - NYI"}}(t);case 10:return"Currency";case 11:return function f(n){switch(+n.wowSubClass){case 2:return"Quiver";case 3:return"Ammo Pouch"}return"Quiver - NYI "+n.wowSubClass}(t);case 12:return"Quest Item";case 13:return"Key";case 15:return function i(n){switch(+n.wowSubClass){case 0:return"Misc, Junk";case 2:return"Pet";case 4:return"Armor Token";case 5:return"Mount";case-2:return"Armor Token";case-7:return"Flying Mount";default:return"Misc - NYI"}}(t);case 16:return function C(n){switch(+n.wowSubClass){case 1:return"Glyph - Warrior";case 2:return"Glyph - Paladin";case 3:return"Glyph - Hunter";case 4:return"Glyph - Rogue";case 5:return"Glyph - Priest";case 6:return"Glyph - Deathknight";case 7:return"Glyph - Shaman";case 8:return"Glyph - Mage";case 9:return"Glyph - Warlock";case 11:return"Glyph - Druid"}return"Glyph - NYI"+n.wowSubClass}(t);default:return"NYI - "+a}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"itemSubtext",type:n,pure:!0}),n})();function I(n,l){if(1&n&&(e.ynx(0),e.GkF(1,5),e.BQk()),2&n){e.oxw(2);const t=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",t)}}const O=function(n){return{inactive:n}};function A(n,l){if(1&n&&(e.TgZ(0,"div",3),e.ALo(1,"itemVisibility"),e.YNc(2,I,2,1,"ng-container",4),e.ALo(3,"async"),e.qZA()),2&n){const t=l.ngIf,r=e.oxw(),a=e.MAs(3);e.Q6J("ngClass",e.VKq(8,O,!e.xi3(1,3,r.item,t))),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,6,r.mobile$))("ngIfElse",a)}}function W(n,l){1&n&&e._UZ(0,"nb-icon",12)}function L(n,l){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij("*",t.item.ilvl,"*")}}function Y(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"a",6),e.NdJ("mousemove",function(a){return e.CHM(t),e.oxw().onMouseEvent(a,"move")})("mouseenter",function(a){return e.CHM(t),e.oxw().onMouseEvent(a,"enter")})("mouseleave",function(a){return e.CHM(t),e.oxw().onMouseEvent(a,"leave")}),e._UZ(1,"img",7),e.TgZ(2,"div",8)(3,"div"),e._uU(4),e.YNc(5,W,1,0,"nb-icon",9),e.qZA(),e.TgZ(6,"div",10),e._uU(7),e.ALo(8,"itemSubtext"),e.YNc(9,L,2,1,"span",11),e.qZA()()()}if(2&n){const t=e.oxw();e.s9C("href",t.item.link,e.LSH),e.xp6(1),e.hYB("src","../../../../assets/icons/",t.itemSize,"/",t.item.icon,".jpg",e.LSH),e.xp6(2),e.Gre("itemName q",t.item.quality,""),e.xp6(1),e.hij(" ",t.item.name," "),e.xp6(1),e.Q6J("ngIf",t.hardmode),e.xp6(2),e.hij(" ",e.lcZ(8,10,t.item)," "),e.xp6(2),e.Q6J("ngIf",t.showLevel)}}function z(n,l){1&n&&e._UZ(0,"nb-icon",12)}function Z(n,l){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij("*",t.item.ilvl,"*")}}function D(n,l){if(1&n){const t=e.EpF();e._UZ(0,"img",7),e.TgZ(1,"div",13),e.NdJ("click",function(a){return e.CHM(t),e.oxw().clickMobile(a)}),e.TgZ(2,"div")(3,"div"),e._uU(4),e.YNc(5,z,1,0,"nb-icon",9),e.qZA(),e.TgZ(6,"div",10),e._uU(7),e.ALo(8,"itemSubtext"),e.YNc(9,Z,2,1,"span",11),e.qZA()()()}if(2&n){const t=e.oxw();e.hYB("src","../../../../assets/icons/",t.itemSize,"/",t.item.icon,".jpg",e.LSH),e.xp6(3),e.Gre("itemName q",t.item.quality,""),e.xp6(1),e.hij(" ",t.item.name," "),e.xp6(1),e.Q6J("ngIf",t.hardmode),e.xp6(2),e.hij(" ",e.lcZ(8,9,t.item)," "),e.xp6(2),e.Q6J("ngIf",t.showLevel)}}let F=(()=>{class n{constructor(t,r,a,_){this.tooltipService=t,this.filterStore=r,this.globalStore=a,this.modalService=_,this.itemSize="large",this.hardmode=!1,this.showLevel=!1,this.class$=this.filterStore.class$,this.mobile$=this.globalStore.mobile$}ngOnInit(){}onMouseEvent(t,r){this.tooltipService.onMouseEvent(t,r,this.item)}clickMobile(t){this.modalService.setItem(this.item)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(s.a),e.Y36(x.e),e.Y36(m.P),e.Y36(w.Z))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-wow-item-lazy"]],inputs:{item:"item",itemSize:"itemSize",hardmode:"hardmode",showLevel:"showLevel"},decls:6,vars:3,consts:[["class","item",3,"ngClass",4,"ngIf"],["itemTemplate",""],["itemTemplateMobile",""],[1,"item",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngTemplateOutlet"],["target","_blank",1,"item-container",3,"href","mousemove","mouseenter","mouseleave"],["loading","lazy",1,"itemIcon","border",3,"src"],[1,"itemText"],["icon","flash-outline","status","warning",4,"ngIf"],[1,"itemSubText"],[4,"ngIf"],["icon","flash-outline","status","warning"],[1,"itemText",3,"click"]],template:function(t,r){1&t&&(e.YNc(0,A,4,10,"div",0),e.ALo(1,"async"),e.YNc(2,Y,10,12,"ng-template",null,1,e.W1O),e.YNc(4,D,10,11,"ng-template",null,2,e.W1O)),2&t&&e.Q6J("ngIf",e.lcZ(1,1,r.class$))},directives:[c.O5,c.mk,c.tP,h.fMN],pipes:[S,c.Ov,v],styles:[".item[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;max-width:400px;overflow:visible}.itemTooltipBox[_ngcontent-%COMP%]{display:flex;gap:5px;max-width:400px;width:100%}.itemIcon[_ngcontent-%COMP%]{width:40px;height:40px}.itemIconBig[_ngcontent-%COMP%]{width:60px;height:60px}.itemText[_ngcontent-%COMP%]{padding-left:.5rem}.item[_ngcontent-%COMP%]:hover{background-color:#2e3a59;filter:brightness(100%)}.item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:brightness(100%)}.itemName[_ngcontent-%COMP%]{font-size:larger}.itemSubText[_ngcontent-%COMP%]{color:#cd9f3a;font-size:small}.hardmode[_ngcontent-%COMP%]{display:inline-block;height:20px;width:20px;margin-bottom:-4px}nb-icon[_ngcontent-%COMP%]{font-size:18px}.inactive[_ngcontent-%COMP%]{filter:brightness(75%)}.inactive[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:brightness(50%)}.item-container[_ngcontent-%COMP%]{display:flex;cursor:pointer;text-decoration:none}"]}),n})()},3342:(P,b,g)=>{g.d(b,{e:()=>x});var e=g(8160),s=g(5e3);let x=(()=>{class m{constructor(){this.store=(0,e.MT)({name:"filter"},(0,e.vl)({faction:"Alliance",difficulty:"Normal",size:10,class:"all"})),this.state$=this.store.pipe((0,e.Ys)(c=>c)),this.faction$=this.store.pipe((0,e.Ys)(c=>c.faction)),this.difficulty$=this.store.pipe((0,e.Ys)(c=>c.difficulty)),this.size$=this.store.pipe((0,e.Ys)(c=>c.size)),this.class$=this.store.pipe((0,e.Ys)(c=>c.class))}updateFaction(c){this.store.update(h=>Object.assign(Object.assign({},h),{faction:c}))}updateDifficulty(c){this.store.update(h=>Object.assign(Object.assign({},h),{difficulty:c}))}updateSize(c){this.store.update(h=>Object.assign(Object.assign({},h),{size:c}))}updateClass(c){this.store.update(h=>Object.assign(Object.assign({},h),{class:c}))}getSize(){return this.store.getValue().size}}return m.\u0275fac=function(c){return new(c||m)},m.\u0275prov=s.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);