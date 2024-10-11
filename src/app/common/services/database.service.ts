import { inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Actor } from '../classes/actor';
import { Pelicula } from '../classes/pelicula';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  firestore = inject(AngularFirestore)

  constructor() { }


  altaDocumento(coleccionDatabase : string, objeto : Actor | Pelicula, id : string |null = null){
    const colActores = this.firestore.collection(coleccionDatabase)
    if(id){
      const documento = colActores.doc()
      documento.set({...objeto})
      console.log('documento agregado a la base de datos')
      return
    }

    const documento = colActores.doc()
    documento.set({...objeto})
    console.log('documento agregado a la base de datos')
  }

  traerColeccion(coleccion : string){
    const colec = this.firestore.collection(coleccion)
    return colec.valueChanges()
  }
}
