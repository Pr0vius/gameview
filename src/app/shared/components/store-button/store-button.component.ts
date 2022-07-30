import { Component, Input, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/interfaces/api';
import { Store } from 'src/app/interfaces/store';

@Component({
  selector: 'app-store-button',
  templateUrl: './store-button.component.html',
  styleUrls: ['./store-button.component.scss']
})
export class StoreButtonComponent implements OnInit {
  @Input() store!: Store;
  constructor() { }

  ngOnInit(): void {
  }
}
