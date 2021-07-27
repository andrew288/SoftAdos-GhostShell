import { ArticulosService } from './../../../servicios/articulos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  public id:any;
  public respuesta:any = [];
  constructor(
    private route:ActivatedRoute,
    private serv:ArticulosService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap:any) =>{
      const {params} = paramMap
      this.cargarArticulo(params.variable);
    })
  }

  cargarArticulo(id:string){
    this.serv.get(`http://127.0.0.1:8000/articulos/${id}`)
    .subscribe(respuesta => {
      this.respuesta = respuesta;
      console.log(respuesta);
    })
  }

}
