"use strict";(self.webpackChunkclassicloot=self.webpackChunkclassicloot||[]).push([[72],{4072:(et,g,r)=>{r.r(g),r.d(g,{CollectionsModule:()=>nt});var l=r(9808),u=r(4343),x=r(4466),m=r(8305),t=r(5e3),_=r(583);function b(e,o){if(1&e&&(t.ynx(0),t._uU(1),t.ALo(2,"json"),t.BQk()),2&e){const n=o.ngIf;t.xp6(1),t.hij(" ",t.lcZ(2,1,n),"\n")}}let y=(()=>{class e{constructor(n){this.collectionsDataService=n,this.collectionsMeta$=this.collectionsDataService.getCollectionsMeta$("wotlk")}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(_.L))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-collections-start"]],decls:2,vars:3,consts:[[4,"ngIf"]],template:function(n,i){1&n&&(t.YNc(0,b,3,3,"ng-container",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,i.collectionsMeta$))},directives:[l.O5],pipes:[l.Ov,l.Ts],styles:[""]}),e})();var T=r(9841),h=r(4004),p=r(8160);let d=(()=>{class e{constructor(){this.store=(0,p.MT)({name:"filter"},(0,p.vl)({faction:"Alliance",difficulty:"Normal",size:10})),this.state$=this.store.pipe((0,p.Ys)(n=>n)),this.faction$=this.store.pipe((0,p.Ys)(n=>n.faction)),this.difficulty$=this.store.pipe((0,p.Ys)(n=>n.difficulty)),this.size$=this.store.pipe((0,p.Ys)(n=>n.size))}updateFaction(n){this.store.update(i=>Object.assign(Object.assign({},i),{faction:n}))}updateDifficulty(n){this.store.update(i=>Object.assign(Object.assign({},i),{difficulty:n}))}updateSize(n){this.store.update(i=>Object.assign(Object.assign({},i),{size:n}))}getSize(){return this.store.getValue().size}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function F(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"nb-button-group",7)(1,"button",8),t.NdJ("click",function(){const c=t.CHM(n).ngIf;return t.oxw(2).updateSize(10,c)}),t._uU(2,"10"),t.qZA(),t.TgZ(3,"button",9),t.NdJ("click",function(){const c=t.CHM(n).ngIf;return t.oxw(2).updateSize(25,c)}),t._uU(4,"25"),t.qZA()()}if(2&e){const n=o.ngIf;t.xp6(1),t.Q6J("pressed",10===n),t.xp6(2),t.Q6J("pressed",25===n)}}function O(e,o){if(1&e&&(t.ynx(0),t.YNc(1,F,5,2,"nb-button-group",6),t.ALo(2,"async"),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,n.size$))}}function Z(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"nb-button-group",7)(1,"button",10),t.NdJ("click",function(){const c=t.CHM(n).ngIf;return t.oxw(2).updateDifficulty("Normal",c)}),t._uU(2,"Normal"),t.qZA(),t.TgZ(3,"button",11),t.NdJ("click",function(){const c=t.CHM(n).ngIf;return t.oxw(2).updateDifficulty("Heroic",c)}),t._uU(4,"Heroic"),t.qZA()()}if(2&e){const n=o.ngIf;t.xp6(1),t.Q6J("pressed","Normal"===n),t.xp6(2),t.Q6J("pressed","Heroic"===n)}}function v(e,o){if(1&e&&(t.ynx(0),t.YNc(1,Z,5,2,"nb-button-group",6),t.ALo(2,"async"),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,n.difficulty$))}}function A(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"nb-button-group",7)(1,"button",12),t.NdJ("click",function(){const c=t.CHM(n).ngIf;return t.oxw(2).updateFaction("Alliance",c)}),t._uU(2,"Alliance"),t.qZA(),t.TgZ(3,"button",13),t.NdJ("click",function(){const c=t.CHM(n).ngIf;return t.oxw(2).updateFaction("Horde",c)}),t._uU(4,"Horde"),t.qZA()()}if(2&e){const n=o.ngIf;t.xp6(1),t.Q6J("pressed","Alliance"===n),t.xp6(2),t.Q6J("pressed","Horde"===n)}}function I(e,o){if(1&e&&(t.ynx(0),t.YNc(1,A,5,2,"nb-button-group",6),t.ALo(2,"async"),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,n.faction$))}}function B(e,o){1&e&&(t.TgZ(0,"nb-button-group",14)(1,"button",15),t._uU(2,"10"),t.qZA(),t.TgZ(3,"button",15),t._uU(4,"25"),t.qZA()())}function S(e,o){1&e&&(t.TgZ(0,"nb-button-group",14)(1,"button",15),t._uU(2,"Alliance"),t.qZA(),t.TgZ(3,"button",15),t._uU(4,"Horde"),t.qZA()())}function M(e,o){1&e&&(t.TgZ(0,"nb-button-group",14)(1,"button",16),t._uU(2,"Normal"),t.qZA(),t.TgZ(3,"button",16),t._uU(4,"Heroic"),t.qZA()())}let $=(()=>{class e{constructor(n){this.filterStore=n,this.bFaction=!1,this.bSize=!0,this.bDifficulty=!1,this.faction$=this.filterStore.faction$,this.size$=this.filterStore.size$,this.difficulty$=this.filterStore.difficulty$}ngOnInit(){}updateDifficulty(n,i){n!=i&&this.filterStore.updateDifficulty(n)}updateSize(n,i){n!=i&&this.filterStore.updateSize(n)}updateFaction(n,i){n!=i&&this.filterStore.updateFaction(n)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-filter-buttons"]],inputs:{bFaction:"bFaction",bSize:"bSize",bDifficulty:"bDifficulty"},decls:10,vars:5,consts:[[1,"flex-container"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["noSize",""],["noFaction",""],["noDiff",""],["size","tiny","outline","true","status","warning",4,"ngIf"],["size","tiny","outline","true","status","warning"],["nbButtonToggle","","value","10",3,"pressed","click"],["nbButtonToggle","","value","25",3,"pressed","click"],["nbButtonToggle","","value","Normal",3,"pressed","click"],["nbButtonToggle","","value","Heroic",3,"pressed","click"],["nbButtonToggle","","value","Alliance",3,"pressed","click"],["nbButtonToggle","","value","Horde",3,"pressed","click"],["size","tiny","outline","true","status","basic"],["nbButton","","disabled","","pressed","false"],["nbButton","","disabled",""]],template:function(n,i){if(1&n&&(t.TgZ(0,"div",0),t.YNc(1,O,3,3,"ng-container",1),t.YNc(2,v,3,3,"ng-container",2),t.YNc(3,I,3,3,"ng-container",2),t.qZA(),t.YNc(4,B,5,0,"ng-template",null,3,t.W1O),t.YNc(6,S,5,0,"ng-template",null,4,t.W1O),t.YNc(8,M,5,0,"ng-template",null,5,t.W1O)),2&n){const s=t.MAs(7),c=t.MAs(9);t.xp6(1),t.Q6J("ngIf",i.bSize),t.xp6(1),t.Q6J("ngIf",i.bDifficulty)("ngIfElse",c),t.xp6(1),t.Q6J("ngIf",i.bFaction)("ngIfElse",s)}},directives:[l.O5,u.mnu,u.ZDs,u.DPz],pipes:[l.Ov],styles:["nb-button-group[_ngcontent-%COMP%]{outline:none}nb-button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none}.flex-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:5px}.flex-item-left[_ngcontent-%COMP%], .flex-item-right[_ngcontent-%COMP%]{flex:50%}"]}),e})();var Q=r(1037);let J=(()=>{class e{transform(n,i){if(null===n)return!1;if(""===i)return!0;const s=n.split("-"),c=i.split("-");for(const a of c)if(!s.includes(a))return!1;return!0}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"filterPipe",type:e,pure:!0}),e})();const w=function(){return["B","D"]},z=function(){return["B","C"]};function N(e,o){if(1&e&&t._UZ(0,"app-filter-buttons",6),2&e){const n=t.oxw();t.Q6J("bFaction",t.DdM(2,w).includes(n.collectionType))("bDifficulty",t.DdM(3,z).includes(n.collectionType))}}const f=function(e,o){return{array:e,title:o}};function D(e,o){if(1&e&&t.GkF(0,12),2&e){const n=t.oxw().$implicit;t.oxw(3);const i=t.MAs(10);t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.WLB(2,f,n.itemData,n.name))}}function Y(e,o){if(1&e&&(t.ynx(0),t.YNc(1,D,1,5,"ng-container",11),t.ALo(2,"filterPipe"),t.BQk()),2&e){const n=o.$implicit,i=t.oxw().ngIf;t.xp6(1),t.Q6J("ngIf",n.itemData&&t.xi3(2,1,i,n.filter?n.filter:""))}}function k(e,o){if(1&e&&t.GkF(0,12),2&e){const n=t.oxw().$implicit;t.oxw(3);const i=t.MAs(10);t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.WLB(2,f,n.itemData,n.name))}}function L(e,o){if(1&e&&(t.ynx(0),t.YNc(1,k,1,5,"ng-container",11),t.ALo(2,"filterPipe"),t.BQk()),2&e){const n=o.$implicit,i=t.oxw().ngIf;t.xp6(1),t.Q6J("ngIf",n.itemData&&t.xi3(2,1,i,n.filter?n.filter:""))}}function P(e,o){if(1&e&&t.GkF(0,12),2&e){const n=t.oxw().$implicit;t.oxw(3);const i=t.MAs(10);t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.WLB(2,f,n.itemData,n.name))}}function U(e,o){if(1&e&&(t.ynx(0),t.YNc(1,P,1,5,"ng-container",11),t.ALo(2,"filterPipe"),t.BQk()),2&e){const n=o.$implicit,i=t.oxw().ngIf;t.xp6(1),t.Q6J("ngIf",n.itemData&&t.xi3(2,1,i,n.filter?n.filter:""))}}function q(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"div",7),t.YNc(2,Y,3,4,"ng-container",8),t.qZA(),t.TgZ(3,"div",9),t.YNc(4,L,3,4,"ng-container",8),t.qZA(),t.TgZ(5,"div",10),t.YNc(6,U,3,4,"ng-container",8),t.qZA(),t.BQk()),2&e){const n=t.oxw().ngIf;t.xp6(2),t.Q6J("ngForOf",n.left),t.xp6(2),t.Q6J("ngForOf",n.right),t.xp6(2),t.Q6J("ngForOf",n.mid)}}function H(e,o){if(1&e&&(t.ynx(0),t.YNc(1,q,7,3,"ng-container",4),t.ALo(2,"async"),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,n.filter$))}}function j(e,o){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const n=t.oxw(2).title;t.xp6(1),t.Oqu(n)}}function W(e,o){if(1&e&&(t.TgZ(0,"div"),t._UZ(1,"app-wow-item-lazy",13),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Q6J("item",n)("itemSize","large")}}const C=function(){return["A","B","C","D"]};function E(e,o){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,j,2,1,"span",4),t.YNc(2,W,2,2,"div",8),t.qZA()),2&e){const n=t.oxw().array,i=t.oxw();t.xp6(1),t.Q6J("ngIf",t.DdM(2,C).includes(i.collectionType)),t.xp6(1),t.Q6J("ngForOf",n)}}function X(e,o){1&e&&t.YNc(0,E,3,3,"div",4),2&e&&t.Q6J("ngIf",o.array.length>0)}let G=(()=>{class e{constructor(n,i){this.collectionsDataService=n,this.filterStore=i,this.faction$=this.filterStore.faction$,this.difficulty$=this.filterStore.difficulty$,this.size$=this.filterStore.size$,this.filter$=(0,T.a)([this.size$,this.faction$,this.difficulty$]).pipe((0,h.U)(([s,c,a])=>`${s}-${a}-${c}`))}ngOnInit(){}ngOnChanges(n){this.sub$=this.collectionsDataService.getCurrentSubCollection$(this.subLink.link)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(_.L),t.Y36(d))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-collection-card"]],inputs:{subLink:"subLink",collectionType:"collectionType"},features:[t.TTD],decls:11,vars:6,consts:[["bossList",""],[1,"flex-item-left"],["class","flex-item-right",3,"bFaction","bDifficulty",4,"ngIf"],[1,"flex-container"],[4,"ngIf"],["itemList",""],[1,"flex-item-right",3,"bFaction","bDifficulty"],[1,"flex-item-left","flex-column"],[4,"ngFor","ngForOf"],[1,"flex-item-right","flex-column"],[1,"flex-column"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"item","itemSize"]],template:function(n,i){1&n&&(t.TgZ(0,"nb-card",null,0)(2,"nb-card-header")(3,"h2",1),t._uU(4),t.qZA(),t.YNc(5,N,1,4,"app-filter-buttons",2),t.qZA(),t.TgZ(6,"nb-card-body",3),t.YNc(7,H,3,3,"ng-container",4),t.ALo(8,"async"),t.qZA()(),t.YNc(9,X,1,1,"ng-template",null,5,t.W1O)),2&n&&(t.xp6(4),t.Oqu(i.subLink.name),t.xp6(1),t.Q6J("ngIf",t.DdM(5,C).includes(i.collectionType)),t.xp6(2),t.Q6J("ngIf",t.lcZ(8,3,i.sub$)))},directives:[u.Asz,u.ndF,l.O5,$,u.yKW,l.sg,l.tP,Q.Q],pipes:[l.Ov,J],styles:["h2[_ngcontent-%COMP%]{margin:0}nb-card-header[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center}.flex-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.flex-item-left[_ngcontent-%COMP%], .flex-item-right[_ngcontent-%COMP%]{flex:50%}.flex-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;gap:40px}@media (max-width: 768px){.flex-container[_ngcontent-%COMP%]{gap:40px}.flex-item-right[_ngcontent-%COMP%], .flex-item-left[_ngcontent-%COMP%]{flex:100%}.hardmode[_ngcontent-%COMP%]{margin-top:0}nb-card-header[_ngcontent-%COMP%]{gap:5px}}"]}),e})();function K(e,o){if(1&e&&t._UZ(0,"app-collection-card",2),2&e){const n=o.$implicit,i=t.oxw().ngIf;t.Q6J("subLink",n)("collectionType",i.type?i.type:"DD")}}function R(e,o){if(1&e&&(t.TgZ(0,"div")(1,"h1"),t._uU(2),t.qZA(),t.YNc(3,K,1,2,"app-collection-card",1),t.qZA()),2&e){const n=o.ngIf;t.xp6(2),t.Oqu(n.name),t.xp6(1),t.Q6J("ngForOf",n.subLinks)}}const V=[{path:"",component:y},{path:":id",component:(()=>{class e{constructor(n){this.collectionDataService=n,this.currentCollection$=this.collectionDataService.getCurrentCollection$()}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(_.L))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-collections"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"subLink","collectionType",4,"ngFor","ngForOf"],[3,"subLink","collectionType"]],template:function(n,i){1&n&&(t.YNc(0,R,4,2,"div",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,i.currentCollection$))},directives:[l.O5,l.sg,G],pipes:[l.Ov],styles:["h1[_ngcontent-%COMP%]{margin-top:0}"]}),e})()}];let tt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[m.Bz.forChild(V)],m.Bz]}),e})(),nt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.ez,tt,x.m,u.zyh,u.KdK]]}),e})()}}]);