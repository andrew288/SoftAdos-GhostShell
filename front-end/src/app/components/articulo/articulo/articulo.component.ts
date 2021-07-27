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
  public respuesta:any;
  constructor(
    private route:ActivatedRoute,
    private serv:ArticulosService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(paramMap =>{
      const {params} = paramMap
      //this.cargarArticulo(params.id);
    })
  }

  cargarArticulo(id:string){
    this.serv.get(`http://localhost:8000/articulo/1`)
    .subscribe(respuesta => {
      this.respuesta = respuesta;
      console.log(respuesta);
    })
  }

}
