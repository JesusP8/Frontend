import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient ) { }

  post(serviceNombre: string, data: any){

    const headers = new HttpHeaders();
    const options = { headers, withCredintials: false};

    const url = environment.apiUrl + serviceNombre;

    return this.http.post(url, JSON.stringify(data), options);
  }
}
