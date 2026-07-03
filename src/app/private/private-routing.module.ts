import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaSocioComponent } from './areaSocio/area-socio.component';
import { ListaJogadoresComponent } from './jogadores/lista/lista-jogadores.component';
import { ListaAdmPartidasComponent } from './partidas/lista/lista-adm-partidas.component';

const routes: Routes = [

  { path: '', component: AreaSocioComponent },
  { path: 'jogadores', component: ListaJogadoresComponent },
  { path: 'jogos', component: ListaAdmPartidasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
