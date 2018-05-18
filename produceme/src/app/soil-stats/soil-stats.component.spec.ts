import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilStatsComponent } from './soil-stats.component';

describe('SoilStatsComponent', () => {
  let component: SoilStatsComponent;
  let fixture: ComponentFixture<SoilStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoilStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoilStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
