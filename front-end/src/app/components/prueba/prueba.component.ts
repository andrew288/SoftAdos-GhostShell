import { AuthService } from 'src/app/servicios/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  private data={
    'nombre': 'muertos'
  };
  constructor(
    private serv:AuthService,
  ) {

   }
  ngOnInit(): void {
    this.serv.createMovie(this.data).subscribe();
  }

}
