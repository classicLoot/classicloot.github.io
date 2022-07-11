import { Component, OnInit } from '@angular/core';

interface craftingInfo {
  name: string,
  link: string,
  type: 'primary' | 'secondary',
  descr: string,
  bonus: string,
  src: string
}

@Component({
  selector: 'app-crafting-start',
  templateUrl: './crafting-start.component.html',
  styleUrls: ['./crafting-start.component.scss']
})
export class CraftingStartComponent implements OnInit {

  public craftingArr: craftingInfo[] = [
    {
      name: 'Alchemy',
      link: 'Alchemy',
      type: 'primary',
      descr: '',
      bonus: `+650 HP | +82 AP | +20 mp5 |+47 Spell Power`,
      src: 'Mixology'
    },
    {
      name: 'Blacksmithing',
      link: 'Blacksmithing',
      type: 'primary',
      descr: '',
      bonus: `+60 Stam | +40 Str/Agi/Int | +80 AP | +46 Spell Power |
      +40 from any secondary stat (Crit, Hit, Expertise...)`,
      src: '2x Socket (Bracer+Gloves)'
    },
    {
      name: 'Enchanting',
      link: 'Enchanting',
      type: 'primary',
      descr: '',
      bonus: `+60 Stam | +46 Spell Power | +80 AP`,
      src: '2x Enchant Ring: '
    },
    {
      name: 'Engineering',
      link: 'Engineering',
      type: 'primary',
      descr: '',
      bonus: `+885 Armor | 340 Haste Rating for 12s (1min CD)`,
      src: 'Glove Enchant'
    },
    {
      name: 'Herbalism',
      link: '.',
      type: 'primary',
      descr: '',
      bonus: `3600+ HP over 5s (3min CD)`,
      src: 'Hot'
    },
    {
      name: 'Inscription',
      link: 'Inscription',
      type: 'primary',
      descr: '',
      bonus: `+80 AP | +46 Spell Power | +40 Dodge Rating`,
      src: 'Shoulder Enchant'
    },
    {
      name: 'Jewelcrafting',
      link: 'Jewelcrafting',
      type: 'primary',
      descr: '',
      bonus: `+63 Stam | +42 Str/Agi/Int | +48 Spell Power | +42 from any secondary stat (Crit, Hit, Expertise...) `,
      src: 'BoP Epic Gems'
    },
    {
      name: 'Leatherworking',
      link: 'Leatherworking',
      type: 'primary',
      descr: '',
      bonus: `+62 Stam | +46 Spell Power | +80 AP`,
      src: 'Bracer Enchant'
    },
    {
      name: 'Mining',
      link: '.',
      type: 'primary',
      descr: '',
      bonus: `+60 Stam`,
      src: 'Passive'
    },
    {
      name: 'Skinning',
      link: '.',
      type: 'primary',
      descr: '',
      bonus: `+40 Crit`,
      src: 'Passive'
    },
    {
      name: 'Tailoring',
      link: 'Tailoring',
      type: 'primary',
      descr: '',
      bonus: `Proc: 295 Spell Power for 15s | 400 AP for 15s | restore 400 Mana`,
      src: 'Cloak Enchant'
    }
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
