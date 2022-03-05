import { Injectable } from '@angular/core';
import { Login } from './login/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private hostAddr = 'http://localhost:8080/';
  private getAuthTokenUrl = this.hostAddr + 'api-token-auth/';

  login(creds: Login){
    return this.http.post<any>(this.getAuthTokenUrl, creds);
  }
}
