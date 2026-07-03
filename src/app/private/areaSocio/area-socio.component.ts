import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { NavegarService } from 'src/app/core/services/navegar-service';
import { Atleta } from 'src/app/public/models/atleta';
import { PlanoSocio } from 'src/app/public/models/palnoSocio';
import { Pessoa } from 'src/app/public/models/pessoa';
import { PessoaService } from 'src/app/public/services/pessoaService';
import { PlanoSocioComponent } from '../planoSocio/plano-socio.component';
import { PlanoSocioService } from '../service/plano-socio.service';

@Component({
    selector: 'app-socio-component',
    templateUrl: './area-socio.component.html',
    styleUrls: ['./area-socio.component.scss']
}) export class AreaSocioComponent implements OnInit {
    model: Pessoa;
    dadosDoSocio: any;
    atleta: Atleta;
    plano: PlanoSocio;

    constructor(
        private pessoaService: PessoaService,
        private router: Router,
        private navegarService: NavegarService,
        private localDialog: MatDialog,
        private planoSocioService: PlanoSocioService
    ) { }

    ngOnInit(): void {
        this.model = new Pessoa();
        this.pegaDadosSocio();
    }

    pegaDadosSocio() {
        const socioSalvo = localStorage.getItem('socioLogado');

        if (socioSalvo) {
            this.dadosDoSocio = JSON.parse(socioSalvo);
            this.atribuindoDados();
        }
    }

    atribuindoDados() {
        if (!this.dadosDoSocio) { return; }

        this.atleta = this.dadosDoSocio.atleta ? this.dadosDoSocio.atleta : null;
        this.plano = this.dadosDoSocio.plano ? this.dadosDoSocio.plano : null;
    }

    abrirModalModalidadeSocio() {
        const dialogRef = this.navegarService.abrirModal(
            PlanoSocioComponent,
            this.dadosDoSocio, null, '', this.localDialog
        );

        dialogRef.afterClosed().subscribe(retorno => {
            if (retorno.alterou) {
                const iPlano = retorno.iPlano;
                this.buscarDadosDoPlano(iPlano);
            }
        });
    }

    buscarDadosDoPlano(iPlano: number) {
        this.planoSocioService.buscarPlano(iPlano).subscribe((retorno) => {
            console.log(retorno);
            this.plano.nomePlano = retorno.nome_plano;
            this.plano.pagamento = retorno.forma_pagamento;
            this.plano.beneficios = retorno.beneficio;
            this.plano.vantagens = retorno.vantagens;
            this.plano.valor = retorno.valor;
            this.dadosDoSocio.plano.nomePlano = this.plano.nomePlano;
            this.dadosDoSocio.plano.nome_plano = this.plano.nomePlano;
            this.dadosDoSocio.plano = this.plano;
        });
    }

    sair() {
        localStorage.removeItem('socioLogado');
        this.router.navigate(['/']);
    }
}
