import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Pais } from '../../classes/pais';
import { ApiRequestService } from '../../services/api-request.service';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.css'
})
export class TablaPaisesComponent {

  pais : Pais | string = ''
  paisesNombre : string[] = []
  apiRequest = inject(ApiRequestService)

  @Output() paisSeleccionado : EventEmitter<Pais|string> = new EventEmitter<Pais|string>();


  ngOnInit(){
    this.apiRequest.getPaises().subscribe((respuesta : any) => {
      respuesta.forEach((pais:any) => {
        this.paisesNombre.push(pais.name.common)
        console.log(pais.name.common)
      });
    })

    let select = document.getElementById('pais-select') as HTMLSelectElement;
    select?.addEventListener('change', (()=>{
        let selectedOption = select.options[select.selectedIndex];
        console.log('pais enviado: ' + selectedOption.text);
        this.seleccionarPais(selectedOption.text)
      })
    );

  }

  seleccionarPais(opcion : string){
    // const selectElement = document.getElementById('pais-select') as HTMLSelectElement;
    // const selectedValue = selectElement.value;
    // console.log('pep' + selectedValue)
    //this.paisSeleccionado.emit(selectedValue)
    //console.log(`pais enviado: ${selectedValue}`)
    this.paisSeleccionado.emit(opcion)
  }

}
