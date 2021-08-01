import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //creamos un FormGroups (propiedad)
  public formLogin!:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authSvc:AuthService,
    private router: Router,
  ){
  }

  //componente que se inicia
  ngOnInit(): void {
    //formulario reactivo
    this.formLogin = this.formBuilder.group(
      {
        //valores para el campo email
        username: ['',
          //validaciones
          [
            Validators.required,
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
    const formValue = this.formLogin.value;
    this.authSvc.login(formValue).subscribe( res => {
      if(res){
        this.router.navigate(['/analisis'])
      }
    })
  }

}
