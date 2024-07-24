import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosCategoriasComponent } from './dados-categorias.component';

describe('DadosCategoriasComponent', () => {
  let component: DadosCategoriasComponent;
  let fixture: ComponentFixture<DadosCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosCategoriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
