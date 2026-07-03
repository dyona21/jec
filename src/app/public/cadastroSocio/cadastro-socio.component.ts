import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Pessoa } from '../models/pessoa';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material';
import { PessoaService } from '../services/pessoaService';


@Component({
    selector: 'app-cadastro-socio',
    templateUrl: './cadastro-socio.component.html',
    styleUrls: ['./cadastro-socio.component.scss']
})
export class CadastroSocioComponent implements OnInit {
    model: Pessoa;
    planoSocio: string;
    menuAberto = false;
    planoEscolhido: number;
    planosDisponiveis: string[] = [
        'Sócio JEC Futsal Gold',
        'Sócio JEC Futsal Platina',
    ];

    constructor(
        private dialogRef: MatDialogRef<CadastroSocioComponent>,
        private pessoaService: PessoaService
    ) { }

    ngOnInit(): void {
        this.model = new Pessoa();
    }

    verificaPlanosocio() {
        if (this.planoSocio === 'Sócio JEC Futsal Gold') {
            this.planoEscolhido = 1;
        }
        if (this.planoSocio === 'Sócio JEC Futsal Platina') {
            this.planoEscolhido = 2;
        }
    }

    salvar(form: NgForm) {
        if (!form || !this.model) { return; }
        this.verificaPlanosocio();

        const cpfLimpo = this.model.cpf ? this.model.cpf.replace(/\D/g, '') : '';

        const objPessoaSocio = {
            nome: this.model.nome,
            cpf: cpfLimpo,
            email: this.model.email,
            senha: this.model.senha,
            data_nascimento: this.model.dataNascimento,
            adm: false,
            id_plano: this.planoEscolhido
        };

        const next = (retorno) => {
            console.log(retorno);
            this.fecharModal();
        };

        const error = (err) => {
            console.error(err);
        };
        this.pessoaService.salvarPessoaSocio(objPessoaSocio).subscribe(next, error);
    }

    fecharModal() {
        this.dialogRef.close();
    }

}
