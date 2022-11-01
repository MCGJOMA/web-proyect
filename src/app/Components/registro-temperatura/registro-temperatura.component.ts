import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-registro-temperatura',
  templateUrl: './registro-temperatura.component.html',
  styleUrls: ['./registro-temperatura.component.scss']
})
export class RegistroTemperaturaComponent implements OnInit {
  datos: any;

  constructor(public apiService:ApiService) { }

  ngOnInit(): void {
    this.mostrarTodos();
  }

  mostrarTodos(){
    this.apiService.registroTemperatura().subscribe(
      result => this.datos = result);
  }
}
