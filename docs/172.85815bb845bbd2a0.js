"use strict";(self.webpackChunkclassicloot=self.webpackChunkclassicloot||[]).push([[172],{4172:(U,_,o)=>{o.r(_),o.d(_,{RaidsModule:()=>L});var c=o(9808),d=o(8305),n=o(5e3),m=o(9106),p=o(1135),u=o(3900),f=o(9646);const v=[{title:"Naxxramas",children:[{title:"10-man",link:"/raids/Naxx10"},{title:"25-man",link:"/raids/Naxx25"}]},{title:"The Eye of Eternity",children:[{title:"10-man",link:"/raids/TheEyeOfEternity10"},{title:"25-man",link:"/raids/TheEyeOfEternity25"}]},{title:"Obsidian Sanctum",children:[{title:"10-man",link:"/raids/ObsidianSanctum10"},{title:"25-man",link:"/raids/ObsidianSanctum25"}]},{title:"Ulduar",children:[{title:"10-man",link:"/raids/Ulduar10"},{title:"25-man",link:"/raids/Ulduar25"}]}];var x=o(520);let h=(()=>{class t{constructor(i){this.http=i}getRaidData$(i){return this.http.get(`../../../assets/data/raidsSORTED/wotlk/${i}.json`)}}return t.\u0275fac=function(i){return new(i||t)(n.LFG(x.eN))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const C={name:"EMPTY",url:"",descr:"",size:10,type:"A",bosses:[]};let l=(()=>{class t{constructor(i){this.raidDataService=i,this.currentRaidName=new p.X("EMPTY")}getCurrentRaidName$(){return this.currentRaidName.asObservable()}setCurrentRaidName(i){this.currentRaidName.next(""!==i?i:"EMPTY")}getCurrentRaid$(){return this.getCurrentRaidName$().pipe((0,u.w)(r=>""===r||"EMPTY"===r?(0,f.of)(C):this.raidDataService.getRaidData$(r)))}getRaidsMenu(){return v}}return t.\u0275fac=function(i){return new(i||t)(n.LFG(h))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),R=(()=>{class t{constructor(i,a){this.sidebarService=i,this.raidsService=a;const r=this.raidsService.getRaidsMenu();this.sidebarService.setMenuItems(r)}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)(n.Y36(m.P),n.Y36(l))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-raids-start"]],decls:2,vars:0,template:function(i,a){1&i&&(n.TgZ(0,"p"),n._uU(1,"raids-start works!"),n.qZA())},styles:[""]}),t})();var s=o(8142),b=o(1003);function y(t,e){if(1&t&&(n.TgZ(0,"div"),n._UZ(1,"app-wow-item",8),n.qZA()),2&t){const i=e.$implicit;n.xp6(1),n.Q6J("itemID",i)("itemSize","large")}}function T(t,e){if(1&t&&(n.ynx(0),n.TgZ(1,"div",7),n.YNc(2,y,2,2,"div",1),n.qZA(),n.BQk()),2&t){const i=n.oxw(3).$implicit;n.xp6(2),n.Q6J("ngForOf",i.sortedLoot.misc)}}function O(t,e){if(1&t&&(n.TgZ(0,"div"),n._UZ(1,"app-wow-item",8),n.qZA()),2&t){const i=e.$implicit;n.xp6(1),n.Q6J("itemID",i)("itemSize","large")}}function Z(t,e){if(1&t&&(n.ynx(0),n.TgZ(1,"div",7),n.YNc(2,O,2,2,"div",1),n.qZA(),n.BQk()),2&t){const i=n.oxw(3).$implicit;n.xp6(2),n.Q6J("ngForOf",i.sortedLoot.armor)}}function S(t,e){if(1&t&&(n.TgZ(0,"div"),n._UZ(1,"app-wow-item",8),n.qZA()),2&t){const i=e.$implicit;n.xp6(1),n.Q6J("itemID",i)("itemSize","large")}}function M(t,e){if(1&t&&(n.ynx(0),n.TgZ(1,"div",7),n.YNc(2,S,2,2,"div",1),n.qZA(),n.BQk()),2&t){const i=n.oxw(3).$implicit;n.xp6(2),n.Q6J("ngForOf",i.sortedLoot.tokens)}}function w(t,e){if(1&t&&(n.TgZ(0,"div"),n._UZ(1,"app-wow-item",8),n.qZA()),2&t){const i=e.$implicit;n.xp6(1),n.Q6J("itemID",i)("itemSize","large")}}function $(t,e){if(1&t&&(n.ynx(0),n.TgZ(1,"div",7),n.YNc(2,w,2,2,"div",1),n.qZA(),n.BQk()),2&t){const i=n.oxw(3).$implicit;n.xp6(2),n.Q6J("ngForOf",i.sortedLoot.jewelry)}}function Q(t,e){if(1&t&&(n.TgZ(0,"div"),n._UZ(1,"app-wow-item",8),n.qZA()),2&t){const i=e.$implicit;n.xp6(1),n.Q6J("itemID",i)("itemSize","large")}}function N(t,e){if(1&t&&(n.ynx(0),n.TgZ(1,"div",7),n.YNc(2,Q,2,2,"div",1),n.qZA(),n.BQk()),2&t){const i=n.oxw(3).$implicit;n.xp6(2),n.Q6J("ngForOf",i.sortedLoot.weapons)}}function P(t,e){if(1&t&&(n.ynx(0),n.TgZ(1,"div",5),n.YNc(2,T,3,1,"ng-container",0),n.YNc(3,Z,3,1,"ng-container",0),n.qZA(),n.TgZ(4,"div",6),n.YNc(5,M,3,1,"ng-container",0),n.YNc(6,$,3,1,"ng-container",0),n.YNc(7,N,3,1,"ng-container",0),n.qZA(),n.BQk()),2&t){const i=n.oxw(2).$implicit;n.xp6(2),n.Q6J("ngIf",i.sortedLoot.misc.length>0),n.xp6(1),n.Q6J("ngIf",i.sortedLoot.armor.length>0),n.xp6(2),n.Q6J("ngIf",i.sortedLoot.tokens.length>0),n.xp6(1),n.Q6J("ngIf",i.sortedLoot.jewelry.length>0),n.xp6(1),n.Q6J("ngIf",i.sortedLoot.weapons.length>0)}}function Y(t,e){if(1&t&&(n.ynx(0),n.YNc(1,P,8,5,"ng-container",0),n.BQk()),2&t){const i=n.oxw().$implicit;n.xp6(1),n.Q6J("ngIf",i.sortedLoot)}}function A(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1," BBBB "),n.qZA())}function J(t,e){1&t&&(n.TgZ(0,"div"),n._uU(1," CCCC "),n.qZA())}function I(t,e){if(1&t&&(n.TgZ(0,"nb-card",null,2)(2,"nb-card-header")(3,"h2"),n._uU(4),n.qZA()(),n.TgZ(5,"nb-card-body",3),n.YNc(6,Y,2,1,"ng-container",4),n.YNc(7,A,2,0,"div",4),n.YNc(8,J,2,0,"div",4),n.qZA()()),2&t){const i=e.$implicit,a=n.oxw().ngIf;n.xp6(4),n.Oqu(i.name),n.xp6(1),n.Q6J("ngSwitch",a.type),n.xp6(1),n.Q6J("ngSwitchCase","A"),n.xp6(1),n.Q6J("ngSwitchCase","B"),n.xp6(1),n.Q6J("ngSwitchCase","C")}}function z(t,e){if(1&t&&(n.TgZ(0,"div")(1,"h1"),n._uU(2),n.qZA(),n.YNc(3,I,9,5,"nb-card",1),n.qZA()),2&t){const i=e.ngIf;n.xp6(2),n.Oqu(i.name),n.xp6(1),n.Q6J("ngForOf",i.bosses)}}const F=[{path:"",component:R},{path:":id",component:(()=>{class t{constructor(i,a,r){this.sidebarService=i,this.raidService=a,this.route=r,this.currentRaid$=this.getCurrentRaid$();const g=this.raidService.getRaidsMenu();this.sidebarService.setMenuItems(g)}ngOnInit(){this.sub=this.route.params.subscribe(i=>{this.raidService.setCurrentRaidName(i.id)})}ngOnDestroy(){this.sub.unsubscribe()}getCurrentRaid$(){return this.raidService.getCurrentRaid$().pipe()}}return t.\u0275fac=function(i){return new(i||t)(n.Y36(m.P),n.Y36(l),n.Y36(d.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-raids"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],["bossList",""],[1,"flex-container",3,"ngSwitch"],[4,"ngSwitchCase"],[1,"flex-item-left","flex-column"],[1,"flex-item-right","flex-column"],[1,""],[3,"itemID","itemSize"]],template:function(i,a){1&i&&(n.YNc(0,z,4,2,"div",0),n.ALo(1,"async")),2&i&&n.Q6J("ngIf",n.lcZ(1,1,a.currentRaid$))},directives:[c.O5,c.sg,s.Asz,s.ndF,s.yKW,c.RF,c.n9,b.b],pipes:[c.Ov],styles:["h1[_ngcontent-%COMP%]{margin-top:0}#item[_ngcontent-%COMP%]{display:inline-block;height:50px;font-size:x-large;text-decoration:none;background-size:32px,32px!important}#item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:15px!important}nb-card[_ngcontent-%COMP%]{position:relative}nb-card-body[_ngcontent-%COMP%]{position:relative;overflow:visible}nb-card-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:10px}nb-card-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], nb-card-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], nb-card-body[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin-top:0;margin-bottom:10px}.typeHeader[_ngcontent-%COMP%]{font-size:medium;font-weight:600;margin-bottom:.25rem}.flex-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.flex-item-left[_ngcontent-%COMP%], .flex-item-right[_ngcontent-%COMP%]{flex:50%}.flex-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;gap:40px}@media (max-width: 768px){.flex-container[_ngcontent-%COMP%]{gap:40px}.flex-item-right[_ngcontent-%COMP%], .flex-item-left[_ngcontent-%COMP%]{flex:100%}}"]}),t})()}];let B=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[d.Bz.forChild(F)],d.Bz]}),t})();var k=o(4466);let L=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[c.ez,B,s.zyh,s.KdK,k.m]]}),t})()}}]);