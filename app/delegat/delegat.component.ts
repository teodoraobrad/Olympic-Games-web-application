import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { Raspored } from '../models/raspored';
import { Takmicenje } from '../models/takmicenje';
import { RasporedService } from '../raspored.service';
import { TakmicenjeService } from '../takmicenje.service';

@Component({
  selector: 'app-delegat',
  templateUrl: './delegat.component.html',
  styleUrls: ['./delegat.component.css']
})
export class DelegatComponent implements OnInit {

  constructor(private router:Router, private takmicenjeServis:TakmicenjeService, private rasporedServis:RasporedService) { }

  takmicenja:Takmicenje[];
  gotovatakmicenja:Takmicenje[];
  gotovitermini:Raspored[];
  delegat:Korisnik;
  
  ngOnInit(): void {
    this.takmicenjeServis.dohvatiTakmicenja().subscribe((data:Takmicenje[])=>{
      this.takmicenja=data;
    
    });

    this.delegat = JSON.parse(localStorage.getItem('ulogovan'));


    let danasnji= new Date();
    this.takmicenjeServis.dohvatiGotovaIndividualnaTakmicenja(danasnji).subscribe((data:Takmicenje[])=>{
      this.gotovatakmicenja=data;
    });
    this.rasporedServis.dohvatiGotoveTermine(danasnji).subscribe((data:Raspored[])=>{
      this.gotovitermini=data;
    })


  }


odjava(){
  localStorage.removeItem('ulogovan');
  this.router.navigate(['pocetna']);
}






}
