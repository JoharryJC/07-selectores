import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private baseUrl: string = 'https://restcountries.com/v2'; 

  //private _regiones: string [] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']; 
  private _regiones: string [] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC']; 

  get regiones (): string[] {
    return [...this._regiones]; 
  } 

  constructor(private http: HttpClient) { }

  getPaisesPorRegion (region: string): Observable<PaisSmall[]> {
      const url: string = `${ this.baseUrl }/regionalbloc/${ region }?fields=alpha3Code,name`; 
      console.log("url leida: ", url); 
      return this.http.get<PaisSmall[]>(url); 
  } 

}
