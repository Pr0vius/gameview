import { Component, Input, OnInit } from '@angular/core';
import { Genre } from 'src/app/interfaces/genre';
import { PlatformWithGames } from 'src/app/interfaces/platform';
import { Tag } from 'src/app/interfaces/tag';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() item!: PlatformWithGames | Genre | Tag;
  @Input() renderIcon: boolean = false;
  @Input() routerLink: string | string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
