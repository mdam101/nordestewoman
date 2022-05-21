import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaCategoriaComponent } from './ropa-categoria.component';

describe('RopaCategoriaComponent', () => {
  let component: RopaCategoriaComponent;
  let fixture: ComponentFixture<RopaCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopaCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RopaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
