import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExcusesService {

  constructor(private http: HttpClient) { }

  private hostAddr = 'http://localhost:8080/';
  private getUserExcusesUrl = this.hostAddr + 'api/excuses/user-excuses';
  private generateExcusesUrl = this.hostAddr + 'api/excuses/generate?';
  private getExcuseStatsUrl = this.hostAddr + 'api/excuses/stats';
  private getExcuseCategoriesUrl = this.hostAddr + 'api/excuses/categories';

  private token = sessionStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Token ${this.token}`
    })
  };

  generateExcuses(category: string, num: number){
    return this.http.get<any>(this.generateExcusesUrl + `category=${category}&num=${num}`, this.httpOptions);
  }

  getUserExcuses(){
    return this.http.get<any>(this.getUserExcusesUrl, this.httpOptions);
  }

  getExcuseStats(){
    return this.http.get<any>(this.getExcuseStatsUrl, this.httpOptions);
  }

  getExcuseCategories(){
    return this.http.get<string[]>(this.getExcuseCategoriesUrl, this.httpOptions);
  }
}
