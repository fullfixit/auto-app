import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoireComponent } from './accessoire.component';

describe('AccessoireComponent', () => {
  let component: AccessoireComponent;
  let fixture: ComponentFixture<AccessoireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AccessoireComponent]
    });
    fixture = TestBed.createComponent(AccessoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
