import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EkipaService } from '../ekipa.service';
import { KorisnikService } from '../korisnik.service';
import { Ekipa } from '../models/ekipa';
import { Korisnik } from '../models/korisnik';
import { Lokacija } from '../models/lokacija';
import { PodrzaniSportoviDiscipline } from '../models/podrzanisportovidiscipline';
import { Rekord } from '../models/rekord';
import { SportDisciplina } from '../models/sportdisciplina';
import { SportDisciplinaT } from '../models/sportdisciplinat';
import { Sportista } from '../models/sportista';
import { Takmicenje } from '../models/takmicenje';
import { SportService } from '../sport.service';
import { SportistaService } from '../sportista.service';
import { TakmicenjeService } from '../takmicenje.service';
import { ZemljaService } from '../zemlja.service';

@Component({
  selector: 'app-organizator',
  templateUrl: './organizator.component.html',
  styleUrls: ['./organizator.component.css']
})
export class OrganizatorComponent implements OnInit {

  constructor(private router: Router, private sportistiService: SportistaService, private sportoviService: SportService, private zemljaServis: ZemljaService, private korisnikServis: KorisnikService, private takmicenjeServis: TakmicenjeService, private ekipaServis:EkipaService) { }


  ngOnInit(): void {


    this.dohvatiRekorde();
    this.dohvatiLokacije();
    this.dohvatiSportove();
    this.dohvatiDiscipline();

    this.dohvatiDelegate();
    this.dohvatiSporoveDiscipline();


    this.dohvatiZahteve();
    // this.dohvatiSporove();
    // this.dohvatiPodrzaneSporoveDiscipline();

    this.delegatiporuka="";
  }
  total: number;
  page: number = 1;

  rekordi: Rekord[];

  novisport: string;
  novadisciplina: string;
  novavrsta: string;
  min: number;
  max: number;

  sportovidiscipline: SportDisciplina[];
  lokacije: Lokacija[];
  delegati: Korisnik[];
  ekipe:Ekipa[];
  korisniciZahtev:Korisnik[];
  //podrzanisportovidiscipline:PodrzaniSportoviDiscipline[];
  sportisti:Sportista[];
  sportoviNaziv: SportDisciplinaT[];
  disciplineNaziv: SportDisciplinaT[];

  tsport: string;
  tdisciplina: string="";
  tformat: string;
  tpol: string;
  tvrsta: string="i";
  tlokacija: string;
  tdatump: Date;
  tdatumpd: string; tdatumpm: string; tdatumpy: string;
  tdatumk: Date;
  tdatumkd: string; tdatumkm: string; tdatumky: string;
  tdelegat: string[];

  tekipe:string[]=[];
  tsportisti:string[]=[];



  dohvatiSportiste() {

    this.sportistiService.dohvatiSportiste(this.tsport,this.tdisciplina,this.tpol).subscribe((data: Sportista[]) => {
      this.sportisti = data;
    });


  }

 


  dohvatiEkipe() {

    this.ekipaServis.dohvatiEkipe(this.tesport,this.tepol).subscribe((data: Ekipa[]) => {
      this.ekipe = data;
    });


  } 
  dohvatiZahteve(){
    this.korisnikServis.dohvatiZahteve().subscribe((data: Korisnik[]) => {
      this.korisniciZahtev = data;

    })
  }


  dohvatiRekorde() {

    this.sportistiService.dohvatiRekorde().subscribe((data: Rekord[]) => {
      this.rekordi = data;
      this.total = data.length;
    });


  }
  dohvatiLokacije() {
    this.zemljaServis.dohvatiLokacije().subscribe((data: Lokacija[]) => {
      this.lokacije = data;

    })

  }

  dohvatiSportove() {
    this.sportoviService.dohvatiSportove().subscribe((data: SportDisciplinaT[]) => {
      this.sportoviNaziv = data;
    })
  }

