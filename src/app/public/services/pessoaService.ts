import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
}) export class PessoaService {

    constructor(private http: HttpClient) { }

    urlAPi = 'http://localhost:8000/api/v1/pessoas/';

    buscarPessoas(): Observable<Pessoa[]> {
        return this.http.get<Pessoa[]>(`${this.urlAPi}`);
    }

    buscarPessoa(iPessoa: number): Observable<Pessoa> {
        return this.http.get<Pessoa>(`${this.urlAPi}/${iPessoa}`);
    }

    salvarPessoaSocio(pessoa: any): Observable<any> {
        return this.http.post<any>(`${this.urlAPi}`, pessoa);
    }

    salvarPessoaJogador(pessoa: any): Observable<any> {
        return this.http.post<any>(`${this.urlAPi}jogador`, pessoa);
    }

    deletarPessoa(iPessoa: number): Observable<any> {
        return this.http.delete<Observable<any>>(`${this.http}${iPessoa}`);
    }

    atualizarPessoa(iPessoa: number, pessoa: Pessoa): Observable<Pessoa> {
        return this.http.put<Pessoa>(`${this.urlAPi}${iPessoa}`, pessoa);
    }

    login(cpfLogin: string, senhaLogin: string): Observable<any> {
        const login = {
            cpf: cpfLogin,
            senha: senhaLogin
        };
        return this.http.post(`${this.urlAPi}login`, login);
    }
}
