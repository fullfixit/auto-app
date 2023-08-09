import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoldorComponent } from './boldor.component';

describe('BoldorComponent', () => {
  let component: BoldorComponent;
  let fixture: ComponentFixture<BoldorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BoldorComponent]
    });
    fixture = TestBed.createComponent(BoldorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
