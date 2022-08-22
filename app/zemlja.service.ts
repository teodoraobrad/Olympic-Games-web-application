import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZemljaService {


  uri = 'http://localhost:4000'

  constructor(private http:HttpClient) { }

  
  ucesnice(){

    return this.http.get(`${this.uri}/zemlje/ucesnice`);

  }

  dohvatiLokacije(){
    return this.http.get(`${this.uri}/zemlje/lokacije`);

  }
}
