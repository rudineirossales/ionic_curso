
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');


 
  }

  getLatestMovies(){

    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=3e4e8e1b849318cebadb7ad490672c58");
    
    
        }

}
