"use strict";(self.webpackChunkclassicloot=self.webpackChunkclassicloot||[]).push([[194],{6194:(Ft,d,a)=>{a.r(d),a.d(d,{CollectionsxModule:()=>Pt});var l=a(9808),g=a(4343),w=a(4466),h=a(210),v=a(3900),t=a(5e3),T=a(520),x=a(5802),y=a(9841),C=a(4004),_=a(8160);let f=(()=>{class n{constructor(){this.store=(0,_.MT)({name:"filter"},(0,_.vl)({faction:"Alliance",difficulty:"Normal",size:10,class:"all"})),this.state$=this.store.pipe((0,_.Ys)(e=>e)),this.faction$=this.store.pipe((0,_.Ys)(e=>e.faction)),this.difficulty$=this.store.pipe((0,_.Ys)(e=>e.difficulty)),this.size$=this.store.pipe((0,_.Ys)(e=>e.size)),this.class$=this.store.pipe((0,_.Ys)(e=>e.class))}updateFaction(e){this.store.update(i=>Object.assign(Object.assign({},i),{faction:e}))}updateDifficulty(e){this.store.update(i=>Object.assign(Object.assign({},i),{difficulty:e}))}updateSize(e){this.store.update(i=>Object.assign(Object.assign({},i),{size:e}))}updateClass(e){this.store.update(i=>Object.assign(Object.assign({},i),{class:e}))}getSize(){return this.store.getValue().size}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const b=function(n){return{selected:n}};function S(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",7),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw(2).ngIf;return t.oxw().handleClick(r.class,c.class)}),t.qZA()}if(2&n){const e=o.$implicit,i=t.oxw(2).ngIf;t.Udp("background-image","url(../../../../assets/icons/large/"+e.img+".jpg)"),t.Q6J("ngClass",t.VKq(3,b,i.class===e.class))}}function O(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",4)(1,"div",5)(2,"div",6),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().ngIf;return t.oxw().handleClick("all",s.class)}),t.qZA(),t.TgZ(3,"div",7),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().ngIf;return t.oxw().handleClick("all",s.class)}),t.qZA(),t.YNc(4,S,1,5,"div",8),t.qZA()()}if(2&n){const e=t.oxw().ngIf,i=t.oxw();t.xp6(2),t.Udp("background-image","url(../../../../assets/icons/large/inv_misc_questionmark.jpg)"),t.xp6(1),t.Udp("background-image","url(../../../../assets/icons/large/inv_misc_questionmark.jpg)"),t.Q6J("ngClass",t.VKq(6,b,"all"===e.class)),t.xp6(1),t.Q6J("ngForOf",i.classArr)}}const I=function(n,o){return{selected:n,active:o}};function k(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",2),t.NdJ("click",function(){return t.CHM(e),t.oxw().toggleOpen()}),t.qZA(),t.YNc(2,O,5,8,"div",3),t.qZA()}if(2&n){const e=o.ngIf,i=t.oxw();t.xp6(1),t.Udp("background-image","url(../../../../assets/icons/large/"+e.img+".jpg)"),t.Q6J("ngClass",t.WLB(4,I,"all"!=e.class,i.bOpen)),t.xp6(1),t.Q6J("ngIf",i.bOpen)}}let M=(()=>{class n{constructor(e,i,s){this.filterStore=e,this.elementRef=i,this.renderer=s,this.count=0,this.bOpen=!1,this.classArr=[{class:"Deathknight",img:"class_deathknight"},{class:"Druid",img:"class_druid"},{class:"Hunter",img:"class_hunter"},{class:"Mage",img:"class_mage"},{class:"Paladin",img:"class_paladin"},{class:"Priest",img:"class_priest"},{class:"Rogue",img:"class_rogue"},{class:"Shaman",img:"class_shaman"},{class:"Warlock",img:"class_warlock"},{class:"Warrior",img:"class_warrior"}],this.class$=this.filterStore.class$,this.classWithImg$=this.class$.pipe((0,C.U)(r=>this.classArr.find(p=>p.class===r)||{class:"all",img:"inv_misc_questionmark"}))}ngOnInit(){}handleClick(e,i){this.filterStore.updateClass("all"===e?e:e===i?"all":e),this.close()}toggleOpen(){this.bOpen?(this.unlistener(),this.close()):(this.open(),this.unlistener=this.renderer.listen("document","click",e=>{this.count>0?(this.close(),this.unlistener()):this.count++}))}open(){this.bOpen=!0,this.count=0}close(){this.bOpen=!1}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f),t.Y36(t.SBq),t.Y36(t.Qsj))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-filter-class"]],decls:2,vars:3,consts:[["class","base",4,"ngIf"],[1,"base"],[1,"image-base",3,"ngClass","click"],["class","border overlay",4,"ngIf"],[1,"border","overlay"],[1,"grid"],[1,"image-base","image-big","first",3,"click"],[1,"image-base","image-big",3,"ngClass","click"],["class","image-base image-big",3,"background-image","ngClass","click",4,"ngFor","ngForOf"]],template:function(e,i){1&e&&(t.YNc(0,k,3,7,"div",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,i.classWithImg$))},directives:[l.O5,l.mk,l.sg],pipes:[l.Ov],styles:[".image-base[_ngcontent-%COMP%]{width:24px;height:24px;background-image:url(class_deathknight.fb55acd2f7abad09.jpg);background-size:contain;border-radius:var(--button-rectangle-border-radius);border-style:var(--button-outline-border-style);border-width:var(--button-outline-border-width);text-transform:var(--button-outline-text-transform);background-color:var(--button-outline-basic-background-color);border-color:var(--button-outline-basic-border-color);color:var(--button-outline-basic-text-color);filter:brightness(50%);cursor:pointer}.image-base[_ngcontent-%COMP%]:hover{filter:brightness(125%)}.image-big[_ngcontent-%COMP%]{width:42px;height:42px}.active[_ngcontent-%COMP%]{border-color:var(--button-outline-warning-border-color);filter:brightness(100%)}.selected[_ngcontent-%COMP%]{filter:brightness(100%)}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:50% 50%;grid-template-rows:auto;align-self:stretch;width:100%;grid-gap:2px;gap:2px}.first[_ngcontent-%COMP%]{visibility:hidden}.base[_ngcontent-%COMP%]{position:relative}.overlay[_ngcontent-%COMP%]{position:absolute;z-index:25}"]}),n})();function A(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"nb-button-group",6)(1,"button",7),t.NdJ("click",function(){const r=t.CHM(e).ngIf;return t.oxw(2).updateSize(10,r)}),t._uU(2,"10"),t.qZA(),t.TgZ(3,"button",8),t.NdJ("click",function(){const r=t.CHM(e).ngIf;return t.oxw(2).updateSize(25,r)}),t._uU(4,"25"),t.qZA()()}if(2&n){const e=o.ngIf;t.xp6(1),t.Q6J("pressed",10===e),t.xp6(2),t.Q6J("pressed",25===e)}}function Z(n,o){if(1&n&&(t.ynx(0),t.YNc(1,A,5,2,"nb-button-group",5),t.ALo(2,"async"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,e.size$))}}function P(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"nb-button-group",6)(1,"button",9),t.NdJ("click",function(){const r=t.CHM(e).ngIf;return t.oxw(2).updateDifficulty("Normal",r)}),t._uU(2,"Normal"),t.qZA(),t.TgZ(3,"button",10),t.NdJ("click",function(){const r=t.CHM(e).ngIf;return t.oxw(2).updateDifficulty("Heroic",r)}),t._uU(4,"Heroic"),t.qZA()()}if(2&n){const e=o.ngIf;t.xp6(1),t.Q6J("pressed","Normal"===e),t.xp6(2),t.Q6J("pressed","Heroic"===e)}}function F(n,o){if(1&n&&(t.ynx(0),t.YNc(1,P,5,2,"nb-button-group",5),t.ALo(2,"async"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,e.difficulty$))}}function N(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"nb-button-group",6)(1,"button",11),t.NdJ("click",function(){const r=t.CHM(e).ngIf;return t.oxw(2).updateFaction("Alliance",r)}),t._uU(2,"Alliance"),t.qZA(),t.TgZ(3,"button",12),t.NdJ("click",function(){const r=t.CHM(e).ngIf;return t.oxw(2).updateFaction("Horde",r)}),t._uU(4,"Horde"),t.qZA()()}if(2&n){const e=o.ngIf;t.xp6(1),t.Q6J("pressed","Alliance"===e),t.xp6(2),t.Q6J("pressed","Horde"===e)}}function Y(n,o){if(1&n&&(t.ynx(0),t.YNc(1,N,5,2,"nb-button-group",5),t.ALo(2,"async"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,e.faction$))}}function z(n,o){1&n&&(t.TgZ(0,"nb-button-group",13)(1,"button",14),t._uU(2,"10"),t.qZA(),t.TgZ(3,"button",14),t._uU(4,"25"),t.qZA()())}function J(n,o){1&n&&(t.TgZ(0,"nb-button-group",13)(1,"button",14),t._uU(2,"Alliance"),t.qZA(),t.TgZ(3,"button",14),t._uU(4,"Horde"),t.qZA()())}function Q(n,o){1&n&&(t.TgZ(0,"nb-button-group",13)(1,"button",15),t._uU(2,"Normal"),t.qZA(),t.TgZ(3,"button",15),t._uU(4,"Heroic"),t.qZA()())}let W=(()=>{class n{constructor(e){this.filterStore=e,this.bFaction=!1,this.bSize=!1,this.bDifficulty=!1,this.faction$=this.filterStore.faction$,this.size$=this.filterStore.size$,this.difficulty$=this.filterStore.difficulty$}ngOnInit(){}updateDifficulty(e,i){e!=i&&this.filterStore.updateDifficulty(e)}updateSize(e,i){e!=i&&this.filterStore.updateSize(e)}updateFaction(e,i){e!=i&&this.filterStore.updateFaction(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-filter-buttons"]],inputs:{bFaction:"bFaction",bSize:"bSize",bDifficulty:"bDifficulty"},decls:11,vars:6,consts:[[1,"flex-container"],[4,"ngIf","ngIfElse"],["noSize",""],["noFaction",""],["noDiff",""],["size","tiny","outline","true","status","warning",4,"ngIf"],["size","tiny","outline","true","status","warning"],["nbButtonToggle","","value","10",3,"pressed","click"],["nbButtonToggle","","value","25",3,"pressed","click"],["nbButtonToggle","","value","Normal",3,"pressed","click"],["nbButtonToggle","","value","Heroic",3,"pressed","click"],["nbButtonToggle","","value","Alliance",3,"pressed","click"],["nbButtonToggle","","value","Horde",3,"pressed","click"],["size","tiny","outline","true","status","basic"],["nbButton","","disabled","","pressed","false"],["nbButton","","disabled",""]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,Z,3,3,"ng-container",1),t.YNc(2,F,3,3,"ng-container",1),t.YNc(3,Y,3,3,"ng-container",1),t._UZ(4,"app-filter-class"),t.qZA(),t.YNc(5,z,5,0,"ng-template",null,2,t.W1O),t.YNc(7,J,5,0,"ng-template",null,3,t.W1O),t.YNc(9,Q,5,0,"ng-template",null,4,t.W1O)),2&e){const s=t.MAs(6),r=t.MAs(8),c=t.MAs(10);t.xp6(1),t.Q6J("ngIf",i.bSize)("ngIfElse",s),t.xp6(1),t.Q6J("ngIf",i.bDifficulty)("ngIfElse",c),t.xp6(1),t.Q6J("ngIf",i.bFaction)("ngIfElse",r)}},directives:[l.O5,g.mnu,g.ZDs,M,g.DPz],pipes:[l.Ov],styles:["nb-button-group[_ngcontent-%COMP%]{outline:none}nb-button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none}.flex-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:5px}.flex-item-left[_ngcontent-%COMP%], .flex-item-right[_ngcontent-%COMP%]{flex:50%}"]}),n})();var $=a(4198),B=a(3285);let L=(()=>{class n{transform(e,i){return"all"===i||(4==+e.wowClass?this.checkArmor(e,i)&&this.checkClass(e,i)&&this.checkStats(e,i):2==+e.wowClass?this.checkWeapon(e,i)&&this.checkClass(e,i)&&this.checkStats(e,i):11==+e.wowClass?["Hunter"].includes(i):15!=+e.wowClass||![4,-2].includes(+e.wowSubClass)||this.checkClass(e,i))}checkClass(e,i){[4,2,11].includes(+e.wowClass);const r=e.htmlTooltip.replace("\\","");let c=[];return[...r.matchAll(/(<a href="\?class=\d*" class="\w\d*">(\w* {0,1}\w*)<\/a>)/g)].forEach(p=>{c.push("Death Knight"===p[2]?"Deathknight":p[2])}),!(c.length>0)||c.includes(i)}checkStats(e,i){const s=e.htmlTooltip.replace("\\","");return[...s.matchAll(/<!--stat1-->/g)].length>0&&console.log("1111"),[...s.matchAll(/<!--stat2-->/g)].length>0&&console.log("2222"),!([...s.matchAll(/<!--stat3-->/g)].length>0&&["Mage","Priest","Warlock"].includes(i)||[...s.matchAll(/<!--stat4-->/g)].length>0&&["Hunter","Mage","Priest","Warlock"].includes(i)||[...s.matchAll(/<!--stat5-->/g)].length>0&&["Deathknight","Rogue","Warrior"].includes(i)||[...s.matchAll(/<!--stat6-->/g)].length>0&&["Deathknight","Rogue","Warrior"].includes(i)||(s.matchAll(/<!--stat7-->/g),[...s.matchAll(/<!--stat8-->/g)].length>0&&console.log("8888"),[...s.matchAll(/defense rating/g)].length>0&&[,"Hunter","Mage","Priest","Rogue","Shaman","Warlock"].includes(i))||[...s.matchAll(/spell power/g)].length>0&&["Deathknight","Hunter","Rogue","Warrior"].includes(i)||[...s.matchAll(/attack power/g)].length>0&&["Mage","Priest","Warlock"].includes(i)||[...s.matchAll(/mana per 5/g)].length>0&&["Deathknight","Rogue","Warrior"].includes(i)||[...s.matchAll(/armor penetration/g)].length>0&&["Mage","Priest","Warlock"].includes(i)||[...s.matchAll(/dodge rating/g)].length>0&&["Hunter","Mage","Priest","Shaman","Warlock"].includes(i))}checkArmor(e,i){switch(+e.wowSubClass){case 1:return["Druid","Mage","Paladin","Priest","Shaman","Warlock"].includes(i);case 2:return["Deathknight","Druid","Hunter","Paladin","Rogue","Shaman","Warrior"].includes(i);case 3:return["Deathknight","Hunter","Paladin","Shaman","Warrior"].includes(i);case 4:return["Deathknight","Paladin","Warrior"].includes(i);case 6:return["Paladin","Warrior","Shaman"].includes(i);case 7:return["Paladin"].includes(i);case 8:return["Druid"].includes(i);case 9:return["Shaman"].includes(i);case 10:return["Deathknight"].includes(i);case-5:return["Druid","Mage","Paladin","Priest","Shaman","Warlock"].includes(i)}return!0}checkWeapon(e,i){if(20==+e.wowSubClass)return!0;switch(i){case"Deathknight":case"Paladin":return[0,1,4,5,6,7,8].includes(+e.wowSubClass);case"Druid":return[4,5,10,13,15,20].includes(+e.wowSubClass);case"Hunter":return[0,1,2,3,6,7,8,10,13,15,18,19].includes(+e.wowSubClass);case"Mage":case"Warlock":return[7,10,15,19].includes(+e.wowSubClass);case"Priest":return[4,10,15,19].includes(+e.wowSubClass);case"Rogue":return[0,2,3,4,7,13,15,16,18].includes(+e.wowSubClass);case"Shaman":return[0,1,4,5,10,13,15].includes(+e.wowSubClass);case"Warrior":return[0,1,2,3,4,5,6,7,8,10,13,15,16,18].includes(+e.wowSubClass)}return!0}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"itemVisibility",type:n,pure:!0}),n})();function u(n){switch(+n){case 1:return"Head";case 2:return"Neck";case 3:return"Shoulder";case 5:return"Chest";case 6:return"Waist";case 7:return"Legs";case 8:return"Feet";case 9:return"Wrist";case 10:return"Hands";case 11:return"Finger";case 12:return"Trinket";case 13:return"One-Hand";case 14:case 22:return"Off Hand";case 15:return"Ranged";case 16:return"Back";case 17:return"Two-Hand";case 18:return"Bag";case 21:return"Main Hand";case 25:return"Thrown";case 28:return"Relic";default:return"SlotNYI"}}let V=(()=>{class n{transform(e,...i){const s=`${e.wowClass} | ${e.wowSubClass} | ${e.slot}`;switch(+e.wowClass){case-69:return"Spell";case 0:return function j(n){return[45506,45786,45784,45788,45787,45038,45857].includes(+n.id)?"Quest Item":"Consumable"}(e);case 1:return"Container";case 2:return function D(n){switch(+n.wowSubClass){case 0:return u(n.slot)+", Axe";case 1:return"Two-handed, Axe";case 2:return"Ranged, Bow";case 3:return"Ranged, Gun";case 4:return u(n.slot)+", Mace";case 5:return"Two-handed, Mace";case 6:return u(n.slot)+", Polearm";case 7:return u(n.slot)+", Sword";case 8:return"Two-handed, Sword";case 10:return"Two-handed, Staff";case 13:return u(n.slot)+", Fist Weapon";case 15:return u(n.slot)+", Dagger";case 16:return"Ranged, Thrown";case 18:return"Ranged, Crossbow";case 19:return"Ranged, Wand";case 20:return"Fishing Pole";default:return"Weapon - NYI"}}(e);case 3:return"Gem";case 4:return function q(n){switch(+n.wowSubClass){case 0:return"Miscellaneous (Armor)";case 1:return u(n.slot)+", Cloth";case 2:return u(n.slot)+", Leather";case 3:return u(n.slot)+", Mail";case 4:return u(n.slot)+", Plate";case 6:return u(n.slot)+", Shield";case 7:return u(n.slot)+", Libram";case 8:return u(n.slot)+", Idol";case 9:return u(n.slot)+", Totem";case 10:return u(n.slot)+", Sigil";case-2:return"Ring";case-3:return"Neck";case-4:return"Trinket";case-5:return"Held In Off-Hand";case-6:return"Cloak";case-7:return"Tabard";case-8:return"Shirt";default:return"*Armor* - NYI"}}(e);case 6:return function R(n){switch(+n.wowSubClass){case 2:return"Projectile - Arrow";case 3:return"Projectile - Bullet"}return"Projectile - NYI "+n.wowSubClass}(e);case 7:return"Trade Goods";case 9:return function H(n){const o="Recipe -";switch(+n.wowSubClass){case 1:return o+" Leatherworking";case 2:return o+" Tailoring";case 3:return o+" Engineering";case 4:return o+" Blacksmithing";case 6:return o+" Alchemy";case 10:return o+" Jewelcrafting";default:return"Recipe - NYI"}}(e);case 10:return"Currency";case 11:return function E(n){switch(+n.wowSubClass){case 2:return"Quiver";case 3:return"Ammo Pouch"}return"Quiver - NYI "+n.wowSubClass}(e);case 12:return"Quest Item";case 13:return"Key";case 15:return function U(n){switch(+n.wowSubClass){case 0:return"Misc, Junk";case 2:return"Pet";case 4:return"Armor Token";case 5:return"Mount";case-2:return"Armor Token";case-7:return"Flying Mount";default:return"Misc - NYI"}}(e);case 16:return function G(n){switch(+n.wowSubClass){case 1:return"Glyph - Warrior";case 2:return"Glyph - Paladin";case 3:return"Glyph - Hunter";case 4:return"Glyph - Rogue";case 5:return"Glyph - Priest";case 6:return"Glyph - Deathknight";case 7:return"Glyph - Shaman";case 8:return"Glyph - Mage";case 9:return"Glyph - Warlock";case 11:return"Glyph - Druid"}return"Glyph - NYI"+n.wowSubClass}(e);default:return"NYI - "+s}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"itemSubtext",type:n,pure:!0}),n})();function K(n,o){if(1&n&&(t.ynx(0),t.GkF(1,5),t.BQk()),2&n){t.oxw(2);const e=t.MAs(5);t.xp6(1),t.Q6J("ngTemplateOutlet",e)}}const X=function(n){return{inactive:n}};function tt(n,o){if(1&n&&(t.TgZ(0,"div",3),t.ALo(1,"itemVisibility"),t.YNc(2,K,2,1,"ng-container",4),t.ALo(3,"async"),t.qZA()),2&n){const e=o.ngIf,i=t.oxw(),s=t.MAs(3);t.Q6J("ngClass",t.VKq(8,X,!t.xi3(1,3,i.item,e))),t.xp6(2),t.Q6J("ngIf",t.lcZ(3,6,i.mobile$))("ngIfElse",s)}}function et(n,o){1&n&&t._UZ(0,"nb-icon",12)}function nt(n,o){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij("*",e.item.ilvl,"*")}}function it(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"a",6),t.NdJ("mousemove",function(s){return t.CHM(e),t.oxw().onMouseEvent(s,"move")})("mouseenter",function(s){return t.CHM(e),t.oxw().onMouseEvent(s,"enter")})("mouseleave",function(s){return t.CHM(e),t.oxw().onMouseEvent(s,"leave")}),t._UZ(1,"img",7),t.TgZ(2,"div",8)(3,"div"),t._uU(4),t.YNc(5,et,1,0,"nb-icon",9),t.qZA(),t.TgZ(6,"div",10),t._uU(7),t.ALo(8,"itemSubtext"),t.YNc(9,nt,2,1,"span",11),t.qZA()()()}if(2&n){const e=t.oxw();t.s9C("href",e.item.link,t.LSH),t.xp6(1),t.hYB("src","../../../../assets/icons/",e.itemSize,"/",e.item.icon,".jpg",t.LSH),t.xp6(2),t.Gre("itemName q",e.item.quality,""),t.xp6(1),t.hij(" ",e.item.name," "),t.xp6(1),t.Q6J("ngIf",e.hardmode),t.xp6(2),t.hij(" ",t.lcZ(8,10,e.item)," "),t.xp6(2),t.Q6J("ngIf",e.showLevel)}}function ot(n,o){1&n&&t._UZ(0,"nb-icon",12)}function st(n,o){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij("*",e.item.ilvl,"*")}}function rt(n,o){if(1&n){const e=t.EpF();t._UZ(0,"img",7),t.TgZ(1,"div",13),t.NdJ("click",function(s){return t.CHM(e),t.oxw().clickMobile(s)}),t.TgZ(2,"div")(3,"div"),t._uU(4),t.YNc(5,ot,1,0,"nb-icon",9),t.qZA(),t.TgZ(6,"div",10),t._uU(7),t.ALo(8,"itemSubtext"),t.YNc(9,st,2,1,"span",11),t.qZA()()()}if(2&n){const e=t.oxw();t.hYB("src","../../../../assets/icons/",e.itemSize,"/",e.item.icon,".jpg",t.LSH),t.xp6(3),t.Gre("itemName q",e.item.quality,""),t.xp6(1),t.hij(" ",e.item.name," "),t.xp6(1),t.Q6J("ngIf",e.hardmode),t.xp6(2),t.hij(" ",t.lcZ(8,9,e.item)," "),t.xp6(2),t.Q6J("ngIf",e.showLevel)}}let ct=(()=>{class n{constructor(e,i,s,r){this.tooltipService=e,this.filterStore=i,this.globalStore=s,this.modalService=r,this.itemSize="large",this.hardmode=!1,this.showLevel=!1,this.class$=this.filterStore.class$,this.mobile$=this.globalStore.mobile$}ngOnInit(){}onMouseEvent(e,i){this.tooltipService.onMouseEvent(e,i,this.item)}clickMobile(e){this.modalService.setItem(this.item)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36($.a),t.Y36(f),t.Y36(x.P),t.Y36(B.Z))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-wow-item-lazy"]],inputs:{item:"item",itemSize:"itemSize",hardmode:"hardmode",showLevel:"showLevel"},decls:6,vars:3,consts:[["class","item",3,"ngClass",4,"ngIf"],["itemTemplate",""],["itemTemplateMobile",""],[1,"item",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngTemplateOutlet"],["target","_blank",1,"item-container",3,"href","mousemove","mouseenter","mouseleave"],["loading","lazy",1,"itemIcon","border",3,"src"],[1,"itemText"],["icon","flash-outline","status","warning",4,"ngIf"],[1,"itemSubText"],[4,"ngIf"],["icon","flash-outline","status","warning"],[1,"itemText",3,"click"]],template:function(e,i){1&e&&(t.YNc(0,tt,4,10,"div",0),t.ALo(1,"async"),t.YNc(2,it,10,12,"ng-template",null,1,t.W1O),t.YNc(4,rt,10,11,"ng-template",null,2,t.W1O)),2&e&&t.Q6J("ngIf",t.lcZ(1,1,i.class$))},directives:[l.O5,l.mk,l.tP,g.fMN],pipes:[L,l.Ov,V],styles:[".item[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;max-width:400px;overflow:visible}.itemTooltipBox[_ngcontent-%COMP%]{display:flex;gap:5px;max-width:400px;width:100%}.itemIcon[_ngcontent-%COMP%]{width:40px;height:40px}.itemIconBig[_ngcontent-%COMP%]{width:60px;height:60px}.itemText[_ngcontent-%COMP%]{padding-left:.5rem}.item[_ngcontent-%COMP%]:hover{background-color:#2e3a59;filter:brightness(100%)}.item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:brightness(100%)}.itemName[_ngcontent-%COMP%]{font-size:larger}.itemSubText[_ngcontent-%COMP%]{color:#cd9f3a;font-size:small}.hardmode[_ngcontent-%COMP%]{display:inline-block;height:20px;width:20px;margin-bottom:-4px}nb-icon[_ngcontent-%COMP%]{font-size:18px}.inactive[_ngcontent-%COMP%]{filter:brightness(75%)}.inactive[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:brightness(50%)}.item-container[_ngcontent-%COMP%]{display:flex;cursor:pointer;text-decoration:none}"]}),n})(),lt=(()=>{class n{transform(e,i){if(null===e)return!1;if(""===i)return!0;const s=e.split("-"),r=i.split("-");for(const c of r)if(!s.includes(c))return!1;return!0}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"filterPipe",type:n,pure:!0}),n})();const m=function(n,o){return{array:n,title:o}};function at(n,o){if(1&n&&t.GkF(0,13),2&n){const e=t.oxw().$implicit;t.oxw(3);const i=t.MAs(10);t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.WLB(2,m,e.itemData,e.name))}}function ut(n,o){if(1&n&&(t.ynx(0),t.YNc(1,at,1,5,"ng-container",12),t.ALo(2,"filterPipe"),t.BQk()),2&n){const e=o.$implicit,i=t.oxw(2).ngIf;t.xp6(1),t.Q6J("ngIf",e.itemData&&t.xi3(2,1,i,e.filter?e.filter:""))}}function gt(n,o){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,ut,3,4,"ng-container",11),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.left)}}function _t(n,o){if(1&n&&t.GkF(0,13),2&n){const e=t.oxw().$implicit;t.oxw(3);const i=t.MAs(10);t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.WLB(2,m,e.itemData,e.name))}}function pt(n,o){if(1&n&&(t.ynx(0),t.YNc(1,_t,1,5,"ng-container",12),t.ALo(2,"filterPipe"),t.BQk()),2&n){const e=o.$implicit,i=t.oxw(2).ngIf;t.xp6(1),t.Q6J("ngIf",e.itemData&&t.xi3(2,1,i,e.filter?e.filter:""))}}function ft(n,o){if(1&n&&(t.TgZ(0,"div",14),t.YNc(1,pt,3,4,"ng-container",11),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.right)}}function mt(n,o){if(1&n&&t.GkF(0,13),2&n){const e=t.oxw().$implicit;t.oxw(3);const i=t.MAs(12);t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.WLB(2,m,e.itemData,e.name))}}function dt(n,o){if(1&n&&(t.ynx(0),t.YNc(1,mt,1,5,"ng-container",12),t.ALo(2,"filterPipe"),t.BQk()),2&n){const e=o.$implicit,i=t.oxw(2).ngIf;t.xp6(1),t.Q6J("ngIf",e.itemData&&t.xi3(2,1,i,e.filter?e.filter:""))}}function ht(n,o){if(1&n&&(t.TgZ(0,"div",15),t.YNc(1,dt,3,4,"ng-container",11),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.mid)}}function xt(n,o){if(1&n&&(t.ynx(0),t.YNc(1,gt,2,1,"div",7),t.YNc(2,ft,2,1,"div",8),t.YNc(3,ht,2,1,"div",9),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.left&&e.left.length>0),t.xp6(1),t.Q6J("ngIf",e.right&&e.right.length>0),t.xp6(1),t.Q6J("ngIf",e.mid&&e.mid.length>0)}}function Ct(n,o){if(1&n&&(t.TgZ(0,"h6"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2).title;t.xp6(1),t.Oqu(e)}}function bt(n,o){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"app-wow-item-lazy",16),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("item",e)("itemSize","large")}}function wt(n,o){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,Ct,2,1,"h6",4),t.YNc(2,bt,2,2,"div",11),t.qZA()),2&n){const e=t.oxw(),i=e.title,s=e.array;t.xp6(1),t.Q6J("ngIf",i),t.xp6(1),t.Q6J("ngForOf",s)}}function vt(n,o){1&n&&t.YNc(0,wt,3,2,"div",4),2&n&&t.Q6J("ngIf",o.array.length>0)}function Tt(n,o){if(1&n&&(t.TgZ(0,"h6"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2).title;t.xp6(1),t.Oqu(e)}}function yt(n,o){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"app-wow-item-lazy",16),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("item",e)("itemSize","large")}}function St(n,o){if(1&n&&(t.TgZ(0,"div",18),t.YNc(1,Tt,2,1,"h6",4),t.YNc(2,yt,2,2,"div",11),t.qZA()),2&n){const e=t.oxw(),i=e.title,s=e.array;t.xp6(1),t.Q6J("ngIf",i),t.xp6(1),t.Q6J("ngForOf",s)}}function Ot(n,o){1&n&&t.YNc(0,St,3,2,"div",17),2&n&&t.Q6J("ngIf",o.array.length>0)}let It=(()=>{class n{constructor(e){var i;this.filterStore=e,this.sub={name:"EMPTY"},this.left=[],this.right=[],this.mid=[],this.faction$=this.filterStore.faction$,this.difficulty$=this.filterStore.difficulty$,this.size$=this.filterStore.size$,this.filter$=(0,y.a)([this.size$,this.faction$,this.difficulty$]).pipe((0,C.U)(([s,r,c])=>`${s}-${c}-${r}`)),null===(i=this.sub.groups)||void 0===i||i.filter(s=>"left"===s.pos)}ngOnInit(){}ngOnChanges(e){this.sub.groups&&(this.left=this.sub.groups.filter(i=>"left"===i.pos),this.right=this.sub.groups.filter(i=>"right"===i.pos),this.mid=this.sub.groups.filter(i=>"mid"===i.pos))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-collectionx-card"]],inputs:{sub:"sub"},features:[t.TTD],decls:13,vars:7,consts:[["bossList",""],[1,"flex-item-left"],[1,"flex-item-right",3,"bDifficulty","bSize","bFaction"],[1,"flex-container"],[4,"ngIf"],["itemList",""],["itemListFree",""],["class","flex-item-left flex-column",4,"ngIf"],["class","flex-item-right flex-column",4,"ngIf"],["class","mid-container",4,"ngIf"],[1,"flex-item-left","flex-column"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"flex-item-right","flex-column"],[1,"mid-container"],[3,"item","itemSize"],["class","mid",4,"ngIf"],[1,"mid"]],template:function(e,i){1&e&&(t.TgZ(0,"nb-card",null,0)(2,"nb-card-header")(3,"h2",1),t._uU(4),t.qZA(),t._UZ(5,"app-filter-buttons",2),t.qZA(),t.TgZ(6,"nb-card-body",3),t.YNc(7,xt,4,3,"ng-container",4),t.ALo(8,"async"),t.qZA()(),t.YNc(9,vt,1,1,"ng-template",null,5,t.W1O),t.YNc(11,Ot,1,1,"ng-template",null,6,t.W1O)),2&e&&(t.xp6(4),t.Oqu(i.sub.name),t.xp6(1),t.Q6J("bDifficulty",!0)("bSize",!0)("bFaction",!0),t.xp6(2),t.Q6J("ngIf",t.lcZ(8,5,i.filter$)))},directives:[g.Asz,g.ndF,W,g.yKW,l.O5,l.sg,l.tP,ct],pipes:[l.Ov,lt],styles:["h2[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}nb-card-header[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center}.flex-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.flex-item-left[_ngcontent-%COMP%], .flex-item-right[_ngcontent-%COMP%]{flex:50%}.flex-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:nowrap;gap:40px}.mid-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.mid[_ngcontent-%COMP%]{display:grid;grid-template-columns:50% 50%;grid-template-rows:auto;align-self:stretch;width:100%}@media (max-width: 768px){.flex-container[_ngcontent-%COMP%]{gap:40px}.flex-item-right[_ngcontent-%COMP%], .flex-item-left[_ngcontent-%COMP%]{flex:100%}.hardmode[_ngcontent-%COMP%]{margin-top:0}nb-card-header[_ngcontent-%COMP%]{gap:5px}.mid[_ngcontent-%COMP%]{grid-template-columns:100%}}"]}),n})();function kt(n,o){1&n&&t._UZ(0,"app-collectionx-card",2),2&n&&t.Q6J("sub",o.$implicit)}function Mt(n,o){if(1&n&&(t.TgZ(0,"div")(1,"h1"),t._uU(2),t.qZA(),t.YNc(3,kt,1,1,"app-collectionx-card",1),t.qZA()),2&n){const e=o.ngIf;t.xp6(2),t.Oqu(e.name),t.xp6(1),t.Q6J("ngForOf",e.subCollections)}}const At=[{path:":id",component:(()=>{class n{constructor(e,i){this.http=e,this.globalStore=i,this.route$=this.globalStore.route$,this.collection$=this.route$.pipe((0,v.w)(s=>this.http.get(`../../../../wowdata/output/${s}.json`)))}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(T.eN),t.Y36(x.P))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-collectionsx"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"sub",4,"ngFor","ngForOf"],[3,"sub"]],template:function(e,i){1&e&&(t.YNc(0,Mt,4,2,"div",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,i.collection$))},directives:[l.O5,l.sg,It],pipes:[l.Ov],styles:["h1[_ngcontent-%COMP%]{margin-top:0}"]}),n})()}];let Zt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[h.Bz.forChild(At)],h.Bz]}),n})(),Pt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,Zt,w.m,g.zyh,g.KdK]]}),n})()}}]);