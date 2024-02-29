import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Localite } from 'src/app/model/localite';
import { LocaliteService } from 'src/app/service/localite.service';

@Component({
  selector: 'app-localite',
  templateUrl: './localite.component.html',
  styleUrls:[ './localite.component.css']

})
export class LocaliteComponent implements OnInit {

  localities:Localite[]=[];
  afficherListe:boolean=true;

  localite : Localite = new Localite();

  constructor(private localiteService : LocaliteService){

  }
  ngOnInit(): void {
    this.getAllLocalities();

  }

  onSubmit(){
    
    console.log(this.localite)

    this.localiteService.add(this.localite).subscribe(
      (response:Localite)=>{
        console.log(response);
      }
    )
  }

  
  delete(localite : Localite){
    this.localiteService.delete(localite).subscribe(
      (response:string)=>{
        console.log(response);
      }
    )
  }

  deleteById(id : number){
    this.localiteService.deleteById(id).subscribe(
      (response:string)=>{
        console.log(response);
        this.getAllLocalities();
      }
    )
  }
  

  getAllLocalities(){
  this.localiteService.getAll().subscribe(
    (response:Localite[])=>{
      this.localities = response;

      console.log(this.localities)
    }
  )
}

afficherFormulaire(){
  this.localite = new Localite();
  this.afficherListe=false;
}

afficherFormulaireMof(localite : Localite){
  this.afficherListe=false;
  this.localite = localite;
}
afficherTableaux(){
  this.getAllLocalities();
  this.afficherListe=true;
  
}
  


  

}
