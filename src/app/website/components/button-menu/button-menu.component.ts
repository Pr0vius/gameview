import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.scss'],
})
export class ButtonMenuComponent {
  @Input() active: boolean = false;
  @Output() clickEvt = new EventEmitter();
  constructor() {}

  handleClick() {
    this.active = !this.active;
    this.clickEvt.emit();
  }
}
