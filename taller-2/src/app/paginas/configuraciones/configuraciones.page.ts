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
  IonLabel,
  IonToggle,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Necesario para [(ngModel)]
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonToggle,
    IonButton,
  ],
})
export class ConfiguracionesPage {
  borrarCitasInicio = false;

  guardarConfiguracion(): void {
    localStorage.setItem('borrarCitasInicio', this.borrarCitasInicio.toString());
    alert('¡Configuración guardada con éxito!');
  }
}
