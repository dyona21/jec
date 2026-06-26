import { Component, OnInit } from '@angular/core';
import { Atleta } from '../../models/atleta';
import { AtletaService } from '../../services/atletaService';
import { LowerCasePipe } from '@angular/common';

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
                const pesoA = ordemTatica[a.posicao.toLowerCase()] || 99; // 99 se a posição não existir
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

        // 3. O nosso Dicionário de Tradução (Botão -> Banco de Dados)
        const mapaDePosicoes: any = {
            GOLEIROS: 'goleiro',
            FIXOS: 'fixo',
            ALAS: 'ala',
            PIVÔS: 'pivo',
        };

        // Pega a tradução correta
        const termoExato = mapaDePosicoes[posicaoBuscada];

        // 4. Filtra a lista com segurança
        this.jogadoresExibidos = this.listaJogadores.filter(jogador => {
            // O jogador.posicao && garante que não vai dar erro se a posição vier vazia
            return jogador.posicao && jogador.posicao.toLowerCase() === termoExato;
        });
    }
}
