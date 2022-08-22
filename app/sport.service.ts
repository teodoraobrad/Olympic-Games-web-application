import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  uri = 'http://localhost:4000'
  constructor(private http:HttpClient) { }


  dohvatiSportove(){

    return this.http.get(`${this.uri}/sportovidiscipline/dohvatiSportove`);
  }
  dohvatiDiscipline(){
    return this.http.get(`${this.uri}/sportovidiscipline/dohvatiDiscipline`);

  }
   dohvatiSportoveDiscipline(){
    return this.http.get(`${this.uri}/sportovidiscipline/dohvatiSportoveDiscipline`);



  } 
  /* dohvatiPodrzaneSportoveDiscipline(){
    return this.http.get(`${this.uri}/sportovidiscipline/dohvatiPodrzaneSportoveDiscipline`);



  } */


    dodaj(sport,disciplina,vrsta,min,max){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      vrsta:vrsta,
      min:min,
      max:max
      
    }
    return this.http.post(`${this.uri}/sportovidiscipline/dodaj`,podaci);
  } 

  pretragapoparam(sport,disciplina,vrsta){

    const podaci={
      sport:sport,
      disciplina:disciplina,
      vrsta:vrsta
    }
    
    return this.http.post(`${this.uri}/sportovidiscipline/pretragapoparam`,podaci);

  }



}
