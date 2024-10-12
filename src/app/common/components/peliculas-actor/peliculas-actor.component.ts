import { Component, inject, Input } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-peliculas-actor',
  standalone: true,
  imports: [],
  templateUrl: './peliculas-actor.component.html',
  styleUrl: './peliculas-actor.component.css'
})
export class PeliculasActorComponent {

  //@Input() actorInput : any
  protected actorRecibido : any
  protected peliculas : any
  private databaseService = inject(DatabaseService)
  suscribcion : Subscription | null = null 

  @Input() //setter y getter para ejecutar un metodo cuando el input se active
  set actorInput(actor : string){
    this.actorRecibido = actor
    if(this.actorRecibido){
      this.suscribcion = this.databaseService.getPelisByActor(`${this.actorRecibido.nombre}` + ' ' + `${this.actorRecibido.apellido}`).subscribe((respuesta)=>{
        this.peliculas = respuesta
      })

    }
  }
  
  get actorInput(): any {
    return this.actorRecibido;
  }

  ngOnDestroy(){
    this.suscribcion?.unsubscribe()
  }



}
