import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.scss'],
})
export class LoadButtonComponent implements OnInit {
  @Input() loading: boolean = false;
  @Input() text: string = 'Load More';
  @Output() click = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.click.emit();
  }
}
