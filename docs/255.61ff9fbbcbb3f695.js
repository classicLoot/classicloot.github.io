"use strict";(self.webpackChunkclassicloot=self.webpackChunkclassicloot||[]).push([[255],{2255:(S,l,s)=>{s.r(l),s.d(l,{DungeonsModule:()=>$});var c=s(9808),g=s(9519),n=s(5e3),h=s(9106),D=s(1135),f=s(4004);const d=[{name:"Utgarde Keep",url:"UtgardeKeep",descr:"",levelMin:69,levelMax:72,bosses:[{name:"Keleseth",loot:[35572,35571,35570,47241,37180,37178,37179,37177]},{name:"Skarvald",loot:[35575,35574,35573,47241,37183,37184,37182,37181]},{name:"Ingvar",loot:[35577,35578,35576,33330,47241,37194,37193,37192,37191,37189,37188,37186,37190,41793,43102]},{name:"Trash",loot:[35580,35579,37197,37196]}]},{name:"The Nexus",url:"TheNexus",descr:"",levelMin:69,levelMax:72,bosses:[{name:"Ormorok",loot:[35602,35603,35601,47241,37153,37155,37152,37151]},{name:"Anomalus",loot:[35599,35600,35598,47241,37149,37144,37150,37141]},{name:"Telestra",loot:[35605,35604,35617,21524,47241,37139,37138,37135,37134,21524]},{name:"KolurgStoutbeardHEROIC",loot:[47241,37728,37731,37730,37729]},{name:"Keristrasza",loot:[35596,35595,35597,47241,37172,37170,37171,37169,37165,37167,37166,37162,41794,43102]}]}],m={name:"EMPTY",url:"",descr:"",levelMin:0,levelMax:0,bosses:[]};let Z=(()=>{class e{constructor(){this.currentDungeonName=new D.X("EMPTY")}getCurrentDungeonName$(){return this.currentDungeonName.asObservable()}setCurrentDungeonName(o){this.currentDungeonName.next(""!==o?o:"EMPTY")}getCurrentDungeon$(){return this.getCurrentDungeonName$().pipe((0,f.U)(r=>""===r||"EMPTY"===r?m:this.getDungeonsData().find(x=>x.url===r)||m))}getDungeonsData(){return d}getDungeonsMenu(){const o=[];return d.forEach(r=>{o.push({title:r.name,link:`/dungeons/${r.url}`})}),o}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var i=s(5699);function M(e,t){if(1&e&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&e){const o=t.ngIf;n.xp6(1),n.hij(" ",o,"\n")}}function T(e,t){if(1&e&&(n.TgZ(0,"div"),n._uU(1),n.ALo(2,"json"),n.qZA()),2&e){const o=t.ngIf;n.xp6(1),n.hij(" ",n.lcZ(2,1,o),"\n")}}function b(e,t){if(1&e&&(n.TgZ(0,"div"),n._uU(1),n._UZ(2,"a",2),n.qZA()),2&e){const o=t.$implicit;n.xp6(1),n.hij(" ",o," "),n.xp6(1),n.MGl("rel","item=",o,"")}}function C(e,t){if(1&e&&(n.TgZ(0,"nb-card")(1,"nb-card-header"),n._uU(2),n.qZA(),n.TgZ(3,"nb-card-body"),n._uU(4),n.ALo(5,"json"),n.YNc(6,b,3,2,"div",1),n.qZA()()),2&e){const o=t.$implicit;n.xp6(2),n.Oqu(o.name),n.xp6(2),n.hij(" ",n.lcZ(5,3,o.loot)," "),n.xp6(2),n.Q6J("ngForOf",o.loot)}}function N(e,t){if(1&e&&(n.TgZ(0,"div")(1,"h1"),n._uU(2),n.qZA(),n.YNc(3,C,7,5,"nb-card",1),n.qZA()),2&e){const o=t.ngIf;n.xp6(2),n.Oqu(o.name),n.xp6(1),n.Q6J("ngForOf",o.bosses)}}let p=(()=>{class e{constructor(o,u,r){this.sidebarService=o,this.dungeonService=u,this.route=r;const a=this.dungeonService.getDungeonsMenu();this.sidebarService.setMenuItems(a),this.currentDungeonName$=this.dungeonService.getCurrentDungeonName$(),this.currentDungeon$=this.dungeonService.getCurrentDungeon$()}ngOnInit(){this.sub=this.route.params.subscribe(o=>{this.dungeonService.setCurrentDungeonName(o.id)})}ngOnDestroy(){this.sub.unsubscribe()}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(h.P),n.Y36(Z),n.Y36(g.gz))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-dungeons"]],decls:10,vars:9,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],["href","#",3,"rel"]],template:function(o,u){1&o&&(n.TgZ(0,"p"),n._uU(1,"dungeons works!"),n.qZA(),n._UZ(2,"hr"),n.YNc(3,M,2,1,"div",0),n.ALo(4,"async"),n.YNc(5,T,3,3,"div",0),n.ALo(6,"async"),n._UZ(7,"hr"),n.YNc(8,N,4,2,"div",0),n.ALo(9,"async")),2&o&&(n.xp6(3),n.Q6J("ngIf",n.lcZ(4,3,u.currentDungeonName$)),n.xp6(2),n.Q6J("ngIf",n.lcZ(6,5,u.currentDungeon$)),n.xp6(3),n.Q6J("ngIf",n.lcZ(9,7,u.currentDungeon$)))},directives:[c.O5,c.sg,i.Asz,i.ndF,i.yKW],pipes:[c.Ov,c.Ts],styles:[""]}),e})();const y=[{path:"",component:p},{path:":id",component:p}];let A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[g.Bz.forChild(y)],g.Bz]}),e})(),$=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[c.ez,A,i.zyh]]}),e})()}}]);