import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atleta } from 'src/app/public/models/atleta';

@Injectable({
    providedIn: 'root'
}) export class AtletaService {
    constructor(private http: HttpClient) { }

    urlApi = 'http://localhost:8000/api/v1/atletas/';

    buscarAtletas(): Observable<Atleta[]> {
        return this.http.get<Atleta[]>(`${this.urlApi}`);
    }

    buscarAtleta(): Observable<Atleta> {
        return this.http.get<Atleta>(`${this.urlApi}`);
    }

    deletarAtleta(iAtleta: number): Observable<void> {
        return this.http.delete<void>(`${this.urlApi}${iAtleta}`);
    }

    salvarAtleta(atleta: any): Observable<any> {
        return this.http.post<any>(`${this.urlApi}`, atleta);
    }

    editarAtleta(iAtleta: number, atleta: any): Observable<Atleta> {
        return this.http.put<Atleta>(`${this.urlApi}${iAtleta}`, atleta);
    }


}
