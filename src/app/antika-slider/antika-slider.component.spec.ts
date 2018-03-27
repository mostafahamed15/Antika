import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntikaSliderComponent } from './antika-slider.component';

describe('AntikaSliderComponent', () => {
  let component: AntikaSliderComponent;
  let fixture: ComponentFixture<AntikaSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntikaSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntikaSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
