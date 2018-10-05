import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { LatestMoviesComponent } from './latest-movies/latest-movies.component';
import { SearchComponent } from './search/search.component';
import { FullComponent } from './full/full.component';
import { MoreComponent } from './more/more.component';
import { ExistingComponent } from './existing/existing.component';
import { ForDeleteComponent } from './for-delete/for-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LatestMoviesComponent,
    SearchComponent,
    FullComponent,
    MoreComponent,
    ExistingComponent,
    ForDeleteComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  exports: [ RouterModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
