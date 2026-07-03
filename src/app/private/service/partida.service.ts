import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Partida } from 'src/app/public/models/partida';

@Injectable({
    providedIn: 'root'
}) export class PartidaService {
    constructor(private http: HttpClient) { }

    urlApi = 'http://localhost:8000/api/v1/partidas/';

    buscarPartidas(): Observable<any[]> {
        return this.http.get<any[]>(`${this.urlApi}`).pipe(

            map((partidasDoBackend) => {

                return partidasDoBackend.map(partida => ({
                    iPartida: partida.id,
                    adversario: partida.adversario,
                    dataHora: partida.data_hora,
                    descricao: partida.descricao,
                    golsAdversa: partida.gols_adversa,
                    golsJec: partida.gols_jec,
                    idCompeticao: partida.id_competicao,
                    linkDosLances: partida.link_dos_lances,
                    local: partida.local,
                    competicao: partida.competicao
                }));

            })
        );
    }

    buscarPartida(data: string): Observable<Partida> {
        return this.http.get<Partida>(`${this.urlApi}data/${data}`);
    }

    salvarPartida(partida: any): Observable<any> {
        return this.http.post(`${this.urlApi}`, partida);
    }

    updatePartida(iPartida: number, partida: any): Observable<any> {
        return this.http.put<any>(`${this.urlApi}${iPartida}`, partida);
    }

    deletePartida(iPartida: number): Observable<any> {
        return this.http.delete<any>(`${this.urlApi}${iPartida}`);
    }

}
