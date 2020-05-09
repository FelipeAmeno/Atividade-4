import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { async } from '@angular/core/testing'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private JsonArquivo = 'https://jsonplaceholder.typicode.com/user';
  constructor(private http: HttpClient) { }

  async Get() {
    let resp = await this.http.get(this.JsonArquivo).toPromise();
    return resp;

  }

  async GetById(id) {
    let resp = await this.http.get(this.JsonArquivo + id).toPromise();
    return resp;
  }

  async Post(obj) {
    let resp = await this.http.post(this.JsonArquivo, obj, { observe: 'response' }).toPromise();
    return resp;
  }
}
