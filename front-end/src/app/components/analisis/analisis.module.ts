import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalisisRoutingModule } from './analisis-routing.module';
import { LayoutAnalisisComponent } from './components/layout-analisis/layout-analisis.component';
import { TableAnalisisComponent } from './components/table-analisis/table-analisis.component';
import { GraficoAnalisisComponent } from './components/grafico-analisis/grafico-analisis.component';
import { MapaAnalisisComponent } from './components/mapa-analisis/mapa-analisis.component';
import { FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    LayoutAnalisisComponent,
    TableAnalisisComponent,
    GraficoAnalisisComponent,
    MapaAnalisisComponent
  ],
  imports: [
    CommonModule,
    AnalisisRoutingModule,
    FormsModule,
    HighchartsChartModule
  ]
})
export class AnalisisModule { }
