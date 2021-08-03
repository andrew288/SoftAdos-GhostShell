import { ServiceDataService } from 'src/app/servicios/service-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout-analisis',
  templateUrl: './layout-analisis.component.html',
  styleUrls: ['./layout-analisis.component.css']
})
export class LayoutAnalisisComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
}
