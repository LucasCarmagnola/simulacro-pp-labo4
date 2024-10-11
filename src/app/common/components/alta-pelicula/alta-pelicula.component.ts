import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';
import { RouterLink } from '@angular/router';
import { TablaActoresComponent } from "../tabla-actores/tabla-actores.component";
import { Actor } from '../../classes/actor';
import { ETipo, Pelicula } from '../../classes/pelicula';

@Component({
  selector: 'app-alta-pelicula',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, TablaActoresComponent],
  templateUrl: './alta-pelicula.component.html',
  styleUrl: './alta-pelicula.component.css'
})
export class AltaPeliculaComponent {


  protected formGroup : FormGroup;
  ETipo = ETipo;
  formBuilder = inject(FormBuilder)
  databaseService = inject(DatabaseService)

  constructor(){
    this.formGroup = this.formBuilder.group({
      nombre : ['', [Validators.required, Validators.minLength(2)]],
      tipo : ['', [Validators.required]],
      fechaEstreno : ['', [Validators.required]],
      cantidadPublico : ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[0-9]+$')]],
      protagonista : ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  cargarPelicula(){
    if(this.formGroup.invalid){
      console.log('formulario invalido')
      return
    }
    const tipo = document.getElementById('tipo') as HTMLSelectElement

    const pelicula = new Pelicula(Math.random(), this.formGroup.controls['nombre'].value, this.formGroup.controls['tipo'].value, 
      this.formGroup.controls['fechaEstreno'].value, this.formGroup.controls['cantidadPublico'].value, 
      'foto.png', this.formGroup.controls['protagonista'].value
    ) 
    console.log(pelicula.tipo)
    this.databaseService.altaDocumento('peliculas', pelicula)

  }

  recibirProtagonista(protagonista : Actor | string){
    console.log(`actor recibido: ${protagonista}`)
    this.formGroup.patchValue({
      protagonista: protagonista
    });
  }

}
