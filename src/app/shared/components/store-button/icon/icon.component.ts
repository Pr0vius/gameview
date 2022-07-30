import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/app/interfaces/store';

@Component({
  selector: 'app-store-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() store!: Store;
  constructor() { }

  ngOnInit(): void {
  }

}
