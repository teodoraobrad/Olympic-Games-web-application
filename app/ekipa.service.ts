import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EkipaService {

  uri = 'http://localhost:4000'
  constructor(private http:HttpClient) { }



  dodajEkipu(sport,disciplina,zemlja,pol,sportisti){


    let m=0;
  
    const podaci = {
     
      zemlja: zemlja,
      sport:sport  ,
      disciplina:disciplina,
      pol:pol,
      sportisti:sportisti,
      medalja:m
    }
  
  
    return this.http.post(`${this.uri}/ekipe/dodajEkipu`, podaci);
  
  }


  
  dohvatiEkipe(sport,pol){

    const podaci = {
     
      pol: pol,
      sport:sport  }
  
  
    return this.http.post(`${this.uri}/ekipe/dohvatiEkipe`,podaci);
  
  }
}
