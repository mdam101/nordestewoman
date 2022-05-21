import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaDetailsComponent } from './ropa-details.component';

describe('RopaDetailsComponent', () => {
  let component: RopaDetailsComponent;
  let fixture: ComponentFixture<RopaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RopaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
