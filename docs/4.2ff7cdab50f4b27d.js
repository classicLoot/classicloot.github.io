"use strict";(self.webpackChunkclassicloot=self.webpackChunkclassicloot||[]).push([[4],{1004:(x,I,o)=>{o.r(I),o.d(I,{CoreModule:()=>N});var c=o(9808),l=o(4343),h=o(4466),r=o(8305),t=o(5e3),a=o(9106),d=o(1135);let M=(()=>{class e{constructor(){this.headerItems$=new d.X([]),this.mainMenu=[{title:"Dungeons",link:"/dungeons",titleTwo:""},{title:"Raids",link:"/raids",titleTwo:""},{title:"Crafting",link:"/crafting",titleTwo:""},{title:"PVP",link:"/pvp",titleTwo:""},{title:"Reputations",link:"/reputation",titleTwo:""},{title:"Collections",link:"/collections",titleTwo:""}],this.headerItems$.next(this.mainMenu)}getHeader$(){return this.headerItems$.asObservable()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const f=function(){return["home"]};let p=(()=>{class e{constructor(n){this.nbSidebarService=n,this.menuItems=[]}ngOnInit(){}toggleSidebar(){this.nbSidebarService.toggle(!1,"leftSidebar")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.lzT))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-header"]],inputs:{menuItems:"menuItems"},decls:10,vars:3,consts:[[1,"outer"],[1,"section","left"],["nbButton","","ghost","",3,"click"],["icon","menu-2"],[1,"logo","text",3,"routerLink"],[1,"section","middle"],[3,"items"],[1,"section","right"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return i.toggleSidebar()}),t._UZ(3,"nb-icon",3),t.qZA(),t.TgZ(4,"a",4),t._uU(5," Classic Loot "),t.qZA()(),t.TgZ(6,"div",5),t._UZ(7,"nb-menu",6),t.qZA(),t.TgZ(8,"div",7),t._uU(9,"..."),t.qZA()()),2&n&&(t.xp6(4),t.Q6J("routerLink",t.DdM(2,f)),t.xp6(3),t.Q6J("items",i.menuItems))},directives:[l.DPz,l.fMN,r.yS,l.mBz],styles:[".logo.text[_ngcontent-%COMP%]{font-weight:700;font-size:x-large;text-decoration:none}.outer[_ngcontent-%COMP%]{display:flex;flex:1 0 auto;flex-direction:row;align-items:center}.section[_ngcontent-%COMP%]{display:flex;padding:.875rem .5rem;flex-direction:row}.section.left[_ngcontent-%COMP%]{width:16rem;align-items:center;gap:.5rem}.section.left[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:none;color:#fff;padding-top:0;padding-bottom:0}.section.left[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{height:35px;width:35px}@media (max-width: 992px){.section.left[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:inline}}.section.middle[_ngcontent-%COMP%]{flex:1;align-items:center;margin:0 -.5rem}@media (max-width: 768px){.section.middle[_ngcontent-%COMP%]   nb-menu[_ngcontent-%COMP%]{display:none}}.outer[_ngcontent-%COMP%]     nb-menu{flex:1}.outer[_ngcontent-%COMP%]     nb-menu .menu-items{display:flex;justify-content:flex-start}.outer[_ngcontent-%COMP%]     nb-menu .menu-items .menu-item{border:none}.outer[_ngcontent-%COMP%]     nb-menu .menu-items .menu-item a{display:block}.outer[_ngcontent-%COMP%]     nb-menu .menu-items .menu-item a:hover, .outer[_ngcontent-%COMP%]     nb-menu .menu-items .menu-item a.active, .outer[_ngcontent-%COMP%]     nb-menu .menu-items .menu-item a:focus{outline:none!important}"]}),e})();var m=o(9841),v=o(4198);const u=["itemTooltipBase"],T=["itemTooltipIcon"],$=["itemTooltipContent"];let C=(()=>{class e{constructor(n){this.tooltipService=n,this.itemSize="large",this.wowItem$=this.tooltipService.getWowItem$(),this.mouseEvent$=this.tooltipService.getMouseEvent$(),this.sub=(0,m.a)([this.wowItem$,this.mouseEvent$]).subscribe(([i,_])=>{const y=document.getElementById("itemTooltipBase"),E=document.getElementById("itemTooltipIcon"),S=document.getElementById("itemTooltipContent");if(i&&y&&E&&S){E.src=`../../../../assets/icons/${this.itemSize}/${i.icon}.jpg`,S.innerHTML=i.htmlTooltip,y.style.display=_.bShown?"block":"none";const H=y.getBoundingClientRect(),V=_.x+5,q=_.y-Math.max(H.height/2,75);y.style.left=V+"px",y.style.top=q+"px"}})}ngOnInit(){}ngOnDestroy(){this.sub.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(v.a))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-wow-item-tooltip"]],viewQuery:function(n,i){if(1&n&&(t.Gf(u,5),t.Gf(T,5),t.Gf($,5)),2&n){let _;t.iGM(_=t.CRH())&&(i.itemTooltipBase=_.first),t.iGM(_=t.CRH())&&(i.itemTooltipIcon=_.first),t.iGM(_=t.CRH())&&(i.itemTooltipContent=_.first)}},inputs:{itemSize:"itemSize"},decls:4,vars:0,consts:[["id","itemTooltipBase",1,"itemTooltip"],[1,"itemTooltipBox"],["id","itemTooltipIcon",1,"itemIconBig","border"],["id","itemTooltipContent",1,"border","wow"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2)(3,"div",3),t.qZA()())},styles:["#itemTooltipBase[_ngcontent-%COMP%]{position:absolute;z-index:50;top:100px;left:0px;display:none}.itemTooltipBox[_ngcontent-%COMP%]{display:flex;gap:5px;max-width:400px;width:100%}.itemIcon[_ngcontent-%COMP%]{width:40px;height:40px}.itemIconBig[_ngcontent-%COMP%]{width:60px;height:60px}.itemName[_ngcontent-%COMP%]{font-size:larger;padding-left:.5rem}.itemName[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),e})();var g=o(6424);const O=["app-sidebar-item",""];function P(e,s){if(1&e&&(t.ynx(0),t.TgZ(1,"a",2)(2,"span",3),t._uU(3),t.qZA()(),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.ekj("active",n.menuItem.selected),t.Q6J("routerLink",n.menuItem.link)("routerLinkActive","router-link-active"),t.uIk("target",n.menuItem.target)("title",n.menuItem.title),t.xp6(2),t.Oqu(n.menuItem.title)}}function b(e,s){if(1&e&&(t.ynx(0),t.TgZ(1,"a",2)(2,"span",3),t._uU(3),t.qZA(),t.TgZ(4,"span",4),t._uU(5),t.qZA()(),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.ekj("active",n.menuItem.selected),t.Q6J("routerLink",n.menuItem.link)("routerLinkActive","router-link-active"),t.uIk("target",n.menuItem.target)("title",n.menuItem.title),t.xp6(2),t.Oqu(n.menuItem.title),t.xp6(2),t.Oqu(n.menuItem.titleTwo)}}const D=function(e){return{link:e}};function L(e,s){if(1&e&&(t.ynx(0),t.GkF(1,5),t.BQk()),2&e){const n=s.ngIf,i=t.oxw(2),_=t.MAs(4);t.xp6(1),t.Q6J("ngTemplateOutlet",_)("ngTemplateOutletContext",t.VKq(2,D,10===n?i.menuItem.link:i.menuItem.linkTwo))}}function A(e,s){if(1&e&&(t.ynx(0),t.YNc(1,L,2,4,"ng-container",0),t.ALo(2,"async"),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,n.size$))}}function B(e,s){if(1&e&&(t.TgZ(0,"a",2)(1,"span",3),t._uU(2),t.qZA(),t.TgZ(3,"span",4),t._uU(4),t.qZA()()),2&e){const n=s.link,i=t.oxw();t.ekj("active",i.menuItem.selected),t.Q6J("routerLink",n)("routerLinkActive","router-link-active"),t.uIk("target",i.menuItem.target)("title",i.menuItem.title),t.xp6(2),t.Oqu(i.menuItem.title),t.xp6(2),t.Oqu(i.menuItem.titleTwo)}}function U(e,s){if(1&e&&(t.TgZ(0,"span",4),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.hij("",n.titleTwo,"(24-40)")}}function Z(e,s){if(1&e&&(t.ynx(0),t.TgZ(1,"li")(2,"a",2)(3,"span",3),t._uU(4),t.qZA(),t.YNc(5,U,2,1,"span",9),t.qZA()(),t.BQk()),2&e){const n=s.$implicit,i=t.oxw(2);t.xp6(2),t.ekj("active",n.selected),t.Q6J("routerLink",n.link)("routerLinkActive","router-link-active"),t.uIk("target",n.target)("title",n.title),t.xp6(2),t.Oqu(n.title),t.xp6(1),t.Q6J("ngIf",i.menuItem.titleTwo)}}function R(e,s){if(1&e&&(t.ynx(0),t.TgZ(1,"ul",6)(2,"div",7)(3,"span",3),t._uU(4),t.qZA(),t.TgZ(5,"span",4),t._uU(6),t.qZA()(),t.YNc(7,Z,6,8,"ng-container",8),t.qZA(),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("routerLinkActive","router-link-active"),t.xp6(3),t.Oqu(n.menuItem.title),t.xp6(2),t.Oqu(n.menuItem.titleTwo),t.xp6(1),t.Q6J("ngForOf",n.menuItem.children)}}let w=(()=>{class e{constructor(n){this.optionsStore=n,this.menuItem=null,this.size$=this.optionsStore.size$}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.i))},e.\u0275cmp=t.Xpm({type:e,selectors:[["","app-sidebar-item",""]],inputs:{menuItem:"menuItem"},attrs:O,decls:6,vars:4,consts:[[4,"ngIf"],["singleLinkWithLinkTwo",""],["id","a",3,"routerLink","routerLinkActive"],[1,"menu-title"],[1,"menu-titleTwo"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"routerLinkActive"],["id","a",1,"header"],[4,"ngFor","ngForOf"],["class","menu-titleTwo",4,"ngIf"]],template:function(n,i){1&n&&(t.YNc(0,P,4,7,"ng-container",0),t.YNc(1,b,6,8,"ng-container",0),t.YNc(2,A,3,3,"ng-container",0),t.YNc(3,B,5,8,"ng-template",null,1,t.W1O),t.YNc(5,R,8,4,"ng-container",0)),2&n&&(t.Q6J("ngIf",i.menuItem.link&&!i.menuItem.titleTwo&&!i.menuItem.linkTwo&&!i.menuItem.url&&!i.menuItem.children&&!i.menuItem.group),t.xp6(1),t.Q6J("ngIf",i.menuItem.link&&i.menuItem.titleTwo&&!i.menuItem.linkTwo&&!i.menuItem.url&&!i.menuItem.children&&!i.menuItem.group),t.xp6(1),t.Q6J("ngIf",i.menuItem.link&&i.menuItem.linkTwo&&!i.menuItem.url&&!i.menuItem.children&&!i.menuItem.group),t.xp6(3),t.Q6J("ngIf",i.menuItem.children))},directives:[c.O5,r.yS,r.Od,c.tP,c.sg],pipes:[c.Ov],styles:[".menu-title[_ngcontent-%COMP%]{flex:1 0 auto;text-align:left;color:var(--menu-text-color)}.menu-titleTwo[_ngcontent-%COMP%]{color:gray}#a[_ngcontent-%COMP%]{text-decoration:none;border-radius:var(--menu-item-border-radius);font-family:var(--menu-text-font-family);font-size:var(--menu-text-font-size);font-weight:var(--menu-text-font-weight);line-height:var(--menu-text-line-height);overflow:hidden;display:flex;align-items:center;padding:var(--menu-item-padding)}#a[_ngcontent-%COMP%]:hover{background-color:#2e3a59}#a[_ngcontent-%COMP%]:hover   .menu-title[_ngcontent-%COMP%], #a[_ngcontent-%COMP%]:hover   .menu-titleTwo[_ngcontent-%COMP%]{color:var(--menu-item-icon-hover-color)!important}#a.router-link-active[_ngcontent-%COMP%]{background-color:var(--menu-item-active-background-color)}#a.router-link-active[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%]{color:var(--menu-item-active-text-color)}ul[_ngcontent-%COMP%]{padding:0 0 0 20px}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;border-bottom:var(--menu-item-divider-width) var(--menu-item-divider-style) var(--menu-item-divider-color)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){border-top:var(--menu-item-divider-width) var(--menu-item-divider-style) var(--menu-item-divider-color)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.header[_ngcontent-%COMP%]{border:none;border-bottom:none!important;margin-left:-20px}ul.router-link-active[_ngcontent-%COMP%]{color:red}ul.router-link-active[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%]{color:var(--menu-item-active-text-color)}"]}),e})();function j(e,s){if(1&e&&(t.ynx(0),t._UZ(1,"li",2),t.BQk()),2&e){const n=s.$implicit;t.xp6(1),t.Q6J("menuItem",n)}}let W=(()=>{class e{constructor(){this.items=[]}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sidebar-menu"]],inputs:{items:"items"},decls:2,vars:1,consts:[[1,"menu-items"],[4,"ngFor","ngForOf"],["app-sidebar-item","",1,"menu-item",3,"menuItem"]],template:function(n,i){1&n&&(t.TgZ(0,"ul",0),t.YNc(1,j,2,1,"ng-container",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",i.items))},directives:[c.sg,w],styles:["[_nghost-%COMP%]    {display:block}.menu-items[_ngcontent-%COMP%]{padding:0;margin:0 -20px}.menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{border-bottom:var(--menu-item-divider-width) var(--menu-item-divider-style) var(--menu-item-divider-color)}.menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:first-child{border-top:none}.menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:last-child{border-bottom:none}"]}),e})();function k(e,s){1&e&&t._UZ(0,"app-header",4),2&e&&t.Q6J("menuItems",s.ngIf)}function Q(e,s){1&e&&t._UZ(0,"app-sidebar-menu",9),2&e&&t.Q6J("items",s.ngIf)}const K=function(){return["xs","is","sm","md"]},z=function(){return[]};function F(e,s){if(1&e&&(t.TgZ(0,"nb-sidebar",5),t.YNc(1,Q,1,1,"app-sidebar-menu",6),t.ALo(2,"async"),t._UZ(3,"div",7)(4,"app-sidebar-menu",8),t.qZA()),2&e){const n=s.ngIf,i=t.oxw();t.Q6J("responsive",!0)("collapsedBreakpoints",t.DdM(8,K))("compactedBreakpoints",t.DdM(9,z))("tag","leftSidebar"),t.xp6(1),t.Q6J("ngIf",t.lcZ(2,6,i.headerItems$)),t.xp6(3),t.Q6J("items",n)}}const J=[{path:"",component:(()=>{class e{constructor(n,i){this.sidebarService=n,this.headerService=i,this.headerItems$=this.headerService.getHeader$(),this.menuItems$=this.sidebarService.menuItems$}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.P),t.Y36(M))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-layout"]],decls:12,vars:6,consts:[["fixed",""],[1,"headerfix"],[3,"menuItems",4,"ngIf"],["class","menu-sidebar",3,"responsive","collapsedBreakpoints","compactedBreakpoints","tag",4,"ngIf"],[3,"menuItems"],[1,"menu-sidebar",3,"responsive","collapsedBreakpoints","compactedBreakpoints","tag"],["id","sidebar-header",3,"items",4,"ngIf"],["id","spacer-header"],[3,"items"],["id","sidebar-header",3,"items"]],template:function(n,i){1&n&&(t.TgZ(0,"nb-layout")(1,"nb-layout-header",0)(2,"div",1),t.YNc(3,k,1,1,"app-header",2),t.ALo(4,"async"),t._UZ(5,"app-wow-item-tooltip"),t.qZA()(),t.YNc(6,F,5,10,"nb-sidebar",3),t.ALo(7,"async"),t.TgZ(8,"nb-layout-column"),t._UZ(9,"router-outlet"),t.qZA(),t.TgZ(10,"nb-layout-footer",0),t._uU(11," FOOTER "),t.qZA()()),2&n&&(t.xp6(3),t.Q6J("ngIf",t.lcZ(4,2,i.headerItems$)),t.xp6(3),t.Q6J("ngIf",t.lcZ(7,4,i.menuItems$)))},directives:[l.Aqw,l.dmS,c.O5,p,C,l.nZR,W,l.dP_,r.lC,l.l88],pipes:[c.Ov],styles:["nb-layout .layout-container{max-width:1200px;width:100%;margin-left:auto;margin-right:auto}  nb-layout .main-container{padding-top:3rem}  nb-layout .main-container .scrollable{padding-top:0}.headerfix[_ngcontent-%COMP%]{max-width:1200px;width:100%;margin-left:auto;margin-right:auto}#spacer-header[_ngcontent-%COMP%]{height:0px;margin-left:-20px;margin-right:-20px}#sidebar-header[_ngcontent-%COMP%]{display:none}@media (max-width: 768px){#spacer-header[_ngcontent-%COMP%]{height:30px}#sidebar-header[_ngcontent-%COMP%]{display:block}}"]}),e})(),children:[{path:"",redirectTo:"home"},{path:"crafting",loadChildren:()=>o.e(642).then(o.bind(o,9642)).then(e=>e.CraftingModule)},{path:"collections",loadChildren:()=>Promise.all([o.e(592),o.e(72)]).then(o.bind(o,4072)).then(e=>e.CollectionsModule)},{path:"dungeons",loadChildren:()=>Promise.all([o.e(592),o.e(604)]).then(o.bind(o,604)).then(e=>e.InstanceModule)},{path:"home",loadChildren:()=>o.e(922).then(o.bind(o,9922)).then(e=>e.HomeModule)},{path:"pvp",loadChildren:()=>o.e(125).then(o.bind(o,8125)).then(e=>e.PvpModule)},{path:"raids",loadChildren:()=>Promise.all([o.e(592),o.e(604)]).then(o.bind(o,604)).then(e=>e.InstanceModule)},{path:"reputation",loadChildren:()=>Promise.all([o.e(592),o.e(72)]).then(o.bind(o,4072)).then(e=>e.CollectionsModule)},{path:"*",redirectTo:"home"}]}];let Y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[r.Bz.forChild(J)],r.Bz]}),e})(),N=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,Y,l.BW0,l.P1,l.j5J,l.KdK,l.T2N,h.m]]}),e})()},583:(x,I,o)=>{o.d(I,{L:()=>a});var c=o(4782),l=o(3900),h=o(5e3),r=o(520),t=o(5802);let a=(()=>{class d{constructor(f,p){this.http=f,this.globalStore=p}getCollectionsMeta$(f){return this.collectionsMeta$||(this.collectionsMeta$=this.http.get(`../../../assets/data/gen/${f}/collections/meta.json`).pipe((0,c.d)(1))),this.collectionsMeta$}getReputationMeta$(f){return this.reputationMeta$||(this.reputationMeta$=this.http.get(`../../../assets/data/gen/${f}/reputation/meta.json`).pipe((0,c.d)(1))),this.reputationMeta$}getCurrentCollection$(){if(!this.currentCollection$){const p=this.globalStore.state$.pipe((0,l.w)(m=>this.http.get(`../../../assets/data/gen/${m.addon}${m.route}.json`)));this.currentCollection$=p}return this.currentCollection$}getCurrentSubCollection$(f){const p=this.globalStore.getStoreValue();return this.http.get(`../../../assets/data/gen/${p.addon}${p.route}/${f}.json`)}}return d.\u0275fac=function(f){return new(f||d)(h.LFG(r.eN),h.LFG(t.P))},d.\u0275prov=h.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},7580:(x,I,o)=>{o.d(I,{t:()=>d});var c=o(4782),l=o(4004),h=o(3900),r=o(5e3),t=o(520),a=o(5802);let d=(()=>{class M{constructor(p,m){this.http=p,this.globalStore=m}getDungeonsMeta$(p){return this.dungeonsMeta$||(this.dungeonsMeta$=this.http.get(`../../../assets/data/gen/${p}/dungeons/meta.json`).pipe((0,c.d)(1),(0,l.U)(m=>m.sort((v,u)=>v.levelMin-u.levelMin)),(0,l.U)(m=>m.sort((v,u)=>v.phase-u.phase)))),this.dungeonsMeta$}getRaidsMeta$(p){return this.raidssMeta$||(this.raidssMeta$=this.http.get(`../../../assets/data/gen/${p}/raids/meta.json`).pipe((0,c.d)(1),(0,l.U)(m=>m.sort((v,u)=>v.levelMin-u.levelMin)),(0,l.U)(m=>m.sort((v,u)=>v.phase-u.phase)))),this.raidssMeta$}getCurrentInstance$(){if(!this.currentInstance$){const m=this.globalStore.state$.pipe((0,h.w)(v=>this.http.get(`../../../assets/data/gen/${v.addon}${v.route}.json`)));this.currentInstance$=m}return this.currentInstance$}getCurrentInstanceBoss$(p){const m=this.globalStore.getStoreValue();return this.http.get(`../../../assets/data/gen/${m.addon}${m.route}/${p}.json`)}}return M.\u0275fac=function(p){return new(p||M)(r.LFG(t.eN),r.LFG(a.P))},M.\u0275prov=r.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"}),M})()},6424:(x,I,o)=>{o.d(I,{i:()=>h});var c=o(8160),l=o(5e3);let h=(()=>{class r{constructor(){this.store=(0,c.MT)({name:"options"},(0,c.vl)({faction:"Alliance",difficulty:"Normal",size:10})),this.state$=this.store.pipe((0,c.Ys)(a=>a)),this.faction$=this.store.pipe((0,c.Ys)(a=>a.faction)),this.difficulty$=this.store.pipe((0,c.Ys)(a=>a.difficulty)),this.size$=this.store.pipe((0,c.Ys)(a=>a.size))}updateFaction(a){this.store.update(d=>Object.assign(Object.assign({},d),{faction:a}))}updateDifficulty(a){this.store.update(d=>Object.assign(Object.assign({},d),{difficulty:a}))}updateSize(a){this.store.update(d=>Object.assign(Object.assign({},d),{size:a}))}getSize(){return this.store.getValue().size}}return r.\u0275fac=function(a){return new(a||r)},r.\u0275prov=l.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},9106:(x,I,o)=>{o.d(I,{P:()=>p});var c=o(1135),l=o(9841),h=o(3900),r=o(9646),t=o(4004),a=o(5e3),d=o(5802),M=o(7580),f=o(583);let p=(()=>{class m{constructor(u,T,$){this.globalStore=u,this.instanceDataService=T,this.collectionsDataService=$,this.menuItemSubject=new c.X([]),this.menuItems$=this.setupMenuItems$()}getMenuItems$(){return this.menuItemSubject.asObservable()}getMenuItems(){return this.menuItemSubject.getValue()}setMenuItems(u){this.menuItemSubject.next(u)}setupMenuItems$(){return(0,l.a)([this.globalStore.route$,this.globalStore.addon$]).pipe((0,h.w)(([C,g])=>C.startsWith("/dungeon")?this.dungeonsMenu$(g):C.startsWith("/raids")?this.raidsMenu$(g):C.startsWith("/collections")?this.collectionsMenu$(g):C.startsWith("/reputation")?this.reputationMenu$(g):(0,r.of)([])))}dungeonsMenu$(u){return this.instanceDataService.getDungeonsMeta$(u).pipe((0,t.U)(C=>{const g=[];return C.forEach(O=>{g.push({title:O.name,link:`/dungeons/${O.link}`,titleTwo:`(${O.levelMin}-${O.levelMax})`})}),g}))}raidsMenu$(u){return this.instanceDataService.getRaidsMeta$(u).pipe((0,t.U)(C=>{const g=[];return["Naxx","TheEyeOfEternity","ObsidianSanctum","Ulduar","TrialOfTheCrusader","Onyxia","IcecrownCitadel","TheRubySanctum","VaultOfArchavon"].forEach(O=>{const P=C.filter(b=>b.link.startsWith(O));2===P.length&&g.push({title:P[0].name,link:`/raids/${P[0].link}`,linkTwo:`/raids/${P[1].link}`})}),g}))}collectionsMenu$(u){return this.collectionsDataService.getCollectionsMeta$(u).pipe((0,t.U)(C=>{const g=[];return C.forEach(O=>{g.push({title:O.name,link:`/collections/${O.link}`})}),g}))}reputationMenu$(u){return this.collectionsDataService.getReputationMeta$(u).pipe((0,t.U)(C=>{const g=[];return C.forEach(O=>{g.push({title:O.name,link:`/reputation/${O.link}`})}),g}))}}return m.\u0275fac=function(u){return new(u||m)(a.LFG(d.P),a.LFG(M.t),a.LFG(f.L))},m.\u0275prov=a.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},4466:(x,I,o)=>{o.d(I,{m:()=>t});var c=o(9808),l=o(8305),h=o(4343),r=o(5e3);let t=(()=>{class a{}return a.\u0275fac=function(M){return new(M||a)},a.\u0275mod=r.oAB({type:a}),a.\u0275inj=r.cJS({imports:[[c.ez,l.Bz,h.KdK,h.Qry,h.T2N]]}),a})()},4782:(x,I,o)=>{o.d(I,{d:()=>h});var c=o(4707),l=o(3099);function h(r,t,a){let d,M=!1;return r&&"object"==typeof r?({bufferSize:d=1/0,windowTime:t=1/0,refCount:M=!1,scheduler:a}=r):d=null!=r?r:1/0,(0,l.B)({connector:()=>new c.t(d,t,a),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:M})}}}]);