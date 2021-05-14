import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  {path: 'bookmark', component: BookmarkComponent},
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
