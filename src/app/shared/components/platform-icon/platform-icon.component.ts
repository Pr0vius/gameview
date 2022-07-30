import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-platform-icon',
  templateUrl: './platform-icon.component.html',
  styleUrls: ['./platform-icon.component.scss'],
})
export class PlatformIconComponent implements OnInit {
  @Input() platform: string = '';
  constructor() {}

  ngOnInit(): void {}
}
