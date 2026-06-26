import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atleta } from 'src/app/public/models/atleta';

@Injectable({
    providedIn: 'root'
}) export class AtletaService {
    constructor(private http: HttpClient) { }

    urlApi = 'http://localhost:4200/api/v1/atletas/';

    buscarAtletas(): Observable<Atleta[]> {
        return this.http.get<Atleta[]>(`${this.urlApi}`);
    }

    buscarAtleta(): Observable<Atleta> {
        return this.http.get<Atleta>(`${this.urlApi}`);
    }

    deletarAtleta(): Observable<void> {
        return this.http.delete<void>(`${this.urlApi}`);
    }

    salvarAtleta(atleta: Atleta): Observable<Atleta> {
        return this.http.post<Atleta>(`${this.urlApi}`, atleta);
    }

    editarAtleta(iAtleta: number, atleta: Atleta): Observable<Atleta> {
        return this.http.put<Atleta>(`${this.urlApi}${iAtleta}`, atleta);
    }

}
