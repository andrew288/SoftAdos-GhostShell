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

  constructor(
    private route:ActivatedRoute,
    private serv:ArticulosService,
    private auth:AuthService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap:any) =>{
      const {params} = paramMap
      this.cargarArticulo(params.variable);
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
  }

  cargarArticulo(id:string){
    this.serv.get(`${environment.API_URL}articulos/${id}`)
    .subscribe(respuesta => {
      this.respuesta = respuesta;
      console.log(respuesta);
    })
    this.serv.get(`${environment.API_URL}comentarios/${id}`)
    .subscribe(respuesta => {
      this.comentarios = respuesta;
      console.log(respuesta)
    })
  }

  sendComment():void{
    const formValue = this.formComment.value;
    this.auth.createComentario(formValue,this.respuesta.id,localStorage.getItem("id")).subscribe(
      data => {
        location.reload()
      },
      error => {
        console.log(error);
      }
    );
  }
}
