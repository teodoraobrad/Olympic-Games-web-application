import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  constructor(private korisnickiServis: KorisnikService, private ruter: Router) { }

  ngOnInit(): void {
  }

  korisnickoime: string;
  lozinka: string;
  poruka: string;


  prijava() {
    this.poruka="";

    this.korisnickiServis.prijava(this.korisnickoime, this.lozinka).subscribe((korisnik: Korisnik) => {
      if (korisnik ) {if(korisnik.zahtev==true) {
        localStorage.setItem('ulogovan', JSON.stringify(korisnik));




        if (korisnik.tip == 'organizator') {
          this.ruter.navigate(['organizator']);
        }
        else {
          if (korisnik.tip == 'vodja') {
            this.ruter.navigate(['vodja']);
          } else {
            if (korisnik.tip == 'delegat') {
              this.ruter.navigate(['delegat']);
            }
            else{
              this.poruka = 'Tip pristupa nije definisan.';
            }

          }
        }
      }else{
         if(korisnik.zahtev==false) this.poruka='Pristup Vam jos nije odobren.'
       
      }}
      else {
        
        this.poruka = 'Podaci koje ste uneli nisu ispravni.';
      }
    });
  }

  odjava(){
    localStorage.removeItem('ulogovan');
    this.ruter.navigate(['pocetna']);
  }
}


