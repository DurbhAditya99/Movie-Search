import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { ISearch } from './movie'
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';


@Injectable()
export class MoviesService{ 
    
    constructor(private http: HttpClient){ }

    private url: string = "https://www.omdbapi.com/";
    private apikey: string = '1a718aab' 

    getMovies(@Inject(String) name: String): Observable<ISearch>{
        return this.http.get<ISearch>(`${this.url}?s=${name}&apikey=${this.apikey}`);
        
    } 
    getRating( name: String){
        return this.http.get(`${this.url}?t=${name}&apikey=${this.apikey}`);
        
    } 

}