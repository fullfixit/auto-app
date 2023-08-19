import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundimageComponent } from './backgroundimage.component';

describe('BackgroundimageComponent', () => {
  let component: BackgroundimageComponent;
  let fixture: ComponentFixture<BackgroundimageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BackgroundimageComponent]
    });
    fixture = TestBed.createComponent(BackgroundimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
