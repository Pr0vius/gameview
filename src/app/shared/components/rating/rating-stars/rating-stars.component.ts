import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss'],
})
export class RatingStarsComponent implements OnInit {
  @Input() rating!: number | string;
  stars: number[] = [];
  constructor() {}

  ngOnInit(): void {
    this.fixRating();
  }

  private fixRating() {
    const absoluteValue = Math.abs(Math.round(+this.rating * 10));
    let result = String(Math.floor(absoluteValue / 10));
    const fraction = String(absoluteValue % 10);
    this.rating = result += '.' + fraction;
  }
}
