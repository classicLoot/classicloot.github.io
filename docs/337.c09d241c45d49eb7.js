"use strict";(self.webpackChunkclassicloot=self.webpackChunkclassicloot||[]).push([[337],{337:(_t,g,l)=>{l.r(g),l.d(g,{CollectionsModule:()=>st});var r=l(9808),_=l(4343),C=l(4466),m=l(8305),t=l(5e3),p=l(583);function x(n,o){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"json"),t.BQk()),2&n){const e=o.ngIf;t.xp6(1),t.hij(" ",t.lcZ(2,1,e),"\n")}}let b=(()=>{class n{constructor(e){this.collectionsDataService=e,this.collectionsMeta$=this.collectionsDataService.getCollectionsMeta$("wotlk")}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.L))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-collections-start"]],decls:2,vars:3,consts:[[4,"ngIf"]],template:function(e,i){1&e&&(t.YNc(0,x,3,3,"ng-container",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,i.collectionsMeta$))},directives:[r.O5],pipes:[r.Ov,r.Ts],styles:[""]}),n})();var T=l(9841),y=l(4004),d=l(3342),h=l(9612);function v(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"nb-button-group",6)(1,"button",7),t.NdJ("click",function(){const c=t.CHM(e).ngIf;return t.oxw(2).updateSize(10,c)}),t._uU(2,"10"),t.qZA(),t.TgZ(3,"button",8),t.NdJ("click",function(){const c=t.CHM(e).ngIf;return t.oxw(2).updateSize(25,c)}),t._uU(4,"25"),t.qZA()()}if(2&n){const e=o.ngIf;t.xp6(1),t.Q6J("pressed",10===e),t.xp6(2),t.Q6J("pressed",25===e)}}function Z(n,o){if(1&n&&(t.ynx(0),t.YNc(1,v,5,2,"nb-button-group",5),t.ALo(2,"async"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,e.size$))}}function O(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"nb-button-group",6)(1,"button",9),t.NdJ("click",function(){const c=t.CHM(e).ngIf;return t.oxw(2).updateDifficulty("Normal",c)}),t._uU(2,"Normal"),t.qZA(),t.TgZ(3,"button",10),t.NdJ("click",function(){const c=t.CHM(e).ngIf;return t.oxw(2).updateDifficulty("Heroic",c)}),t._uU(4,"Heroic"),t.qZA()()}if(2&n){const e=o.ngIf;t.xp6(1),t.Q6J("pressed","Normal"===e),t.xp6(2),t.Q6J("pressed","Heroic"===e)}}function F(n,o){if(1&n&&(t.ynx(0),t.YNc(1,O,5,2,"nb-button-group",5),t.ALo(2,"async"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,e.difficulty$))}}function I(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"nb-button-group",6)(1,"button",11),t.NdJ("click",function(){const c=t.CHM(e).ngIf;return t.oxw(2).updateFaction("Alliance",c)}),t._uU(2,"Alliance"),t.qZA(),t.TgZ(3,"button",12),t.NdJ("click",function(){const c=t.CHM(e).ngIf;return t.oxw(2).updateFaction("Horde",c)}),t._uU(4,"Horde"),t.qZA()()}if(2&n){const e=o.ngIf;t.xp6(1),t.Q6J("pressed","Alliance"===e),t.xp6(2),t.Q6J("pressed","Horde"===e)}}function A(n,o){if(1&n&&(t.ynx(0),t.YNc(1,I,5,2,"nb-button-group",5),t.ALo(2,"async"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,e.faction$))}}function Q(n,o){1&n&&(t.TgZ(0,"nb-button-group",13)(1,"button",14),t._uU(2,"10"),t.qZA(),t.TgZ(3,"button",14),t._uU(4,"25"),t.qZA()())}function w(n,o){1&n&&(t.TgZ(0,"nb-button-group",13)(1,"button",14),t._uU(2,"Alliance"),t.qZA(),t.TgZ(3,"button",14),t._uU(4,"Horde"),t.qZA()())}function M(n,o){1&n&&(t.TgZ(0,"nb-button-group",13)(1,"button",15),t._uU(2,"Normal"),t.qZA(),t.TgZ(3,"button",15),t._uU(4,"Heroic"),t.qZA()())}let J=(()=>{class n{constructor(e){this.filterStore=e,this.bFaction=!1,this.bSize=!1,this.bDifficulty=!1,this.faction$=this.filterStore.faction$,this.size$=this.filterStore.size$,this.difficulty$=this.filterStore.difficulty$}ngOnInit(){}updateDifficulty(e,i){e!=i&&this.filterStore.updateDifficulty(e)}updateSize(e,i){e!=i&&this.filterStore.updateSize(e)}updateFaction(e,i){e!=i&&this.filterStore.updateFaction(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-filter-buttons"]],inputs:{bFaction:"bFaction",bSize:"bSize",bDifficulty:"bDifficulty"},decls:11,vars:6,consts:[[1,"flex-container"],[4,"ngIf","ngIfElse"],["noSize",""],["noFaction",""],["noDiff",""],["size","tiny","outline","true","status","warning",4,"ngIf"],["size","tiny","outline","true","status","warning"],["nbButtonToggle","","value","10",3,"pressed","click"],["nbButtonToggle","","value","25",3,"pressed","click"],["nbButtonToggle","","value","Normal",3,"pressed","click"],["nbButtonToggle","","value","Heroic",3,"pressed","click"],["nbButtonToggle","","value","Alliance",3,"pressed","click"],["nbButtonToggle","","value","Horde",3,"pressed","click"],["size","tiny","outline","true","status","basic"],["nbButton","","disabled","","pressed","false"],["nbButton","","disabled",""]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,Z,3,3,"ng-container",1),t.YNc(2,F,3,3,"ng-container",1),t.YNc(3,A,3,3,"ng-container",1),t._UZ(4,"app-filter-class"),t.qZA(),t.YNc(5,Q,5,0,"ng-template",null,2,t.W1O),t.YNc(7,w,5,0,"ng-template",null,3,t.W1O),t.YNc(9,M,5,0,"ng-template",null,4,t.W1O)),2&e){const a=t.MAs(6),c=t.MAs(8),s=t.MAs(10);t.xp6(1),t.Q6J("ngIf",i.bSize)("ngIfElse",a),t.xp6(1),t.Q6J("ngIf",i.bDifficulty)("ngIfElse",s),t.xp6(1),t.Q6J("ngIf",i.bFaction)("ngIfElse",c)}},directives:[r.O5,_.mnu,_.ZDs,h.b,_.DPz],pipes:[r.Ov],styles:["nb-button-group[_ngcontent-%COMP%]{outline:none}nb-button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none}.flex-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:5px}.flex-item-left[_ngcontent-%COMP%], .flex-item-right[_ngcontent-%COMP%]{flex:50%}"]}),n})();var B=l(811);let N=(()=>{class n{transform(e,i){if(null===e)return!1;if(""===i)return!0;const a=e.split("-"),c=i.split("-");for(const s of c)if(!a.includes(s))return!1;return!0}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"filterPipe",type:n,pure:!0}),n})();const u=function(){return["A","B","C","D"]},S=function(){return["B","D"]},$=function(){return["B","C"]};function D(n,o){if(1&n&&t._UZ(0,"app-filter-buttons",7),2&n){const e=t.oxw();t.Q6J("bSize",t.DdM(3,u).includes(e.collectionType))("bFaction",t.DdM(4,S).includes(e.collectionType))("bDifficulty",t.DdM(5,$).includes(e.collectionType))}}const f=function(n,o){return{array:n,title:o}};function Y(n,o){if(1&n&&t.GkF(0,14),2&n){const e=t.oxw().$implicit;t.oxw(4);const i=t.MAs(10);t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.WLB(2,f,e.itemData,e.name))}}function z(n,o){if(1&n&&(t.ynx(0),t.YNc(1,Y,1,5,"ng-container",13),t.ALo(2,"filterPipe"),t.BQk()),2&n){const e=o.$implicit,i=t.oxw(2).ngIf;t.xp6(1),t.Q6J("ngIf",e.itemData&&t.xi3(2,1,i,e.filter?e.filter:""))}}function k(n,o){if(1&n&&(t.TgZ(0,"div",11),t.YNc(1,z,3,4,"ng-container",12),t.qZA()),2&n){const e=t.oxw(2).ngIf;t.xp6(1),t.Q6J("ngForOf",e.left)}}function P(n,o){if(1&n&&t.GkF(0,14),2&n){const e=t.oxw().$implicit;t.oxw(4);const i=t.MAs(10);t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.WLB(2,f,e.itemData,e.name))}}function L(n,o){if(1&n&&(t.ynx(0),t.YNc(1,P,1,5,"ng-container",13),t.ALo(2,"filterPipe"),t.BQk()),2&n){const e=o.$implicit,i=t.oxw(2).ngIf;t.xp6(1),t.Q6J("ngIf",e.itemData&&t.xi3(2,1,i,e.filter?e.filter:""))}}function U(n,o){if(1&n&&(t.TgZ(0,"div",15),t.YNc(1,L,3,4,"ng-container",12),t.qZA()),2&n){const e=t.oxw(2).ngIf;t.xp6(1),t.Q6J("ngForOf",e.right)}}function q(n,o){if(1&n&&t.GkF(0,14),2&n){const e=t.oxw().$implicit;t.oxw(4);const i=t.MAs(12);t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.WLB(2,f,e.itemData,e.name))}}function H(n,o){if(1&n&&(t.ynx(0),t.YNc(1,q,1,5,"ng-container",13),t.ALo(2,"filterPipe"),t.BQk()),2&n){const e=o.$implicit,i=t.oxw(2).ngIf;t.xp6(1),t.Q6J("ngIf",e.itemData&&t.xi3(2,1,i,e.filter?e.filter:""))}}function W(n,o){if(1&n&&(t.TgZ(0,"div",16),t.YNc(1,H,3,4,"ng-container",12),t.qZA()),2&n){const e=t.oxw(2).ngIf;t.xp6(1),t.Q6J("ngForOf",e.mid)}}function E(n,o){if(1&n&&(t.ynx(0),t.YNc(1,k,2,1,"div",8),t.YNc(2,U,2,1,"div",9),t.YNc(3,W,2,1,"div",10),t.BQk()),2&n){const e=t.oxw().ngIf;t.xp6(1),t.Q6J("ngIf",e.left&&e.left.length>0),t.xp6(1),t.Q6J("ngIf",e.right&&e.right.length>0),t.xp6(1),t.Q6J("ngIf",e.mid&&e.mid.length>0)}}function j(n,o){if(1&n&&(t.ynx(0),t.YNc(1,E,4,3,"ng-container",4),t.ALo(2,"async"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,e.filter$))}}function X(n,o){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2).title;t.xp6(1),t.Oqu(e)}}function G(n,o){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"app-wow-item-lazy",17),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("item",e)("itemSize","large")}}function K(n,o){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,X,2,1,"span",4),t.YNc(2,G,2,2,"div",12),t.qZA()),2&n){const e=t.oxw().array,i=t.oxw();t.xp6(1),t.Q6J("ngIf",t.DdM(2,u).includes(i.collectionType)),t.xp6(1),t.Q6J("ngForOf",e)}}function R(n,o){1&n&&t.YNc(0,K,3,3,"div",4),2&n&&t.Q6J("ngIf",o.array.length>0)}function V(n,o){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2).title;t.xp6(1),t.Oqu(e)}}function tt(n,o){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"app-wow-item-lazy",17),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("item",e)("itemSize","large")}}function nt(n,o){if(1&n&&(t.TgZ(0,"div",19),t.YNc(1,V,2,1,"span",4),t.YNc(2,tt,2,2,"div",12),t.qZA()),2&n){const e=t.oxw().array,i=t.oxw();t.xp6(1),t.Q6J("ngIf",t.DdM(2,u).includes(i.collectionType)),t.xp6(1),t.Q6J("ngForOf",e)}}function et(n,o){1&n&&t.YNc(0,nt,3,3,"div",18),2&n&&t.Q6J("ngIf",o.array.length>0)}const ot=function(){return["A","B","C","D","Z"]};let it=(()=>{class n{constructor(e,i){this.collectionsDataService=e,this.filterStore=i,this.faction$=this.filterStore.faction$,this.difficulty$=this.filterStore.difficulty$,this.size$=this.filterStore.size$,this.filter$=(0,T.a)([this.size$,this.faction$,this.difficulty$]).pipe((0,y.U)(([a,c,s])=>`${a}-${s}-${c}`))}ngOnInit(){}ngOnChanges(e){this.sub$=this.collectionsDataService.getCurrentSubCollection$(this.subLink.link)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.L),t.Y36(d.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-collection-card"]],inputs:{subLink:"subLink",collectionType:"collectionType"},features:[t.TTD],decls:13,vars:6,consts:[["bossList",""],[1,"flex-item-left"],["class","flex-item-right",3,"bSize","bFaction","bDifficulty",4,"ngIf"],[1,"flex-container"],[4,"ngIf"],["itemList",""],["itemListFree",""],[1,"flex-item-right",3,"bSize","bFaction","bDifficulty"],["class","flex-item-left flex-column",4,"ngIf"],["class","flex-item-right flex-column",4,"ngIf"],["class","mid-container",4,"ngIf"],[1,"flex-item-left","flex-column"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"flex-item-right","flex-column"],[1,"mid-container"],[3,"item","itemSize"],["class","mid",4,"ngIf"],[1,"mid"]],template:function(e,i){1&e&&(t.TgZ(0,"nb-card",null,0)(2,"nb-card-header")(3,"h2",1),t._uU(4),t.qZA(),t.YNc(5,D,1,6,"app-filter-buttons",2),t.qZA(),t.TgZ(6,"nb-card-body",3),t.YNc(7,j,3,3,"ng-container",4),t.ALo(8,"async"),t.qZA()(),t.YNc(9,R,1,1,"ng-template",null,5,t.W1O),t.YNc(11,et,1,1,"ng-template",null,6,t.W1O)),2&e&&(t.xp6(4),t.Oqu(i.subLink.name),t.xp6(1),t.Q6J("ngIf",t.DdM(5,ot).includes(i.collectionType)),t.xp6(2),t.Q6J("ngIf",t.lcZ(8,3,i.sub$)))},directives:[_.Asz,_.ndF,r.O5,J,_.yKW,r.sg,r.tP,B.Q],pipes:[r.Ov,N],styles:["h2[_ngcontent-%COMP%]{margin:0}nb-card-header[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center}.flex-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.flex-item-left[_ngcontent-%COMP%], .flex-item-right[_ngcontent-%COMP%]{flex:50%}.flex-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:nowrap;gap:40px}.mid-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.mid[_ngcontent-%COMP%]{display:grid;grid-template-columns:50% 50%;grid-template-rows:auto;align-self:stretch;width:100%}@media (max-width: 768px){.flex-container[_ngcontent-%COMP%]{gap:40px}.flex-item-right[_ngcontent-%COMP%], .flex-item-left[_ngcontent-%COMP%]{flex:100%}.hardmode[_ngcontent-%COMP%]{margin-top:0}nb-card-header[_ngcontent-%COMP%]{gap:5px}.mid[_ngcontent-%COMP%]{grid-template-columns:100%}}"]}),n})();function ct(n,o){if(1&n&&t._UZ(0,"app-collection-card",2),2&n){const e=o.$implicit,i=t.oxw().ngIf;t.Q6J("subLink",e)("collectionType",i.type?i.type:"DD")}}function lt(n,o){if(1&n&&(t.TgZ(0,"div")(1,"h1"),t._uU(2),t.qZA(),t.YNc(3,ct,1,2,"app-collection-card",1),t.qZA()),2&n){const e=o.ngIf;t.xp6(2),t.Oqu(e.name),t.xp6(1),t.Q6J("ngForOf",e.subLinks)}}const rt=[{path:"",component:b},{path:":id",component:(()=>{class n{constructor(e){this.collectionDataService=e,this.currentCollection$=this.collectionDataService.getCurrentCollection$()}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.L))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-collections"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"subLink","collectionType",4,"ngFor","ngForOf"],[3,"subLink","collectionType"]],template:function(e,i){1&e&&(t.YNc(0,lt,4,2,"div",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,i.currentCollection$))},directives:[r.O5,r.sg,it],pipes:[r.Ov],styles:["h1[_ngcontent-%COMP%]{margin-top:0}"]}),n})()}];let at=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.Bz.forChild(rt)],m.Bz]}),n})(),st=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.ez,at,C.m,_.zyh,_.KdK]]}),n})()}}]);