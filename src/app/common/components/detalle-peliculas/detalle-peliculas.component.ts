import { Component, Input } from '@angular/core';
import { Pelicula } from '../../classes/pelicula';

@Component({
  selector: 'app-detalle-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './detalle-peliculas.component.html',
  styleUrl: './detalle-peliculas.component.css'
})
export class DetallePeliculasComponent {

  @Input() pelicula : Pelicula | null = null

}
