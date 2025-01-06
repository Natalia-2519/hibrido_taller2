import { Routes } from '@angular/router';

export const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./paginas/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'gestionar-citas',
    loadComponent: () => import('./paginas/gestionar-citas/gestionar-citas.page').then( m => m.GestionarCitasPage)
  },
  {
    path: 'configuraciones',
    loadComponent: () => import('./paginas/configuraciones/configuraciones.page').then( m => m.ConfiguracionesPage)
  },
];
