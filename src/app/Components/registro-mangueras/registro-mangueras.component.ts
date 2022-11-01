import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-registro-mangueras',
  templateUrl: './registro-mangueras.component.html',
  styleUrls: ['./registro-mangueras.component.scss']
})
export class RegistroManguerasComponent implements OnInit {
datos: any;


  constructor(public apiService:ApiService) { }

  ngOnInit(): void {
    this.mostrarTodos();
  }

  mostrarTodos(){
    this.apiService.registroMango().subscribe(
      result => this.datos = result);
  }
}
