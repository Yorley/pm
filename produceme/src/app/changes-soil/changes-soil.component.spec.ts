import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesSoilComponent } from './changes-soil.component';

describe('ChangesSoilComponent', () => {
  let component: ChangesSoilComponent;
  let fixture: ComponentFixture<ChangesSoilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangesSoilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesSoilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
