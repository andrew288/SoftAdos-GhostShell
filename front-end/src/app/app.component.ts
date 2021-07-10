import { Component } from '@angular/core';
import { PublicService } from './servicios/public.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  msg:any;
  datos:any;
  constructor(private pService:PublicService){

  }
  showMessage(){
    this.pService.getMessage().subscribe(data => {
      this.msg = data;
      console.log(this.msg);
    })
  }
  ngOnInit(): void{
    this.showMessage();
  }
}
