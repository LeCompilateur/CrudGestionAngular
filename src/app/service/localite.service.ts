import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Localite } from '../model/localite';

@Injectable({
  providedIn: 'root'
})
export class LocaliteService {




  constructor(private http: HttpClient) { }



  getAll():Observable<Localite[]>{
    return this.http.get<Localite[]>('http://localhost:8080/localite/list')
  }

  
  public add(localite:Localite):Observable<Localite>{
    return this.http.post<Localite>('http://localhost:8080/localite/add',localite)}

    delete(localite:Localite):Observable<any>{
      return this.http.post('http://localhost:8080/localite/delete',localite);
     }

     deleteById(id:number):Observable<String>{
      return this.http.delete('http://localhost:8080/localite/delete/'+id,{responseType:'text'})
     }
}
