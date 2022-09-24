import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloAltaComponent } from './articulo-alta.component';

describe('ArticuloAltaComponent', () => {
  let component: ArticuloAltaComponent;
  let fixture: ComponentFixture<ArticuloAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
