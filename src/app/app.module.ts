import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BarNavigationComponent } from './bar-navigation/bar-navigation.component';
import { ContenuComponent } from './contenu/contenu.component';
import { BaDePageComponent } from './ba-de-page/ba-de-page.component';
import { MenuComponent } from './contenu/menu/menu.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule}from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { TypeComponent } from './contenu/type/type.component';
import { LocaliteComponent } from './contenu/localite/localite.component';
import { CarriereComponent } from './contenu/carriere/carriere.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BarNavigationComponent,
    ContenuComponent,
    BaDePageComponent,
    TypeComponent,
    LocaliteComponent,
    CarriereComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
