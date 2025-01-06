import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonButton,
  IonInput,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/angular/standalone';
import { CitasService } from '../../servicios/citas.service';
import { CitaComponent } from '../../componentes/cita/cita.component'; // Importamos el componente hijo

@Component({
  selector: 'app-gestionar-citas',
  templateUrl: './gestionar-citas.page.html', // Mantiene su propia plantilla externa
  styleUrls: ['./gestionar-citas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonButton,
    IonInput,
    IonCard, // Para el contenedor del formulario
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    CitaComponent, // Incluimos el componente hijo
  ],
})
export class GestionarCitasPage {
  citas: Array<{ id: number; frase: string; autor: string }> = [];
  nuevaCita = { frase: '', autor: '' };

  constructor(private citasService: CitasService) {}

  ngOnInit(): void {
    this.cargarCitas();
  }

  cargarCitas(): void {
    this.citas = this.citasService.getCitas();
  }

  agregarCita(): void {
    if (!this.validarCita()) {
      return;
    }
    this.citasService.agregarCita(this.nuevaCita);
    this.cargarCitas();
    this.nuevaCita = { frase: '', autor: '' };
  }

  eliminarCita(id: number): void {
    this.citasService.eliminarCita(id);
    this.cargarCitas();
  }

  validarCita(): boolean {
    if (this.nuevaCita.frase.trim().length < 5) {
      alert('La frase debe tener al menos 5 caracteres.');
      return false;
    }
    if (this.nuevaCita.autor.trim().length < 2) {
      alert('El autor debe tener al menos 2 caracteres.');
      return false;
    }
    return true;
  }
}
