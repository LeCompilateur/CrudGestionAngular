import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Type } from '../model/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {




  constructor(private http: HttpClient) { }



  getAll():Observable<Type[]>{
    return this.http.get<Type[]>('http://localhost:8080/type/list')
  }

  
  public add(type:Type):Observable<Type>{
    return this.http.post<Type>('http://localhost:8080/type/add',type)}

    delete(type:Type):Observable<any>{
      return this.http.post('http://localhost:8080/type/delete',type);
     }

     deleteById(id:number):Observable<String>{
      return this.http.delete('http://localhost:8080/type/delete/'+id,{responseType:'text'})
     }
}
