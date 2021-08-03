import { ServiceDataService } from 'src/app/servicios/service-data.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mapa-analisis',
  templateUrl: './mapa-analisis.component.html',
  styleUrls: ['./mapa-analisis.component.css']
})
export class MapaAnalisisComponent implements OnInit {
  public selectDepartamento:number=0;
  public dataMapa:any=[];
  public mapaFrame:SafeUrl="";

  constructor(
    private serv:ServiceDataService,
    private sanitizer:DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.serv.get(`${environment.API_URL}mapas`)
    .subscribe(res =>{
      this.dataMapa=res;
      console.log(this.dataMapa.Departamento)
      this.construirMapa();
    })
  }

  construirMapa():void {
    if(this.selectDepartamento==-1){
      window.alert("Asegurese de ingresar un campo correcto")
    }
    else{
      this.mapaFrame=this.sanitizer.bypassSecurityTrustHtml(this.dataMapa.Departamento[this.selectDepartamento].mapa);
      console.log(this.mapaFrame)
    }
  }

}
