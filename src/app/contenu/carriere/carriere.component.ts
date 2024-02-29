import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Carriere } from 'src/app/model/carriere';
import { CarriereService } from 'src/app/service/carriere.service';
import { TypeService } from 'src/app/service/type.service';
import { Localite } from 'src/app/model/localite';
import { LocaliteService } from 'src/app/service/localite.service';
import { Type } from 'src/app/model/type';

@Component({
  selector: 'app-carriere',
  templateUrl: './carriere.component.html',
  styleUrls:[ './carriere.component.css']

})
export class CarriereComponent implements OnInit {

  carrieres:Carriere[]=[];
  afficherListe:boolean=true;

  carriere : Carriere = new Carriere();

  localities : Localite[]=[];
  types : Type[]=[];


  constructor(private carriereService : CarriereService,
    private typeService : TypeService, private localiteService : LocaliteService){

  }
  ngOnInit(): void {
    this.getAllcarrieres();
    this.getAlltypes();
    this.getAllLocalities();

  }

  onSubmit(){
    
    console.log(this.carriere)

    this.carriereService.add(this.carriere).subscribe(
      (response:Carriere)=>{
        console.log(response);
      }
    )
  }

  
  delete(carriere : Carriere){
    this.carriereService.delete(carriere).subscribe(
      (response:string)=>{
        console.log(response);
      }
    )
  }

  deleteById(id : number){
    this.carriereService.deleteById(id).subscribe(
      (response:string)=>{
        console.log(response);
        this.getAllcarrieres();
      }
    )
  }
  

  getAllcarrieres(){
  this.carriereService.getAll().subscribe(
    (response:Carriere[])=>{
      this.carrieres = response;

      console.log(this.carrieres)
    }
  )
}

afficherFormulaire(){
  this.carriere = new Carriere();
  this.afficherListe=false;
}

afficherFormulaireMof(carriere : Carriere){
  this.afficherListe=false;
  this.carriere = carriere;
}
afficherTableaux(){
  this.getAllcarrieres();
  this.afficherListe=true;
  
}

getAllLocalities(){
  this.localiteService.getAll().subscribe(
    (response:Localite[])=>{
      this.localities = response;

      console.log(this.localities)
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
  


  

}
