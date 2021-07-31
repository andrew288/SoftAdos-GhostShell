import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoAnalisisComponent } from './grafico-analisis.component';

describe('GraficoAnalisisComponent', () => {
  let component: GraficoAnalisisComponent;
  let fixture: ComponentFixture<GraficoAnalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoAnalisisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
