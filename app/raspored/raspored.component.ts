import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { Raspored } from '../models/raspored';
import { Takmicenje } from '../models/takmicenje';
import { RasporedService } from '../raspored.service';
import { TakmicenjeService } from '../takmicenje.service';

@Component({
  selector: 'app-raspored',
  templateUrl: './raspored.component.html',
  styleUrls: ['./raspored.component.css']
})
export class RasporedComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private takmicenjeServis: TakmicenjeService, private router: Router, private rasporedServis: RasporedService) { }

  takmicenje: Takmicenje;

  ngOnInit(): void {


    let id = this.ruta.snapshot.paramMap.get('id');

    this.takmicenjeServis.dohvatiTakmicenje(id).subscribe((data: Takmicenje) => {

      this.takmicenje = data;
    });


    this.delegat = JSON.parse(localStorage.getItem('ulogovan'));



  }

  delegat: Korisnik;

  porukaIndividualno: string;
  datum: string;
  vreme: string;



  datumvremeI: Date;

  odjava() {
    localStorage.removeItem('ulogovan');
    this.router.navigate(['pocetna']);
  }
  nazad() {
    this.router.navigate(['delegat']);
  }


  finaleIndividualnog() {

    this.porukaIndividualno = "";

    this.datumvremeI = new Date();

    //  this.datumvremeI.setDate(this.datum.getDate());
    //  this.datumvremeI.setMonth(this.datum.getMonth());
    //  this.datumvremeI.setFullYear(this.datum.getFullYear());
    this.datumvremeI.setDate(parseInt(this.datum.slice(8, 10)));
    this.datumvremeI.setMonth(parseInt(this.datum.slice(5, 7)) - 1);
    this.datumvremeI.setFullYear(parseInt(this.datum.slice(0, 4)));

    //    this.datumvremeI.setHours(this.vreme.hours);
    //   this.datumvremeI.setMinutes(this.vreme.minutes);
    this.datumvremeI.setHours(parseInt(this.vreme.slice(0, 2)));
    this.datumvremeI.setMinutes(parseInt(this.vreme.slice(3, 5)));




    if (this.takmicenje.sportisti.length > 8) {
      this.porukaIndividualno = "Broj takmicara je veci od dozvoljenog."
    } else {

    
     


      this.takmicenjeServis.proveriInterval(this.datumvremeI, this.takmicenje.id).subscribe((data: Takmicenje) => {
        if (data) {






          this.takmicenjeServis.proveriDelegatID(this.delegat.korisnickoime, this.takmicenje.id).subscribe((data: Takmicenje[]) => {
            if (data) {






              this.rasporedServis.dohvatiRasporedIndividId(this.takmicenje.id).subscribe((data: Raspored) => {
                if (data) {
                  this.porukaIndividualno = 'Raspored za ovo takmicenje je vec unet';
                } else {



                  alert(this.datumvremeI);

                  this.rasporedServis.proveraTermina(this.takmicenje.lokacija, this.datumvremeI).subscribe((data: Raspored) => {
                    if (data) {
                      this.porukaIndividualno = 'Termin je zauzet';

                    } else {







                      this.rasporedServis.dodajRaspored(this.takmicenje.sport, this.takmicenje.disciplina, this.takmicenje.pol, "i", this.datumvremeI, this.takmicenje.lokacija, this.delegat.korisnickoime, this.takmicenje.sportisti, this.takmicenje.id).subscribe((response) => {
                        if (response['poruka'] == 'raspored dodat') {
                          this.porukaIndividualno = 'Termin je dodat u raspored';
                        } else {
                          this.porukaIndividualno = 'Termin nije dodat u raspored';
                        }
                      });


                    }
                  });





                }
              });









            } else {
              this.porukaIndividualno = 'Vi niste delegat ovog takmicenja.';



            }
          });
        } else {
          this.porukaIndividualno = "Datum je van intervala definisanog za takmicenje"

        }
      });
    }

  }


}
