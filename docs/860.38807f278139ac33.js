"use strict";(self.webpackChunkclassicloot=self.webpackChunkclassicloot||[]).push([[860],{860:(Z,x,o)=>{o.r(x),o.d(x,{CoreModule:()=>Pt});var s=o(9808),m=o(4343),C=o(4466),l=o(210),t=o(5e3),c=o(9106),M=o(1135);let O=(()=>{class e{constructor(){this.headerItems$=new M.X([]),this.mainMenu=[{title:"Dungeons",link:"/dungeons",titleTwo:""},{title:"Raids",link:"/raids",titleTwo:""},{title:"Crafting",link:"/crafting",titleTwo:""},{title:"PVP",link:"/pvp",titleTwo:""},{title:"Reputations",link:"/reputation",titleTwo:""},{title:"Collections",link:"/collections",titleTwo:""}],this.headerItems$.next(this.mainMenu)}getHeader$(){return this.headerItems$.asObservable()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var $=o(9841),I=o(3900),d=o(9646),g=o(4004),a=o(262),f=o(5802),E=o(7580),_=o(583);let h=(()=>{class e{constructor(n,i,u){this.globalStore=n,this.instanceDataService=i,this.collectionsDataService=u,this.fragmentItems$=this.setupFragmentItems$()}setupFragmentItems$(){return(0,$.a)([this.globalStore.route$,this.globalStore.addon$]).pipe((0,I.w)(([p,P])=>["/collections","/crafting","/reputation","/raids","/dungeons"].includes(p)?(0,d.of)([]):p.startsWith("/crafting")?this.collectionsFragment$("/crafting/"):p.startsWith("/dungeons")?this.instanceFragments$("/dungeons/"):p.startsWith("/raids")?this.instanceFragments$("/raids/"):p.startsWith("/reputation")?this.collectionsFragment$("/reputation/"):p.startsWith("/collections")?this.collectionsFragment$("/collections/"):(0,d.of)([])))}collectionsFragment$(n){return this.collectionsDataService.getCurrentCollection$().pipe((0,g.U)(p=>{var P;const y=[];return null===(P=p.subLinks)||void 0===P||P.forEach(S=>{y.push({title:S.name,link:n+p.link,fragment:S.link})}),y}),(0,a.K)(p=>(404===p.error.statusCode||console.log("?!"),(0,d.of)([]))))}instanceFragments$(n){return this.instanceDataService.getCurrentInstance$().pipe((0,g.U)(p=>{var P;const y=[];return null===(P=p.bossLinks)||void 0===P||P.forEach(S=>{y.push({title:S.name,link:n+p.link,fragment:S.link})}),y}),(0,a.K)(p=>(404===p.error.statusCode||console.log("?!"),(0,d.of)([]))))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(f.P),t.LFG(E.t),t.LFG(_.L))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var v=o(3285);const T=["modalTemplate"];function w(e,r){if(1&e&&(t.TgZ(0,"a",11),t._UZ(1,"nb-icon",12),t.qZA()),2&e){const n=t.oxw();t.s9C("href",n.modalItem.link,t.LSH)}}const L=function(e){return{item:e}};function B(e,r){if(1&e&&t.GkF(0,13),2&e){const n=r.ngIf;t.oxw();const i=t.MAs(12);t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(2,L,n))}}function A(e,r){if(1&e&&(t.TgZ(0,"div",22)(1,"span",23),t._uU(2),t.qZA(),t._UZ(3,"img",24),t.TgZ(4,"span"),t._uU(5),t.qZA()()),2&e){const n=r.$implicit;t.xp6(2),t.hij(" ",n.count,"x "),t.xp6(1),t.MGl("src","../../../../assets/icons/large/",n.icon,".jpg",t.LSH),t.xp6(1),t.Gre("q",n.quality,""),t.xp6(1),t.hij(" ",n.name," ")}}function U(e,r){if(1&e&&(t.TgZ(0,"div",17)(1,"div",18)(2,"div",19),t._uU(3),t.qZA()(),t.TgZ(4,"div",20),t.YNc(5,A,6,6,"div",21),t.qZA()()),2&e){const n=r.$implicit;t.xp6(3),t.hij(" ",n.name," "),t.xp6(2),t.Q6J("ngForOf",n.reagents)}}function F(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"div",15),t.YNc(2,U,6,2,"div",16),t.qZA(),t.BQk()),2&e){const n=t.oxw().item;t.xp6(2),t.Q6J("ngForOf",n.createdBy)}}function W(e,r){if(1&e&&t.YNc(0,F,3,1,"ng-container",14),2&e){const n=r.item;t.Q6J("ngIf",n.createdBy&&n.createdBy.length>0)}}let k=(()=>{class e{constructor(n,i){this.modalService=n,this.renderer=i,this.itemSize="large",this.modalItem=null;const u=this.modalService.itemSubject.asObservable();this.sub=u.subscribe(p=>{this.setupWindow(p)})}ngOnInit(){}ngOnDestroy(){this.sub.unsubscribe()}ngAfterViewInit(){}close(){this.modalService.setItem(null),this.unlistener()}doNothing(){}setupWindow(n){const i=document.getElementById("myModal");if(!i)return;i.style.display=n?"block":"none",this.unlistener&&this.unlistener(),this.unlistener=this.renderer.listen(i,"click",P=>{const y=P,S=document.getElementById("modalBase");if(!S)return;const b=S.getBoundingClientRect();(y.clientX<b.x||y.clientX>b.x+b.width||y.clientY<b.y||y.clientY>b.y+b.height)&&this.close()});const u=document.getElementById("modalTooltipIcon"),p=document.getElementById("modalTooltipContent");n&&u&&p&&(u.src=`../../../../assets/icons/${this.itemSize}/${n.icon}.jpg`,p.innerHTML=this.removeLinks(n.htmlTooltip),this.modalItem=n)}removeLinks(n){let i=n.replace("\\","").replace("<a","<span").replace("a>","span>");return i=i.replace("<a","<span").replace("a>","span>"),i=i.replace("<a","<span").replace("a>","span>"),i=i.replace("<a","<span").replace("a>","span>"),i}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(v.Z),t.Y36(t.Qsj))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-wow-item-modal"]],viewQuery:function(n,i){if(1&n&&t.Gf(T,5),2&n){let u;t.iGM(u=t.CRH())&&(i.modalTemplateRef=u.first)}},inputs:{itemSize:"itemSize"},decls:13,vars:2,consts:[["id","myModal",1,"modal","itemTooltip"],["id","modalBase",1,"modal-content",3,"click"],[1,"buttonBase"],["target","_blank","nbButton","",3,"href",4,"ngIf"],["nbButton","","status","danger",3,"click"],["icon","close-outline"],[1,"itemTooltipBox"],["id","modalTooltipIcon",1,"itemIconBig","border"],["id","modalTooltipContent",1,"border","wow"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],["createdBy",""],["target","_blank","nbButton","",3,"href"],["icon","external-link-outline"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],[1,"border","wow","createdBy","flexColumn"],["class","flexColumn",4,"ngFor","ngForOf"],[1,"flexColumn"],[1,"spellHeader"],[1,"spellName"],[1,"spellList"],["class","reagent",4,"ngFor","ngForOf"],[1,"reagent"],[1,"countSpan"],["loading","lazy",1,"itemIconSmall","border",3,"src"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return i.doNothing()}),t.TgZ(2,"div",2),t.YNc(3,w,2,1,"a",3),t.TgZ(4,"button",4),t.NdJ("click",function(){return i.close()}),t._UZ(5,"nb-icon",5),t.qZA()(),t.TgZ(6,"div",6),t._UZ(7,"img",7),t.TgZ(8,"div"),t._UZ(9,"div",8),t.YNc(10,B,1,4,"ng-container",9),t.qZA()()()(),t.YNc(11,W,1,1,"ng-template",null,10,t.W1O)),2&n&&(t.xp6(3),t.Q6J("ngIf",i.modalItem),t.xp6(7),t.Q6J("ngIf",i.modalItem))},directives:[s.O5,m.DPz,m.fMN,s.tP,s.sg],styles:[".itemTooltipBox[_ngcontent-%COMP%]{display:flex;gap:5px;max-width:400px;width:100%}.itemIcon[_ngcontent-%COMP%]{width:40px;height:40px}.itemIconBig[_ngcontent-%COMP%]{width:60px;height:60px}.itemName[_ngcontent-%COMP%]{font-size:larger;padding-left:.5rem}.itemName[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.createdBy[_ngcontent-%COMP%]{margin-top:1px}.flexColumn[_ngcontent-%COMP%]{display:flex;gap:1px;flex-direction:column}.flexRow[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center}.spellList[_ngcontent-%COMP%]{margin-left:0rem}.reagent[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:row}.itemIconSmall[_ngcontent-%COMP%]{width:20px;height:20px;margin-left:3px;margin-right:3px}.countSpan[_ngcontent-%COMP%]{min-width:2rem;text-align:end}.modal[_ngcontent-%COMP%]{display:none;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:#0006}.modal-content[_ngcontent-%COMP%]{margin:95px auto;display:flex;flex-direction:column;align-items:flex-end;justify-content:center;gap:5px;max-width:400px}.buttonBase[_ngcontent-%COMP%], .buttonBase[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:10px}"]}),e})();const j=function(){return["home"]};let R=(()=>{class e{constructor(n){this.nbSidebarService=n,this.menuItems=[]}ngOnInit(){}toggleSidebar(){this.nbSidebarService.toggle(!1,"leftSidebar")}toggleFragmentbar(){this.nbSidebarService.toggle(!1,"rightSidebar")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(m.lzT))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-header"]],inputs:{menuItems:"menuItems"},decls:11,vars:3,consts:[[1,"outer"],[1,"section","left"],["nbButton","","ghost","",3,"click"],["icon","menu-2"],[1,"logo","text",3,"routerLink"],[1,"section","middle"],[3,"items"],[1,"section","right"],["icon","more-vertical-outline"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return i.toggleSidebar()}),t._UZ(3,"nb-icon",3),t.qZA(),t.TgZ(4,"a",4),t._uU(5," Classic Loot "),t.qZA()(),t.TgZ(6,"div",5),t._UZ(7,"nb-menu",6),t.qZA(),t.TgZ(8,"div",7)(9,"button",2),t.NdJ("click",function(){return i.toggleFragmentbar()}),t._UZ(10,"nb-icon",8),t.qZA()()()),2&n&&(t.xp6(4),t.Q6J("routerLink",t.DdM(2,j)),t.xp6(3),t.Q6J("items",i.menuItems))},directives:[m.DPz,m.fMN,l.yS,m.mBz],styles:[".logo.text[_ngcontent-%COMP%]{font-weight:700;font-size:x-large;text-decoration:none}.outer[_ngcontent-%COMP%]{display:flex;flex:1 0 auto;flex-direction:row;align-items:center}.section[_ngcontent-%COMP%]{display:flex;padding:.875rem .5rem;flex-direction:row}.section.left[_ngcontent-%COMP%]{width:16rem;align-items:center;gap:.5rem}.section.left[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:none;color:#fff;padding-top:0;padding-bottom:0}.section.left[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{height:35px;width:35px}@media (max-width: 992px){.section.left[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:inline}}.section.middle[_ngcontent-%COMP%]{flex:1;align-items:center;margin:0 -.5rem}@media (max-width: 768px){.section.middle[_ngcontent-%COMP%]   nb-menu[_ngcontent-%COMP%]{display:none}}.section.right[_ngcontent-%COMP%]{width:16rem;align-items:center;justify-content:flex-end;gap:.5rem}.section.right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:none;color:#fff;padding-top:0;padding-bottom:0;justify-self:flex-end}.section.right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{height:35px;width:35px}@media (max-width: 1200px){.section.right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:inline}}.outer[_ngcontent-%COMP%]     nb-menu{flex:1}.outer[_ngcontent-%COMP%]     nb-menu .menu-items{display:flex;justify-content:flex-start}.outer[_ngcontent-%COMP%]     nb-menu .menu-items .menu-item{border:none}.outer[_ngcontent-%COMP%]     nb-menu .menu-items .menu-item a{display:block}.outer[_ngcontent-%COMP%]     nb-menu .menu-items .menu-item a:hover, .outer[_ngcontent-%COMP%]     nb-menu .menu-items .menu-item a.active, .outer[_ngcontent-%COMP%]     nb-menu .menu-items .menu-item a:focus{outline:none!important}"]}),e})();var Q=o(4198);const Y=["itemTooltipBase"],J=["itemTooltipIcon"],N=["itemTooltipContent"],z=function(e){return{item:e}};function K(e,r){if(1&e&&t.GkF(0,6),2&e){const n=r.ngIf;t.oxw();const i=t.MAs(8);t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(2,z,n))}}function G(e,r){if(1&e&&(t.TgZ(0,"div",15)(1,"span",16),t._uU(2),t.qZA(),t._UZ(3,"img",17),t.TgZ(4,"span"),t._uU(5),t.qZA()()),2&e){const n=r.$implicit;t.xp6(2),t.hij(" ",n.count,"x "),t.xp6(1),t.MGl("src","../../../../assets/icons/large/",n.icon,".jpg",t.LSH),t.xp6(1),t.Gre("q",n.quality,""),t.xp6(1),t.hij(" ",n.name," ")}}function H(e,r){if(1&e&&(t.TgZ(0,"div",10)(1,"div",11)(2,"div",12),t._uU(3),t.qZA()(),t.TgZ(4,"div",13),t.YNc(5,G,6,6,"div",14),t.qZA()()),2&e){const n=r.$implicit;t.xp6(3),t.hij(" ",n.name," "),t.xp6(2),t.Q6J("ngForOf",n.reagents)}}function X(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"div",8),t.YNc(2,H,6,2,"div",9),t.qZA(),t.BQk()),2&e){const n=t.oxw().item;t.xp6(2),t.Q6J("ngForOf",n.createdBy)}}function V(e,r){if(1&e&&t.YNc(0,X,3,1,"ng-container",7),2&e){const n=r.item;t.Q6J("ngIf",n.createdBy&&n.createdBy.length>0)}}let q=(()=>{class e{constructor(n){this.tooltipService=n,this.itemSize="large",this.wowItem$=this.tooltipService.getWowItem$(),this.mouseEvent$=this.tooltipService.getMouseEvent$(),this.sub=(0,$.a)([this.wowItem$,this.mouseEvent$]).subscribe(([i,u])=>{const p=document.getElementById("itemTooltipBase"),P=document.getElementById("itemTooltipIcon"),y=document.getElementById("itemTooltipContent");if(i&&p&&P&&y){P.src=`../../../../assets/icons/${this.itemSize}/${i.icon}.jpg`,y.innerHTML=i.htmlTooltip,p.style.display=u.bShown?"block":"none";const S=p.getBoundingClientRect(),yt=u.x+5,bt=u.y-Math.max(S.height/2,75);p.style.left=yt+"px",p.style.top=bt+"px"}})}ngOnInit(){}ngOnDestroy(){this.sub.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(Q.a))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-wow-item-tooltip"]],viewQuery:function(n,i){if(1&n&&(t.Gf(Y,5),t.Gf(J,5),t.Gf(N,5)),2&n){let u;t.iGM(u=t.CRH())&&(i.itemTooltipBase=u.first),t.iGM(u=t.CRH())&&(i.itemTooltipIcon=u.first),t.iGM(u=t.CRH())&&(i.itemTooltipContent=u.first)}},inputs:{itemSize:"itemSize"},decls:9,vars:3,consts:[["id","itemTooltipBase",1,"itemTooltip"],[1,"itemTooltipBox"],["id","itemTooltipIcon",1,"itemIconBig","border"],["id","itemTooltipContent",1,"border","wow"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],["createdBy",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],[1,"border","wow","createdBy","flexColumn"],["class","flexColumn",4,"ngFor","ngForOf"],[1,"flexColumn"],[1,"spellHeader"],[1,"spellName"],[1,"spellList"],["class","reagent",4,"ngFor","ngForOf"],[1,"reagent"],[1,"countSpan"],["loading","lazy",1,"itemIconSmall","border",3,"src"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"div"),t._UZ(4,"div",3),t.YNc(5,K,1,4,"ng-container",4),t.ALo(6,"async"),t.qZA()()(),t.YNc(7,V,1,1,"ng-template",null,5,t.W1O)),2&n&&(t.xp6(5),t.Q6J("ngIf",t.lcZ(6,1,i.wowItem$)))},directives:[s.O5,s.tP,s.sg],pipes:[s.Ov],styles:["#itemTooltipBase[_ngcontent-%COMP%]{position:absolute;z-index:50;top:100px;left:0px;display:none}.itemTooltipBox[_ngcontent-%COMP%]{display:flex;gap:5px;max-width:400px;width:100%}.itemIcon[_ngcontent-%COMP%]{width:40px;height:40px}.itemIconBig[_ngcontent-%COMP%]{width:60px;height:60px}.itemName[_ngcontent-%COMP%]{font-size:larger;padding-left:.5rem}.itemName[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.createdBy[_ngcontent-%COMP%]{margin-top:1px}.flexColumn[_ngcontent-%COMP%]{display:flex;gap:1px;flex-direction:column}.flexRow[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center}.spellList[_ngcontent-%COMP%]{margin-left:0rem}.reagent[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:row}.itemIconSmall[_ngcontent-%COMP%]{width:20px;height:20px;margin-left:3px;margin-right:3px}.countSpan[_ngcontent-%COMP%]{min-width:2rem;text-align:end}"]}),e})();var tt=o(6424);const et=["app-sidebar-item",""];function nt(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"a",2)(2,"span",3),t._uU(3),t.qZA()(),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.ekj("active",n.menuItem.selected),t.Q6J("routerLink",n.menuItem.link)("routerLinkActive","router-link-active"),t.uIk("target",n.menuItem.target)("title",n.menuItem.title),t.xp6(2),t.Oqu(n.menuItem.title)}}function ot(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"a",2)(2,"span",3),t._uU(3),t.qZA(),t.TgZ(4,"span",4),t._uU(5),t.qZA()(),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.ekj("active",n.menuItem.selected),t.Q6J("routerLink",n.menuItem.link)("routerLinkActive","router-link-active"),t.uIk("target",n.menuItem.target)("title",n.menuItem.title),t.xp6(2),t.Oqu(n.menuItem.title),t.xp6(2),t.Oqu(n.menuItem.titleTwo)}}const it=function(e){return{link:e}};function rt(e,r){if(1&e&&(t.ynx(0),t.GkF(1,5),t.BQk()),2&e){const n=r.ngIf,i=t.oxw(2),u=t.MAs(4);t.xp6(1),t.Q6J("ngTemplateOutlet",u)("ngTemplateOutletContext",t.VKq(2,it,10===n?i.menuItem.link:i.menuItem.linkTwo))}}function at(e,r){if(1&e&&(t.ynx(0),t.YNc(1,rt,2,4,"ng-container",0),t.ALo(2,"async"),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,n.size$))}}function st(e,r){if(1&e&&(t.TgZ(0,"a",2)(1,"span",3),t._uU(2),t.qZA(),t.TgZ(3,"span",4),t._uU(4),t.qZA()()),2&e){const n=r.link,i=t.oxw();t.ekj("active",i.menuItem.selected),t.Q6J("routerLink",n)("routerLinkActive","router-link-active"),t.uIk("target",i.menuItem.target)("title",i.menuItem.title),t.xp6(2),t.Oqu(i.menuItem.title),t.xp6(2),t.Oqu(i.menuItem.titleTwo)}}function lt(e,r){if(1&e&&(t.TgZ(0,"span",4),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.hij("",n.titleTwo,"(24-40)")}}function ct(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"li")(2,"a",2)(3,"span",3),t._uU(4),t.qZA(),t.YNc(5,lt,2,1,"span",9),t.qZA()(),t.BQk()),2&e){const n=r.$implicit,i=t.oxw(2);t.xp6(2),t.ekj("active",n.selected),t.Q6J("routerLink",n.link)("routerLinkActive","router-link-active"),t.uIk("target",n.target)("title",n.title),t.xp6(2),t.Oqu(n.title),t.xp6(1),t.Q6J("ngIf",i.menuItem.titleTwo)}}function mt(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"ul",6)(2,"div",7)(3,"span",3),t._uU(4),t.qZA(),t.TgZ(5,"span",4),t._uU(6),t.qZA()(),t.YNc(7,ct,6,8,"ng-container",8),t.qZA(),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("routerLinkActive","router-link-active"),t.xp6(3),t.Oqu(n.menuItem.title),t.xp6(2),t.Oqu(n.menuItem.titleTwo),t.xp6(1),t.Q6J("ngForOf",n.menuItem.children)}}let ut=(()=>{class e{constructor(n){this.optionsStore=n,this.menuItem=null,this.size$=this.optionsStore.size$}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(tt.i))},e.\u0275cmp=t.Xpm({type:e,selectors:[["","app-sidebar-item",""]],inputs:{menuItem:"menuItem"},attrs:et,decls:6,vars:4,consts:[[4,"ngIf"],["singleLinkWithLinkTwo",""],["id","a",3,"routerLink","routerLinkActive"],[1,"menu-title"],[1,"menu-titleTwo"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"routerLinkActive"],["id","a",1,"header"],[4,"ngFor","ngForOf"],["class","menu-titleTwo",4,"ngIf"]],template:function(n,i){1&n&&(t.YNc(0,nt,4,7,"ng-container",0),t.YNc(1,ot,6,8,"ng-container",0),t.YNc(2,at,3,3,"ng-container",0),t.YNc(3,st,5,8,"ng-template",null,1,t.W1O),t.YNc(5,mt,8,4,"ng-container",0)),2&n&&(t.Q6J("ngIf",i.menuItem.link&&!i.menuItem.titleTwo&&!i.menuItem.linkTwo&&!i.menuItem.url&&!i.menuItem.children&&!i.menuItem.group),t.xp6(1),t.Q6J("ngIf",i.menuItem.link&&i.menuItem.titleTwo&&!i.menuItem.linkTwo&&!i.menuItem.url&&!i.menuItem.children&&!i.menuItem.group),t.xp6(1),t.Q6J("ngIf",i.menuItem.link&&i.menuItem.linkTwo&&!i.menuItem.url&&!i.menuItem.children&&!i.menuItem.group),t.xp6(3),t.Q6J("ngIf",i.menuItem.children))},directives:[s.O5,l.yS,l.Od,s.tP,s.sg],pipes:[s.Ov],styles:[".menu-title[_ngcontent-%COMP%]{flex:1 0 auto;text-align:left;color:var(--menu-text-color)}.menu-titleTwo[_ngcontent-%COMP%]{color:gray}#a[_ngcontent-%COMP%]{text-decoration:none;border-radius:var(--menu-item-border-radius);font-family:var(--menu-text-font-family);font-size:var(--menu-text-font-size);font-weight:var(--menu-text-font-weight);line-height:var(--menu-text-line-height);overflow:hidden;display:flex;align-items:center;padding:var(--menu-item-padding)}#a[_ngcontent-%COMP%]:hover{background-color:#2e3a59}#a[_ngcontent-%COMP%]:hover   .menu-title[_ngcontent-%COMP%], #a[_ngcontent-%COMP%]:hover   .menu-titleTwo[_ngcontent-%COMP%]{color:var(--menu-item-icon-hover-color)!important}#a.router-link-active[_ngcontent-%COMP%]{background-color:var(--menu-item-active-background-color)}#a.router-link-active[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%]{color:var(--menu-item-active-text-color)}ul[_ngcontent-%COMP%]{padding:0 0 0 20px}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;border-bottom:var(--menu-item-divider-width) var(--menu-item-divider-style) var(--menu-item-divider-color)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2){border-top:var(--menu-item-divider-width) var(--menu-item-divider-style) var(--menu-item-divider-color)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.header[_ngcontent-%COMP%]{border:none;border-bottom:none!important;margin-left:-20px}ul.router-link-active[_ngcontent-%COMP%]{color:red}ul.router-link-active[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%]{color:var(--menu-item-active-text-color)}"]}),e})();function dt(e,r){if(1&e&&(t.ynx(0),t._UZ(1,"li",2),t.BQk()),2&e){const n=r.$implicit;t.xp6(1),t.Q6J("menuItem",n)}}let gt=(()=>{class e{constructor(){this.items=[]}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sidebar-menu"]],inputs:{items:"items"},decls:2,vars:1,consts:[[1,"menu-items"],[4,"ngFor","ngForOf"],["app-sidebar-item","",1,"menu-item",3,"menuItem"]],template:function(n,i){1&n&&(t.TgZ(0,"ul",0),t.YNc(1,dt,2,1,"ng-container",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",i.items))},directives:[s.sg,ut],styles:["[_nghost-%COMP%]    {display:block}.menu-items[_ngcontent-%COMP%]{padding:0;margin:0 -20px}.menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{border-bottom:var(--menu-item-divider-width) var(--menu-item-divider-style) var(--menu-item-divider-color)}.menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:first-child{border-top:none}.menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:last-child{border-bottom:none}"]}),e})();function pt(e,r){1&e&&(t.TgZ(0,"p"),t._uU(1,"Overview"),t.qZA())}function ft(e,r){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"li")(2,"a",3),t.NdJ("click",function(){const p=t.CHM(n).$implicit;return t.oxw().scrollTo(p.fragment)}),t._uU(3),t.qZA()(),t.BQk()}if(2&e){const n=r.$implicit;t.xp6(3),t.hij(" ",n.title," ")}}let ht=(()=>{class e{constructor(n,i,u,p){this.viewportScroller=n,this.location=i,this.router=u,this.activatedRoute=p,this.items=[]}ngOnInit(){}scrollTo(n){this.viewportScroller.scrollToAnchor(n);const i=this.router.createUrlTree([],{relativeTo:this.activatedRoute,fragment:n}).toString();this.location.go(i)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.EM),t.Y36(s.Ye),t.Y36(l.F0),t.Y36(l.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sidebar-fragment"]],inputs:{items:"items"},decls:3,vars:2,consts:[[4,"ngIf"],[1,"menu-items"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(n,i){1&n&&(t.YNc(0,pt,2,0,"p",0),t.TgZ(1,"ul",1),t.YNc(2,ft,4,1,"ng-container",2),t.qZA()),2&n&&(t.Q6J("ngIf",i.items.length>0),t.xp6(2),t.Q6J("ngForOf",i.items))},directives:[s.O5,s.sg],styles:["ul[_ngcontent-%COMP%]{list-style:none;margin-left:0;padding-left:20px}li[_ngcontent-%COMP%]{margin-bottom:.8rem}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;text-decoration:none;color:var(--menu-text-color)}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--menu-item-icon-hover-color)}"]}),e})();function _t(e,r){1&e&&t._UZ(0,"app-header",6),2&e&&t.Q6J("menuItems",r.ngIf)}function Mt(e,r){1&e&&t._UZ(0,"app-sidebar-menu",11),2&e&&t.Q6J("items",r.ngIf)}const vt=function(){return["xs","is","sm","md"]},D=function(){return[]};function Ct(e,r){if(1&e&&(t.TgZ(0,"nb-sidebar",7),t.YNc(1,Mt,1,1,"app-sidebar-menu",8),t.ALo(2,"async"),t._UZ(3,"div",9)(4,"app-sidebar-menu",10),t.qZA()),2&e){const n=r.ngIf,i=t.oxw();t.Q6J("responsive",!0)("collapsedBreakpoints",t.DdM(8,vt))("compactedBreakpoints",t.DdM(9,D))("tag","leftSidebar"),t.xp6(1),t.Q6J("ngIf",t.lcZ(2,6,i.headerItems$)),t.xp6(3),t.Q6J("items",n)}}function It(e,r){1&e&&t._UZ(0,"app-sidebar-fragment",10),2&e&&t.Q6J("items",r.ngIf)}const Ot=function(){return["xs","is","sm","md","lg"]},xt=[{path:"",component:(()=>{class e{constructor(n,i,u){this.sidebarService=n,this.headerService=i,this.fragmentService=u,this.headerItems$=this.headerService.getHeader$(),this.menuItems$=this.sidebarService.menuItems$,this.fragmentItems$=this.fragmentService.fragmentItems$}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.P),t.Y36(O),t.Y36(h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-layout"]],decls:16,vars:15,consts:[["fixed",""],[1,"headerfix"],[3,"menuItems",4,"ngIf"],["class","menu-sidebar",3,"responsive","collapsedBreakpoints","compactedBreakpoints","tag",4,"ngIf"],["right","",1,"fragment-sidebar",3,"tag","responsive","collapsedBreakpoints","compactedBreakpoints"],[3,"items",4,"ngIf"],[3,"menuItems"],[1,"menu-sidebar",3,"responsive","collapsedBreakpoints","compactedBreakpoints","tag"],["id","sidebar-header",3,"items",4,"ngIf"],["id","spacer-header"],[3,"items"],["id","sidebar-header",3,"items"]],template:function(n,i){1&n&&(t._UZ(0,"app-wow-item-modal"),t.TgZ(1,"nb-layout")(2,"nb-layout-header",0)(3,"div",1),t.YNc(4,_t,1,1,"app-header",2),t.ALo(5,"async"),t._UZ(6,"app-wow-item-tooltip"),t.qZA()(),t.YNc(7,Ct,5,10,"nb-sidebar",3),t.ALo(8,"async"),t.TgZ(9,"nb-layout-column"),t._UZ(10,"router-outlet"),t.qZA(),t.TgZ(11,"nb-sidebar",4),t.YNc(12,It,1,1,"app-sidebar-fragment",5),t.ALo(13,"async"),t.qZA(),t.TgZ(14,"nb-layout-footer",0),t._uU(15," FOOTER "),t.qZA()()),2&n&&(t.xp6(4),t.Q6J("ngIf",t.lcZ(5,7,i.headerItems$)),t.xp6(3),t.Q6J("ngIf",t.lcZ(8,9,i.menuItems$)),t.xp6(4),t.Q6J("tag","rightSidebar")("responsive",!0)("collapsedBreakpoints",t.DdM(13,Ot))("compactedBreakpoints",t.DdM(14,D)),t.xp6(1),t.Q6J("ngIf",t.lcZ(13,11,i.fragmentItems$)))},directives:[k,m.Aqw,m.dmS,s.O5,R,q,m.nZR,gt,m.dP_,l.lC,ht,m.l88],pipes:[s.Ov],styles:["nb-layout .layout-container{max-width:1380px;width:100%;margin-left:auto;margin-right:auto}  nb-layout .main-container{padding-top:3rem}  nb-layout .main-container .scrollable{padding-top:0}.headerfix[_ngcontent-%COMP%]{max-width:1200px;width:100%;margin-left:auto;margin-right:auto}#spacer-header[_ngcontent-%COMP%]{height:0px;margin-left:-20px;margin-right:-20px}#sidebar-header[_ngcontent-%COMP%]{display:none}@media (max-width: 768px){#spacer-header[_ngcontent-%COMP%]{height:30px}#sidebar-header[_ngcontent-%COMP%]{display:block}}.fragment-sidebar[_ngcontent-%COMP%]{background-color:var(--layout-background-color);max-width:180px}"]}),e})(),children:[{path:"",redirectTo:"home"},{path:"crafting",loadChildren:()=>Promise.all([o.e(295),o.e(77)]).then(o.bind(o,8077)).then(e=>e.CollectionsModule)},{path:"collections",loadChildren:()=>Promise.all([o.e(295),o.e(77)]).then(o.bind(o,8077)).then(e=>e.CollectionsModule)},{path:"dungeons",loadChildren:()=>Promise.all([o.e(295),o.e(604)]).then(o.bind(o,604)).then(e=>e.InstanceModule)},{path:"home",loadChildren:()=>o.e(922).then(o.bind(o,9922)).then(e=>e.HomeModule)},{path:"pvp",loadChildren:()=>Promise.all([o.e(295),o.e(77)]).then(o.bind(o,8077)).then(e=>e.CollectionsModule)},{path:"raids",loadChildren:()=>Promise.all([o.e(295),o.e(604)]).then(o.bind(o,604)).then(e=>e.InstanceModule)},{path:"reputation",loadChildren:()=>Promise.all([o.e(295),o.e(77)]).then(o.bind(o,8077)).then(e=>e.CollectionsModule)},{path:"*",redirectTo:"home"}]}];let Tt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(xt)],l.Bz]}),e})(),Pt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.ez,Tt,m.BW0,m.P1,m.j5J,m.KdK,m.T2N,C.m,m.wXm.forChild()]]}),e})()},583:(Z,x,o)=>{o.d(x,{L:()=>M});var s=o(4782),m=o(3900),C=o(9646),l=o(5e3),t=o(520),c=o(5802);let M=(()=>{class O{constructor(I,d){this.http=I,this.globalStore=d}getCollectionsMeta$(I){return this.collectionsMeta$||(this.collectionsMeta$=this.http.get(`../../../assets/data/gen/${I}/collections/meta.json`).pipe((0,s.d)(1))),this.collectionsMeta$}getReputationMeta$(I){return this.reputationMeta$||(this.reputationMeta$=this.http.get(`../../../assets/data/gen/${I}/reputation/meta.json`).pipe((0,s.d)(1))),this.reputationMeta$}getCraftingMeta$(I){return this.craftingMeta$||(this.craftingMeta$=this.http.get(`../../../assets/data/gen/${I}/crafting/meta.json`).pipe((0,s.d)(1))),this.craftingMeta$}getCurrentCollection$(){if(!this.currentCollection$){const d=this.globalStore.state$.pipe((0,m.w)(g=>{if("/collections"===g.route||"/crafting"===g.route||"/reputations"===g.route)return(0,C.of)({name:"ERROR"});const a=g.route.split("#")[0];return this.http.get(`../../../assets/data/gen/${g.addon}${a}.json`)}));this.currentCollection$=d}return this.currentCollection$}getCurrentSubCollection$(I){const d=this.globalStore.getStoreValue(),g=d.route.split("#")[0];return this.http.get(`../../../assets/data/gen/${d.addon}${g}/${I}.json`)}}return O.\u0275fac=function(I){return new(I||O)(l.LFG(t.eN),l.LFG(c.P))},O.\u0275prov=l.Yz7({token:O,factory:O.\u0275fac,providedIn:"root"}),O})()},7580:(Z,x,o)=>{o.d(x,{t:()=>O});var s=o(4782),m=o(4004),C=o(3900),l=o(9646),t=o(5e3),c=o(520),M=o(5802);let O=(()=>{class ${constructor(d,g){this.http=d,this.globalStore=g}getDungeonsMeta$(d){return this.dungeonsMeta$||(this.dungeonsMeta$=this.http.get(`../../../assets/data/gen/${d}/dungeons/meta.json`).pipe((0,s.d)(1),(0,m.U)(g=>g.sort((a,f)=>a.levelMin-f.levelMin)),(0,m.U)(g=>g.sort((a,f)=>a.phase-f.phase)))),this.dungeonsMeta$}getRaidsMeta$(d){return this.raidssMeta$||(this.raidssMeta$=this.http.get(`../../../assets/data/gen/${d}/raids/meta.json`).pipe((0,s.d)(1),(0,m.U)(g=>g.sort((a,f)=>a.levelMin-f.levelMin)),(0,m.U)(g=>g.sort((a,f)=>a.phase-f.phase)))),this.raidssMeta$}getCurrentInstance$(){if(!this.currentInstance$){const g=this.globalStore.state$.pipe((0,C.w)(a=>{if("/raids"===a.route||"/dungeons"===a.route)return(0,l.of)({name:"ERROR",link:"",phase:-666,size:40});if(a.route.includes("#")){const f=a.route.slice(0,a.route.indexOf("#"));return this.http.get(`../../../assets/data/gen/${a.addon}${f}.json`)}return this.http.get(`../../../assets/data/gen/${a.addon}${a.route}.json`)}));this.currentInstance$=g}return this.currentInstance$}getCurrentInstanceBoss$(d){const g=this.globalStore.getStoreValue();let a;if(g.route.includes("#")){const f=g.route.slice(0,g.route.indexOf("#"));a=this.http.get(`../../../assets/data/gen/${g.addon}${f}/${d}.json`)}else a=this.http.get(`../../../assets/data/gen/${g.addon}${g.route}/${d}.json`);return a}}return $.\u0275fac=function(d){return new(d||$)(t.LFG(c.eN),t.LFG(M.P))},$.\u0275prov=t.Yz7({token:$,factory:$.\u0275fac,providedIn:"root"}),$})()},3285:(Z,x,o)=>{o.d(x,{Z:()=>C});var s=o(1135),m=o(5e3);let C=(()=>{class l{constructor(){this.itemSubject=new s.X(null)}setItem(c){this.itemSubject.next(c)}}return l.\u0275fac=function(c){return new(c||l)},l.\u0275prov=m.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},6424:(Z,x,o)=>{o.d(x,{i:()=>C});var s=o(8160),m=o(5e3);let C=(()=>{class l{constructor(){this.store=(0,s.MT)({name:"options"},(0,s.vl)({faction:"Alliance",difficulty:"Normal",size:10})),this.state$=this.store.pipe((0,s.Ys)(c=>c)),this.faction$=this.store.pipe((0,s.Ys)(c=>c.faction)),this.difficulty$=this.store.pipe((0,s.Ys)(c=>c.difficulty)),this.size$=this.store.pipe((0,s.Ys)(c=>c.size))}updateFaction(c){this.store.update(M=>Object.assign(Object.assign({},M),{faction:c}))}updateDifficulty(c){this.store.update(M=>Object.assign(Object.assign({},M),{difficulty:c}))}updateSize(c){this.store.update(M=>Object.assign(Object.assign({},M),{size:c}))}getSize(){return this.store.getValue().size}}return l.\u0275fac=function(c){return new(c||l)},l.\u0275prov=m.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},9106:(Z,x,o)=>{o.d(x,{P:()=>I});var s=o(1135),m=o(9841),C=o(3900),l=o(9646),t=o(4004),c=o(5e3),M=o(5802),O=o(7580),$=o(583);let I=(()=>{class d{constructor(a,f,E){this.globalStore=a,this.instanceDataService=f,this.collectionsDataService=E,this.menuItemSubject=new s.X([]),this.menuItems$=this.setupMenuItems$()}getMenuItems$(){return this.menuItemSubject.asObservable()}getMenuItems(){return this.menuItemSubject.getValue()}setMenuItems(a){this.menuItemSubject.next(a)}setupMenuItems$(){return(0,m.a)([this.globalStore.route$,this.globalStore.addon$]).pipe((0,C.w)(([_,h])=>_.startsWith("/dungeon")?this.dungeonsMenu$(h):_.startsWith("/raids")?this.raidsMenu$(h):_.startsWith("/collections")?this.collectionsMenu$(h):_.startsWith("/reputation")?this.reputationMenu$(h):_.startsWith("/crafting")?this.craftingMenu$(h):(0,l.of)([])))}dungeonsMenu$(a){return this.instanceDataService.getDungeonsMeta$(a).pipe((0,t.U)(_=>{const h=[];return _.forEach(v=>{h.push({title:v.name,link:`/dungeons/${v.link}`,titleTwo:`(${v.levelMin}-${v.levelMax})`})}),h}))}raidsMenu$(a){return this.instanceDataService.getRaidsMeta$(a).pipe((0,t.U)(_=>{const h=[];return["Naxx","TheEyeOfEternity","ObsidianSanctum","Ulduar","TrialOfTheCrusader","Onyxia","IcecrownCitadel","TheRubySanctum","VaultOfArchavon"].forEach(v=>{const T=_.filter(w=>w.link.startsWith(v));2===T.length&&h.push({title:T[0].name,link:`/raids/${T[0].link}`,linkTwo:`/raids/${T[1].link}`})}),h}))}collectionsMenu$(a){return this.collectionsDataService.getCollectionsMeta$(a).pipe((0,t.U)(_=>{const h=[];return _.forEach(v=>{h.push({title:v.name,link:`/collections/${v.link}`})}),h}),(0,t.U)(_=>[..._.filter(w=>w.title.startsWith("Tier")).sort(function h(w,L){const B=Number(w.title.split(" ")[1]),A=Number(L.title.split(" ")[1]);return B>A?1:B<A?-1:0}),..._.filter(w=>!w.title.startsWith("Tier"))]))}craftingMenu$(a){return this.collectionsDataService.getCraftingMeta$(a).pipe((0,t.U)(_=>{const h=[];return _.forEach(v=>{h.push({title:v.name,link:`/crafting/${v.link}`})}),h}))}reputationMenu$(a){return this.collectionsDataService.getReputationMeta$(a).pipe((0,t.U)(_=>{const h=[];return _.forEach(v=>{h.push({title:v.name,link:`/reputation/${v.link}`})}),h}))}}return d.\u0275fac=function(a){return new(a||d)(c.LFG(M.P),c.LFG(O.t),c.LFG($.L))},d.\u0275prov=c.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},4466:(Z,x,o)=>{o.d(x,{m:()=>t});var s=o(9808),m=o(210),C=o(4343),l=o(5e3);let t=(()=>{class c{}return c.\u0275fac=function(O){return new(O||c)},c.\u0275mod=l.oAB({type:c}),c.\u0275inj=l.cJS({imports:[[s.ez,m.Bz,C.KdK,C.Qry,C.T2N,C.IIj]]}),c})()},4782:(Z,x,o)=>{o.d(x,{d:()=>C});var s=o(4707),m=o(3099);function C(l,t,c){let M,O=!1;return l&&"object"==typeof l?({bufferSize:M=1/0,windowTime:t=1/0,refCount:O=!1,scheduler:c}=l):M=null!=l?l:1/0,(0,m.B)({connector:()=>new s.t(M,t,c),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:O})}}}]);