import { Component, inject, Input } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';


@Component({
  selector: 'app-detalle-pais',
  standalone: true,
  imports: [],
  templateUrl: './detalle-pais.component.html',
  styleUrl: './detalle-pais.component.css'
})
export class DetallePaisComponent {

  //@Input() paisRecibido : string | null = null //forma normal de recibir
  private paisInput : string | null = null
  private apiRequest = inject(ApiRequestService)
  protected infoPais : any
  protected lenguajes : any

  @Input() //setter y getter para ejecutar un metodo cuando el input se active
  set paisRecibido(pais : string){
    this.paisInput = pais
    if(this.paisInput){
      this.obtenerInfoPais(this.paisInput)
      console.log(`ejecutando la busqueda de info del pais: ${this.paisInput}`)
    }
  }
  
  get paisRecibido(): any {
    return this.paisInput;
  }

  obtenerInfoPais(pais : string){
    this.apiRequest.getInfoPais(pais).subscribe((respuesta)=>{
      this.infoPais = respuesta
      this.lenguajes = Object.values(this.infoPais[0].languages)
    })
  }



}
