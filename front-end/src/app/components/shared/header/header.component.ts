import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged=false;
  constructor(
    private authSvc:AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.authSvc.isLogged.subscribe(res => this.isLogged = res)
  }

  deslogear(){
    this.authSvc.logout();
    this.router.navigate([''])
  }

}
