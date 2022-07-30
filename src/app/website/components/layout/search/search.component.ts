import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  search: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}
  handleSubmit() {
    this.router.navigate(['/games'], {
      queryParams: {
        search: this.search,
      },
    });
  }
}
