import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { AreaSocioComponent } from './areaSocio/area-socio.component';
import { MatDialogModule, MatIconModule, MatTableModule } from '@angular/material';
import { PlanoSocioComponent } from './planoSocio/plano-socio.component';
import { FormsModule } from '@angular/forms';
import { ListaJogadoresComponent } from './jogadores/lista/lista-jogadores.component';
import { CadastroJogadorComponent } from './jogadores/cadastro/cadastro.jogador.component';
import { ListaAdmPartidasComponent } from './partidas/lista/lista-adm-partidas.component';
import { CadastroPartidaComponent } from './partidas/cadastro/cadastro-partida.component';
import { IdadePipe } from './pipes/idade.pipe';
import { IConfig, NgxMaskModule } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AreaSocioComponent,
    PlanoSocioComponent,
    CadastroJogadorComponent,
    ListaJogadoresComponent,
    CadastroPartidaComponent,
    ListaAdmPartidasComponent,
    IdadePipe
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatTableModule,
    NgxMaskModule.forRoot(options)
  ],
  entryComponents: [
    PlanoSocioComponent,
    CadastroJogadorComponent,
    CadastroPartidaComponent
  ]
})
export class PrivateModule { }
