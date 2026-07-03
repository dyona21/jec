import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanoSocio } from 'src/app/public/models/palnoSocio';

@Injectable({
    providedIn: 'root'
}) export class PlanoSocioService {
    constructor(private http: HttpClient) { }

    urlApi = 'http://localhost:8000/api/v1/planos/';

    buscarPlanos(): Observable<PlanoSocio[]> {
        return this.http.get<PlanoSocio[]>(`${this.urlApi}`);
    }

    buscarPlano(iPlano: number): Observable<any> {
        return this.http.get<PlanoSocio>(`${this.urlApi}${iPlano}`);
    }

    salvarPlano(plano: PlanoSocio): Observable<unknown> {
        return this.http.post(`${this.urlApi}`, plano);
    }

    updatePlano(iPlano: number, plano: PlanoSocio): Observable<PlanoSocio> {
        return this.http.put<PlanoSocio>(`${this.urlApi}${iPlano}`, plano);
    }

}
