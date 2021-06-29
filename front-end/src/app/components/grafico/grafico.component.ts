import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from 'src/app/servicios/service-data.service';
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  //estructuras a usar
  public dataInput:any=[]
  public visible:boolean=false
  public visibleTable:boolean=false
  public caso1Array:number[]=[]
  public caso2Array:number[]=[]
  public caso3Array:number[]=[]
  public categorias:string[]=[]
  //para graficar
  public Highcharts = Highcharts
  public chart: any

  constructor(private servicioGrafico: ServiceDataService) {

  }

  public obtenerCategorias(){
    for(let i=0;i<this.dataInput.data.length;i++){
      if(!this.categorias.includes(this.dataInput.data[i].Riesgo)){
        this.categorias.push(this.dataInput.data[i].Riesgo)
        this.caso1Array.push(0);
        this.caso2Array.push(0);
        this.caso3Array.push(0);
      }
    }
    console.log(this.categorias);
  }

  public obtenerSeries(){
    let index=0;
    for(let i=0;i<this.dataInput.data.length;i++){
      index=this.categorias.indexOf(this.dataInput.data[i].Riesgo)
      this.caso1Array[index]+=parseInt(this.dataInput.data[i].Casos_10_14);
      this.caso2Array[index]+=parseInt(this.dataInput.data[i].Casos_12_17);
      this.caso3Array[index]+=parseInt(this.dataInput.data[i].Casos_15_19);
    }
  }

  public mostrarGrafico(){
    this.visible=true;
  }

  public mostrarTablaResumen(){
    this.visibleTable=true;
  }

  public cargarData(){
    this.servicioGrafico.disparadorGrafico.subscribe(data => {
      this.caso1Array=[]
      this.caso2Array=[]
      this.caso3Array=[]
      this.categorias=[]
      this.dataInput=data
      console.log(this.dataInput)
      this.obtenerCategorias()
      this.obtenerSeries()
      this.chart = {
      chart: {
        type: 'bar'
      },
      title: {
        text: `Datos de ${this.dataInput.sexo} segun ${this.dataInput.tipo} en ${this.dataInput.departamento}`
      },
      subtitle: {
        text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
      },
      xAxis: {
        categories: this.categorias,
        title: {
          text: null
        },
      },
      yAxis: {
        gridLineWidth : 2,
        title: {
          text: 'Population (millions)',
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

  ngOnInit(): void {
    console.log("Se inicio el componente...")
    this.cargarData()
  }

}
