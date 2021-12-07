import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBook():Observable<any> {
    return this.http.get(environment.API_URL + 'books')
  }

  deleteBook(id: any):Observable<any> {
    return this.http.delete(environment.API_URL + `books/${id}`)
  }

  createBook(data: any):Observable<any> {
    return this.http.post<any>(environment.API_URL + 'books', data)
  }

  updateBook(id: any, data: any):Observable<any> {
    return this.http.put(environment.API_URL + 'books/' +id,data)
  }

  getById(id: any):Observable<any> {
    return this.http.get(environment.API_URL + `books/${id}`)
  }
}
