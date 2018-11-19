import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  yearsWithMutipleWinners() {
    return this.http.get(`${API.baseUrl}?projection=years-with-multiple-winners`);
  }

  studiosWithWinCount() {
    return this.http.get(`${API.baseUrl}?projection=studios-with-win-count`);
  }

  maxMinWinIntervalForProducers() {
    return this.http.get(`${API.baseUrl}?projection=max-min-win-interval-for-producers`);
  }

  getMoviesWinnersByYear(year) {
    return this.http.get(`${API.baseUrl}?winner=true&year=${year}`);
  }

  moviesList() {
    return this.http.get(`${API.baseUrl}?page=9&size=99&winner=true&year=2018`);
  }
}
