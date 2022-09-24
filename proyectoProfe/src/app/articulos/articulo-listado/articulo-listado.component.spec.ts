import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloListadoComponent } from './articulo-listado.component';

describe('ArticuloListadoComponent', () => {
  let component: ArticuloListadoComponent;
  let fixture: ComponentFixture<ArticuloListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
