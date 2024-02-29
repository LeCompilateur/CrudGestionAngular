import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenuComponent } from './contenu/contenu.component';

import { MenuComponent } from './contenu/menu/menu.component';

import { TypeComponent } from './contenu/type/type.component';
import { LocaliteComponent } from './contenu/localite/localite.component';
import { CarriereComponent } from './contenu/carriere/carriere.component';

const routes: Routes = [
  {path:'',redirectTo:'acceuil/menu',pathMatch:'full'},
  {path:'acceuil',component:ContenuComponent,
  children:[
    {path:'type',component:TypeComponent},
    {path:'localite',component:LocaliteComponent},
    {path:'carriere',component:CarriereComponent},
    {path:'menu',component:MenuComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
