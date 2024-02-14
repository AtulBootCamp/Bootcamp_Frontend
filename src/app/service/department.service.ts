import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../interface/department';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private path='http://localhost:8080/api/department/';
  
  constructor(private httpClient: HttpClient) { }

  getAll():Observable<Department>{    
    console.log("Inside Service");   
    return this.httpClient.get<Department>(this.path+'all');    
  }

  create(department:Department):Observable<Department>{
    return this.httpClient.post<Department>(this.path+'create',JSON.stringify(department));
  }

  getById(id:number):Observable<Department>{
    return this.httpClient.get<Department>(this.path+id);
  }

  update(id:number, department:Department):Observable<Department>{
    return this.httpClient.put<Department>(this.path+id,JSON.stringify(department));
  }

  delete(id:number):Observable<Department>{
    return this.httpClient.delete<Department>(this.path+id);
  }
}
