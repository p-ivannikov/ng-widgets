import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsBarComponent } from './widgets-bar.component';

describe('WidgetsBarComponent', () => {
  let component: WidgetsBarComponent;
  let fixture: ComponentFixture<WidgetsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
