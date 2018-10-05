import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LatestMoviesComponent } from './latest-movies/latest-movies.component';
import { SearchComponent } from './search/search.component';
import { FullComponent } from './full/full.component';
import {MoreComponent} from './more/more.component';
import {ExistingComponent} from './existing/existing.component';
import {ForDeleteComponent} from './for-delete/for-delete.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'Latest_movies', component: LatestMoviesComponent},
  {path: 'Latest_movies/more/:title', component: MoreComponent},
  {path: 'Latest_movies/more/:title/add_db/:title', component: FullComponent},
  {path: 'Latest_movies/more/:title/add_db_ex/:title', component: ExistingComponent},
  {path: 'search_page', component: SearchComponent},
  {path:'search_page/all_details/:title',component:FullComponent},
  {path:'search_page/more/:title',component:MoreComponent},
  {path:'search_page/more/:title/add_db/:title',component:FullComponent},
  {path:'search_page/more/:title/add_db/:title/delete/:value',component:ForDeleteComponent},
  {path:'Latest_movies/more/:title/add_db_ex/:title/delete/:value',component:ForDeleteComponent},
  {path:'search_page/more/:title/add_db_ex/:title',component:ExistingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
