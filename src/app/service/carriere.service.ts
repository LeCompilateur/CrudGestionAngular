import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carriere } from '../model/carriere';

@Injectable({
  providedIn: 'root'
})
export class CarriereService {




  constructor(private http: HttpClient) { }



  getAll():Observable<Carriere[]>{
    return this.http.get<Carriere[]>('http://localhost:8080/carriere/list')
  }

  
  public add(carriere:Carriere):Observable<Carriere>{
    return this.http.post<Carriere>('http://localhost:8080/carriere/add',carriere)}

    delete(carriere:Carriere):Observable<any>{
      return this.http.post('http://localhost:8080/carriere/delete',carriere);
     }

     deleteById(id:number):Observable<String>{
      return this.http.delete('http://localhost:8080/carriere/delete/'+id,{responseType:'text'})
     }
}
