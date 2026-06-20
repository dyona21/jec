import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Pessoa } from '../model/pessoa';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material';


@Component({
    selector: 'app-cadastro-socio',
    templateUrl: './cadastro-socio.component.html',
    styleUrls: ['./cadastro-socio.component.scss']
})
export class CadastroSocioComponent implements OnInit {
    model: Pessoa;
    planoSocio: string;
    menuAberto = false;

    constructor(
        private dialogRef: MatDialogRef<CadastroSocioComponent>
    ) { }

    ngOnInit(): void {

    }

    salvar(form: NgForm) {
        console.log('formulario', form);
        if (!form) { return; }
    }

    fecharModal() {
        this.dialogRef.close();
    }

}
