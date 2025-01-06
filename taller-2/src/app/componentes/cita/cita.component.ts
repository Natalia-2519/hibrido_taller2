import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  IonItem,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html', // Plantilla externa
  standalone: true,
  imports: [
    IonItem, // Necesario para <ion-item>
    IonButton, // Necesario para <ion-button>
  ],
})
export class CitaComponent {
  @Input() frase!: string;
  @Input() autor!: string;
  @Input() id!: number;
  @Output() eliminarCita = new EventEmitter<number>();

  onEliminarCita(): void {
    this.eliminarCita.emit(this.id);
  }
}
