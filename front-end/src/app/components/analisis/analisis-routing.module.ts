import { MapaAnalisisComponent } from './components/mapa-analisis/mapa-analisis.component';
import { TableAnalisisComponent } from './components/table-analisis/table-analisis.component';
import { GraficoAnalisisComponent } from './components/grafico-analisis/grafico-analisis.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAnalisisComponent } from './components/layout-analisis/layout-analisis.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutAnalisisComponent,
    children:[
      {
        path:'',
        component:GraficoAnalisisComponent,
      },
      {
        path:'tabla',
        component:TableAnalisisComponent,
      },
      {
        path:'mapa',
        component:MapaAnalisisComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalisisRoutingModule { }
