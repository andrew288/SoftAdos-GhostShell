import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAnalisisComponent } from './layout-analisis.component';

describe('LayoutAnalisisComponent', () => {
  let component: LayoutAnalisisComponent;
  let fixture: ComponentFixture<LayoutAnalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutAnalisisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
