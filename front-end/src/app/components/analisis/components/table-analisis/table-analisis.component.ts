import { ServiceDataService } from 'src/app/servicios/service-data.service';
import { Component, OnInit, enableProdMode } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table-analisis',
  templateUrl: './table-analisis.component.html',
  styleUrls: ['./table-analisis.component.css']
})
export class TableAnalisisComponent implements OnInit {

  //para recibir la data
  public dataGeneral:any=[]
  public dataGrafico:any=[]
  //creamos 3 arreglos para los 3 tipos de casos
  public caso1Array:number[]=[]
  public caso2Array:number[]=[]
  public caso3Array:number[]=[]
  //estructura de categorias
  public categorias:string[]=[]
  //recoger datos de los inputs
  public selectTipoData:string="Morbilidad_Adolescente";
  public selectDepartamento:string="AREQUIPA"
  public selectSexo:string="M"

  public enlaces:any=[];

  constructor(
    private serv:ServiceDataService,
    private router: Router,
  ) {  
  }

  getTipoData():string{
    let tipoData="";
    if(this.selectTipoData=="Morbilidad_Adolescente"){
      tipoData="Morbilidad"
    }
    if(this.selectTipoData=="Riesgo_Adolescente"){
      tipoData="Riesgo"
    }
    if(this.selectTipoData=="Tamizaje_Adolescente"){
      tipoData="Tamizaje"
    }
    return tipoData;
  }

  getDepartamento():string{
    let depaData="";
    depaData= this.selectDepartamento.charAt(0) + this.selectDepartamento.slice(1).toLowerCase();
    return depaData;
  }

  getSexo():string{
    let sexoData="";
    if(this.selectSexo=="M"){
      sexoData="Hombres"
    }
    else{
      sexoData="Mujeres"
    }
    return sexoData;
  }

  construirGrafico():void {
    if(this.selectDepartamento=="a" || this.selectSexo=="a" || this.selectTipoData=="a"){
      window.alert("Asegurese de ingresar correctamente los campos")
    }
    else{
      this.caso1Array=[]
      this.caso2Array=[]
      this.caso3Array=[]
      this.categorias=[]
      this.dataGrafico=[]
      this.filtrarData();
      //Llamamos a funciones que actualizaran nuestras propiedades
      this.obtenerCategorias()
      this.obtenerSeries()
    }
  }
  filtrarData():void {
    let indice= this.selectTipoData
    //Filtramos la data
    console.log(this.dataGeneral[indice])
    for(let i=0;i<this.dataGeneral[indice].length;i++){
      //correspondiente a 3 condiciones (Departamento-Sexo)
      if(this.dataGeneral[indice][i].Departamento==this.selectDepartamento && this.dataGeneral[indice][i].Sexo==this.selectSexo){
        this.dataGrafico.push(this.dataGeneral[indice][i]);
      }
    }
    console.log(this.dataGrafico)
  }

  //obtenemos las categorias de nuestro grafico
  public obtenerCategorias(){
    for(let i=0;i<this.dataGrafico.length;i++){
      //verificamos si esa categoria ya fue añadida
      if(!this.categorias.includes(this.dataGrafico[i].Riesgo)){
        this.categorias.push(this.dataGrafico[i].Riesgo)
        this.caso1Array.push(0);
        this.caso2Array.push(0);
        this.caso3Array.push(0);
      }
    }
    console.log(this.categorias);
  }

  //las series hacen referencia a los datos en si
  public obtenerSeries(){
    let index=0;
    for(let i=0;i<this.dataGrafico.length;i++){
      //obtenemos el indice de categoria en la estructura categoria
      index=this.categorias.indexOf(this.dataGrafico[i].Riesgo)
      //hacemos una correspondencia en el arreglo segun el indice
      this.caso1Array[index]+=parseInt(this.dataGrafico[i].Casos_10_14);
      this.caso2Array[index]+=parseInt(this.dataGrafico[i].Casos_12_17);
      this.caso3Array[index]+=parseInt(this.dataGrafico[i].Casos_15_19);
    }
  }

