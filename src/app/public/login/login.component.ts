import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    senha: string;
    cpf: string;

    constructor(private dialogRef: MatDialogRef<LoginComponent>) { }

    fecharModal() {
        this.dialogRef.close();
    }


}
