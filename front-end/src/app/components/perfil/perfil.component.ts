import { ServiceDataService } from 'src/app/servicios/service-data.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public infoPerfil:any=[];
  public infoUser:any=[];
  constructor(
    private serv:ServiceDataService,
  ) { }

  ngOnInit(): void {
    this.serv.get(`${environment.API_URL}perfiles/${localStorage.id}`).subscribe(res => {
      this.infoPerfil=res;
      console.log(res)
    });
    this.serv.get(`${environment.API_URL}user/${localStorage.id}`).subscribe(res => {
      this.infoUser=res;
      console.log(res)
    })
  }

  obtenerNombreCompleto():string{
    return `${this.infoUser.first_name} ${this.infoUser.last_name}`
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
