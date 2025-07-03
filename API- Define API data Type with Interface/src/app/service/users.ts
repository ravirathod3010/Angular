import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class Users {

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    const url = "http://localhost:3000/users";
    return this.http.get<User[]>(url)
  }
}
