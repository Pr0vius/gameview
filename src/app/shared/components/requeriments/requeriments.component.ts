import { Component, Input, OnInit } from '@angular/core';
import { GamePlatformRequeriments } from 'src/app/interfaces/game';

@Component({
  selector: 'app-requirements',
  templateUrl: './requeriments.component.html',
  styleUrls: ['./requeriments.component.scss'],
})
export class RequirementsComponent implements OnInit {
  @Input() requirements!: GamePlatformRequeriments | {};
  @Input() name: string = '';
  req!: string[][];
  constructor() {}

  ngOnInit(): void {
    if (this.requirements !== {}) {
      this.convertReqToArrays();
    }
  }
  private convertReqToArrays() {
    this.req = Object.values(this.requirements).map((e) => e.split('\n'));
    console.log(this.requirements)
  }
}
