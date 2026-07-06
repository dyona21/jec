import { Component, Inject, OnInit } from '@angular/core';
import { Partida } from 'src/app/public/models/partida';
import { PartidaService } from '../../service/partida.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Competicao } from 'src/app/public/models/competicao';

@Component({
    selector: 'app-cadastro-partida',
    templateUrl: './cadastro-partida.component.html',
    styleUrls: ['./cadastro-partida.component.scss']
}) export class CadastroPartidaComponent implements OnInit {
    model: Partida;
    data: string;
    competicoes: string[] = [
        'LNF',
        'CATARINENSE',
    ];
    competicao: string;

    constructor(
        private partidaService: PartidaService,
        private dialogRef: MatDialogRef<CadastroPartidaComponent>,
        @Inject(MAT_DIALOG_DATA) public dados: any
    ) { }

    ngOnInit(): void {
        this.incializaModel();
        if (this.dados) {
            this.editaDados();
        }
    }

    editaDados() {
        this.model.adversario = this.dados.adversario;
        this.model.iPartida = this.dados.iPartida;
        this.model.dataHora = this.dados.dataHora;
        this.model.descricao = this.dados.descricao;
        this.model.golsJec = this.dados.golsJec;
        this.model.golsAdversario = this.dados.golsAdversa;
        this.model.linkLances = this.dados.linkDosLances;
        this.model.local = this.dados.local;
        this.competicao = this.dados.competicao.nomeCompeticao;
    }

    incializaModel() {
        this.model = new Partida();
        this.model.competicao = new Competicao();
    }

    verificaCompeticao() {
        if (this.competicao === 'LNF') {
            this.model.competicao.iCompeticao = 1;
            this.model.competicao.nomeCompeticao = this.competicao;
        } else if (this.competicao === 'CATARINENSE') {
            this.model.competicao.iCompeticao = 2;
            this.model.competicao.nomeCompeticao = this.competicao;
        }
    }

    salvar() {
        if (!this.model) { return; }
        this.verificaCompeticao();

        const next = (retorno) => {
            this.dialogRef.close({
                alterou: true
            });
        };

        const err = (erro) => {
            console.error(erro);
        };
        const payloadParaOBackend = {
            adversario: this.model.adversario,
            data_hora: this.model.dataHora,
            local: this.model.local,
            id_competicao: this.model.competicao.iCompeticao,
            gols_jec: Number(this.model.golsJec),
            gols_adversa: Number(this.model.golsAdversario),
            descricao: this.model.descricao,
            link_dos_lances: this.model.linkLances
        };
        const iPartida = this.model.iPartida ? this.model.iPartida : null;
        if (iPartida) {
            this.partidaService.updatePartida(iPartida, payloadParaOBackend).subscribe(next, err);
        } else {
            this.partidaService.salvarPartida(payloadParaOBackend).subscribe(next, err);
        }
    }

    fecharModal() {
        this.dialogRef.close();
    }
}
