import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formRegister!:FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group(
      {
        name: ['',
          [
            Validators.required
          ]
        ],
        lastname: ['',
          [
            Validators.required
          ]
        ],
        sexo: ['',
          [
            Validators.required
          ]
        ],
        email: ['',
          [
            Validators.required,
            Validators.email
          ]
        ],
        password: ['',
          [
            Validators.required,
            Validators.minLength(6)
          ]
        ],
        passwordC: ['',
          [
            Validators.required,
            Validators.minLength(6)
          ]
        ]
      }
    );
  }

  send(): any {
    console.log(this.formRegister.value)
    if(this.formRegister.value.password!=this.formRegister.value.passwordC){
      console.log("Las contraseñas no coinciden")
    }
    else{
      console.log("Las contraseñas coinciden")
    }
  }

}
