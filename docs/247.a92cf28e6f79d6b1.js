"use strict";(self.webpackChunkclassicloot=self.webpackChunkclassicloot||[]).push([[247],{9247:(w,T,o)=>{o.r(T),o.d(T,{CoreModule:()=>mt});var u=o(9808),s=o(4343),O=o(4466),m=o(210),f=o(4004),t=o(5e3),P=o(9106),x=o(1135),y=o(520);let v=(()=>{class e{constructor(n){this.http=n,this.headerItems$=new x.X([]),this.mainMenu=[{title:"Dungeons",link:"/dungeons",titleTwo:""},{title:"Raids",link:"/raids",titleTwo:""},{title:"Crafting",link:"/crafting",titleTwo:""},{title:"PVP",link:"/pvp",titleTwo:""},{title:"Reputations",link:"/reputation",titleTwo:""},{title:"Collections",link:"/collections",titleTwo:""}],this.headerItems$.next(this.mainMenu)}getHeader$(){return this.headerItems$.asObservable()}getMenu$(){return this.http.get("../../../wowdata/output/meta.json")}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(y.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var g=o(9841),d=o(3900),r=o(9646),p=o(262),b=o(5802),M=o(7580),h=o(583);let C=(()=>{class e{constructor(n,i,c){this.globalStore=n,this.instanceDataService=i,this.collectionsDataService=c,this.fragmentItems$=this.setupFragmentItems$()}setupFragmentItems$(){return(0,g.a)([this.globalStore.route$,this.globalStore.addon$]).pipe((0,d.w)(([l,_])=>["/collections","/crafting","/reputation","/raids","/dungeons"].includes(l)?(0,r.of)([]):l.startsWith("/crafting")?this.collectionsFragment$("/crafting/"):l.startsWith("/dungeons")?this.instanceFragments$("/dungeons/"):l.startsWith("/raids")?this.instanceFragments$("/raids/"):l.startsWith("/reputation")?this.collectionsFragment$("/reputation/"):l.startsWith("/collections")?this.collectionsFragment$("/collections/"):(0,r.of)([])))}collectionsFragment$(n){return this.collectionsDataService.getCurrentCollection$().pipe((0,f.U)(l=>{var _;const I=[];return null===(_=l.subLinks)||void 0===_||_.forEach(S=>{I.push({title:S.name,link:n+l.link,fragment:S.link})}),I}),(0,p.K)(l=>(404===l.error.statusCode||console.log("?!"),(0,r.of)([]))))}instanceFragments$(n){return this.instanceDataService.getCurrentInstance$().pipe((0,f.U)(l=>{var _;const I=[];return null===(_=l.bossLinks)||void 0===_||_.forEach(S=>{I.push({title:S.name,link:n+l.link,fragment:S.link})}),I}),(0,p.K)(l=>(404===l.error.statusCode||console.log("?!"),(0,r.of)([]))))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(b.P),t.LFG(M.t),t.LFG(h.L))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var $=o(3285);const B=["modalTemplate"];function W(e,a){if(1&e&&(t.TgZ(0,"a",11),t._UZ(1,"nb-icon",12),t.qZA()),2&e){const n=t.oxw();t.s9C("href",n.modalItem.link,t.LSH)}}const D=function(e){return{item:e}};function Z(e,a){if(1&e&&t.GkF(0,13),2&e){const n=a.ngIf;t.oxw();const i=t.MAs(12);t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(2,D,n))}}function U(e,a){if(1&e&&(t.TgZ(0,"div",22)(1,"span",23),t._uU(2),t.qZA(),t._UZ(3,"img",24),t.TgZ(4,"span"),t._uU(5),t.qZA()()),2&e){const n=a.$implicit;t.xp6(2),t.hij(" ",n.count,"x "),t.xp6(1),t.MGl("src","../../../../assets/icons/large/",n.icon,".jpg",t.LSH),t.xp6(1),t.Gre("q",n.quality,""),t.xp6(1),t.hij(" ",n.name," ")}}function A(e,a){if(1&e&&(t.TgZ(0,"div",17)(1,"div",18)(2,"div",19),t._uU(3),t.qZA()(),t.TgZ(4,"div",20),t.YNc(5,U,6,6,"div",21),t.qZA()()),2&e){const n=a.$implicit;t.xp6(3),t.hij(" ",n.name," "),t.xp6(2),t.Q6J("ngForOf",n.reagents)}}function F(e,a){if(1&e&&(t.ynx(0),t.TgZ(1,"div",15),t.YNc(2,A,6,2,"div",16),t.qZA(),t.BQk()),2&e){const n=t.oxw().item;t.xp6(2),t.Q6J("ngForOf",n.createdBy)}}function R(e,a){if(1&e&&t.YNc(0,F,3,1,"ng-container",14),2&e){const n=a.item;t.Q6J("ngIf",n.createdBy&&n.createdBy.length>0)}}let j=(()=>{class e{constructor(n,i){this.modalService=n,this.renderer=i,this.itemSize="large",this.modalItem=null;const c=this.modalService.itemSubject.asObservable();this.sub=c.subscribe(l=>{this.setupWindow(l)})}ngOnInit(){}ngOnDestroy(){this.sub.unsubscribe()}ngAfterViewInit(){}close(){this.modalService.setItem(null),this.unlistener()}doNothing(){}setupWindow(n){const i=document.getElementById("myModal");if(!i)return;i.style.display=n?"block":"none",this.unlistener&&this.unlistener(),this.unlistener=this.renderer.listen(i,"click",_=>{const I=_,S=document.getElementById("modalBase");if(!S)return;const E=S.getBoundingClientRect();(I.clientX<E.x||I.clientX>E.x+E.width||I.clientY<E.y||I.clientY>E.y+E.height)&&this.close()});const c=document.getElementById("modalTooltipIcon"),l=document.getElementById("modalTooltipContent");n&&c&&l&&(c.src=`../../../../assets/icons/${this.itemSize}/${n.icon}.jpg`,l.innerHTML=this.removeLinks(n.htmlTooltip),this.modalItem=n)}removeLinks(n){let i=n.replace("\\","").replace("<a","<span").replace("a>","span>");return i=i.replace("<a","<span").replace("a>","span>"),i=i.replace("<a","<span").replace("a>","span>"),i=i.replace("<a","<span").replace("a>","span>"),i}}return e.\u0275fac=function(n){return new(n||e)(t.Y36($.Z),t.Y36(t.Qsj))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-wow-item-modal"]],viewQuery:function(n,i){if(1&n&&t.Gf(B,5),2&n){let c;t.iGM(c=t.CRH())&&(i.modalTemplateRef=c.first)}},inputs:{itemSize:"itemSize"},decls:13,vars:2,consts:[["id","myModal",1,"modal","itemTooltip"],["id","modalBase",1,"modal-content",3,"click"],[1,"buttonBase"],["target","_blank","nbButton","",3,"href",4,"ngIf"],["nbButton","","status","danger",3,"click"],["icon","close-outline"],[1,"itemTooltipBox"],["id","modalTooltipIcon",1,"itemIconBig","border"],["id","modalTooltipContent",1,"border","wow"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],["createdBy",""],["target","_blank","nbButton","",3,"href"],["icon","external-link-outline"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],[1,"border","wow","createdBy","flexColumn"],["class","flexColumn",4,"ngFor","ngForOf"],[1,"flexColumn"],[1,"spellHeader"],[1,"spellName"],[1,"spellList"],["class","reagent",4,"ngFor","ngForOf"],[1,"reagent"],[1,"countSpan"],["loading","lazy",1,"itemIconSmall","border",3,"src"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return i.doNothing()}),t.TgZ(2,"div",2),t.YNc(3,W,2,1,"a",3),t.TgZ(4,"button",4),t.NdJ("click",function(){return i.close()}),t._UZ(5,"nb-icon",5),t.qZA()(),t.TgZ(6,"div",6),t._UZ(7,"img",7),t.TgZ(8,"div"),t._UZ(9,"div",8),t.YNc(10,Z,1,4,"ng-container",9),t.qZA()()()(),t.YNc(11,R,1,1,"ng-template",null,10,t.W1O)),2&n&&(t.xp6(3),t.Q6J("ngIf",i.modalItem),t.xp6(7),t.Q6J("ngIf",i.modalItem))},directives:[u.O5,s.DPz,s.fMN,u.tP,u.sg],styles:[".itemTooltipBox[_ngcontent-%COMP%]{display:flex;gap:5px;max-width:400px;width:100%}.itemIcon[_ngcontent-%COMP%]{width:40px;height:40px}.itemIconBig[_ngcontent-%COMP%]{width:60px;height:60px}.itemName[_ngcontent-%COMP%]{font-size:larger;padding-left:.5rem}.itemName[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.createdBy[_ngcontent-%COMP%]{margin-top:1px}.flexColumn[_ngcontent-%COMP%]{display:flex;gap:1px;flex-direction:column}.flexRow[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center}.spellList[_ngcontent-%COMP%]{margin-left:0rem}.reagent[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:row}.itemIconSmall[_ngcontent-%COMP%]{width:20px;height:20px;margin-left:3px;margin-right:3px}.countSpan[_ngcontent-%COMP%]{min-width:2rem;text-align:end}.modal[_ngcontent-%COMP%]{display:none;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:#0006}.modal-content[_ngcontent-%COMP%]{margin:95px auto;display:flex;flex-direction:column;align-items:flex-end;justify-content:center;gap:5px;max-width:400px}.buttonBase[_ngcontent-%COMP%], .buttonBase[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:10px}"]}),e})();const K=function(){return["home"]};let N=(()=>{class e{constructor(n){this.nbSidebarService=n,this.menuItems=[]}ngOnInit(){}toggleSidebar(){this.nbSidebarService.toggle(!1,"leftSidebar")}toggleFragmentbar(){this.nbSidebarService.toggle(!1,"rightSidebar")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(s.lzT))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-header"]],inputs:{menuItems:"menuItems"},decls:11,vars:3,consts:[[1,"outer"],[1,"section","left"],["nbButton","","ghost","",3,"click"],["icon","menu-2"],[1,"logo","text",3,"routerLink"],[1,"section","middle"],[3,"items"],[1,"section","right"],["icon","more-vertical-outline"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return i.toggleSidebar()}),t._UZ(3,"nb-icon",3),t.qZA(),t.TgZ(4,"a",4),t._uU(5," Classic Loot "),t.qZA()(),t.TgZ(6,"div",5),t._UZ(7,"nb-menu",6),t.qZA(),t.TgZ(8,"div",7)(9,"button",2),t.NdJ("click",function(){return i.toggleFragmentbar()}),t._UZ(10,"nb-icon",8),t.qZA()()()),2&n&&(t.xp6(4),t.Q6J("routerLink",t.DdM(2,K)),t.xp6(3),t.Q6J("items",i.menuItems))},directives:[s.DPz,s.fMN,m.yS,s.mBz],styles:[".logo.text[_ngcontent-%COMP%]{font-weight:700;font-size:x-large;text-decoration:none}.outer[_ngcontent-%COMP%]{display:flex;flex:1 0 auto;flex-direction:row;align-items:center}.section[_ngcontent-%COMP%]{display:flex;padding:.875rem .5rem;flex-direction:row}.section.left[_ngcontent-%COMP%]{width:16rem;align-items:center;gap:.5rem}.section.left[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:none;color:#fff;padding-top:0;padding-bottom:0}.section.left[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{height:35px;width:35px}@media (max-width: 992px){.section.left[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:inline}}.section.middle[_ngcontent-%COMP%]{flex:1;align-items:center;margin:0 -.5rem}@media (max-width: 768px){.section.middle[_ngcontent-%COMP%]   nb-menu[_ngcontent-%COMP%]{display:none}}.section.right[_ngcontent-%COMP%]{width:16rem;align-items:center;justify-content:flex-end;gap:.5rem}.section.right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:none;color:#fff;padding-top:0;padding-bottom:0;justify-self:flex-end}.section.right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{height:35px;width:35px}@media (max-width: 1200px){.section.right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:inline}}.outer[_ngcontent-%COMP%]     nb-menu{flex:1}.outer[_ngcontent-%COMP%]     nb-menu .menu-items{display:flex;justify-content:flex-start}.outer[_ngcontent-%COMP%]     nb-menu .menu-items .menu-item{border:none}.outer[_ngcontent-%COMP%]     nb-menu .menu-items .menu-item a{display:block}.outer[_ngcontent-%COMP%]     nb-menu .menu-items .menu-item a:hover, .outer[_ngcontent-%COMP%]     nb-menu .menu-items .menu-item a.active, .outer[_ngcontent-%COMP%]     nb-menu .menu-items .menu-item a:focus{outline:none!important}"]}),e})();var Y=o(4198);const J=["itemTooltipBase"],Q=["itemTooltipIcon"],z=["itemTooltipContent"],G=function(e){return{item:e}};function k(e,a){if(1&e&&t.GkF(0,6),2&e){const n=a.ngIf;t.oxw();const i=t.MAs(8);t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(2,G,n))}}function H(e,a){if(1&e&&(t.TgZ(0,"div",15)(1,"span",16),t._uU(2),t.qZA(),t._UZ(3,"img",17),t.TgZ(4,"span"),t._uU(5),t.qZA()()),2&e){const n=a.$implicit;t.xp6(2),t.hij(" ",n.count,"x "),t.xp6(1),t.MGl("src","../../../../assets/icons/large/",n.icon,".jpg",t.LSH),t.xp6(1),t.Gre("q",n.quality,""),t.xp6(1),t.hij(" ",n.name," ")}}function X(e,a){if(1&e&&(t.TgZ(0,"div",10)(1,"div",11)(2,"div",12),t._uU(3),t.qZA()(),t.TgZ(4,"div",13),t.YNc(5,H,6,6,"div",14),t.qZA()()),2&e){const n=a.$implicit;t.xp6(3),t.hij(" ",n.name," "),t.xp6(2),t.Q6J("ngForOf",n.reagents)}}function V(e,a){if(1&e&&(t.ynx(0),t.TgZ(1,"div",8),t.YNc(2,X,6,2,"div",9),t.qZA(),t.BQk()),2&e){const n=t.oxw().item;t.xp6(2),t.Q6J("ngForOf",n.createdBy)}}function q(e,a){if(1&e&&t.YNc(0,V,3,1,"ng-container",7),2&e){const n=a.item;t.Q6J("ngIf",n.createdBy&&n.createdBy.length>0)}}let tt=(()=>{class e{constructor(n){this.tooltipService=n,this.itemSize="large",this.wowItem$=this.tooltipService.getWowItem$(),this.mouseEvent$=this.tooltipService.getMouseEvent$(),this.sub=(0,g.a)([this.wowItem$,this.mouseEvent$]).subscribe(([i,c])=>{const l=document.getElementById("itemTooltipBase"),_=document.getElementById("itemTooltipIcon"),I=document.getElementById("itemTooltipContent");if(i&&l&&_&&I){_.src=`../../../../assets/icons/${this.itemSize}/${i.icon}.jpg`,I.innerHTML=i.htmlTooltip,l.style.display=c.bShown?"block":"none";const S=l.getBoundingClientRect(),ut=c.x+5,gt=c.y-Math.max(S.height/2,75);l.style.left=ut+"px",l.style.top=gt+"px"}})}ngOnInit(){}ngOnDestroy(){this.sub.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(Y.a))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-wow-item-tooltip"]],viewQuery:function(n,i){if(1&n&&(t.Gf(J,5),t.Gf(Q,5),t.Gf(z,5)),2&n){let c;t.iGM(c=t.CRH())&&(i.itemTooltipBase=c.first),t.iGM(c=t.CRH())&&(i.itemTooltipIcon=c.first),t.iGM(c=t.CRH())&&(i.itemTooltipContent=c.first)}},inputs:{itemSize:"itemSize"},decls:9,vars:3,consts:[["id","itemTooltipBase",1,"itemTooltip"],[1,"itemTooltipBox"],["id","itemTooltipIcon",1,"itemIconBig","border"],["id","itemTooltipContent",1,"border","wow"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],["createdBy",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],[1,"border","wow","createdBy","flexColumn"],["class","flexColumn",4,"ngFor","ngForOf"],[1,"flexColumn"],[1,"spellHeader"],[1,"spellName"],[1,"spellList"],["class","reagent",4,"ngFor","ngForOf"],[1,"reagent"],[1,"countSpan"],["loading","lazy",1,"itemIconSmall","border",3,"src"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"div"),t._UZ(4,"div",3),t.YNc(5,k,1,4,"ng-container",4),t.ALo(6,"async"),t.qZA()()(),t.YNc(7,q,1,1,"ng-template",null,5,t.W1O)),2&n&&(t.xp6(5),t.Q6J("ngIf",t.lcZ(6,1,i.wowItem$)))},directives:[u.O5,u.tP,u.sg],pipes:[u.Ov],styles:["#itemTooltipBase[_ngcontent-%COMP%]{position:absolute;z-index:50;top:100px;left:0px;display:none}.itemTooltipBox[_ngcontent-%COMP%]{display:flex;gap:5px;max-width:400px;width:100%}.itemIcon[_ngcontent-%COMP%]{width:40px;height:40px}.itemIconBig[_ngcontent-%COMP%]{width:60px;height:60px}.itemName[_ngcontent-%COMP%]{font-size:larger;padding-left:.5rem}.itemName[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.createdBy[_ngcontent-%COMP%]{margin-top:1px}.flexColumn[_ngcontent-%COMP%]{display:flex;gap:1px;flex-direction:column}.flexRow[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center}.spellList[_ngcontent-%COMP%]{margin-left:0rem}.reagent[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:row}.itemIconSmall[_ngcontent-%COMP%]{width:20px;height:20px;margin-left:3px;margin-right:3px}.countSpan[_ngcontent-%COMP%]{min-width:2rem;text-align:end}"]}),e})();function et(e,a){1&e&&(t.TgZ(0,"p"),t._uU(1,"Overview"),t.qZA())}function nt(e,a){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"li")(2,"a",3),t.NdJ("click",function(){const l=t.CHM(n).$implicit;return t.oxw().scrollTo(l.fragment)}),t._uU(3),t.qZA()(),t.BQk()}if(2&e){const n=a.$implicit;t.xp6(3),t.hij(" ",n.title," ")}}let ot=(()=>{class e{constructor(n,i,c,l){this.viewportScroller=n,this.location=i,this.router=c,this.activatedRoute=l,this.items=[]}ngOnInit(){}scrollTo(n){this.viewportScroller.scrollToAnchor(n);const i=this.router.createUrlTree([],{relativeTo:this.activatedRoute,fragment:n}).toString();this.location.go(i)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.EM),t.Y36(u.Ye),t.Y36(m.F0),t.Y36(m.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sidebar-fragment"]],inputs:{items:"items"},decls:3,vars:2,consts:[[4,"ngIf"],[1,"menu-items"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(n,i){1&n&&(t.YNc(0,et,2,0,"p",0),t.TgZ(1,"ul",1),t.YNc(2,nt,4,1,"ng-container",2),t.qZA()),2&n&&(t.Q6J("ngIf",i.items.length>0),t.xp6(2),t.Q6J("ngForOf",i.items))},directives:[u.O5,u.sg],styles:["ul[_ngcontent-%COMP%]{list-style:none;margin-left:0;padding-left:20px}li[_ngcontent-%COMP%]{margin-bottom:.8rem}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;text-decoration:none;color:var(--menu-text-color)}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--menu-item-icon-hover-color)}"]}),e})();const it=function(){return["xs","is","sm","md"]},L=function(){return[]};function at(e,a){if(1&e&&(t.TgZ(0,"nb-sidebar",6),t._UZ(1,"nb-menu",7),t.qZA()),2&e){const n=a.ngIf;t.Q6J("responsive",!0)("collapsedBreakpoints",t.DdM(5,it))("compactedBreakpoints",t.DdM(6,L))("tag","leftSidebar"),t.xp6(1),t.Q6J("items",n)}}function rt(e,a){1&e&&t._UZ(0,"app-sidebar-fragment",8),2&e&&t.Q6J("items",a.ngIf)}const st=function(){return["xs","is","sm","md","lg"]},lt=[{path:"",component:(()=>{class e{constructor(n,i,c){this.sidebarService=n,this.headerService=i,this.fragmentService=c,this.headerItems$=this.headerService.getHeader$(),this.menuItems$=this.sidebarService.menuItems$,this.fragmentItems$=this.fragmentService.fragmentItems$,this.newMenu$=this.headerService.getMenu$().pipe((0,f.U)(l=>l.links.map(_=>({title:_.name,children:_.links.map(I=>({title:I.name,link:`${_.name}/${I.link}`}))}))))}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(P.P),t.Y36(v),t.Y36(C))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-layout"]],decls:15,vars:14,consts:[["fixed",""],[1,"headerfix"],[3,"menuItems"],["class","menu-sidebar",3,"responsive","collapsedBreakpoints","compactedBreakpoints","tag",4,"ngIf"],["right","",1,"fragment-sidebar",3,"tag","responsive","collapsedBreakpoints","compactedBreakpoints"],[3,"items",4,"ngIf"],[1,"menu-sidebar",3,"responsive","collapsedBreakpoints","compactedBreakpoints","tag"],["autoCollapse","true",3,"items"],[3,"items"]],template:function(n,i){1&n&&(t._UZ(0,"app-wow-item-modal"),t.TgZ(1,"nb-layout")(2,"nb-layout-header",0)(3,"div",1),t._UZ(4,"app-header",2)(5,"app-wow-item-tooltip"),t.qZA()(),t.YNc(6,at,2,7,"nb-sidebar",3),t.ALo(7,"async"),t.TgZ(8,"nb-layout-column"),t._UZ(9,"router-outlet"),t.qZA(),t.TgZ(10,"nb-sidebar",4),t.YNc(11,rt,1,1,"app-sidebar-fragment",5),t.ALo(12,"async"),t.qZA(),t.TgZ(13,"nb-layout-footer",0),t._uU(14," FOOTER "),t.qZA()()),2&n&&(t.xp6(4),t.Q6J("menuItems",t.DdM(11,L)),t.xp6(2),t.Q6J("ngIf",t.lcZ(7,7,i.newMenu$)),t.xp6(4),t.Q6J("tag","rightSidebar")("responsive",!0)("collapsedBreakpoints",t.DdM(12,st))("compactedBreakpoints",t.DdM(13,L)),t.xp6(1),t.Q6J("ngIf",t.lcZ(12,9,i.fragmentItems$)))},directives:[j,s.Aqw,s.dmS,N,tt,u.O5,s.nZR,s.mBz,s.dP_,m.lC,ot,s.l88],pipes:[u.Ov],styles:["nb-layout .layout-container{max-width:1380px;width:100%;margin-left:auto;margin-right:auto}  nb-layout .main-container{padding-top:3rem}  nb-layout .main-container .scrollable{padding-top:0}.headerfix[_ngcontent-%COMP%]{max-width:1200px;width:100%;margin-left:auto;margin-right:auto}#spacer-header[_ngcontent-%COMP%]{height:0px;margin-left:-20px;margin-right:-20px}#sidebar-header[_ngcontent-%COMP%]{display:none}@media (max-width: 768px){#spacer-header[_ngcontent-%COMP%]{height:30px}#sidebar-header[_ngcontent-%COMP%]{display:block}}.fragment-sidebar[_ngcontent-%COMP%]{background-color:var(--layout-background-color);max-width:180px}"]}),e})(),children:[{path:"",redirectTo:"home"},{path:"Crafting",loadChildren:()=>o.e(194).then(o.bind(o,6194)).then(e=>e.CollectionsxModule)},{path:"Collections",loadChildren:()=>o.e(194).then(o.bind(o,6194)).then(e=>e.CollectionsxModule)},{path:"Dungeons",loadChildren:()=>o.e(194).then(o.bind(o,6194)).then(e=>e.CollectionsxModule)},{path:"home",loadChildren:()=>o.e(922).then(o.bind(o,9922)).then(e=>e.HomeModule)},{path:"Pvp",loadChildren:()=>o.e(194).then(o.bind(o,6194)).then(e=>e.CollectionsxModule)},{path:"Raids",loadChildren:()=>o.e(194).then(o.bind(o,6194)).then(e=>e.CollectionsxModule)},{path:"Reputation",loadChildren:()=>o.e(194).then(o.bind(o,6194)).then(e=>e.CollectionsxModule)},{path:"*",redirectTo:"home"}]}];let ct=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[m.Bz.forChild(lt)],m.Bz]}),e})(),mt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.ez,ct,s.BW0,s.P1,s.j5J,s.KdK,s.T2N,O.m,s.wXm.forChild()]]}),e})()},583:(w,T,o)=>{o.d(T,{L:()=>P});var u=o(4782),s=o(3900),O=o(9646),m=o(5e3),f=o(520),t=o(5802);let P=(()=>{class x{constructor(v,g){this.http=v,this.globalStore=g}getCollectionsMeta$(v){return this.collectionsMeta$||(this.collectionsMeta$=this.http.get(`../../../assets/data/gen/${v}/collections/meta.json`).pipe((0,u.d)(1))),this.collectionsMeta$}getReputationMeta$(v){return this.reputationMeta$||(this.reputationMeta$=this.http.get(`../../../assets/data/gen/${v}/reputation/meta.json`).pipe((0,u.d)(1))),this.reputationMeta$}getCraftingMeta$(v){return this.craftingMeta$||(this.craftingMeta$=this.http.get(`../../../assets/data/gen/${v}/crafting/meta.json`).pipe((0,u.d)(1))),this.craftingMeta$}getCurrentCollection$(){if(!this.currentCollection$){const g=this.globalStore.state$.pipe((0,s.w)(d=>{if("/collections"===d.route||"/crafting"===d.route||"/reputations"===d.route)return(0,O.of)({name:"ERROR"});const r=d.route.split("#")[0];return this.http.get(`../../../assets/data/gen/${d.addon}${r}.json`)}));this.currentCollection$=g}return this.currentCollection$}getCurrentSubCollection$(v){const g=this.globalStore.getStoreValue(),d=g.route.split("#")[0];return this.http.get(`../../../assets/data/gen/${g.addon}${d}/${v}.json`)}}return x.\u0275fac=function(v){return new(v||x)(m.LFG(f.eN),m.LFG(t.P))},x.\u0275prov=m.Yz7({token:x,factory:x.\u0275fac,providedIn:"root"}),x})()},7580:(w,T,o)=>{o.d(T,{t:()=>x});var u=o(4782),s=o(4004),O=o(3900),m=o(9646),f=o(5e3),t=o(520),P=o(5802);let x=(()=>{class y{constructor(g,d){this.http=g,this.globalStore=d}getDungeonsMeta$(g){return this.dungeonsMeta$||(this.dungeonsMeta$=this.http.get(`../../../assets/data/gen/${g}/dungeons/meta.json`).pipe((0,u.d)(1),(0,s.U)(d=>d.sort((r,p)=>r.levelMin-p.levelMin)),(0,s.U)(d=>d.sort((r,p)=>r.phase-p.phase)))),this.dungeonsMeta$}getRaidsMeta$(g){return this.raidssMeta$||(this.raidssMeta$=this.http.get(`../../../assets/data/gen/${g}/raids/meta.json`).pipe((0,u.d)(1),(0,s.U)(d=>d.sort((r,p)=>r.levelMin-p.levelMin)),(0,s.U)(d=>d.sort((r,p)=>r.phase-p.phase)))),this.raidssMeta$}getCurrentInstance$(){if(!this.currentInstance$){const d=this.globalStore.state$.pipe((0,O.w)(r=>{if("/raids"===r.route||"/dungeons"===r.route)return(0,m.of)({name:"ERROR",link:"",phase:-666,size:40});if(r.route.includes("#")){const p=r.route.slice(0,r.route.indexOf("#"));return this.http.get(`../../../assets/data/gen/${r.addon}${p}.json`)}return this.http.get(`../../../assets/data/gen/${r.addon}${r.route}.json`)}));this.currentInstance$=d}return this.currentInstance$}getCurrentInstanceBoss$(g){const d=this.globalStore.getStoreValue();let r;if(d.route.includes("#")){const p=d.route.slice(0,d.route.indexOf("#"));r=this.http.get(`../../../assets/data/gen/${d.addon}${p}/${g}.json`)}else r=this.http.get(`../../../assets/data/gen/${d.addon}${d.route}/${g}.json`);return r}}return y.\u0275fac=function(g){return new(g||y)(f.LFG(t.eN),f.LFG(P.P))},y.\u0275prov=f.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()},3285:(w,T,o)=>{o.d(T,{Z:()=>O});var u=o(1135),s=o(5e3);let O=(()=>{class m{constructor(){this.itemSubject=new u.X(null)}setItem(t){this.itemSubject.next(t)}}return m.\u0275fac=function(t){return new(t||m)},m.\u0275prov=s.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},9106:(w,T,o)=>{o.d(T,{P:()=>v});var u=o(1135),s=o(9841),O=o(3900),m=o(9646),f=o(4004),t=o(5e3),P=o(5802),x=o(7580),y=o(583);let v=(()=>{class g{constructor(r,p,b){this.globalStore=r,this.instanceDataService=p,this.collectionsDataService=b,this.menuItemSubject=new u.X([]),this.menuItems$=this.setupMenuItems$()}getMenuItems$(){return this.menuItemSubject.asObservable()}getMenuItems(){return this.menuItemSubject.getValue()}setMenuItems(r){this.menuItemSubject.next(r)}setupMenuItems$(){return(0,s.a)([this.globalStore.route$,this.globalStore.addon$]).pipe((0,O.w)(([M,h])=>M.startsWith("/dungeon")?this.dungeonsMenu$(h):M.startsWith("/raids")?this.raidsMenu$(h):M.startsWith("/collections")?this.collectionsMenu$(h):M.startsWith("/reputation")?this.reputationMenu$(h):M.startsWith("/crafting")?this.craftingMenu$(h):(0,m.of)([])))}dungeonsMenu$(r){return this.instanceDataService.getDungeonsMeta$(r).pipe((0,f.U)(M=>{const h=[];return M.forEach(C=>{h.push({title:C.name,link:`/dungeons/${C.link}`,titleTwo:`(${C.levelMin}-${C.levelMax})`})}),h}))}raidsMenu$(r){return this.instanceDataService.getRaidsMeta$(r).pipe((0,f.U)(M=>{const h=[];return["Naxx","TheEyeOfEternity","ObsidianSanctum","Ulduar","TrialOfTheCrusader","Onyxia","IcecrownCitadel","TheRubySanctum","VaultOfArchavon"].forEach(C=>{const $=M.filter(B=>B.link.startsWith(C));2===$.length&&h.push({title:$[0].name,link:`/raids/${$[0].link}`,linkTwo:`/raids/${$[1].link}`})}),h}))}collectionsMenu$(r){return this.collectionsDataService.getCollectionsMeta$(r).pipe((0,f.U)(M=>{const h=[];return M.forEach(C=>{h.push({title:C.name,link:`/collections/${C.link}`})}),h}),(0,f.U)(M=>[...M.filter(B=>B.title.startsWith("Tier")).sort(function h(B,W){const D=Number(B.title.split(" ")[1]),Z=Number(W.title.split(" ")[1]);return D>Z?1:D<Z?-1:0}),...M.filter(B=>!B.title.startsWith("Tier"))]))}craftingMenu$(r){return this.collectionsDataService.getCraftingMeta$(r).pipe((0,f.U)(M=>{const h=[];return M.forEach(C=>{h.push({title:C.name,link:`/crafting/${C.link}`})}),h}))}reputationMenu$(r){return this.collectionsDataService.getReputationMeta$(r).pipe((0,f.U)(M=>{const h=[];return M.forEach(C=>{h.push({title:C.name,link:`/reputation/${C.link}`})}),h}))}}return g.\u0275fac=function(r){return new(r||g)(t.LFG(P.P),t.LFG(x.t),t.LFG(y.L))},g.\u0275prov=t.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},4466:(w,T,o)=>{o.d(T,{m:()=>f});var u=o(9808),s=o(210),O=o(4343),m=o(5e3);let f=(()=>{class t{}return t.\u0275fac=function(x){return new(x||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[u.ez,s.Bz,O.KdK,O.Qry,O.T2N,O.IIj]]}),t})()},4782:(w,T,o)=>{o.d(T,{d:()=>O});var u=o(4707),s=o(3099);function O(m,f,t){let P,x=!1;return m&&"object"==typeof m?({bufferSize:P=1/0,windowTime:f=1/0,refCount:x=!1,scheduler:t}=m):P=null!=m?m:1/0,(0,s.B)({connector:()=>new u.t(P,f,t),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:x})}}}]);