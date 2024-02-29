import { Component, OnInit } from '@angular/core';
import { Carriere } from 'src/app/model/carriere';
import { Localite } from 'src/app/model/localite';
import { Type } from 'src/app/model/type';
import { CarriereService } from 'src/app/service/carriere.service';
import { LocaliteService } from 'src/app/service/localite.service';
import { TypeService } from 'src/app/service/type.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  types:Type[]=[];
  carrieres:Carriere[]=[];
  localities:Localite[]=[];

  nbreCarriere : number;
  nbreType : number;
  nbreLocalite : number;


  constructor(private typeService : TypeService,
    private localiteService : LocaliteService,private carriereService: CarriereService) { }

  ngOnInit(): void {

    this.getAllcarrieres();
    this.getAlltypes();
    this.getAllLocalities();

  }

  getAlltypes(){
    this.typeService.getAll().subscribe(
      (response:Type[])=>{
        this.types = response;
        this.nbreType=this.types.length;
  
        console.log(this.types)
      }
    )
  }

  getAllLocalities(){
    this.localiteService.getAll().subscribe(
      (response:Localite[])=>{
        this.localities = response;
       
         this.nbreLocalite=this.localities.length;
  
        console.log(this.localities)
      }
    )
  }

  getAllcarrieres(){
    this.carriereService.getAll().subscribe(
      (response:Carriere[])=>{
        this.carrieres = response;

        this.nbreCarriere=this.carrieres.length;
  
        console.log(this.carrieres)
      }
    )
  }

}
