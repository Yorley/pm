import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSoilComponent } from './test-soil.component';

describe('TestSoilComponent', () => {
  let component: TestSoilComponent;
  let fixture: ComponentFixture<TestSoilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSoilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSoilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
