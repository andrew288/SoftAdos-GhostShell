import { ServiceDataService } from 'src/app/servicios/service-data.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout-analisis',
  templateUrl: './layout-analisis.component.html',
  styleUrls: ['./layout-analisis.component.css']
})
export class LayoutAnalisisComponent implements OnInit {
  public dataAdolescentes:any=[]
  constructor(
    private serv:ServiceDataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.serv.get(`${environment.API_URL}data`)
    .subscribe(res=>{
      this.dataAdolescentes=res;
    })
  }
}
