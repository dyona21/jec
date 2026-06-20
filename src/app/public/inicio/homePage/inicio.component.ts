import { Component, ViewContainerRef } from '@angular/core';
import { NavegarService } from 'src/app/core/services/navegar-service';
import { CadastroSocioComponent } from '../../cadastroSocio/cadastro-socio.component';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../login/login.component';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

    constructor(
        private navegarService: NavegarService,
        private localDialog: MatDialog
    ) { }

    abrirCadastroSocio() {
        this.navegarService.abrirModal(
            CadastroSocioComponent,
            null,
            null,
            '',
            this.localDialog
        );
    }

    abrirLogin() {
        this.navegarService.abrirModal(
            LoginComponent,
            null,
            null,
            '',
            this.localDialog
        );
    }
}
