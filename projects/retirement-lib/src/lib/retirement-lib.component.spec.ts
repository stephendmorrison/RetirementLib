import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementLibComponent } from './retirement-lib.component';

describe('RetirementLibComponent', () => {
  let component: RetirementLibComponent;
  let fixture: ComponentFixture<RetirementLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetirementLibComponent]
    });
    fixture = TestBed.createComponent(RetirementLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
