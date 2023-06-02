import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private url = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  listaRoles() {
    return this.http.get(`${this.url}/roles`);
  }

  registrarRole(data: any) {
    return this.http.post(`${this.url}/roles`, data);
  }
}
