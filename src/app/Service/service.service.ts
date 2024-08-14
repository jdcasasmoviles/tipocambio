import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cambio } from '../Modelo/Cambio';
import { Moneda } from '../Modelo/Moneda';

@Injectable()
export class ServiceService {

  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8084/v1/cambio';

  getCambios(){
    return this.http.get<Cambio[]>(this.Url+"/findAll");
  }

  convertMoneda(moneda:Moneda){
    return this.http.post<Cambio>(this.Url+"/tipoCambio",moneda);
  }

}