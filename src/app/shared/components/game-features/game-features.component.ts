import { Component, Input, OnInit } from '@angular/core';
import { Genre } from 'src/app/interfaces/genre';
import { Tag } from 'src/app/interfaces/tag';

@Component({
  selector: 'app-game-features',
  templateUrl: './game-features.component.html',
  styleUrls: ['./game-features.component.scss']
})
export class GameFeaturesComponent implements OnInit {
  @Input() genres!:Genre[]
  @Input() tags!:Tag[]

  constructor() { }

  ngOnInit(): void {
  }

}
