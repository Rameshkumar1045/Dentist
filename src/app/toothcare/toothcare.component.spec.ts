import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToothcareComponent } from './toothcare.component';

describe('ToothcareComponent', () => {
  let component: ToothcareComponent;
  let fixture: ComponentFixture<ToothcareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToothcareComponent]
    });
    fixture = TestBed.createComponent(ToothcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
