import { Injectable, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {
  //creamos un disparador
  @Output() disparadorGrafico: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) {}

  //obtenemos datos de una URL
  public get(url:string){
    return this.http.get(url);
  }
}
