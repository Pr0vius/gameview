import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarIconsComponent } from './sidebar-icons.component';

describe('SidebarIconsComponent', () => {
  let component: SidebarIconsComponent;
  let fixture: ComponentFixture<SidebarIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
