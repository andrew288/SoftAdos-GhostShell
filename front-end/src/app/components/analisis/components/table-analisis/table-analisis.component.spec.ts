import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAnalisisComponent } from './table-analisis.component';

describe('TableAnalisisComponent', () => {
  let component: TableAnalisisComponent;
  let fixture: ComponentFixture<TableAnalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAnalisisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
