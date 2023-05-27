import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboards2',
  templateUrl: './dashboards2.component.html',
  styleUrls: ['./dashboards2.component.scss']
})
export class Dashboards2Component implements OnInit {
  user: any;
  constructor() {

   }

  ngOnInit(): void {
    this.user = localStorage.getItem('usuario')
  }

}
