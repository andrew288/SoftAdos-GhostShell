import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from 'src/app/servicios/service-data.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  //propiedades
  public data:any = []
  public dataGrafico:any = []

  //recoger datos de los inputs
  public selectTipoData:number=0;
  public selectDepartamento:string="Arequipa"
  public selectSexo:string="M"

  constructor(private DataService: ServiceDataService) { }

  // se encargara cuando se inicie el componente
  ngOnInit(): void {
    this.cargarData();
  }

  //cargamos la data usando nuestros servicios
  public cargarData(){
    this.DataService.get(`${environment.API_URL}data/Morbilidad_Adolescente`)
    .subscribe(respuesta => {
      this.data.push(respuesta);
    })
    this.DataService.get(`${environment.API_URL}data/Riesgo_Adolescente`)
    .subscribe(respuesta => {
      this.data.push(respuesta);
    })
    this.DataService.get(`${environment.API_URL}data/Tamizaje_Adolescente`)
    .subscribe(respuesta => {
      this.data.push(respuesta);
    })
    console.log(this.data);
  }

  //enviamos información al componente grafico
  public enviarData(){
    console.log("Enviando data...")
    // Actualizamos nuestros inputs y propiedades a vacio
    let indice= this.selectTipoData
    let tipoData="";
    let sexoData="";
    let depaData="";
    //indicamos la informacion que queremos obtener
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
    
    //Filtramos la data 
    for(let i=0;i<this.data[indice].length;i++){
      //correspondiente a 3 condiciones (Departamento-Sexo)
      if(this.data[indice][i].Departamento==this.selectDepartamento && this.data[indice][i].Sexo==this.selectSexo){
        this.dataGrafico.push(this.data[indice][i]);
      }
    }
    //enviamos datos al componente grafico
    this.DataService.disparadorGrafico.emit(
      {
        data: this.dataGrafico,
        tipo: tipoData,
        departamento: depaData,
        sexo: sexoData
      }
    )
    //vaciamos nuestra data para otras consultas
    this.dataGrafico=[]
  }
}
