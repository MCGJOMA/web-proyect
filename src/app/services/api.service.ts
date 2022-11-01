import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

url: string = 'http://localhost/proyecto/'

  constructor(private http: HttpClient) { }

mango(){
  return this.http.get(this.url+"?mango=");
}

registroMango(){
  return this.http.get(this.url+"?registro_mangueras=");
}

humedad(){
  return this.http.get(this.url+"?humedad=");
}

registroHumedad(){
  return this.http.get(this.url+"?registro_hum=");
}

temperatura(){
  return this.http.get(this.url+"?temperatura=");
}

registroTemperatura(){
  return this.http.get(this.url+"?registro_temp=");
}

}
