import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TakmicenjeService {

  uri='http://localhost:4000'
  constructor(private http:HttpClient) { }

  dodajTakmicenje(sport,disciplina,format,pol,vrsta,datump,datumk,lokacija,delegat,sportisti,id){


    const podaci={
      sport:sport,
      disciplina:disciplina,
      format:format,
      pol:pol,
      vrsta:vrsta,
      datumpocetka:datump,
      datumkraja:datumk,
      lokacija:lokacija,
      delegat:delegat,
      sportisti:sportisti,
      id:id
    }

    return this.http.post(`${this.uri}/takmicenja/dodajTakmicenje`,podaci);


  }

  pretragapoparam(sport,disciplina,vrsta,pol){

    const podaci={
      sport:sport,
      disciplina:disciplina,
      vrsta:vrsta,
      pol:pol
    }
   
    
    return this.http.post(`${this.uri}/takmicenja/pretragapoparam`,podaci);

  }

  nadjiDelegata(korisnickoime){

    const podaci={
      korisnickoime:korisnickoime
    }
    return this.http.post(`${this.uri}/takmicenja/nadjiDelegata`,podaci);


  }

  dohvatiTakmicenja(){

    
    return this.http.get(`${this.uri}/takmicenja/dohvatiTakmicenja`);


  }
  dohvatiTakmicenje(id){

    const podaci={
      id:id
    }

    
    return this.http.post(`${this.uri}/takmicenja/dohvatiTakmicenje`,podaci);


  }

 proveriDelegatID(korisnickoime,id){

    const podaci={
      korisnickoime:korisnickoime,
      id:id
    }

    
    return this.http.post(`${this.uri}/takmicenja/proveriDelegatID`,podaci);


  }

  proveriInterval(datum,id){
    const podaci={
      datum:datum,
      id:id
    }

    
    return this.http.post(`${this.uri}/takmicenja/proveriInterval`,podaci);

  }

  dohvatiGotovaIndividualnaTakmicenja(date){

    const podaci={
      datum:date
    }

    
    return this.http.post(`${this.uri}/takmicenja/dohvatiGotovaIndividualnaTakmicenja`,podaci);


  }



}
