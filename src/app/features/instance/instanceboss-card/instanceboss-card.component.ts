import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-instanceboss-card',
  templateUrl: './instanceboss-card.component.html',
  styleUrls: ['./instanceboss-card.component.scss']
})
export class InstancebossCardComponent implements OnInit {

  @Input() bossLink!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