  obtenerIdArticulo(name:string): any{
    var id;
    switch(name){
      case "ACNE NO ESPECIFICADO":
        id="1";
        break;
      case "ANEMIA POR DEFICIENCIA DE HIERRO":
        id="2";
        break;
      case "CIFOSIS POSTURAL":
        id="3";
        break;
      case "DISMINUCION DE LA AGUDEZA VISUAL SIN ESPECIFICACION":
        id="4";
        break;
      case "ESCOLIOSIS IDIOPATICA JUVENIL":
        id="5";
        break;
      case "ESCOLIOSIS NO ESPECIFICADA":
        id="6";
        break;
      case "INFECCIONES RESPIRATORIAS AGUDAS COMPLICADAS":
        id="7";
        break;
      case "INFECCIONES RESPIRATORIAS AGUDAS NO COMPLICADAS":
        id="8";
        break;
      case "LORDOSIS NO ESPECIFICADA":
        id="9";
        break;
      case "PARASITOSIS INTESTINAL":
        id="10";
        break;
      case "PIE PLANO":
        id="11";
        break;
      case "OTROS PROBLEMAS RELACIONADOS CON EL ESTILO DE VIDA":
        id="12";
        break;
      case "OTROS PROBLEMAS RELACIONADOS CON EL GRUPO PRIMARIO DE APOYO":
        id="13";
        break;
      case "PROBLEMAS RELACIONADOS CON EL JUEGO Y LAS APUESTAS":
        id="14";
        break;
      case "PROBLEMAS RELACIONADOS CON OTRAS CIRCUNSTANCIAS PSICOSOCIALES - DESARROLLO PSICOSOCIAL":
        id="15";
        break;
      case "PROBLEMAS RELACIONADOS CON OTRAS CIRCUNSTANCIAS PSICOSOCIALES - VIH/SIDA":
        id="16";
        break;
      case "RIESGO DE EMBARAZO POR CONDUCTA SEXUAL DE ALTO RIESGO":
        id="17";
        break;
      case "RIESGO DE ETS POR CONDUCTA SEXUAL DE ALTO RIESGO":
        id="18";
        break;
      case "A OTROS CONTAMINANTES DEL AMBIENTE FÍSICO":
        id="19";
        break;
      case "AL AGUA CONTAMINADA":
        id="20";
        break;
      case "AL AIRE CONTAMINADO":
        id="21";
        break;
      case "AL SUELO CONTAMINADO":
        id="22";
        break;
      case "ALCOHOL Y DROGAS":
        id="23";
        break;
      case "DEPRESIÓN":
        id="24";
        break;
      case "POR EXPOSICION A DESASTRE":
        id="25";
        break;
      case "POR VIOLENCIA POLITICA (VICTIMA DE CRIMEN O TERRORISMO":
        id="26";
        break;
      case "PROBLEMAS RELACIONADOS CON EL USO DE ALCOHOL":
        id="27";
        break;
      case "PROBLEMAS RELACIONADOS CON EL USO DE DROGAS":
        id="28";
        break;
      case "PROBLEMAS RELACIONADOS CON EL USO DE TABACO":
        id="29";
        break;
      case "PROBLEMAS RELACIONADOS CON VIOLENCIA":
        id="30";
        break;
      case "PSICOSIS":
        id="31";
        break;
      case "TRASTORNOS DEPRESIVOS":
        id="32";
        break;
      case "VIOLENCIA FAMILIAR":
        id="33";
        break;
      case "VIOLENCIA SEXUAL":
        id="34";
        break;
      case "VIOLENCIA SOCIAL":
        id="35";
        break;
    }
    return "/articulo/"+id;
  }
  ngOnInit(): void {
    this.serv.get(`${environment.API_URL}data`)
    .subscribe(res=>{
      this.dataGeneral=res;
      this.construirGrafico();
    })
  }

}
