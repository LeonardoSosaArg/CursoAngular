import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloModificacionComponent } from './articulo-modificacion.component';

describe('ArticuloModificacionComponent', () => {
  let component: ArticuloModificacionComponent;
  let fixture: ComponentFixture<ArticuloModificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloModificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloModificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
