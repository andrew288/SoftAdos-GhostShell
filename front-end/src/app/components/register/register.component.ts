import { AuthService } from 'src/app/servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //creamos un FormGroups (propiedad)
  public formRegister!: FormGroup;
  public users: any;
  public confirmarPass: any;

  constructor(
    private formBuilder: FormBuilder,
    private serv: AuthService,
    private router: Router,
  ) { }

  //componente que se inicia 
  ngOnInit(): void {
    //formulario reactivo
    this.formRegister = this.formBuilder.group(
      {
        //obtenemos valores para el campo name
        first_name: ['',
          //validaciones
          [
            Validators.required
          ]
        ],
        //obtenemos valores para el campo lastname
        last_name: ['',
          //validaciones
          [
            Validators.required
          ]
        ],
        username: ['',
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

        confirPassword: ['',
          //validators
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
    console.log(this.formRegister.get(['password'])?.value)
    console.log(this.formRegister.get(['confirPassword'])?.value)
    if (this.formRegister.get(['password'])?.value == this.formRegister.get(['confirPassword'])?.value) {
      this.formRegister.removeControl('confirPassword');
      console.log(this.formRegister.value)
      this.serv.createUser(this.formRegister.value).subscribe(
        data => {
          this.router.navigate(['/login'])
        },
        (err: any) => {
          400
          window.alert("No se pudo realizar el registro")
        }
      );
    }
    else {
      window.alert("Las contraseñas no coinciden")
    }
  }

}
