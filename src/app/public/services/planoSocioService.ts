import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanoSocio } from '../models/palnoSocio';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
}) export class PlanoSocioService {

    constructor(private http: HttpClient) { }

    urlApi = 'http://localhost:4200/api/v1/pessoas/';

    buscarPlanos(): Observable<PlanoSocio[]> {
        return this.http.get<PlanoSocio[]>(`${this.urlApi}`);
    }
}
