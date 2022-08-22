import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  uri = 'http://localhost:4000'

  constructor(private http:HttpClient) { }

  prijava(korisnickoime, lozinka){
    const podaci = {
      korisnickoime: korisnickoime,
      lozinka: lozinka
    }

    return this.http.post(`${this.uri}/korisnici/prijava`, podaci);
  }


  promenaLozinke(korisnickoime,staralozinka,novalozinka){

    const podaci = {
      korisnickoime: korisnickoime,
      staralozinka: staralozinka,
      novalozinka:novalozinka
    }

    return this.http.post(`${this.uri}/korisnici/promenaLozinke`, podaci);
    

  }



  registracija(korisnickoime,lozinka,ime,prezime,nacionalnost,email,tip){

    let zahtev=false;

    const podaci = {
      korisnickoime: korisnickoime,
      lozinka: lozinka,
      ime:ime,
      prezime:prezime,
      nacionalnost:nacionalnost,
      email:email,
      tip:tip,
      zahtev:zahtev

    }

    return this.http.post(`${this.uri}/korisnici/registracija`, podaci);
  

  }

  korisnickoime(korisnickoime){
    const podaci = {
      korisnickoime: korisnickoime}
      return this.http.post(`${this.uri}/korisnici/korisnickoime`, podaci);
  }

  dohvatiDelegate(){
      return  this.http.get(`${this.uri}/korisnici/dohvatiDelegate`);
  }

  dohvatiZahteve(){
    return  this.http.get(`${this.uri}/korisnici/dohvatiZahteve`);
}


traziVodju(zemlja){
  const podaci={
    nacionalnost:zemlja
  }
  return  this.http.post(`${this.uri}/korisnici/traziVodju`,podaci);
}

zahtevTrue(korisnickoime){
  const podaci={
    korisnickoime:korisnickoime
  }
  return  this.http.post(`${this.uri}/korisnici/zahtevTrue`,podaci);
}


proveriDelegata(korisnickoime){
  const podaci={
    korisnickoime:korisnickoime
  }
  return  this.http.post(`${this.uri}/takmicenja/nadjiDelegata`,podaci);

}




}
