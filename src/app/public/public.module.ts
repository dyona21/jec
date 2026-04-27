import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PublicRoutingModule } from './public-routing.module';
import { InicioComponent } from './inicio/homePage/inicio.component';

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatIconModule
  ],
  exports: []
})
export class PublicModule { }
