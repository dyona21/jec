import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AtletaService } from '../../service/atleta.service';
import { PessoaService } from 'src/app/public/services/pessoaService';
import { Atleta } from 'src/app/public/models/atleta';
import { Pessoa } from 'src/app/public/models/pessoa';

@Component({
    selector: 'app-cadastro-jogador',
    templateUrl: './cadastro-jogador.component.html',
    styleUrls: ['./cadastro-jogador.component.scss']
})
export class CadastroJogadorComponent implements OnInit {

    model: Atleta;
    salvando = false;
    ehEdicao = false;

    constructor(
        private atletaService: AtletaService,
        private pessoaService: PessoaService,
        private dialogRef: MatDialogRef<CadastroJogadorComponent>,
        @Inject(MAT_DIALOG_DATA) public dados: any
    ) { }

    ngOnInit(): void {
        this.inicializar();
        if (this.dados) {
            console.log(this.dados);
            this.editar();
        }
    }

    editar() {
        this.ehEdicao = true;
        this.model.foto = this.dados.foto;
        this.model.iAtleta = this.dados.id_pessoa;
        this.model.pessoa.nome = this.dados.nome;
        this.model.numeroPartidas = this.dados.partidas;
        this.model.numeroGols = this.dados.gols;
        this.model.pessoa.dataNascimento = this.dados.data_nascimento;
        this.model.posicao = this.dados.posicao;
    }

    inicializar() {
        this.model = new Atleta();
        this.model.pessoa = new Pessoa();
    }

    onFotoSelecionada(event: Event) {
        const input = event.target as HTMLInputElement;
        const arquivo = input.files && input.files.length ? input.files[0] : null;

        if (!arquivo) { return; }

        const leitor = new FileReader();

        leitor.onload = () => {
            this.model.foto = leitor.result as string;
        };

        leitor.onerror = (erro) => {
            console.error('Erro ao ler a imagem selecionada.', erro);
        };

        leitor.readAsDataURL(arquivo);
    }

    salvar() {
        if (!this.model || this.salvando) { return; }

        this.salvando = true;

        const iAtleta = this.model.iAtleta ? this.model.iAtleta : null;

        const salvarOuAtualizarAtleta = (iPessoa: number) => {
            const atleta = {
                id_pessoa: iPessoa,
                posicao: this.model.posicao,
                foto: this.model.foto,
                partidas: this.model.numeroPartidas,
                gols: this.model.numeroGols
            };

            const next = (retorno) => {
                console.log(retorno);
                this.salvando = false;
                this.dialogRef.close({ alterou: true });
            };

            const err = (erro) => {
                console.error(erro);
                this.salvando = false;
            };

            if (this.ehEdicao) {
                console.log(' he');
                this.atletaService.editarAtleta(iAtleta, atleta).subscribe(next, err);
            } else {
                this.atletaService.salvarAtleta(atleta).subscribe(next, err);
            }
        };

        if (this.model.iAtleta) {
            salvarOuAtualizarAtleta(this.model.pessoa.iPessoa);
            return;
        }

        const pessoa = {
            cpf: this.model.pessoa.cpf,
            data_nascimento: this.model.pessoa.dataNascimento,
            nome: this.model.pessoa.nome
        };

        this.pessoaService.salvarPessoaJogador(pessoa).subscribe(
            (retornoPessoa) => {
                this.model.pessoa.iPessoa = retornoPessoa.id;
                salvarOuAtualizarAtleta(retornoPessoa.id);
            },
            (erro) => {
                console.error(erro);
                this.salvando = false;
            }
        );
        this.ehEdicao = false;
    }

    fecharModal() {
        this.dialogRef.close({ alterou: false });
    }
}
