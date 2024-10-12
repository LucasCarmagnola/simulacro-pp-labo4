import { Component } from '@angular/core';
import { ListadoActoresComponent } from "../listado-actores/listado-actores.component";
import { DetalleActorComponent } from "../detalle-actor/detalle-actor.component";
import { DetallePaisComponent } from "../detalle-pais/detalle-pais.component";
import { PeliculasActorComponent } from "../peliculas-actor/peliculas-actor.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-actores',
  standalone: true,
  imports: [ListadoActoresComponent, DetalleActorComponent, DetallePaisComponent, PeliculasActorComponent, RouterLink],
  templateUrl: './actores.component.html',
  styleUrl: './actores.component.css'
})
export class ActoresComponent {

  actorRecibidoParaOtroComponente : any
  paisRecibidoParaOtroComponente : any 

  recibirActor(actor : any){
    this.actorRecibidoParaOtroComponente = actor
  }

  recibirPais(pais : string){
    this.paisRecibidoParaOtroComponente = pais
  }

}
