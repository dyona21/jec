import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PublicRoutingModule } from './public-routing.module';
import { InicioComponent } from './inicio/homePage/inicio.component';
import { CadastroSocioComponent } from './cadastroSocio/cadastro-socio.component';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [InicioComponent, CadastroSocioComponent, LoginComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDialogModule
  ],
  entryComponents: [CadastroSocioComponent, LoginComponent],
  exports: []
})
export class PublicModule { }
