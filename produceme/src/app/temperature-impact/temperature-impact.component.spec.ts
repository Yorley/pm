import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureImpactComponent } from './temperature-impact.component';

describe('TemperatureImpactComponent', () => {
  let component: TemperatureImpactComponent;
  let fixture: ComponentFixture<TemperatureImpactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureImpactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
