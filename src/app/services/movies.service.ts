import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

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

  moviesList(page = 0, size = 10, winner = null, year?) {
    if (winner === 'null') {
      winner = null;
    }

    return this.http.get(
      `${API.baseUrl}?page=${page}${size ? '&size=' + size : ''}${winner !== null ? '&winner=' + winner : ''}${
        year ? '&year=' + year : ''
      }`
    );
  }
}
