import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get(this.url);
  }
}
