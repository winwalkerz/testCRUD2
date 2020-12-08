import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerEditComponent } from './drawer-edit.component';

describe('DrawerEditComponent', () => {
  let component: DrawerEditComponent;
  let fixture: ComponentFixture<DrawerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
