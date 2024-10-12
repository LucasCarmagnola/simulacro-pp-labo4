import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-detalle-actor',
  standalone: true,
  imports: [],
  templateUrl: './detalle-actor.component.html',
  styleUrl: './detalle-actor.component.css'
})
export class DetalleActorComponent {

  private actorInput : any
  //@Input() actorRecibido : any
  @Input()
  set actorRecibido(actor : any){
    this.actorInput = actor
    if(this.actorInput){
      this.enviar(this.actorInput.pais)
    }
  }
  
  get actorRecibido(): any {
    return this.actorInput;
  }
  
  @Output() enviarPais = new EventEmitter<string>()



  enviar(pais : string){
      this.enviarPais.emit(pais)

  }

}
