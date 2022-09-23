import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPostComponent } from './alta-post.component';

describe('AltaPostComponent', () => {
  let component: AltaPostComponent;
  let fixture: ComponentFixture<AltaPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
