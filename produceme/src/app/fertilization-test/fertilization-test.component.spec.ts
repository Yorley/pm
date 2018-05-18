import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizationTestComponent } from './fertilization-test.component';

describe('FertilizationTestComponent', () => {
  let component: FertilizationTestComponent;
  let fixture: ComponentFixture<FertilizationTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FertilizationTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilizationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
