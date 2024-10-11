import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { Pelicula } from '../../classes/pelicula';

@Component({
  selector: 'app-tabla-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './tabla-peliculas.component.html',
  styleUrl: './tabla-peliculas.component.css'
})
export class TablaPeliculasComponent {
  @Input() peliculasInput : Pelicula[] = []
  @Output() seleccionarPelicula = new EventEmitter<Pelicula>()


  seleccionar(pelicula : Pelicula){
    this.seleccionarPelicula.emit(pelicula)
    console.log(`pelicula seleccionada: ${pelicula.nombre}`)
  }


}
