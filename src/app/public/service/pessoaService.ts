import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
}) export class PessoaService {

    constructor(private http: HttpClient) { }

    urlAPi = 'http://localhost:4200/api/v1/pessoas/';

    buscarPessoas(): Observable<Pessoa[]> {
        return this.http.get<Pessoa[]>(`${this.urlAPi}`);
    }

    buscarPessoa(iPessoa: number): Observable<Pessoa> {
        return this.http.get<Pessoa>(`${this.urlAPi}${iPessoa}`);
    }

    salvarPessoa(pessoa: Pessoa): Observable<Pessoa> {
        return this.http.post<Pessoa>(`${this.urlAPi}`, pessoa);
    }

    deletarPessoa(iPessoa: number): Observable<any> {
        return this.http.delete<Observable<any>>(`${this.http}${iPessoa}`);
    }

    atualizarPessoa(iPessoa: number, pessoa: Pessoa): Observable<Pessoa> {
        return this.http.put<Pessoa>(`${this.urlAPi}${iPessoa}`, pessoa);
    }
}
