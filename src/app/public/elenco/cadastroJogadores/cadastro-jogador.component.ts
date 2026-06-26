import { Component, OnInit } from '@angular/core';
import { Atleta } from '../../models/atleta';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-cadastro-jogador',
    templateUrl: './cadastro-jogador.component.html',
    styleUrls: ['./cadastro-jogador.component.scss']
}) export class CadastroJogadorComponent implements OnInit {
    model: Atleta;

    constructor(
        private dialogRef: MatDialogRef<CadastroJogadorComponent>
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
