import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataControlComponent } from './data-control.component';

describe('DataControlComponent', () => {
  let component: DataControlComponent;
  let fixture: ComponentFixture<DataControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
