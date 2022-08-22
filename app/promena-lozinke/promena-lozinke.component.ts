import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-promena-lozinke',
  templateUrl: './promena-lozinke.component.html',
  styleUrls: ['./promena-lozinke.component.css']
})
export class PromenaLozinkeComponent implements OnInit {

  constructor(private korisnickiServis: KorisnikService, private router: Router) { }

  ngOnInit(): void {
  }

  korisnickoime: string;
  staralozinka: string;
  novalozinka: string;
  poruka: string;

  promenaLozinke() {

    this.poruka = "";

    ///dodati deo za alertifaj i regex
    if (this.novalozinka == this.staralozinka) {
      this.poruka = 'Nova lozinka ne sme biti ista kao stara.';

    } else {

//\./\+=_\)\($£\"|\-!@#\$%\^&\*
      var strongRegex = new RegExp("^(?=[a-zA-Z])(?=.*[a-z].*[a-z].*[a-z])(?=.*[A-Z])(?=.*[0-9].*[0-9])(?=.*[!@#$%^&*~].*[!@#$%^&*~]).{8,12}$");

      if (strongRegex.test(this.novalozinka)) {





        this.korisnickiServis.prijava(this.korisnickoime, this.staralozinka).subscribe((korisnik: Korisnik) => {

          if (korisnik) {

            this.korisnickiServis.promenaLozinke(this.korisnickoime, this.staralozinka, this.novalozinka).subscribe((res) => {
              if (res['poruka'] != 'promenjeno')
                this.poruka = 'Neuspela promena lozinke.';
              else {
                alert('Uspesno promenjena lozinka.')
                this.router.navigate(['prijava']);
              }

            });


           





          }
          else {
            this.poruka = 'Korisnicko ime i lozinka nisu ispravni.';
          }
        });
      } else {
        this.poruka='Lozinka mora biti sledeceg fromata: 8-12 karaktera, pocinje sa malim ili velikim slovom. Minimum 1 veliko, bar 3 mala slova. Bar 2 broja i bar 2 specijalna karaktera. Maks br uzastopnih karaktera 3.';
        
       
      }




    }
  }

  odjava() {
    localStorage.removeItem('ulogovan');
    this.router.navigate(['pocetna']);
  }

}
