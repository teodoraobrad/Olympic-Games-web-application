import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lokacija } from './models/lokacija';

@Injectable({
  providedIn: 'root'
})
export class RasporedService {

 
  uri='http://localhost:4000'
  constructor(private http:HttpClient) { }

  dodajRaspored(sport,disciplina,pol,vrsta,datumvreme,lokacija,delegat,sportisti,id){


    const podaci={
      sport:sport,
      disciplina:disciplina,
      pol:pol,
      vrsta:vrsta,
      datumvreme:datumvreme,
      lokacija:lokacija,
      delegat:delegat,
      sportisti:sportisti,
      id:id
    }

    return this.http.post(`${this.uri}/raspored/dodajRaspored`,podaci);


  }

  pretragapoparam(sport,disciplina,vrsta,pol){

    const podaci={
      sport:sport,
      disciplina:disciplina,
      vrsta:vrsta,
      pol:pol
    }
   
    
    return this.http.post(`${this.uri}/raspored/pretragapoparam`,podaci);

  }

  nadjiTermineDelegata(korisnickoime){

    const podaci={
      korisnickoime:korisnickoime
    }
    return this.http.post(`${this.uri}/raspored/nadjiDelegata`,podaci);


  }

  dohvatiRaspored(){

    
    return this.http.get(`${this.uri}/raspored/dohvatiRaspored`);


  }
  dohvatiRasporedIndividId(id){

    const podaci={
      id:id
    }

    
    return this.http.post(`${this.uri}/raspored/dohvatiRasporedIndividId`,podaci);


  }

  proveraTermina(lok,dat){
    const podaci={
      lokacija:lok,
      datum:dat
    }
    return this.http.post(`${this.uri}/raspored/proveraTermina`,podaci);

  }

  dohvatiGotoveTermine(danas){
    const podaci={
   
      datum:danas
    }
    return this.http.post(`${this.uri}/raspored/dohvatiGotoveTermine`,podaci);

  }

  unesiRezultat(imeprezime,rezultat,sport,disciplina,vrsta,pol,format,delegat,id){
    const podaci={
   
      sportista:imeprezime,
     
    sport:sport,
    disciplina:disciplina,
    pol:pol,
    vrsta:vrsta,
    delegat:delegat,
    format:format,
    id:id,
    rezultat:rezultat
  
    }
    return this.http.post(`${this.uri}/rezultat/unesiRezultat`,podaci);

  }


}
