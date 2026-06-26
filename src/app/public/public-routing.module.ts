import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/homePage/inicio.component';
import { ListaJogadoresComponent } from './elenco/listaElenco/lista-jogadores.component';
import { ListaPartidasComponent } from './partidas/lista-partidas/lista-partidas.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'elenco', component: ListaJogadoresComponent },
  { path: 'partidas', component: ListaPartidasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
