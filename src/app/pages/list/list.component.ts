import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  page = 0;
  size = 20;
  winner: boolean;
  year: number;
  count: number;
  loadingIndicator = false;

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
    this.loadingIndicator = true;
    this.moviesService.moviesList(this.page, this.size, this.winner, this.year).subscribe(res => {
      this.movies = res['content'];
      this.count = res['totalElements'];
      this.loadingIndicator = false;
    });
  }

  onChangeYear(year) {
    this.loadingIndicator = true;
    this.moviesService.moviesList(this.page, this.size, this.winner, year)
      .subscribe(res => {
        this.page = 0;
        this.year = year;
        this.movies = res['content'];
        this.count = res['totalElements'];
        this.loadingIndicator = false;
      });
  }

  onChangeWinner(winner) {
    this.loadingIndicator = true;
    this.moviesService.moviesList(this.page, this.size, winner, this.year)
      .subscribe(res => {
        this.page = 0;
        this.winner = winner;
        this.movies = res['content'];
        this.count = res['totalElements'];
        this.loadingIndicator = false;
      });
  }

  setPage(pageInfo) {
    this.loadingIndicator = true;
    this.moviesService.moviesList(pageInfo.offset, this.size, this.winner, this.year)
      .subscribe(res => {
        this.movies = res['content'];
        this.count = res['totalElements'];
        this.loadingIndicator = false;
      });
  }
}
