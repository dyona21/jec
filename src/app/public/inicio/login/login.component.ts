import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PessoaService } from '../../services/pessoaService';
import { Pessoa } from '../../models/pessoa';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    model: Pessoa;
    login = false;
    mensagemErro: string;
    listaSocios: Pessoa[] = [];

    constructor(
        private dialogRef: MatDialogRef<LoginComponent>,
        private pessoaService: PessoaService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.model = new Pessoa();
    }

    buscaSocios() {
        const next = (retorno) => {
            if (retorno) {
                this.listaSocios = retorno;
            }
        };

        const err = (error) => {
            console.error(error);
        };
        this.pessoaService.buscarPessoas().subscribe(next, err);
    }

    fecharModal() {
        this.dialogRef.close();
    }

    verificaSocio(): boolean {
        if (!this.listaSocios) { return; }
        for (const socio of this.listaSocios) {
            if ((this.model.senha === socio.senha) && (this.model.cpf === socio.senha)) {
                this.login = true;
                break;
            }
        }
        return this.login;
    }

    fazerLogin() {
        if (!this.model) { return; }
        const cpf = this.model.cpf;
        const senha = this.model.senha;

        const next = (retorno) => {
            console.log('retorno', retorno);
            if (retorno.status) {
                localStorage.removeItem('socioLogado');
                this.fecharModal();
                localStorage.setItem('socioLogado', JSON.stringify(retorno.pessoa));
                this.router.navigate(['/area-socio']).then(liberado => {
                    if (liberado) {
                        console.warn('Login efetuado.');
                    } else {
                        console.warn('O Angular bloqueou a viagem silenciosamente!');
                    }
                }).catch(erro => {
                    console.error('Erro grave ao tentar abrir a rota:', erro);
                });
            } else {
                this.mensagemErro = 'Erro encontrado';
            }
        };

        const error = (err) => {
            console.error(err);
            this.mensagemErro = 'Erro encontrado';
        };
        this.pessoaService.login(cpf, senha).subscribe(next, error);

    }


}
