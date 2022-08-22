import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Zemlja } from '../models/zemlja';
import { ZemljaService } from '../zemlja.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(private korisnikServis: KorisnikService, private router: Router, private zemljeServis: ZemljaService) { }

  ngOnInit(): void {

    this.korisnickoime = "";
    this.lozinka = "";
    this.ime = "";
    this.prezime = "";
    this.lozinkap = "";
    this.email = "";
    this.nacionalnost = "";
    this.tip = "";
  
    this.zemljeServis.ucesnice().subscribe((data: Zemlja[]) => {
      this.zemlje = data;
    });
   

  }

  zemlje: Zemlja[];
  ime: string;
  prezime: string;
  korisnickoime: string;
  lozinka: string;
  lozinkap: string;
  nacionalnost: string;
  email: string;
  tip: string;


  agree: boolean;


  poruka: string;

  registruj() {

  this.poruka = "";

  
    // if (this.agree==true) {


    /* var forms = document.querySelectorAll('.needs-validation');


    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {

          event.preventDefault()
          event.stopPropagation()
          localStorage.setItem('greska', 'true');
        }

        form.classList.add('was-validated')
      }, false)
    });
 */
    //let test = this.proveriLozinku();




    if( (this.lozinka != this.lozinkap) || (this.lozinka == "")|| (this.tip == "") || (this.korisnickoime == "") ||(this.ime == "")  ||(this.prezime == "") || (this.nacionalnost == "")) {

      if (this.lozinka != this.lozinkap) {
        this.poruka = 'Lozinke se moraju poklapati.';
        
      }
      else {
        this.poruka = 'Morate popuniti sva polja ispravno.';
        // alert('Lozinka mora biti sledeceg fromata: 8-12 karaktera, pocinje sa malim ili velikim slovom. Minimum 1 veliko, bar 3 mala slova. Bar 2 broja i bar 2 specijalna karaktera. Maks br uzastopnih karaktera 3.');
        
      }


    } else {

      //(?=.*\d{2,})(?=.*[a-z]{3,})(?=.*[A-Z])(?=.*\W).{8,12}
      //var strongRegex = new RegExp("^(?=.*[a-z]{3,})(?=.*[A-Z]{1,})(?=.*[0-9]{2,})(?=.*[!@#\$%\^&\*]{2,}).{8,12}$");
      var strongRegex = new RegExp("^(?=[a-zA-Z])(?=.*[a-z].*[a-z].*[a-z])(?=.*[A-Z])(?=.*[0-9].*[0-9])(?=.*[!@#$%^&*~].*[!@#$%^&*~]).{8,12}$");

     // var telRegex = /([A-Z]{1}(?=.*\d{2,})(?=.*[a-z]{3,})(?=.*\W{2,}).{8,12})|([a-z]{1}(?=.*\d{2,})(?=.*[a-z]{3,})(?=.*\W{2,}).{8,12})/
      if (!strongRegex.test(this.lozinka)) {
        this.poruka='Lozinka mora biti sledeceg fromata: 8-12 karaktera, pocinje sa malim ili velikim slovom. Minimum 1 veliko, bar 3 mala slova. Bar 2 broja i bar 2 specijalna karaktera. Maks br uzastopnih karaktera 3.';
        
        

      } else {

        this.korisnikServis.korisnickoime(this.korisnickoime).subscribe((response) => {
          if (response) {
            this.poruka = 'Korisnicko ime je zauzeto.'
          } else {






            this.korisnikServis.registracija(this.korisnickoime, this.lozinka, this.ime, this.prezime, this.nacionalnost, this.email, this.tip).subscribe(response => {
              if (response['message'] == 'user added') {
                alert('Korisnicki zahtev je poslat.');
                this.router.navigate(['prijava']);
              } else {
                alert('Korisnicki zahtev nije poslat.');
                console.log(response['message']);
              }
            });

            

          }
        });

      }
    }
    //}
    // else this.poruka = 'Morate se sloziti sa uslovima koriscenja.'





  }

  odjava() {
    localStorage.removeItem('ulogovan');
    this.router.navigate(['pocetna']);
  }


  


}

