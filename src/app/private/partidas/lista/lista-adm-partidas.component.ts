import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'; // caminho novo, evita import quebrado em versões recentes
import { Partida } from 'src/app/public/models/partida';
import { PartidaService } from '../../service/partida.service';
import { MatDialog } from '@angular/material';
import { NavegarService } from 'src/app/core/services/navegar-service';
import { CadastroPartidaComponent } from '../cadastro/cadastro-partida.component';

@Component({
    selector: 'app-lista-partida',
    templateUrl: './lista-adm-partidas.component.html',
    styleUrls: ['./lista-adm-partidas.component.scss']
})
export class ListaAdmPartidasComponent implements OnInit {

    listaPartidas: Partida[];
    dataSource: MatTableDataSource<Partida> = new MatTableDataSource();
    colunasExibidas: string[] = ['dataHora', 'confronto', 'competicao', 'placarStatus', 'links', 'acoes'];

    constructor(
        private partidaService: PartidaService,
        private navegarService: NavegarService,
        private localDialog: MatDialog,
    ) { }

    ngOnInit(): void {
        this.buscarJogos();
    }

    buscarJogos() {
        const next = (retorno: Partida[]) => {
            this.listaPartidas = retorno.sort((a, b) =>
                new Date(a.dataHora).getTime() - new Date(b.dataHora).getTime()
            );
            this.dataSource.data = this.listaPartidas;
        };

        const erro = (err) => {
            console.error(err);
        };

        this.partidaService.buscarPartidas().subscribe(next, erro);
    }

    abrirModalCadastroPartida() {
        const dialogRef = this.navegarService.abrirModal(
            CadastroPartidaComponent,
            null, null, '', this.localDialog
        );

        dialogRef.afterClosed().subscribe(retorno => {
            if (retorno.alterou) {
                this.buscarJogos();
            }
        });
    }

    editarPartida(partida: Partida) {
        const dialogRef = this.navegarService.abrirModal(
            CadastroPartidaComponent,
            partida, null, '', this.localDialog
        );

        dialogRef.afterClosed().subscribe(retorno => {
            if (retorno.alterou) {
                this.buscarJogos();
            }
        });
    }

    excluirPartida(partida: Partida) {
        console.log(partida, 'ppa');
        const iPartida = partida.iPartida ? partida.iPartida : null;

        if (!iPartida) { return; }

        const next = () => {
            this.buscarJogos();
        };

        const err = (erro) => {
            console.error(erro);
        };
        this.partidaService.deletePartida(iPartida).subscribe(next, err);
    }
}
