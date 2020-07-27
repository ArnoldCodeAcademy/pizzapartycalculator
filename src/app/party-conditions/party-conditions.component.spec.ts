import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyConditionsComponent } from './party-conditions.component';

describe('PartyConditionsComponent', () => {
  let component: PartyConditionsComponent;
  let fixture: ComponentFixture<PartyConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
