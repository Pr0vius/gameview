import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-icons',
  templateUrl: './sidebar-icons.component.html',
  styleUrls: ['./sidebar-icons.component.scss'],
})
export class SidebarIconsComponent implements OnInit {
  @Input() icon: string = '';
  constructor() {}

  ngOnInit(): void {}
}
