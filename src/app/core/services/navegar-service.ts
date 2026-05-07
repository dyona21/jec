import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, EventEmitter, Injectable, Injector } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
    providedIn: 'root'
})
export class NavegarService {


    constructor(private dialog: MatDialog) {
    }

    abrirModal(component: ComponentType<any>, dados: any, event: any = null, id: string = ''): MatDialogRef<any, any> {
        const minWidth = event && event.config && event.config.minWidth ? event.config.minWidth : '90%';
        return this.dialog.open(component, {
            id: id ? id : undefined, minWidth,
            disableClose: true, data: dados, position: { top: '4%' }
        });
    }
}

