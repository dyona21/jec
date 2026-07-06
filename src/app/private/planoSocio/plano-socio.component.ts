import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PlanoSocio } from 'src/app/public/models/palnoSocio';
import { PlanoSocioService } from '../service/plano-socio.service';
import { Pessoa } from 'src/app/public/models/pessoa';
import { SocioService } from '../service/socio.service';

@Component({
    selector: 'app-plano-socio',
    templateUrl: './plano-socio.component.html',
    styleUrls: ['./plano-socio.component.scss']
}) export class PlanoSocioComponent implements OnInit {
    model: PlanoSocio;
    socio: Pessoa;
    iPlanoAtual: number;
    planosDisponiveis: string[] = [
        'Sócio JEC Futsal Gold',
        'Sócio JEC Futsal Platina',
    ];
    competicao: string;

    constructor(
        @Inject(MAT_DIALOG_DATA) public dados: any,
        private dialogRef: MatDialogRef<PlanoSocioComponent>,
        private socioService: SocioService
    ) { }

    ngOnInit(): void {
        this.model = new PlanoSocio();
        this.socio = new Pessoa();
        this.atribuirDados();
    }

    atribuirDados() {
        if (!this.dados) { return; }
        this.socio.iPessoa = this.dados.id;
        this.iPlanoAtual = this.dados.idPlano;
    }

    fecharModal() {
        this.dialogRef.close();
    }

    salvar() {
        if (this.model.nomePlano === 'Sócio JEC Futsal Platina') {
            this.model.iPlanoSocio = 2;
        } else if (this.model.nomePlano === 'Sócio JEC Futsal Gold') {
            this.model.iPlanoSocio = 1;
        }
        const iPessoa = this.dados.id;
        const iPlanoSocio = this.model.iPlanoSocio;
        this.socioService.alterarPlanoSocio(iPessoa, iPlanoSocio).subscribe((retorno) => {
            if (retorno) {
                this.dialogRef.close({
                    alterou: true,
                    iPlano: iPlanoSocio
                });
            }
        });
    }


}
