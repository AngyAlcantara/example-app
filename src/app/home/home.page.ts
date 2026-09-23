import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Tu variable empieza en 0
  contador: number = 0;

  // Función para que el número avance (+1)
  incrementar() {
    this.contador++;
  }

  // Función para restar (-1) SIN permitir negativos
  decrementar() {
    // Solo resta si el número es mayor a 0
    if (this.contador > 0) {
      this.contador--;
    }
  }

  // Función para volver a empezar en 0
  reiniciar() {
    this.contador = 0;
  }

}