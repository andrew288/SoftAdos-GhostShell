import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public fotoPerfil:any='';
  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    let data='data:image/png;base64,'+localStorage.getItem('foto');
    this.fotoPerfil=this.domSanitizer.bypassSecurityTrustUrl(data);
  }

}
