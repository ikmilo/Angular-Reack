import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DproductoComponent } from './dproducto.component';

describe('DproductoComponent', () => {
  let component: DproductoComponent;
  let fixture: ComponentFixture<DproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
