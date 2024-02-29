import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Type } from 'src/app/model/type';
import { TypeService } from 'src/app/service/type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls:[ './type.component.css']

})
export class TypeComponent implements OnInit {

  types:Type[]=[];
  afficherListe:boolean=true;

  type : Type = new Type();

  constructor(private typeService : TypeService){

  }
  ngOnInit(): void {
    this.getAlltypes();

  }

  onSubmit(){
    
    console.log(this.type)

    this.typeService.add(this.type).subscribe(
      (response:Type)=>{
        console.log(response);
      }
    )
  }

  
  delete(type : Type){
    this.typeService.delete(type).subscribe(
      (response:string)=>{
        console.log(response);
      }
    )
  }

  deleteById(id : number){
    this.typeService.deleteById(id).subscribe(
      (response:string)=>{
        console.log(response);
        this.getAlltypes();
      }
    )
  }
  

  getAlltypes(){
  this.typeService.getAll().subscribe(
    (response:Type[])=>{
      this.types = response;

      console.log(this.types)
    }
  )
}

afficherFormulaire(){
  this.type = new Type();
  this.afficherListe=false;
}

afficherFormulaireMof(type : Type){
  this.afficherListe=false;
  this.type = type;
}
afficherTableaux(){
  this.getAlltypes();
  this.afficherListe=true;
  
}
  


  

}
