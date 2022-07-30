import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Achievement } from 'src/app/interfaces/achievement';

@Component({
  selector: 'app-achievement-modal',
  templateUrl: './achievement-modal.component.html',
  styleUrls: ['./achievement-modal.component.scss'],
})
export class AchievementModalComponent implements OnInit {
  @Input() achievements: Achievement[] = [];
  @Output() close = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  closeModal() {
    this.close.emit();
  }
}
