import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partida } from 'src/app/public/models/partida';

@Injectable({
    providedIn: 'root'
}) export class PartidaService {
    constructor(private http: HttpClient) { }

    urlApi = 'http://localhost:8000/api/v1/partidas/';

    buscarPartidas(): Observable<Partida[]> {
        return this.http.get<Partida[]>(`${this.urlApi}`);
    }

    buscarPartida(data: string): Observable<Partida> {
        return this.http.get<Partida>(`${this.urlApi}data/${data}`);
    }

    salvarPartida(partida: Partida): Observable<unknown> {
        return this.http.post(`${this.urlApi}`, partida);
    }

    updatePartida(iPartida: number, partida: Partida): Observable<Partida> {
        return this.http.put<Partida>(`${this.urlApi}${iPartida}`, partida);
    }

}
