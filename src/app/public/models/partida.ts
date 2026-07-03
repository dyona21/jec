import { Competicao } from './competicao';

export class Partida {
    iPartida: number;
    adversario: string;
    dataHora: string;
    local: string;
    golsJec: number;
    golsAdversario: number;
    competicao: Competicao;
    descricao: string;
    linkLances: string;
}
