import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Actor } from '../../classes/actor';
import { DatabaseService } from '../../services/database.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabla-actores',
  standalone: true,
  imports: [],
  templateUrl: './tabla-actores.component.html',
  styleUrl: './tabla-actores.component.css'
})
export class TablaActoresComponent {

  actores : any[] = []
  databaseService = inject(DatabaseService)
  suscripcion : Subscription | null = null
  @Output() actorSeleccionado : EventEmitter<Actor | string> = new EventEmitter<Actor | string>()

  constructor(){

  }

  ngOnInit(){
    this.suscripcion = this.databaseService.traerColeccion('actores').subscribe((actores)=>{
      this.actores = actores
      console.log(actores)
    })

    let select = document.getElementById('actor-select') as HTMLSelectElement
    select?.addEventListener('change', (()=>{
      let actorSelect = select.options[select.selectedIndex]
      this.actorSeleccionado.emit(actorSelect.text)
    }))
  }

  ngOnDestroy(){
    this.suscripcion?.unsubscribe()
  }


}