  dohvatiDiscipline() {
    this.sportoviService.dohvatiDiscipline().subscribe((data: SportDisciplinaT[]) => {
      this.disciplineNaziv = data;
    })
  }

  dohvatiDelegate() {
    this.korisnikServis.dohvatiDelegate().subscribe((data: Korisnik[]) => {
      this.delegati = data;

    })

  }
  dohvatiSporoveDiscipline() {//regisr
    this.sportoviService.dohvatiSportoveDiscipline().subscribe((data: SportDisciplina[]) => {
      this.sportovidiscipline = data;

    })

  }

  /* dohvatiPodrzaneSporoveDiscipline(){
    this.sportoviService.dohvatiPodrzaneSportoveDiscipline().subscribe((data: PodrzaniSportoviDiscipline[]) => {
      this.podrzanisportovidiscipline = data;

    })

  } */


  odjava() {
    localStorage.removeItem('ulogovan');
    this.router.navigate(['pocetna']);
  }



  dodajsportdisciplinu() {

    this.sportoviService.pretragapoparam(this.novisport, this.novadisciplina, this.novavrsta).subscribe((date: SportDisciplina) => {

      if (date) {
        alert('Sport  je vec unet.');


      } else {
       // alert(date.sport);


        this.sportoviService.dodaj(this.novisport, this.novadisciplina, this.novavrsta, this.min, this.max).subscribe(response => {
          if (response['poruka'] == 'sport dodat') {
            alert('Sport  je dodat.');
          } else {
            alert('Sport nije dodat.');
            console.log(response['poruka']);
          }
        });
      }
    });

    this.dohvatiSporoveDiscipline();

  }

 


  proveriDostupnostDelegata(delegat){

    this.delegatiporuka="";

    delegat.forEach(del => {
      this.korisnikServis.proveriDelegata(del).subscribe((data:Takmicenje[])=>{
        if(data){

          let l=data.length;
          if(l>=3){
            this.delegatiporuka=this.delegatiporuka+""+del+" nije dostupan. ";
          }
        }else{
         // alert(del+ 'je dostupan')

        }
      })
      
    }); 


  }
//id:number;

delegatiporuka:string="";
id:number=0;

  dodajTakmicenje() {
   

    // this.tdatump = new Date("2020-01-25");
    // this.tdatump.setDate(parseInt(this.tdatumpd));
    // this.tdatump.setMonth(parseInt(this.tdatumpm)-1);
    // this.tdatump.setFullYear(parseInt(this.tdatumpy));
    // alert(this.tdatump);
    // this.tdatumk = new Date("2020-01-25");
    // this.tdatumk.setDate(parseInt(this.tdatumkd));
    // this.tdatumk.setMonth(parseInt(this.tdatumkm)-1);
    // this.tdatumk.setFullYear(parseInt(this.tdatumky));
    //alert(this.tdatumk);

   

    this.sportoviService.pretragapoparam(this.tsport, this.tdisciplina,"i").subscribe((date:SportDisciplina)=>{

      if(date){//ima sporta
        console.log("ok1");

        this.takmicenjeServis.pretragapoparam(this.tsport, this.tdisciplina,"i",this.tpol).subscribe((date:Takmicenje)=>{
      

          if(date){
            alert('Takmicenje vec postoji formirano');

          }else{

          
            this.takmicenjeServis.dohvatiTakmicenja().subscribe((niz:Takmicenje[])=>{
              this.id=niz.length+1;
              
            
            console.log(this.id);
            this.takmicenjeServis.dodajTakmicenje(this.tsport, this.tdisciplina, this.tformat, this.tpol, this.tvrsta, this.tdatump, this.tdatumk, this.tlokacija, this.tdelegat, this.tsportisti,this.id).subscribe((response) => {
              if (response['poruka'] == 'takmicenje dodato') {
                alert('Takmicenje  je dodato.');
              } else {
                alert('Takmicenje nije dodato.');
                console.log(response['poruka']);
              }
            });
});



          }


        });


    





  }else{

    alert('Sport nije registrovan.')


  }




  });




  }//dodajtakmicenje





