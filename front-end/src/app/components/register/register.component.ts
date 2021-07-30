import { AuthService } from 'src/app/servicios/auth.service';
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
  public users:any;

  constructor(
    private formBuilder: FormBuilder,
    private serv: AuthService,
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
      }
    );
  }

  //enviamos los datos
  send(): any {
    this.serv.createUser(this.formRegister.value).subscribe(
      data => {
        this.users.push(data);
      },
      error => {
        console.log(this.formRegister.value);
        console.log(error);
      }
    );
  }

}
