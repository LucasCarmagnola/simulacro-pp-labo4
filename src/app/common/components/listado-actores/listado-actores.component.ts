import { Component, EventEmitter, Output } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-actores',
  standalone: true,
  imports: [],
  templateUrl: './listado-actores.component.html',
  styleUrl: './listado-actores.component.css'
})
export class ListadoActoresComponent {

  actores : any;
  suscripcion : Subscription | null = null
  @Output() enviarDato = new EventEmitter<any>()

  constructor(private databaseService : DatabaseService){}

  ngOnInit(){
    this.suscripcion = this.databaseService.traerColeccion('actores').subscribe((actores)=>{
      this.actores = actores
      console.log(actores)
    })
  }

  enviarActor(actor : any){
    this.enviarDato.emit(actor)
  }

  ngOnDestroy(){
    this.suscripcion?.unsubscribe()
  }

}
