import { Component } from '@angular/core';
import { NavegarService } from 'src/app/core/services/navegar-service';
import { CadastroSocioComponent } from '../../cadastro/cadastro-socio.component';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
    constructor(
        private navegarService: NavegarService
    ) {

    }

    abrirCadastroSocio() {
        this.navegarService.abrirModal(CadastroSocioComponent, null);
    }
}
