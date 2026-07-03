import { Component, OnInit } from '@angular/core';
import { Atleta } from '../../models/atleta';
import { AtletaService } from '../../services/atletaService';

@Component({
    selector: 'app-lista-jogadores',
    templateUrl: './lista-jogadores.component.html',
    styleUrls: ['lista-jogadores.component.scss']
}) export class ListaJogadoresComponent implements OnInit {

    processando: false;
    filtroPosicao = 'TODOS';
    listaJogadores: Atleta[];
    jogadoresExibidos: Atleta[];

    constructor(private atletaService: AtletaService) { }

    ngOnInit() {
        this.buscarAtletas();
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
            this.jogadoresExibidos = this.listaJogadores;
        };

        const error = (err) => {
            console.error(err);
        };

        this.atletaService.buscarAtletas().subscribe(next, error);
    }

    filtrarPorPosicao(posicaoBuscada: string) {
        this.filtroPosicao = posicaoBuscada;

        if (posicaoBuscada === 'TODOS') {
            this.jogadoresExibidos = this.listaJogadores;
            return;
        }

        const mapaDePosicoes: any = {
            GOLEIROS: 'goleiro',
            FIXOS: 'fixo',
            ALAS: 'ala',
            PIVÔS: 'pivo',
        };

        const termoExato = mapaDePosicoes[posicaoBuscada];

        this.jogadoresExibidos = this.listaJogadores.filter(jogador => {
            return jogador.posicao && jogador.posicao.toLowerCase() === termoExato;
        });
    }
}
