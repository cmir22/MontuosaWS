import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaginasWebComponent } from './paginas-web/paginas-web.component';
import { LogotiposComponent } from './logotipos/logotipos.component';
import { PublicidadComponent } from './publicidad/publicidad.component';
import { CreaTuMarcaComponent } from './crea-tu-marca/crea-tu-marca.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginasWebComponent,
    LogotiposComponent,
    PublicidadComponent,
    CreaTuMarcaComponent,
    QuienesSomosComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
