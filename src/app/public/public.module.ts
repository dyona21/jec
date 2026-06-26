import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PublicRoutingModule } from './public-routing.module';
import { InicioComponent } from './inicio/homePage/inicio.component';
import { CadastroSocioComponent } from './cadastroSocio/cadastro-socio.component';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { ListaJogadoresComponent } from './elenco/listaElenco/lista-jogadores.component';
import { CadastroJogadorComponent } from './elenco/cadastroJogadores/cadastro-jogador.component';
import { HttpClientModule } from '@angular/common/http';
import { IdadePipe } from '../pipes/idade.pipe';
import { ListaPartidasComponent } from './partidas/lista-partidas/lista-partidas.component';

@NgModule({
  declarations: [
    InicioComponent,
    CadastroSocioComponent,
    LoginComponent,
    ListaJogadoresComponent,
    CadastroJogadorComponent,
    IdadePipe,
    ListaPartidasComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDialogModule,
    HttpClientModule
  ],
  entryComponents: [CadastroSocioComponent, LoginComponent],
  exports: []
})
export class PublicModule { }
