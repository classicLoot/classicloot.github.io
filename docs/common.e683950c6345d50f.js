"use strict";(self.webpackChunkclassicloot=self.webpackChunkclassicloot||[]).push([[592],{5260:(h,a,t)=>{function r(e){switch(+e){case 1:return"Head";case 2:return"Neck";case 3:return"Shoulder";case 5:return"Chest";case 6:return"Waist";case 7:return"Legs";case 8:return"Feet";case 9:return"Wrist";case 10:return"Hands";case 11:return"Finger";case 12:return"Trinket";case 13:return"One-Hand";case 14:case 22:return"Off Hand";case 15:return"Ranged";case 16:return"Back";case 17:return"Two-Hand";case 18:return"Bag";case 21:return"Main Hand";case 25:return"Thrown";case 28:return"Relic";default:return"SlotNYI"}}t.d(a,{Q:()=>f});var d=t(5e3);let f=(()=>{class e{transform(n,...C){const i=`${n.wowClass} | ${n.wowSubClass} | ${n.slot}`;switch(+n.wowClass){case 0:return function l(e){return[45506,45786,45784,45788,45787,45038,45857].includes(+e.id)?"Quest Item":"Consumable"}(n);case 1:return"Container";case 2:return function c(e){switch(+e.wowSubClass){case 0:return r(e.slot)+", Axe";case 1:return"Two-handed, Axe";case 2:return"Ranged, Bow";case 3:return"Ranged, Gun";case 4:return r(e.slot)+", Mace";case 5:return"Two-handed, Mace";case 6:return r(e.slot)+", Polearm";case 7:return r(e.slot)+", Sword";case 8:return"Two-handed, Sword";case 10:return"Two-handed, Staff";case 13:return r(e.slot)+", Fist Weapon";case 15:return r(e.slot)+", Dagger";case 16:return"Ranged, Thrown";case 18:return"Ranged, Crossbow";case 19:return"Ranged, Wand";default:return"Weapon - NYI"}}(n);case 4:return function o(e){switch(+e.wowSubClass){case 1:return r(e.slot)+", Cloth";case 2:return r(e.slot)+", Leather";case 3:return r(e.slot)+", Mail";case 4:return r(e.slot)+", Plate";case 6:return r(e.slot)+", Shield";case 7:return r(e.slot)+", Libram";case 8:return r(e.slot)+", Idol";case 9:return r(e.slot)+", Totem";case-2:return"Ring";case-3:return"Neck";case-4:return"Trinket";case-5:return"Held In Off-Hand";case-6:return"Cloak";default:return"*Armor* - NYI"}}(n);case 7:return"Trade Goods";case 9:return function u(e){return 10==+e.wowSubClass?"Recipe - Jewelcrafting":"Recipe - NYI"}(n);case 10:return"Currency";case 12:return"Quest Item";case 13:return"Key";case 15:return function w(e){switch(+e.wowSubClass){case 0:return"Misc, Junk";case-2:return"Armor Token";case-7:return"Flying Mount";default:return"Misc - NYI"}}(n);default:return"NYI - "+i}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=d.Yjl({name:"itemSubtext",type:e,pure:!0}),e})()}}]);