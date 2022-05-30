import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  id: any;
  type: any;
  url: any;
  movies: any;
  movie:any
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.type = this.route.snapshot.params['type'];
    if (this.type === 'Trending') {
      this.url = 'http://localhost:4200/assets/data/trending-movies.json';
    }
    if (this.type === 'Popular') {
      this.url = 'http://localhost:4200/assets/data/popular-movie.json';
    }
    if (this.type === 'Theatre') {
      this.url = 'http://localhost:4200/assets/data/theatre.json';
    }
    this.getMovie();
  }
  getMovie() {
     this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex(
        (movie: { id: string }) => (movie.id == this.id)
      );
      if(index > -1) {
        this.movie  = this.movies[index]
      }
    });
  }
}
