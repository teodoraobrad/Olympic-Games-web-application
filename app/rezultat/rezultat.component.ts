import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { Rezultat } from '../models/rezultat';
import { Sportista } from '../models/sportista';
import { Takmicenje } from '../models/takmicenje';
import { RasporedService } from '../raspored.service';
import { SportistaService } from '../sportista.service';
import { TakmicenjeService } from '../takmicenje.service';

@Component({
  selector: 'app-rezultat',
  templateUrl: './rezultat.component.html',
  styleUrls: ['./rezultat.component.css']
})
export class RezultatComponent implements OnInit {

  constructor(private ruta:ActivatedRoute, private router:Router, private takmicenjeServis:TakmicenjeService, private sportistaServis:SportistaService, private rasporedServis:RasporedService) { }

  takmicenje:Takmicenje;
  delegat:Korisnik;
  ucesnici:Array<Sportista>;


  ngOnInit(): void {


    
    let id = this.ruta.snapshot.paramMap.get('id');

    this.takmicenjeServis.dohvatiTakmicenje(id).subscribe((data: Takmicenje) => {

      this.takmicenje = data;
    });

    

    this.delegat = JSON.parse(localStorage.getItem('ulogovan'));

//OFORMI REZULTATi



  }
  
  odjava() {
    localStorage.removeItem('ulogovan');
    this.router.navigate(['pocetna']);
  }

  //rezultati:Array<string>;

  rezultati:Rezultat[];
  rezultat:string;

  sportisti(){
    this.takmicenje.sportisti.forEach(sportista => {
      this.sportistaServis.dohvatiSportistu(sportista,this.takmicenje.sport).subscribe((data:Sportista)=>{
        
        if(data)this.ucesnici.push(data);
      })
    });


    ///this.rezultati= new Array<string>(this.ucesnici.length);

  }

  unesi(imeprezime,rezultat){

    this.rasporedServis.unesiRezultat(imeprezime,rezultat,this.takmicenje.sport,this.takmicenje.disciplina,this.takmicenje.vrsta,this.takmicenje.pol,"finale",this.delegat.korisnickoime, this.takmicenje.id).subscribe((resp)=>{

      if(resp['poruka']=='uneto')
      alert('Uner rezultat');
      else alert('Greska prilikom unosa');
    });


  }
}
