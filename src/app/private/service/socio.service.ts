import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socio } from '../models/socio';

@Injectable({
    providedIn: 'root'
}) export class SocioService {
    constructor(private http: HttpClient) { }

    urlApi = 'http://localhost:8000/api/v1/socios/';

    buscarSocios(): Observable<Socio[]> {
        return this.http.get<Socio[]>(`${this.urlApi}`);
    }

    buscarSocio(data: string): Observable<Socio> {
        return this.http.get<Socio>(`${this.urlApi}data/${data}`);
    }

    salvarSocio(plano: Socio): Observable<unknown> {
        return this.http.post(`${this.urlApi}`, plano);
    }

    updateSocio(iSocio: number, socio: Socio): Observable<Socio> {
        return this.http.put<Socio>(`${this.urlApi}${iSocio}`, socio);
    }

    alterarPlanoSocio(idPessoa: number, idPlanoNovo: number): Observable<any> {

        const url = `${this.urlApi}${idPessoa}/alterar-plano`;

        const body = {
            id_plano: idPlanoNovo
        };

        return this.http.patch(url, body);
    }
}
