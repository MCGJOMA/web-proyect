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
    this.mostrarDatos();
  }

  mostrarTodos(){
    this.apiService.mango().subscribe(
      result => this.datos = result);
  }

  mostrarDatos(){
    // Simulación de datos de usuario
const clases: string[] = ["Ingenieria de Software", "Redes de Computadoras", "Inteligencia Artificial"];
const tareas: string[] = ["Tarea 1", "Tarea 2", "Tarea 3"];
const calificaciones: { nombre: string; puntaje: number }[] = [
  { nombre: "Matemáticas", puntaje: 90 },
  { nombre: "Historia", puntaje: 85 },
  { nombre: "Ciencias", puntaje: 95 },
];

// Generar la lista de clases
const clasesList = document.getElementById("clasesList") as HTMLElement;
clases.forEach(function (clase: string) {
  const li = document.createElement("li");
  li.textContent = clase;
  clasesList.appendChild(li);
});
  }
}
