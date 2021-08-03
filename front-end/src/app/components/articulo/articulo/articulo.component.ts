import { ServiceDataService } from 'src/app/servicios/service-data.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticulosService } from './../../../servicios/articulos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgLocalization } from '@angular/common';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  public id:any;
  public respuesta:any = [];
  public comentarios:any =[];
  public formComment!:FormGroup;
  public isLogged=false;
  public enlacesResultado:any=[];


  constructor(
    private route:ActivatedRoute,
    private serv:ArticulosService,
    private auth:AuthService,
    private formBuilder:FormBuilder,
    private dataServ:ServiceDataService,
  ) { }

  ngOnInit(): void {
    this.auth.isLogged.subscribe(res => this.isLogged = res);
    this.route.paramMap.subscribe( (paramMap:any) =>{
      const {params} = paramMap
      this.cargarArticulo(params.variable);
      this.cargarComentarios(params.variable);
      this.id=params.variable;
    })
    this.formComment = this.formBuilder.group(
      {
        //valores para el campo email
        comentario: ['',
          //validaciones
          [
            Validators.required,
          ]
        ],
      }
    );
    this.auth.isLogged.subscribe(res => this.isLogged = res)
  }

  cargarArticulo(id:string){
    this.serv.get(`${environment.API_URL}articulos/${id}`)
    .subscribe(respuesta => {
      this.respuesta = respuesta;
      this.llenarCategorias(this.respuesta.categoria)
      console.log(respuesta);
    })
  }
  cargarComentarios(id:string){
    this.serv.get(`${environment.API_URL}comentarios/${id}`)
    .subscribe(respuesta => {
      this.comentarios = respuesta;
      console.log(respuesta)
    })
  }

  llenarCategorias(categoria:number):void{
    this.enlacesResultado=[]
    if(categoria==3){
      this.enlacesResultado.push({
        "ruta":"/articulo/1",
        "nombre":"ACNE NO ESPECIFICADO"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/2",
        "nombre":"ANEMIA POR DEFICIENCIA DE HIERRO"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/3",
        "nombre":"CIFOSIS POSTURAL"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/4",
        "nombre":"DISMINUCIÓN DE LA AGUDEZA VISUAL SIN ESPECIFICACION"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/5",
        "nombre":"ESCOLIOSIS IDIOPATICA JUVENIL"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/6",
        "nombre":"ESCOLIOSIS NO ESPECIFICADA "
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/7",
        "nombre":"INFECCIONES RESPIRATORIAS AGUDAS COMPLICADAS"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/8",
        "nombre":"INFECCIONES RESPIRATORIAS AGUDAS NO COMPLICADAS"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/9",
        "nombre":"LORDOSIS NO ESPECIFICADA"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/10",
        "nombre":"PARASITOSIS INTESTINAL"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/11",
        "nombre":"PIE PLANO"
      })
    }
    if(categoria==1){
      this.enlacesResultado.push({
        "ruta":"/articulo/12",
        "nombre":"OTROS PROBLEMAS RELACIONADOS CON EL ESTILO DE VIDA"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/13",
        "nombre":"OTROS PROBLEMAS RELACIONADOS CON EL GRUPO PRIMARIO DE APOYO"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/14",
        "nombre":"PROBLEMAS RELACIONADOS CON EL JUEGO Y LAS APUESTAS"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/15",
        "nombre":"PROBLEMAS RELACIONADOS CON OTRAS CIRCUNSTANCIAS PSICOSOCIALES - DESARROLLO PSICOSOCIAL"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/16",
        "nombre":"PROBLEMAS RELACIONADOS CON OTRAS CIRCUNSTANCIAS PSICOSOCIALES - VIH/SIDA"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/17",
        "nombre":"RIESGO DE EMBARAZO POR CONDUCTA SEXUAL DE ALTO RIESGO"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/18",
        "nombre":"RIESGO DE ETS POR CONDUCTA SEXUAL DE ALTO"
      })
    }
    if(categoria==2){
      this.enlacesResultado.push({
        "ruta":"/articulo/19",
        "nombre":"A OTROS CONTAMINANTES DEL AMBIENTE FÍSICO"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/20",
        "nombre":"AL AGUA CONTAMINADA"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/21",
        "nombre":"AL AIRE CONTAMINADO"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/22",
        "nombre":"AL SUELO CONTAMINADO"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/23",
        "nombre":"ALCOHOL Y DROGAS"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/24",
        "nombre":"DEPRESIÓN"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/25",
        "nombre":"POR EXPOSICION A DESASTRE"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/26",
        "nombre":"POR VIOLENCIA POLITICA (VICTIMA DE CRIMEN O TERRORISMO"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/27",
        "nombre":"PROBLEMAS RELACIONADOS CON EL USO DE ALCOHOL"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/28",
        "nombre":"PROBLEMAS RELACIONADOS CON EL USO DE DROGAS"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/29",
        "nombre":"PROBLEMAS RELACIONADOS CON EL USO DE TABACO"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/30",
        "nombre":"PROBLEMAS RELACIONADOS CON VIOLENCIA"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/31",
        "nombre":"PSICOSIS"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/32",
        "nombre":"TRASTORNOS DEPRESIVOS"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/33",
        "nombre":"VIOLENCIA FAMILIAR"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/34",
        "nombre":"VIOLENCIA SEXUAL"
      })
      this.enlacesResultado.push({
        "ruta":"/articulo/35",
        "nombre":"VIOLENCIA SOCIAL"
      })
    }
  }

  obtenerCategoria():string{
    var categoria=""
    if(this.respuesta.categoria==3){
      categoria = "Morbilidad"
    }
    if(this.respuesta.categoria==1){
      categoria = "Riesgo"
    }
    if(this.respuesta.categoria==2){
      categoria = "Tamizaje"
    }
    return categoria;
  }

  verArticulo():void{
    window.open(this.respuesta.art_archivo, this.respuesta.titulo, "width=800, height=800");
  }

  sendComment():void{
    const formValue = this.formComment.value;
    this.auth.createComentario(formValue,this.respuesta.id,localStorage.getItem("id")).subscribe(
      data => {
        this.cargarComentarios(this.id)
      },
      error => {
        console.log(error);
      }
    );
  }
}
