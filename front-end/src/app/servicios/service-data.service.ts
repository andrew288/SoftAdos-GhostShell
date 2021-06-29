import { Injectable, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {
  @Output() disparadorGrafico: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) {}

  public get(url:string){
    return this.http.get(url);
  }
}
