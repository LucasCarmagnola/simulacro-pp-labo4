import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {


  http = inject(HttpClient)
  api : string = 'https://restcountries.com/v3.1/'

  constructor() { 
    this.getPaises()

  }


  getPaises(){
    const peticion = this.http.get(this.api + 'all?fields=name')
    return peticion
  }

  getInfoPais(pais : string){
    const peticion = this.http.get(this.api + `name/${pais}`)
    return peticion
  }

}
