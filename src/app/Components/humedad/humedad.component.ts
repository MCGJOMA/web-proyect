import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-humedad',
  templateUrl: './humedad.component.html',
  styleUrls: ['./humedad.component.scss']
})
export class HumedadComponent implements OnInit {
datos: any;

  constructor(public apiService:ApiService) { }

  ngOnInit(): void {
    this.mostrarTodos();
  }

  mostrarTodos(){
    this.apiService.humedad().subscribe(
      result => this.datos = result);
  }
}
