import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client';
import { Mesure } from './mesure';

@Injectable({
  providedIn: 'root'
})
export class MesureService {

  private baseURL = "http://localhost:8080/api/v1/mesure-client";
  private baseURL2 = "http://localhost:8080/api/v1/mesure";

  constructor(private httpClient: HttpClient) { }

  getClientMesureList(): Observable<Mesure[]>{
    return this.httpClient.get<Mesure[]>(`${this.baseURL}`)
  }

  createClientMesure(mesure: Mesure): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, mesure);
  }

  getClientMesureById(id: number): Observable<Mesure[]>{
    return this.httpClient.get<Mesure[]>(`${this.baseURL}/${id}`);
  }

  updateClientMesure(id: number, mesure: Mesure): Observable<Object>{
    return this.httpClient.put(`${this.baseURL2}/${id}`, mesure);
  }
}