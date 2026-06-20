import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Competicao } from 'src/app/public/model/competicao';

@Injectable({
    providedIn: 'root'
}) export class CompeticaoService {
    constructor(private http: HttpClient) { }

    urlApi = 'http://localhost:4200/api/v1/partidas/';

    buscarCompeticoes(): Observable<Competicao[]> {
        return this.http.get<Competicao[]>(`${this.urlApi}`);
    }

    buscarCompeticao(iCompeticao: number): Observable<Competicao> {
        return this.http.get<Competicao>(`${this.urlApi}${iCompeticao}`);
    }

}
