import { Injectable, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
    providedIn: 'root'
})
export class NavegarService {

    constructor(private dialog: MatDialog) { }

    abrirModal(
        component: ComponentType<any>,
        dados: any = null,
        event: any = null,
        id: string = '',
        localDialog?: MatDialog
    ): MatDialogRef<any, any> {

        const minWidth = event && event.config && event.config.minWidth ? event.config.minWidth : 'auto';
        const dialogRef = localDialog ? localDialog : this.dialog;
        return dialogRef.open(component, {
            id: id ? id : undefined,
            minWidth,
            disableClose: true,
            data: dados,
            panelClass: 'modal-transparente'
        });
    }
}
