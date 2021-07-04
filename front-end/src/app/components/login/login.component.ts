import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //creamos un FormGroups (propiedad)
  public formLogin!:FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  //componente que se inicia
  ngOnInit(): void {
    //formulario reactivo
    this.formLogin = this.formBuilder.group(
      {
        //valores para el campo email
        email: ['',
          //validaciones
          [
            Validators.required,
            Validators.email
          ]
        ],
        //valores para el campo password
        password: ['',
          //validaciones
          [
            Validators.required,
            Validators.minLength(6)
          ]
        ]
      }
    );
  }

  //enviamos la informacion
  send(): any {
    //imprimimos los valores de los campos
    console.log(this.formLogin.value)
  }

}
