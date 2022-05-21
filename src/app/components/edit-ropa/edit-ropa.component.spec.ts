import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRopaComponent } from './edit-ropa.component';

describe('EditRopaComponent', () => {
  let component: EditRopaComponent;
  let fixture: ComponentFixture<EditRopaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRopaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
