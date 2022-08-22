import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DelegatComponent } from './delegat/delegat.component';
import { NeregistrovaniComponent } from './neregistrovani/neregistrovani.component';
import { OrganizatorComponent } from './organizator/organizator.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { RasporedComponent } from './raspored/raspored.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { RezultatComponent } from './rezultat/rezultat.component';
import { VodjaComponent } from './vodja/vodja.component';

const routes: Routes = [
  {path:'',component:PocetnaComponent},
  {path:'prijava',component:PrijavaComponent},
  {path:'registracija',component:RegistracijaComponent},
  {path:'promenaLozinke',component:PromenaLozinkeComponent},
  {path:'delegat',component:DelegatComponent},
  {path:'vodja',component:VodjaComponent},
  {path:'organizator',component:OrganizatorComponent},
  {path:'neregistrovani',component:NeregistrovaniComponent},
  {path: 'raspored/:id',component:RasporedComponent},
  {path: 'rezultat/:id',component:RezultatComponent},
  {path:'**',component:PocetnaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
