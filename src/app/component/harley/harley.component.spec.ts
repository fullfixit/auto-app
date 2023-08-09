import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarleyComponent } from './harley.component';

describe('HarleyComponent', () => {
  let component: HarleyComponent;
  let fixture: ComponentFixture<HarleyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HarleyComponent]
    });
    fixture = TestBed.createComponent(HarleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
