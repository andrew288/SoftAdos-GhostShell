import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //creamos un FormGroups (propiedad)
  public formRegister!:FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  //componente que se inicia 
  ngOnInit(): void {
    //formulario reactivo
    this.formRegister = this.formBuilder.group(
      {
        //obtenemos valores para el campo name
        name: ['',
        //validaciones
          [
            Validators.required
          ]
        ],
        //obtenemos valores para el campo lastname
        lastname: ['',
        //validaciones
          [
            Validators.required
          ]
        ],
        //obtenemos valores para el campo sexo
        sexo: ['',
        //validaciones
          [
            Validators.required
          ]
        ],
        //obtenemos valores para el campo email
        email: ['',
        //validaciones
          [
            Validators.required,
            Validators.email
          ]
        ],
        //obtenemos valores para el campo password
        password: ['',
        //validaciones
          [
            Validators.required,
            Validators.minLength(6)
          ]
        ],
        //obtenemos valores para el campo passwordC
        passwordC: ['',
        //validaciones
          [
            Validators.required,
            Validators.minLength(6)
          ]
        ]
      }
    );
  }

  //enviamos los datos
  send(): any {
    //imprimimps los valores de los inputs
    console.log(this.formRegister.value)
    //verfiicamos que el password y confirmar password sean iguales
    if(this.formRegister.value.password!=this.formRegister.value.passwordC){
      console.log("Las contraseñas no coinciden")
    }
    else{
      console.log("Las contraseñas coinciden")
    }
  }

}
