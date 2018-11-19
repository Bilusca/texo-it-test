import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  page = 1;
  size = 10;
  winner: boolean;
  year: number;

  movies;
  columnsMovies = [
    { prop: 'id', name: 'Id' },
    { prop: 'year', name: 'Year' },
    { prop: 'title', name: 'Title' },
    { prop: 'winner', name: 'Winner' }
  ];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getMoviesList();
  }

  getMoviesList() {
    this.moviesService.moviesList().subscribe(res => {
      this.movies = res['content'];
    });
  }
}
