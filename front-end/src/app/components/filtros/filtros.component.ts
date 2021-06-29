import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from 'src/app/servicios/service-data.service';
@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  public data:any = []
  public dataGrafico:any = []

  //recoger datos de los inputs
  public selectTipoData:number=0;
  public selectDepartamento:string="Arequipa"
  public selectSexo:string="M"

  constructor(private DataService: ServiceDataService) { }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.DataService.get(`http://localhost:3000/Morbilidad_Adolescente`)
    .subscribe(respuesta => {
      this.data.push(respuesta);
    })
    this.DataService.get(`http://localhost:3000/Riesgo_Adolescente`)
    .subscribe(respuesta => {
      this.data.push(respuesta);
    })
    this.DataService.get(`http://localhost:3000/Tamizaje_Adolescente`)
    .subscribe(respuesta => {
      this.data.push(respuesta);
    })
    console.log(this.data);
  }

  public enviarData(){
    console.log("Enviando data...")
    let indice= this.selectTipoData
    let tipoData="";
    let sexoData="";
    let depaData="";
    if(indice==0){
      tipoData="Morbilidad"
    }
    if(indice==1){
      tipoData="Riesgo"
    }
    if(indice==2){
      tipoData="Tamizaje"
    }
    if(this.selectSexo=="M"){
      sexoData="Hombres"
    }
    else{
      sexoData="Mujeres"
    }
    depaData= this.selectDepartamento.charAt(0) + this.selectDepartamento.slice(1).toLowerCase();
    for(let i=0;i<this.data[indice].length;i++){
      if(this.data[indice][i].Departamento==this.selectDepartamento && this.data[indice][i].Sexo==this.selectSexo){
        this.dataGrafico.push(this.data[indice][i]);
      }
    }
    this.DataService.disparadorGrafico.emit(
      {
        data: this.dataGrafico,
        tipo: tipoData,
        departamento: depaData,
        sexo: sexoData
      }
    )
    this.dataGrafico=[]
  }
}
