import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EkipaService } from '../ekipa.service';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';
import { Sport } from '../models/sport';
import { SportDisciplina } from '../models/sportdisciplina';
import { SportDisciplinaT } from '../models/sportdisciplinat';
import { Sportista } from '../models/sportista';
import { Takmicenje } from '../models/takmicenje';
import { SportService } from '../sport.service';
import { SportistaService } from '../sportista.service';
import { TakmicenjeService } from '../takmicenje.service';

@Component({
  selector: 'app-vodja',
  templateUrl: './vodja.component.html',
  styleUrls: ['./vodja.component.css']
})
export class VodjaComponent implements OnInit {

  constructor(private router: Router, private sportistaServis: SportistaService, private takmicenjeServis: TakmicenjeService, private sportServis: SportService, private ekipaServis: EkipaService) { }

  ngOnInit(): void {

    this.sportServis.dohvatiSportove().subscribe((data: SportDisciplinaT[]) => {
      this.sportoviNaziv = data;
    });
    this.sportServis.dohvatiDiscipline().subscribe((data: SportDisciplinaT[]) => {
      this.disciplineNaziv = data;
    })

   



    this.vodja = JSON.parse(localStorage.getItem("ulogovan"));
    //this.zemlja=this.korisnikServis.

    this.zemlja = this.vodja.nacionalnost;

    this.sportistaServis.prebroj(this.zemlja).subscribe((data:Sportista[])=>{
      this.broj=data.length;
    });


   
  



  }



 


  sportisti:Sportista[];

  sportoviNaziv: SportDisciplinaT[];
  disciplineNaziv: SportDisciplinaT[];

  vodja: Korisnik;
  imeprezime: string = "";
  pol: string = "";
  sport: string = "";
  disciplina: string = "";
  zemlja: string;
  disciplinaS: string[];
  vrsta: string = "";


  broj:number;
  sporttim:Sport[];

  odjava() {
    localStorage.removeItem('ulogovan');
    this.router.navigate(['pocetna']);
  }

  dodajSportistu() {



    this.takmicenjeServis.pretragapoparam(this.sport, this.disciplina, "", this.pol).subscribe((data: Takmicenje) => {
      if (data) {
        alert('Prijava za ovaj sport i disciplinu je zavrsena.');





      } else {







        this.disciplinaS = [];
        this.disciplinaS.push(this.disciplina);

        this.sportistaServis.dohvatiSportistu(this.imeprezime, this.sport).subscribe((data: Sportista) => {
          if (data) {

            this.sportistaServis.apdejtujSportistu(this.imeprezime, this.zemlja, this.sport, this.disciplina, this.pol).subscribe(response => {

              if (response['poruka'] == 'promenjeno') {

                alert('Uspesno dodata disciplina sportisti');

              } else {
                alert('Greska, nije promenjen');
              }



            })




          } else {

            this.sportistaServis.dodajSportistu(this.imeprezime, this.zemlja, this.sport, this.disciplinaS, this.pol).subscribe(response => {


              if (response['poruka'] == 'sportista dodat') {

                alert('Dodat sportista');


              } else {
                alert('Nije dodat sportista');
              }

            });


          }
        })

      }
    });


  }





  esport: string = "";
  edisciplina: string = "";
  epol: string = "";
  emin: number;
  emax: number;
  eekipa: string[];

  len: number;


  dodajEkipu() {

    this.len = this.eekipa.length;

    this.takmicenjeServis.pretragapoparam(this.esport, this.edisciplina, "e", this.epol).subscribe((data: Takmicenje) => {
      if (data) {
        alert('Prijava za ovaj sport i disciplinu je zavrsena.');





      } else {



        this.sportServis.pretragapoparam(this.esport, this.edisciplina, "e").subscribe((data: SportDisciplina) => {


          this.emin = data.min;
          this.emax = data.max;
          
        





          
        if (this.len > this.emax) {
          alert('Greska. Ekipa mora imati odredjen broj clanova.');
        } else {
          if (this.len < this.emin) {
            alert('Greska. Ekipa mora imati odredjen broj clanova.');

          } else {



            this.ekipaServis.dodajEkipu(this.esport, this.edisciplina, this.zemlja, this.epol, this.eekipa).subscribe(response => {


              if (response['poruka'] == 'ekipa dodata') {

                alert('Dodata ekipa');


              } else {
                alert('Nije dodata ekipa');
              }

            });
          }
        }




        });
        
      


      }
    });

  }

  dohvatiSportiste() {

    this.sportistaServis.dohvatiSportistee(this.esport, this.edisciplina, this.epol, this.zemlja).subscribe((data: Sportista[]) => {
      this.sportisti = data;
    })
  }


  ispisi(){
    
    
    let len=this.sportoviNaziv.length;

    this.sporttim= new Array<Sport>();
    
    //this.sporttim.length=len;

    for(let i=0;i<len;i++){
      
      
      this.sportistaServis.prebrojSport(this.zemlja,this.sportoviNaziv[i].naziv).subscribe((data:Sportista[])=>{
        this.sporttim[i]=new Sport(this.sportoviNaziv[i].naziv,data.length);
     
      })
    }
  }




}
