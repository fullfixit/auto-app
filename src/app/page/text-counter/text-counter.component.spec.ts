import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCounterComponent } from './text-counter.component';

describe('TextCounterComponent', () => {
  let component: TextCounterComponent;
  let fixture: ComponentFixture<TextCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextCounterComponent]
    });
    fixture = TestBed.createComponent(TextCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
