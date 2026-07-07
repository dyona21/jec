import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-informacoes-socio',
    templateUrl: './informacoes-socio.component.html',
    styleUrls: ['./informacoes-socio.component.scss']
}) export class InformacoesSocioComponent {
    constructor(private dialogRef: MatDialogRef<InformacoesSocioComponent>) { }

    fecharModal() {
        this.dialogRef.close();
    }
}