  odobri(korisnickoime,z,tip){

   
    if(tip=="delegat"){

      let deltakm:Takmicenje[];

      this.takmicenjeServis.nadjiDelegata(korisnickoime).subscribe((data:Takmicenje[])=>{
        deltakm=data;
      });

      if(deltakm){
      let len=deltakm.length;
      if(len>=3){
        alert('Zahtev za delegata nije odobren, vec vodi 3 takmicenja');
      }else{
        this.korisnikServis.zahtevTrue(korisnickoime).subscribe(response=>{
          if(response['poruka']=='promenjeno')
          alert('Zahtev za delegata odobren');
          else{
            alert('Zahtev za delegata nije odobren');
          }
        });
      }
    
    }else{
      this.korisnikServis.zahtevTrue(korisnickoime).subscribe(response=>{
        if(response['poruka']=='promenjeno')
        alert('Zahtev za delegata odobren');
        else{
          alert('Zahtev za delegata nije odobren');
        }
      });

    }




    }else{
      if(tip=="vodja"){

        this.korisnikServis.traziVodju(z).subscribe((data:Korisnik)=>{
         console.log(data);
          if(data){
            console.log(data);
            alert('Vodja te zemlje vec postoji.');
          }else{
            this.korisnikServis.zahtevTrue(korisnickoime).subscribe(response=>{
              if(response['poruka']=='promenjeno')
              alert('Zahtev za vodju odobren');
              else{
                alert('Zahtev za vodju nije odobren');
              }
            })
          }
        })


      }
    }
  

  }

tesport:string;
tedisciplina:string="";
teformat:string;
tepol:string;
tevrsta:string="e";
tedatumpd:string;tedatumpm:string;
tedatumpy:string;tedatumkm:string;
tedatumkd:string;tedatumky:string;
telokacija:string;
tedelegat:string[];
tedatump:Date;
tedatumk:Date;




  dodajTakmicenjeE(){
    

    // this.tedatump = new Date("2020-01-01");
    // this.tedatump.setDate(parseInt(this.tedatumpd));
    // this.tedatump.setMonth(parseInt(this.tedatumpm)-1);
    // this.tedatump.setFullYear(parseInt(this.tedatumpy));
    //alert(this.tedatump);
    // this.tedatumk = new Date("2020-01-25");
    // this.tedatumk.setDate(parseInt(this.tedatumkd));
    // this.tedatumk.setMonth(parseInt(this.tedatumkm)-1);
    // this.tedatumk.setFullYear(parseInt(this.tedatumky));
   // alert(this.tedatumk);

   

    this.sportoviService.pretragapoparam(this.tesport, this.tedisciplina,this.tevrsta).subscribe((date:SportDisciplina)=>{

      if(date){//ima sporta

        this.takmicenjeServis.pretragapoparam(this.tesport, this.tedisciplina,this.tevrsta,this.tepol).subscribe((date:Takmicenje)=>{
      

          if(date){
            alert('Takmicenje vec postoji formirano');

          }else{

           
            this.takmicenjeServis.dohvatiTakmicenja().subscribe((niz:Takmicenje[])=>{
              this.id=niz.length+1;
           
            this.takmicenjeServis.dodajTakmicenje(this.tesport, this.tedisciplina, this.teformat, this.tepol, this.tevrsta, this.tedatump, this.tedatumk, this.telokacija, this.tedelegat, this.tekipe,this.id).subscribe((response) => {
             // alert(this.id);
              if (response['poruka'] == 'takmicenje dodato') {
                alert('Takmicenje  je dodato.');
              } else {
                alert('Takmicenje nije dodato.');
                console.log(response['poruka']);
              }
            });
 });



          }


        });


    





  }else{

    alert('Sport nije registrovan.')


  }




  });



  }




}
