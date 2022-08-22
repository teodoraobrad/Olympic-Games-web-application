import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportistaService {

  uri = 'http://localhost:4000'
  
  constructor(private http:HttpClient) { }

//
pretraga(imeprezime,zemlja,sport,pol,medalja,disciplina){


  const podaci = {
    imeprezime: imeprezime,
    zemlja: zemlja,
    sport:sport  ,
  disciplina:disciplina,//
    pol:pol,
    medalja:medalja
  }

 //console.log("***");
 
  // console.log(disciplina);

  return this.http.post(`${this.uri}/sportisti/pretraga`, podaci);

}


dohvatiRekorde(){
  return this.http.get(`${this.uri}/sportisti/rekordi`);
}

dohvatiSportiste(s,d,p){
const data={
  sport:s,
  disciplina:d,
  pol:p
}
return this.http.post(`${this.uri}/sportisti/dohvatiSportiste`,data);

}
dohvatiSportistee(s,d,p,z){
  const data={
    sport:s,
    disciplina:d,
    pol:p,
    zemlja:z
  }
  return this.http.post(`${this.uri}/sportisti/dohvatiSportistee`,data);
  
  }
dohvatiSportistu(k,s){
  const data={
    imeprezime:k,sport:s
  }
  return this.http.post(`${this.uri}/sportisti/dohvatiSportistu`,data);
  
  }

dodajSportistu(imeprezime,zemlja,sport,disciplina,pol){


  let m=0;

  const podaci = {
    imeprezime: imeprezime,
    zemlja: zemlja,
    sport:sport  ,
    disciplina:disciplina,
    pol:pol,
    medalja:m
  }


  return this.http.post(`${this.uri}/sportisti/dodajSportistu`, podaci);

}

apdejtujSportistu(imeprezime,zemlja,sport,disciplina,pol){

  const podaci = {
    imeprezime: imeprezime,
    zemlja: zemlja,
    sport:sport  ,
    disciplina:disciplina,
    pol:pol
  }


  return this.http.post(`${this.uri}/sportisti/apdejtujSportistu`, podaci);


}

prebroj(zemlja){
  const podaci={
    zemlja:zemlja
  }
  return this.http.post(`${this.uri}/sportisti/prebroj`, podaci);
}

prebrojSport(zemlja,sport){
  const podaci={
    zemlja:zemlja,
    sport:sport
  }
  return this.http.post(`${this.uri}/sportisti/prebrojSport`, podaci);
}



}
