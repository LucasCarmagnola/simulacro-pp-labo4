import { Component } from '@angular/core';
import { TablaPeliculasComponent } from "../tabla-peliculas/tabla-peliculas.component";
import { DetallePeliculasComponent } from "../detalle-peliculas/detalle-peliculas.component";
import { ETipo, Pelicula } from '../../classes/pelicula';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [TablaPeliculasComponent, DetallePeliculasComponent, RouterLink],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {

  peliculaSeleccionada: Pelicula | null = null;
  peliculas: Pelicula[] = [
    { id: 1, nombre: 'El conjuro', tipo: ETipo.Terror, fechaEstreno: '2013-07-19', cantidadPublico: 1500000, foto: 'el_conjuro.jpg', protagonista: 'Patrick Wilson' },
    { id: 2, nombre: 'Rápidos y Furiosos', tipo: ETipo.Accion, fechaEstreno: '2001-06-22', cantidadPublico: 2500000, foto: '/rapidosyfuriosos.jpg', protagonista: 'Vin Diesel' },
    { id: 3, nombre: 'Titanic', tipo: ETipo.Amor, fechaEstreno: '1997-12-19', cantidadPublico: 3000000, foto: '/barco-titanic.jpg', protagonista: 'Leonardo DiCaprio' },
    { id: 4, nombre: 'Toy Story', tipo: ETipo.Comedia, fechaEstreno: '1995-11-22', cantidadPublico: 2000000, foto: 'toy_story.jpg', protagonista: 'Tom Hanks' },
    { id: 5, nombre: 'La La Land', tipo: ETipo.Amor, fechaEstreno: '2016-12-09', cantidadPublico: 1800000, foto: 'la_la_land.jpg', protagonista: 'Ryan Gosling' },
    { id: 6, nombre: 'El exorcista', tipo: ETipo.Terror, fechaEstreno: '1973-12-26', cantidadPublico: 1000000, foto: 'el_exorcista.jpg', protagonista: 'Linda Blair' },
    { id: 7, nombre: 'Avengers: Endgame', tipo: ETipo.Accion, fechaEstreno: '2019-04-26', cantidadPublico: 3500000, foto: 'avengers_endgame.jpg', protagonista: 'Robert Downey Jr.' },
    { id: 8, nombre: 'El Diario de Noah', tipo: ETipo.Amor, fechaEstreno: '2004-06-25', cantidadPublico: 1200000, foto: 'diario_de_noah.jpg', protagonista: 'Ryan Gosling' },
    { id: 9, nombre: 'La Máscara', tipo: ETipo.Comedia, fechaEstreno: '1994-07-29', cantidadPublico: 1600000, foto: 'la_mascara.jpg', protagonista: 'Jim Carrey' },
    { id: 10, nombre: 'It', tipo: ETipo.Terror, fechaEstreno: '2017-09-08', cantidadPublico: 1700000, foto: 'it.jpg', protagonista: 'Bill Skarsgård' }
  ];


  ngOnInit(){

  }


}
