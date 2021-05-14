
import { Component, OnInit,ViewChild } from '@angular/core';
import { MoviesService } from './movies.service';
import { NgForm,NgModel } from '@angular/forms'
import { IFinal } from './movie';
declare var bm: Function;

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
    title: any;
    public MovieList : Array<any>= [];
  
    //Logic for calling a HTTP service  
 
  constructor(private service: MoviesService){   } 
  search(form:NgForm){
    this.title=form.value.title;
    this.service.getMovies(this.title).subscribe(data => {
      for (var mov of data["Search"]){
      this.service.getRating(<String>mov["Title"])
      .subscribe((newdata: any) => { 
        console.log(newdata)
        let movie_info: IFinal = {
          Title: newdata['Title'],
          Year: newdata['Year'],
          Poster: newdata['Poster'],
          Ratings:newdata['Ratings']
        };
        this.MovieList.push(movie_info) }  )
      }
    })  
    
  }

  save(movie:any){
    bm(movie);
  }
ngOnInit () { }
}


