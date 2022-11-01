import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-registro-humedad',
  templateUrl: './registro-humedad.component.html',
  styleUrls: ['./registro-humedad.component.scss']
})
export class RegistroHumedadComponent implements OnInit {
datos: any;

  constructor(public apiService:ApiService) { }

  ngOnInit(): void {
    this.mostrarTodos();
  }

  mostrarTodos(){
    this.apiService.registroHumedad().subscribe(
      result => this.datos = result);
  }

}
