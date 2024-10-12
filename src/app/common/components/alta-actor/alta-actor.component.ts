import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TablaPaisesComponent } from "../tabla-paises/tabla-paises.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pais } from '../../classes/pais';
import { RouterLink } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import { Actor } from '../../classes/actor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-actor',
  standalone: true,
  imports: [TablaPaisesComponent,ReactiveFormsModule, RouterLink],
  templateUrl: './alta-actor.component.html',
  styleUrl: './alta-actor.component.css'
})
export class AltaActorComponent {

  protected formGroup : FormGroup;
  formBuilder = inject(FormBuilder)
  databaseService = inject(DatabaseService)
  paisInput : Pais | string | null = null


  constructor(){
    this.formGroup = this.formBuilder.group({
      nombre : ['', [Validators.required, Validators.minLength(2)]],
      apellido : ['', [Validators.required, Validators.minLength(2)]],
      documento : ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[0-9]+$')]],
      edad : ['', [Validators.required, Validators.maxLength(2), Validators.pattern('^[0-9]+$')]],
      pais : ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  cargarActor(){
    if (this.formGroup.valid) {
      console.log('Formulario enviado correctamente', this.formGroup.value);

      const actor = new Actor(this.formGroup.controls['nombre'].value, this.formGroup.controls['apellido'].value, 
        this.formGroup.controls['documento'].value, this.formGroup.controls['edad'].value ,this.formGroup.controls['pais'].value)

      this.databaseService.altaDocumento('actores' , actor)
      Swal.fire({
        icon: "success",
        title: "Actor dado de alta",
      });
    } else {
      // Opcional: Marca todos los campos como tocados para que muestren los errores
      this.formGroup.markAllAsTouched();
      console.log('El formulario tiene errores', this.formGroup);
      
    }

  }


  recibirPais(pais : Pais | string){
    console.log(`pais recibido: ${pais}`)
    this.paisInput = pais
    this.formGroup.patchValue({
      pais: this.paisInput.toString()
    });
  }

}
