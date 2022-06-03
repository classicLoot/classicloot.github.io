"use strict";(self.webpackChunkclassicloot=self.webpackChunkclassicloot||[]).push([[849],{3849:(g,d,n)=>{n.r(d),n.d(d,{CoreModule:()=>P});var c=n(9808),u=n(8305),t=n(5e3),s=n(9106),i=n(8142);let a=(()=>{class e{constructor(){this.mainMenu=[{title:"Dungeons",link:"/dungeons"},{title:"Raids",link:"/raids"},{title:"Crafting",link:"/crafting"},{title:"PVP",link:"/pvp"},{title:"Reputation",link:"/reputation"}]}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-header"]],decls:7,vars:1,consts:[[1,"outer"],[1,"section","left"],[1,"section","middle"],[3,"items"],[1,"section","right"]],template:function(o,m){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"Classic Loot"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"nb-menu",3),t.qZA(),t.TgZ(5,"div",4),t._uU(6,"..."),t.qZA()()),2&o&&(t.xp6(4),t.Q6J("items",m.mainMenu))},directives:[i.mBz],styles:[".outer[_ngcontent-%COMP%]{display:flex;flex:1 0 auto;flex-direction:row;align-items:center}.section[_ngcontent-%COMP%]{display:flex;padding:.875rem .5rem;flex-direction:row}.section.left[_ngcontent-%COMP%]{width:16rem}.section.middle[_ngcontent-%COMP%]{flex:1;align-items:center;margin:0 -.5rem}.outer[_ngcontent-%COMP%]     nb-menu{flex:1}.outer[_ngcontent-%COMP%]     nb-menu .menu-items{display:flex;justify-content:flex-start}.outer[_ngcontent-%COMP%]     nb-menu .menu-items .menu-item{border:none}.outer[_ngcontent-%COMP%]     nb-menu .menu-items .menu-item a{display:block}.outer[_ngcontent-%COMP%]     nb-menu .menu-items .menu-item a:hover, .outer[_ngcontent-%COMP%]     nb-menu .menu-items .menu-item a.active, .outer[_ngcontent-%COMP%]     nb-menu .menu-items .menu-item a:focus{outline:none!important}"]}),e})();var p=n(9841),f=n(4198);const C=["itemTooltipBase"],y=["itemTooltipIcon"],I=["itemTooltipContent"];let T=(()=>{class e{constructor(o){this.tooltipService=o,this.itemSize="large",this.wowItem$=this.tooltipService.getWowItem$(),this.mouseEvent$=this.tooltipService.getMouseEvent$(),this.sub=(0,p.a)([this.wowItem$,this.mouseEvent$]).subscribe(([m,r])=>{const h=document.getElementById("itemTooltipBase"),v=document.getElementById("itemTooltipIcon"),M=document.getElementById("itemTooltipContent");if(m&&h&&v&&M){v.src=`../../../../assets/icons/${this.itemSize}/${m.icon}.jpg`,M.innerHTML=m.htmlTooltip,h.style.display=r.bShown?"block":"none";const E=h.getBoundingClientRect(),A=r.y-E.height/2;h.style.left=r.x+5+"px",h.style.top=A+"px"}})}ngOnInit(){}ngOnDestroy(){this.sub.unsubscribe()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(f.a))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-wow-item-tooltip"]],viewQuery:function(o,m){if(1&o&&(t.Gf(C,5),t.Gf(y,5),t.Gf(I,5)),2&o){let r;t.iGM(r=t.CRH())&&(m.itemTooltipBase=r.first),t.iGM(r=t.CRH())&&(m.itemTooltipIcon=r.first),t.iGM(r=t.CRH())&&(m.itemTooltipContent=r.first)}},inputs:{itemSize:"itemSize"},decls:4,vars:0,consts:[["id","itemTooltipBase",1,"itemTooltip"],[1,"itemTooltipBox"],["id","itemTooltipIcon",1,"itemIconBig","border"],["id","itemTooltipContent",1,"border","wow"]],template:function(o,m){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2)(3,"div",3),t.qZA()())},styles:["#itemTooltipBase[_ngcontent-%COMP%]{position:absolute;z-index:50;top:100px;left:0px;display:none}.itemTooltipBox[_ngcontent-%COMP%]{display:flex;gap:5px;max-width:400px;width:100%}.itemIcon[_ngcontent-%COMP%]{width:40px;height:40px}.itemIconBig[_ngcontent-%COMP%]{width:60px;height:60px}.itemName[_ngcontent-%COMP%]{font-size:larger;padding-left:.5rem}.itemName[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),e})();function b(e,l){if(1&e&&(t.TgZ(0,"nb-sidebar",3),t._UZ(1,"nb-menu",4),t.qZA()),2&e){const o=l.ngIf;t.xp6(1),t.Q6J("items",o)}}const x=[{path:"",component:(()=>{class e{constructor(o){this.sidebarService=o,this.menuItems$=this.sidebarService.getMenuItems$()}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(s.P))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-layout"]],decls:11,vars:3,consts:[["fixed",""],[1,"headerfix"],["class","menu-sidebar",4,"ngIf"],[1,"menu-sidebar"],["tag","leftMenu",3,"items"]],template:function(o,m){1&o&&(t.TgZ(0,"nb-layout")(1,"nb-layout-header",0)(2,"div",1),t._UZ(3,"app-header")(4,"app-wow-item-tooltip"),t.qZA()(),t.YNc(5,b,2,1,"nb-sidebar",2),t.ALo(6,"async"),t.TgZ(7,"nb-layout-column"),t._UZ(8,"router-outlet"),t.qZA(),t.TgZ(9,"nb-layout-footer",0),t._uU(10," FOOTER "),t.qZA()()),2&o&&(t.xp6(5),t.Q6J("ngIf",t.lcZ(6,1,m.menuItems$)))},directives:[i.Aqw,i.dmS,a,T,c.O5,i.nZR,i.mBz,i.dP_,u.lC,i.l88],pipes:[c.Ov],styles:["nb-layout .layout-container{max-width:1200px;width:100%;margin-left:auto;margin-right:auto}  nb-layout .main-container{padding-top:3rem}  nb-layout .main-container .scrollable{padding-top:0}.headerfix[_ngcontent-%COMP%]{max-width:1200px;width:100%;margin-left:auto;margin-right:auto}"]}),e})(),children:[{path:"",redirectTo:"home"},{path:"crafting",loadChildren:()=>n.e(642).then(n.bind(n,9642)).then(e=>e.CraftingModule)},{path:"dungeons",loadChildren:()=>n.e(3).then(n.bind(n,1003)).then(e=>e.DungeonsModule)},{path:"home",loadChildren:()=>n.e(922).then(n.bind(n,9922)).then(e=>e.HomeModule)},{path:"pvp",loadChildren:()=>n.e(125).then(n.bind(n,8125)).then(e=>e.PvpModule)},{path:"raids",loadChildren:()=>n.e(643).then(n.bind(n,1643)).then(e=>e.RaidsModule)},{path:"reputation",loadChildren:()=>n.e(503).then(n.bind(n,9503)).then(e=>e.ReputationModule)},{path:"*",redirectTo:"home"}]}];let O=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.Bz.forChild(x)],u.Bz]}),e})();var S=n(4466);let P=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,O,i.BW0,i.P1,i.j5J,S.m]]}),e})()},9106:(g,d,n)=>{n.d(d,{P:()=>t});var c=n(1135),u=n(5e3);let t=(()=>{class s{constructor(){this.menuItemSubject=new c.X([]),this.setMenuItems([{title:"Docs",link:"/docs"},{title:"Components",link:"/docs/components/components-overview"},{title:"Design System",link:"/docs/design-system/eva-design-system-intro"},{title:"Auth",link:"/docs/auth/introduction"},{title:"Security",link:"/docs/security/introduction"}])}getMenuItems$(){return this.menuItemSubject.asObservable()}getMenuItems(){return this.menuItemSubject.getValue()}setMenuItems(a){this.menuItemSubject.next(a)}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},4198:(g,d,n)=>{n.d(d,{a:()=>s});var c=n(1135),u=n(8372),t=n(5e3);let s=(()=>{class i{constructor(){this.mouseEventSubject=new c.X({x:0,y:0,bShown:!1}),this.wowItemSubject=new c.X(null)}onMouseEvent(p,f,C){this.wowItemSubject.next(C),this.mouseEventSubject.next("leave"===f?{x:p.clientX,y:p.clientY,bShown:!1}:{x:p.clientX,y:p.clientY,bShown:!0})}getMouseEvent$(){return this.mouseEventSubject.asObservable().pipe((0,u.b)(1))}getWowItem$(){return this.wowItemSubject.asObservable().pipe()}}return i.\u0275fac=function(p){return new(p||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},4466:(g,d,n)=>{n.d(d,{m:()=>t});var c=n(9808),u=n(5e3);let t=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=u.oAB({type:s}),s.\u0275inj=u.cJS({imports:[[c.ez]]}),s})()}}]);