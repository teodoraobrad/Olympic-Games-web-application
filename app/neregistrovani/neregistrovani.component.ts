import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SportDisciplinaT } from '../models/sportdisciplinat';
import { Sportista } from '../models/sportista';
import { Zemlja } from '../models/zemlja';
import { SportService } from '../sport.service';
import { SportistaService } from '../sportista.service';
import { ZemljaService } from '../zemlja.service';

@Component({
  selector: 'app-neregistrovani',
  templateUrl: './neregistrovani.component.html',
  styleUrls: ['./neregistrovani.component.css']
})
export class NeregistrovaniComponent implements OnInit {


  constructor(private zemljeServis: ZemljaService, private router: Router, private sportistiService:SportistaService, private sportoviService:SportService) { }

  ngOnInit(): void {
    
    

    this.ucesnice();
    this.pretraga();
    this.dohvatisportove();
    this.dohvatidiscipline();

  }

  imeprezime: string="";
  zemljaporekla: string="";
  pol: string="";
  sport: string ="";
  disciplina:string="";
  medalja:boolean=false;
  totalleng: any;
  totalleng2:any;
  page: number=1;
  page2: number=1;
  page3:number=1;

  perpage:number=10;

  zemlje: Zemlja[];
  sportovi:SportDisciplinaT[];
  discipline:SportDisciplinaT[];
  sportisti:Sportista[];


  ucesnice() {

    this.zemljeServis.ucesnice().subscribe((data: Zemlja[]) => {
      this.zemlje = data;
      this.totalleng = data.length;

    })
  }

  pretraga(){                                                       //
    this.sportistiService.pretraga(this.imeprezime,this.zemljaporekla,this.sport,this.pol, this.medalja, this.disciplina).subscribe((data:Sportista[])=>{
      
      this.sportisti=data;
      this.totalleng2=data.length;
    })

  }

  dohvatisportove(){
    this.sportoviService.dohvatiSportove().subscribe((data: SportDisciplinaT[]) => {
      this.sportovi = data;

    })

  }
  dohvatidiscipline(){
    this.sportoviService.dohvatiDiscipline().subscribe((data: SportDisciplinaT[]) => {
      this.discipline = data;

    })

  }

  odjava() {
    this.router.navigate(['pocetna']);
  }
}
