import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  form: FormGroup;

  moviesYearsWithMultipleWinners;
  columnsMoviesYearsWithMultipleWinners = [
    { prop: 'year', name: 'Year' },
    { name: 'Winner Count', prop: 'winnerCount' }
  ];

  moviesWithWinCount;
  columnsMoviesWithWinCount = [{ prop: 'name', name: 'Name' }, { prop: 'winCount', name: 'Win Count' }];

  maxMinWinIntervalForProducer;
  columnsMaxMinWinIntervalForProducer = [
    { prop: 'producer', name: 'Producer' },
    { prop: 'interval', name: 'Interval' },
    { prop: 'previousWin', name: 'Previous Year' },
    { prop: 'followingWin', name: 'Following Year' }
  ];

  moviesWinnersByYear;
  columnsMoviesWinnersByYear = [
    { prop: 'id', name: 'Id' },
    { prop: 'year', name: 'Year' },
    { prop: 'title', name: 'Title' }
  ];

  constructor(private moviesService: MoviesService, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      year: [null]
    });

    this.getMoviesYearsWithMultipleWinners();
    this.getStudiosWithWinCount();
    this.getMaxMinWinIntervalForProducer();
  }

  getMoviesYearsWithMultipleWinners() {
    this.moviesService.yearsWithMutipleWinners().subscribe(res => {
      this.moviesYearsWithMultipleWinners = res['years'];
    });
  }

  getStudiosWithWinCount() {
    this.moviesService.studiosWithWinCount().subscribe(res => {
      this.moviesWithWinCount = res['studios'].sort((a, b) => a.winCount < b.winCount).slice(0, 3);
    });
  }

  getMaxMinWinIntervalForProducer() {
    this.moviesService.maxMinWinIntervalForProducers().subscribe(res => {
      this.maxMinWinIntervalForProducer = res;
    });
  }

  search() {
    this.moviesService.getMoviesWinnersByYear(this.form.value.year).subscribe(res => {
      this.moviesWinnersByYear = res;
    });
  }
}
