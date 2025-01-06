import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Hace que el servicio esté disponible globalmente
})
export class CitasService {
 
    private citas = [
      { id: 1, frase: 'La vida es bella', autor: 'Anónimo' },
      { id: 2, frase: 'El conocimiento es poder', autor: 'Francis Bacon' },
      { id: 3, frase: 'Pienso, luego existo', autor: 'René Descartes' },
      { id: 4, frase: 'El éxito es ir de fracaso en fracaso sin perder el entusiasmo', autor: 'Winston Churchill' },
      { id: 5, frase: 'La imaginación es más importante que el conocimiento', autor: 'Albert Einstein' },
      { id: 6, frase: 'Lo único imposible es aquello que no intentas', autor: 'Anónimo' },
      { id: 7, frase: 'No llores porque terminó, sonríe porque sucedió', autor: 'Dr. Seuss' },
      { id: 8, frase: 'La felicidad no es algo hecho. Proviene de tus propias acciones', autor: 'Dalai Lama' },
      { id: 9, frase: 'Sé el cambio que quieres ver en el mundo', autor: 'Mahatma Gandhi' },
      { id: 10, frase: 'El tiempo es lo más valioso que una persona puede gastar', autor: 'Theophrastus' },
      { id: 11, frase: 'El hombre es el único animal que tropieza dos veces con la misma piedra', autor: 'Anónimo' },
      { id: 12, frase: 'No cuentes los días, haz que los días cuenten', autor: 'Muhammad Ali' },
      { id: 13, frase: 'La educación es el arma más poderosa para cambiar el mundo', autor: 'Nelson Mandela' },
      { id: 14, frase: 'El éxito no es la clave de la felicidad. La felicidad es la clave del éxito', autor: 'Albert Schweitzer' },
      { id: 15, frase: 'Si puedes soñarlo, puedes hacerlo', autor: 'Walt Disney' },
      { id: 16, frase: 'Todo lo que puedas imaginar es real', autor: 'Pablo Picasso' },
      { id: 17, frase: 'Un viaje de mil millas comienza con un solo paso', autor: 'Lao Tse' },
      { id: 18, frase: 'El secreto para salir adelante es comenzar', autor: 'Mark Twain' },
      { id: 19, frase: 'El futuro pertenece a quienes creen en la belleza de sus sueños', autor: 'Eleanor Roosevelt' },
      { id: 20, frase: 'No importa lo lento que avances, siempre y cuando no te detengas', autor: 'Confucio' }
  ];
  
  

  /**
   * Obtiene la lista de todas las citas.
   * @returns Una copia de las citas actuales.
   */
  getCitas() {
    return [...this.citas]; // Devuelve una copia para evitar modificaciones externas
  }

  /**
   * Obtiene una cita aleatoria de la lista.
   * @returns Una cita seleccionada al azar.
   */
  getCitaAleatoria() {
    if (this.citas.length === 0) {
      return { id: 0, frase: 'No hay citas disponibles.', autor: 'Sistema' };
    }
    const index = Math.floor(Math.random() * this.citas.length);
    return this.citas[index];
  }

  /**
   * Agrega una nueva cita a la lista.
   * @param cita Objeto con frase y autor de la cita.
   */
  agregarCita(cita: { frase: string; autor: string }) {
    const id = this.citas.length > 0 ? this.citas[this.citas.length - 1].id + 1 : 1;
    this.citas.push({ id, ...cita });
  }

  /**
   * Elimina una cita basada en su ID.
   * @param id Identificador único de la cita a eliminar.
   */
  eliminarCita(id: number) {
    this.citas = this.citas.filter((cita) => cita.id !== id);
  }
}
