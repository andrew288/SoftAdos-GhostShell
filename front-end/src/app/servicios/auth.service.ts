import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { UserResponse, User } from '../components/shared/models/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(private http: HttpClient, private router: Router) {
    //this.checkToken();
    this.loggedIn.next(false);
  }

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  login(authData: User): Observable<UserResponse | void> {
    return this.http
    .post<UserResponse>(`${environment.API_URL}accounts/api/auth/`,authData)
    .pipe(
      map((res: UserResponse) => {
        console.log('Res -->', res);
        this.saveToken(res);
        this.loggedIn.next(true);
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('foto');
    this.loggedIn.next(false)
  }

  /*private checkToken(): void{
    const userToken:any= localStorage.getItem('token')
    const isExpired= helper.isTokenExpired(userToken)
    console.log('isExpired-->',isExpired)
    if(isExpired){
      this.logout();
    }else{
      this.loggedIn.next(true);
    }
  }*/

  private saveToken(res:any): void{
    localStorage.setItem('token', res.token);
    localStorage.setItem('foto', res.foto);
  }

  private handlerError(err:any): Observable<never> {
    let errorMessage = 'An error occured retrienving data';
    if (err){
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  createMovie(categoria:any): Observable<any> {
    const body = {nombre: categoria.nombre};
    return this.http.post('http://127.0.0.1:8000/categorias', body,
    {headers: this.httpHeaders});
  }

}