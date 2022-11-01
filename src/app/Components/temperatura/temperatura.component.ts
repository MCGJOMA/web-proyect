import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.scss']
})
export class TemperaturaComponent implements OnInit {
datos: any;


  constructor(public apiService:ApiService) { }

  ngOnInit(): void {
  this.mostrarTodos()
  }

  mostrarTodos(){
    this.apiService.temperatura().subscribe(
      result => this.datos = result);
  }
}
