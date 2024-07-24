import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosVideosComponent } from './dados-videos.component';

describe('DadosVideosComponent', () => {
  let component: DadosVideosComponent;
  let fixture: ComponentFixture<DadosVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosVideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
