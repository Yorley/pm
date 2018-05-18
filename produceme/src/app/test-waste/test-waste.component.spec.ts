import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWasteComponent } from './test-waste.component';

describe('TestWasteComponent', () => {
  let component: TestWasteComponent;
  let fixture: ComponentFixture<TestWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
