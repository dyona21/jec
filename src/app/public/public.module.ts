import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PublicRoutingModule } from './public-routing.module';
import { InicioComponent } from './inicio/homePage/inicio.component';
import { CadastroSocioComponent } from './cadastroSocio/cadastro-socio.component';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { LoginComponent } from './inicio/login/login.component';
import { ListaJogadoresComponent } from './elenco/listaElenco/lista-jogadores.component';
import { HttpClientModule } from '@angular/common/http';
import { IdadePipe } from '../pipes/idade.pipe';
import { ListaPartidasComponent } from './partidas/lista-partidas/lista-partidas.component';
import { PatrocinadoresComponent } from './inicio/patrocinadores/patrocinadores.component';
import { ContatoComponent } from './inicio/contato/contato.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    InicioComponent,
    CadastroSocioComponent,
    LoginComponent,
    ListaJogadoresComponent,
    IdadePipe,
    ListaPartidasComponent,
    PatrocinadoresComponent,
    ContatoComponent
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
    HttpClientModule,
    NgxMaskModule.forRoot(options)
  ],
  entryComponents: [CadastroSocioComponent, LoginComponent],
  exports: []
})
export class PublicModule { }
