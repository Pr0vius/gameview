import { Component, Input, OnInit } from '@angular/core';
import { GamesRating } from 'src/app/interfaces/game';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.scss'],
})
export class RatingBarComponent implements OnInit {
  @Input() ratings!: GamesRating[];
  @Input() count!: number;

  constructor() {}

  ngOnInit(): void {}
}
