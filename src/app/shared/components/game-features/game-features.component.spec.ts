import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFeaturesComponent } from './game-features.component';

describe('GameFeaturesComponent', () => {
  let component: GameFeaturesComponent;
  let fixture: ComponentFixture<GameFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
