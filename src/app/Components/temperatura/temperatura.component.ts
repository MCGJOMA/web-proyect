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
      const clases: string[] = ["Matemáticas", "Historia", "Ciencias"];
const tareas: string[] = ["Tarea 1", "Tarea 2", "Tarea 3"];
const calificaciones: { nombre: string; puntaje: number }[] = [
  { nombre: "Ingenieria de Software", puntaje: 90 },
  { nombre: "Redes de Computadoras", puntaje: 85 },
  { nombre: "Inteligencia Artificial", puntaje: 95 },
];
// Generar la lista de calificaciones
const calificacionesList = document.getElementById(
  "calificacionesList"
) as HTMLElement;
calificaciones.forEach(function (calificacion: { nombre: string; puntaje: number }) {
  const li = document.createElement("li");
  li.textContent = calificacion.nombre + ": " + calificacion.puntaje;
  calificacionesList.appendChild(li);
});
  }
}
