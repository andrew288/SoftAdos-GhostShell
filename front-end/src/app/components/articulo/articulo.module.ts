import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticuloRoutingModule } from './articulo-routing.module';
import { ArticuloComponent } from './articulo/articulo.component';
import { ComentariosComponent } from './comentarios/comentarios.component';


@NgModule({
  declarations: [
    ArticuloComponent,
    ComentariosComponent
  ],
  imports: [
    CommonModule,
    ArticuloRoutingModule
  ]
})
export class ArticuloModule { }
