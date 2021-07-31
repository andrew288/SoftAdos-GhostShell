import { ServiceDataService } from 'src/app/servicios/service-data.service';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-grafico-analisis',
  templateUrl: './grafico-analisis.component.html',
  styleUrls: ['./grafico-analisis.component.css']
})
export class GraficoAnalisisComponent implements OnInit {
  //para recibir la data
  public dataGeneral:any=[]
  public dataGrafico:any=[]
  //para graficar
  public Highcharts = Highcharts
  public chart: any
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

  constructor(
    private serv:ServiceDataService,
  ) { }

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
    this.caso1Array=[]
      this.caso2Array=[]
      this.caso3Array=[]
      this.categorias=[]
      this.dataGrafico=[]
    this.filtrarData();
      //Llamamos a funciones que actualizaran nuestras propiedades
      this.obtenerCategorias()
      this.obtenerSeries()
      this.chart = {
        //tipo de grafico
      chart: {
        type: 'bar'
      },
      //titulo del grafico
      title: {
        text: `Datos de ${this.getSexo()} según ${this.getTipoData()} en ${this.getDepartamento()}`
      },
      //subtitulo del grafico
      subtitle: {
        text: 'Source: <a href="https://www.datosabiertos.gob.pe/dataset/minsa-adolescentes">datosabiertos.gob.pe</a>'
      },
      //categorias del grafico
      xAxis: {
        categories: this.categorias,
        title: {
          text: null
        },
      },
      //valores numericos
      yAxis: {
        gridLineWidth : 2,
        title: {
          text: 'Personas (unidad)',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: ' casos'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      //leyenda
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      //parseamos la data
      series: [
        {
          name: 'Entre 10 y 14 años',
          data: this.caso1Array
        }, 
        {
          name: 'Entre 12 y 17 años',
          data: this.caso2Array
        },
        {
          name: 'Entre 15 y 19 años',
          data: this.caso3Array
        }
      ]
    };
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
  ngOnInit(): void {
    this.serv.get(`${environment.API_URL}data`)
    .subscribe(res=>{
      this.dataGeneral=res;
      this.construirGrafico();
    })
  }

}
