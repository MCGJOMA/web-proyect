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
      const clases: string[] = ["Matemáticas", "Historia", "Ciencias"];
const tareas: string[] = ["Tarea 1 - Ingenieria de Software", "Tarea 2 - Redes de computadoras", "Tarea 3 - Inteligencia Artificial"];
const calificaciones: { nombre: string; puntaje: number }[] = [
  { nombre: "Matemáticas", puntaje: 90 },
  { nombre: "Historia", puntaje: 85 },
  { nombre: "Ciencias", puntaje: 95 },
];
      // Generar la lista de tareas
const tareasList = document.getElementById("tareasList") as HTMLElement;
tareas.forEach(function (tarea: string) {
  const li = document.createElement("li");
  li.textContent = tarea;
  tareasList.appendChild(li);
});
  }
}
