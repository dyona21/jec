import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Atleta } from 'src/app/public/models/atleta';
import { Pessoa } from 'src/app/public/models/pessoa';
import { AtletaService } from '../../service/atleta.service';
import { NavegarService } from 'src/app/core/services/navegar-service';
import { PessoaService } from 'src/app/public/services/pessoaService';
import { CadastroJogadorComponent } from '../cadastro/cadastro.jogador.component';

@Component({
    selector: 'app-lista-jogadores',
    templateUrl: './lista-jogadores.component.html',
    styleUrls: ['./lista-jogadores.component.scss']
}) export class ListaJogadoresComponent implements OnInit {
    model: Atleta;
    listaJogadores: Atleta[];
    dataSource: MatTableDataSource<Atleta> = new MatTableDataSource();
    colunasExibidas: string[] = ['nome', 'idade', 'numeroJogos', 'numeroGols', 'posicao', 'acoes'];

    constructor(
        private atletaService: AtletaService,
        private navegarService: NavegarService,
        private localDialog: MatDialog,
    ) { }

    ngOnInit(): void {
        this.inicializar();
        this.buscarAtletas();

    }

    inicializar() {
        this.model = new Atleta();
        this.model.pessoa = new Pessoa();
    }

    buscarAtletas() {

        const next = (pagina: any) => {
            const ordemTatica = {
                goleiro: 1,
                fixo: 2,
                ala: 3,
                pivo: 4
            };

            const listaOrdenada = pagina.sort((a, b) => {
                const pesoA = ordemTatica[a.posicao.toLowerCase()] || 99;
                const pesoB = ordemTatica[b.posicao.toLowerCase()] || 99;

                return pesoA - pesoB;
            });
            this.listaJogadores = listaOrdenada;
            this.dataSource.data = this.listaJogadores;
        };

        const error = (err) => {
            console.error(err);
        };

        this.atletaService.buscarAtletas().subscribe(next, error);
    }

    abrirModalCadastroAtleta() {
        const dialogRef = this.navegarService.abrirModal(
            CadastroJogadorComponent,
            null, null, '', this.localDialog
        );

        dialogRef.afterClosed().subscribe(retorno => {
            if (retorno.alterou) {
                this.buscarAtletas();
            }
        });
    }

    editarAtleta(a: Atleta) {
        const dialogRef = this.navegarService.abrirModal(
            CadastroJogadorComponent,
            a, null, '', this.localDialog
        );

        dialogRef.afterClosed().subscribe(retorno => {
            if (retorno.alterou) {
                this.buscarAtletas();
            }
        });
    }

    excluirAtleta(a: any) {
        console.log(a);
        const iAtleta = a.id_pessoa ? a.id_pessoa : null;

        if (!iAtleta) { return; }

        const next = () => {
            this.buscarAtletas();
        };

        const err = (erro) => {
            console.error(erro);
        };
        this.atletaService.deletarAtleta(iAtleta).subscribe(next, err);
    }
}
