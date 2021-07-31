import { ServiceDataService } from 'src/app/servicios/service-data.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  public infoPerfil:any=[];
  public formProfile!:FormGroup;
  public model!: NgbDateStruct;
  constructor(

    private serv:ServiceDataService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.serv.get(`${environment.API_URL}perfiles/${localStorage.id}`).subscribe(res => {
      this.infoPerfil=res;
      console.log(res);
      this.formProfile = this.formBuilder.group(
        {
          first_name:[this.infoPerfil.usuario.first_name,
            [
              Validators.minLength(1),
            ]
          ],
          last_name:[this.infoPerfil.usuario.last_name,
            [
              Validators.minLength(1),
            ]
          ],
          direccion: [this.infoPerfil.direccion,
            [
              Validators.minLength(1),
            ]
          ],
          biografia: [this.infoPerfil.biografia,
            [
              Validators.minLength(1),
            ]
          ],
          sexo: [this.infoPerfil.sexo,],
          fecNacimiento: [this.infoPerfil.fecNacimiento],
          url_website:[this.linkWebsite(this.infoPerfil.url_website)],
          url_twitter:[this.linkTwitter(this.infoPerfil.url_twitter)],
          url_instagram:[this.linkInstagram(this.infoPerfil.url_instagram)],
          url_facebook:[this.linkFacebook(this.infoPerfil.url_facebook)],
        }
      )
    });
    }
  send(): any {
    const formValue = this.formProfile.value;
    console.log(formValue)
  }

  linkWebsite(cadena:string): string {
    if(cadena==""){
      return "https://www.google.com.mx/"
    }
    else{
      return cadena;
    }
  }

  linkTwitter(cadena:string): string {
    if(cadena==""){
      return "https://twitter.com/"
    }
    else{
      return cadena;
    }
  }

  linkInstagram(cadena:string): string {
    if(cadena==""){
      return "https://www.instagram.com/"
    }
    else{
      return cadena;
    }
  }

  linkFacebook(cadena:string): string {
    if(cadena==""){
      return "https://www.facebook.com/"
    }
    else{
      return cadena;
    }
  }

  obtenerNombreCompleto():string{
    return `${this.infoPerfil.usuario.first_name} ${this.infoPerfil.usuario.last_name}`
  }

  obtenerSexo():string{
    var genero=this.infoPerfil.genero;
    if(genero=="f"){
      genero="Femenino"
    }
    else{
      genero="Masculino"
    }
    return genero;
  }

  obtenerRol():string{
    var rol=this.infoPerfil.rol;
    if(rol=="a"){
      rol="Administrador"
    }
    if(rol=="u"){
      rol="Usuario"
    }
    if(rol=="c"){
      rol="Creador de contenidos"
    }
    return rol;
  }

  obtenerEstatus():string{
    var estatus=this.infoPerfil.estatus;
    if(estatus=="u"){
      estatus="Usuario nuevo"
    }
    if(estatus=="f"){
      estatus=="Usuario destacado"
    }
    if(estatus=="c"){
      estatus=="Creador de contenido"
    }
    return estatus;
  }

  infoRecompensa():boolean{
    var estado=false;
    var estatus=this.infoPerfil.estatus;
    var rol= this.infoPerfil.rol;
    if(rol=="a" || rol=="e"){
      estado=true;
    }
    else{
      if(estatus=="f" || estatus=="c"){
        estado=true
      }
      else{
        estado=false
      }
    }
    return estado;
  }

}
