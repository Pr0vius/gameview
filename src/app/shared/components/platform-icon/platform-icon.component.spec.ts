import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformIconComponent } from './platform-icon.component';

describe('PlatformIconComponent', () => {
  let component: PlatformIconComponent;
  let fixture: ComponentFixture<PlatformIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
