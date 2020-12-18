import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Monedas } from './monedas';

@Injectable({
  providedIn: 'root'
})

export class MonedasService {
  private url :string="http://localhost:3000";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Monedas[]>{
    return this.http.get<Monedas[]>(this.url);
  }

  get(id:number): Observable<Monedas>{
    return this.http.get<Monedas>(this.url+'/'+id);
  }

  update(monedas:Monedas): Observable<Monedas>{
    return this.http.put<Monedas>(this.url,monedas)
  }
}
