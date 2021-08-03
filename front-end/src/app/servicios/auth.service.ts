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
        this.saveData(res);
        this.loggedIn.next(true);
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.loggedIn.next(false)
  }

  private saveData(res:any): void{
    localStorage.setItem('token', res.token);
    localStorage.setItem('id', res.user_id);
  }

  private handlerError(err:any): Observable<never> {
    let errorMessage = 'An error occured retrienving data';
    if (err){
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  createUser(user :any): Observable<any> {
    const body =  {first_name : user.first_name,last_name : user.last_name,email : user.email,username : user.username,password : user.password};
    return this.http.post(`${environment.API_URL}user`, body,
    {headers: this.httpHeaders}); 
  }

  updatePerfil(perfil :any, id:any): Observable<any> {
    const body =  {  
        genero: perfil.genero,
        biografia: perfil.biografia,
        direccion: perfil.direccion,
        url_website: perfil.url_website,
        url_twitter: perfil.url_twitter,
        url_instagram: perfil.url_instagram,
        url_facebook: perfil.url_facebook,
    };
    return this.http.put(`${environment.API_URL}perfiles/${id}`, body,{headers: this.httpHeaders});
  }

  createComentario(comentario :any, idArticulo :any, idUsuario :any): Observable<any> {
    const body =  {comentario:comentario.comentario, articulo:idArticulo, perfil:idUsuario};
    return this.http.post(`${environment.API_URL}comentarios`, body,
    {headers: this.httpHeaders});
  }
}