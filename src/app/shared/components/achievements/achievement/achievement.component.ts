import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Achievement } from 'src/app/interfaces/achievement';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss'],
})
export class AchievementComponent implements OnInit {
  @Input() achievement!: Achievement;
  @Input() total!: number;
  @Input() last: boolean = false;
  @Input() small: boolean = false;
  @Output() clickAchievement = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.clickAchievement.emit();
  }
}
