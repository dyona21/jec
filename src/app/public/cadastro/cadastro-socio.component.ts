import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
    selector: 'app-cadastro-socio',
    templateUrl: './cadastro-socio.component.html',
    styleUrls: ['./cadastro-socio.component.scss']
})
export class CadastroSocioComponent {
    socioCadastro = new FormGroup({
        nome: new FormControl(''),
        cpf: new FormControl(''),
        senha: new FormControl(''),
        email: new FormControl(''),
    });

    onSubmit() {
        console.warn(this.socioCadastro.value);
    }
}
