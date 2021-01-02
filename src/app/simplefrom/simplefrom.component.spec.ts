import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplefromComponent } from './simplefrom.component';

describe('SimplefromComponent', () => {
  let component: SimplefromComponent;
  let fixture: ComponentFixture<SimplefromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplefromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplefromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
