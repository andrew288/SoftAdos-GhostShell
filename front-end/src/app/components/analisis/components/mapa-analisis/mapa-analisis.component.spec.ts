import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaAnalisisComponent } from './mapa-analisis.component';

describe('MapaAnalisisComponent', () => {
  let component: MapaAnalisisComponent;
  let fixture: ComponentFixture<MapaAnalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaAnalisisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
