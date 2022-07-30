import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  active: boolean = false;
  constructor() {
  }
  handleClick() {
    this.active = !this.active
  }
}
