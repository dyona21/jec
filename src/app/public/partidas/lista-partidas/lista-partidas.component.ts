import { Component, OnInit } from '@angular/core';
import { Partida } from '../../models/partida';
import { PartidaService } from '../../services/partidaService';

@Component({
    selector: 'app-lista-partidas',
    templateUrl: './lista-partidas.component.html',
    styleUrls: ['./lista-partidas.component.scss']
})
export class ListaPartidasComponent implements OnInit {
    filtroCompeticao = 'TODOS';

    listaPartidas: Partida[];

    partidasExibidas: Partida[] = [];

    constructor(private partidaService: PartidaService) { }

    ngOnInit() {
        this.buscarJogos();
    }

    buscarJogos() {
        this.filtroCompeticao = 'TODOS';

        const next = (retorno: any) => {
            this.listaPartidas = retorno.sort((a, b) => {
                const tempoA = new Date(a.data_hora).getTime();
                const tempoB = new Date(b.data_hora).getTime();

                return tempoA - tempoB;
            });

            this.partidasExibidas = this.listaPartidas;
        };

        const erro = (err) => {
            console.error(err);
        };

        this.partidaService.buscarPartidas().subscribe(next, erro);
    }

    filtrarPorCompeticao(competicao) {
        if (!competicao) {
            return;
        }

        this.filtroCompeticao = competicao;

        const next = (retorno: any) => {
            this.listaPartidas = retorno.sort((a, b) => {
                const tempoA = new Date(a.data_hora).getTime();
                const tempoB = new Date(b.data_hora).getTime();

                return tempoA - tempoB;
            });

            this.partidasExibidas = this.listaPartidas;

            this.partidasExibidas = this.listaPartidas.filter(partida => {
                return partida.competicao && partida.competicao.nomeCompeticao === competicao;
            });
        };

        const erro = (err) => {
            console.error(err);
        };

        this.partidaService.buscarPartidas().subscribe(next, erro);
    }

}
