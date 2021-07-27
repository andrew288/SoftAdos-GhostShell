import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from 'src/app/servicios/service-data.service';
import * as Highcharts from "highcharts";
import { getNumberOfCurrencyDigits } from '@angular/common';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  //estructuras a usar (propiedades)
  public dataInput:any=[]
  public visible:boolean=false
  public visibleTable:boolean=false
  //creamos 3 arreglos para los 3 tipos de casos
  public caso1Array:number[]=[]
  public caso2Array:number[]=[]
  public caso3Array:number[]=[]
  //estructura de categorias
  public categorias:string[]=[]
  //para graficar
  public Highcharts = Highcharts
  public chart: any

  constructor(private servicioGrafico: ServiceDataService) {

  }

  //obtenemos las categorias de nuestro grafico
  public obtenerCategorias(){
    for(let i=0;i<this.dataInput.data.length;i++){
      //verificamos si esa categoria ya fue añadida
      if(!this.categorias.includes(this.dataInput.data[i].Riesgo)){
        this.categorias.push(this.dataInput.data[i].Riesgo)
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
    for(let i=0;i<this.dataInput.data.length;i++){
      //obtenemos el indice de categoria en la estructura categoria
      index=this.categorias.indexOf(this.dataInput.data[i].Riesgo)
      //hacemos una correspondencia en el arreglo segun el indice
      this.caso1Array[index]+=parseInt(this.dataInput.data[i].Casos_10_14);
      this.caso2Array[index]+=parseInt(this.dataInput.data[i].Casos_12_17);
      this.caso3Array[index]+=parseInt(this.dataInput.data[i].Casos_15_19);
    }
  }

  //hacer visible el grafico
  public mostrarGrafico(){
    this.visible=true;
  }
  //hacer visible la tabla resumen
  public mostrarTablaResumen(){
    this.visibleTable=true;
  }

  //
  public cargarData(){
    this.servicioGrafico.disparadorGrafico.subscribe(data => {
      //vaciamos las estructuras 
      this.caso1Array=[]
      this.caso2Array=[]
      this.caso3Array=[]
      this.categorias=[]
      //pasamos la data a nuestra propiedad data Input
      this.dataInput=data
      console.log(this.dataInput)
      //Llamamos a funciones que actualizaran nuestras propiedades
      this.obtenerCategorias()
      this.obtenerSeries()
      //creamos un grafico chart
      this.chart = {
        //tipo de grafico
      chart: {
        type: 'bar'
      },
      //titulo del grafico
      title: {
        text: `Datos de ${this.dataInput.sexo} segun ${this.dataInput.tipo} en ${this.dataInput.departamento}`
      },
      //subtitulo del grafico
      subtitle: {
        text: 'Source: <a href="https://www.datosabiertos.gob.pe/dataset/minsa-adolescentes">Wikipedia.org</a>'
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
    })
  }

  //componente que se encarga de recibir la data en la invocacion del componente
  ngOnInit(): void {
    console.log("Se inicio el componente...")
    this.cargarData()
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
      case "DISMINUCIÓN DE LA AGUDEZA VISUAL SIN ESPECIFICACION":
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
      case "RIESGO DE ETS POR CONDUCTA SEXUAL DE ALTO":
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

}
