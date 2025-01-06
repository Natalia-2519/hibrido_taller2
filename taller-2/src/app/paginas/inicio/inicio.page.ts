import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonMenu, // Necesario para el menú lateral
  IonList, // Necesario para la lista de opciones del menú
  IonItem, // Elementos individuales dentro de la lista del menú
  IonMenuButton, // Botón para abrir el menú
  IonButtons, // Contenedor para agrupar botones, como IonMenuButton
} from '@ionic/angular/standalone';



import { CitasService } from '../../servicios/citas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonMenu, // Necesario para el menú lateral
    IonList, // Necesario para la lista de opciones del menú
    IonItem, // Elementos individuales dentro de la lista del menú
    IonMenuButton,
    IonButtons
    
  ],
})
export class InicioPage {
  citaAleatoria = { frase: '', autor: '' };

  constructor(private citasService: CitasService) {}

  ngOnInit(): void {
    this.citaAleatoria = this.citasService.getCitaAleatoria();
  }

  nuevaCita(): void {
    this.citaAleatoria = this.citasService.getCitaAleatoria();
  }
}
