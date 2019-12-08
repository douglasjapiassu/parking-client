import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExitComponent } from './add-exit.component';

describe('AddExitComponent', () => {
  let component: AddExitComponent;
  let fixture: ComponentFixture<AddExitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
