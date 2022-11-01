import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-mangueras',
  templateUrl: './mangueras.component.html',
  styleUrls: ['./mangueras.component.scss']
})
export class ManguerasComponent implements OnInit {
datos: any;

  constructor(public apiService:ApiService) { }

  ngOnInit(): void {
    this.mostrarTodos();
  }

  mostrarTodos(){
    this.apiService.mango().subscribe(
      result => this.datos = result);
  }

}
