import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component'
import { PaginasWebComponent } from './paginas-web/paginas-web.component';
import { LogotiposComponent} from './logotipos/logotipos.component';
import { PublicidadComponent} from './publicidad/publicidad.component';
import { CreaTuMarcaComponent} from './crea-tu-marca/crea-tu-marca.component';
import { QuienesSomosComponent} from './quienes-somos/quienes-somos.component';
import { ContactanosComponent} from './contactanos/contactanos.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'paginas-web',component:PaginasWebComponent},
  {path:'logotipos',component:LogotiposComponent},
  {path:'publicidad',component:PublicidadComponent},
  {path:'creaTuMarca',component:CreaTuMarcaComponent},
  {path:'quienesSomos',component:QuienesSomosComponent},
  {path:'contactanos',component:ContactanosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
