import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { FormsModule } from '@angular/forms';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistracijaComponent } from './registracija/registracija.component';
import { VodjaComponent } from './vodja/vodja.component';
import { DelegatComponent } from './delegat/delegat.component';
import { OrganizatorComponent } from './organizator/organizator.component';
import { NeregistrovaniComponent } from './neregistrovani/neregistrovani.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RasporedComponent } from './raspored/raspored.component';
import { RezultatComponent } from './rezultat/rezultat.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    PrijavaComponent,
    PromenaLozinkeComponent,
    RegistracijaComponent,
    VodjaComponent,
    DelegatComponent,
    OrganizatorComponent,
    NeregistrovaniComponent,
    RasporedComponent,
    RezultatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
