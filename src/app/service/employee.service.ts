import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../interface/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiURL='http://localhost:8080/api/employee/';
  
  constructor(private httpClient: HttpClient) { }

  getAll():Observable<Employee>{
      return this.httpClient.get<Employee>(this.apiURL+'all');     
  }

  create(employee:Employee):Observable<Employee>{
    return this.httpClient.post<Employee>(this.apiURL+'create',JSON.stringify(employee));
  }

  getById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(this.apiURL+id);
  }

  update(id:number, employee:Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(this.apiURL+id,JSON.stringify(employee));
  }

  delete(id:number):Observable<Object>{
    return this.httpClient.delete<Object>(this.apiURL+id);
  }
}
