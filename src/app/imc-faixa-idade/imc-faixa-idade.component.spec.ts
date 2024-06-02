import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcFaixaIdadeComponent } from './imc-faixa-idade.component';

describe('ImcFaixaIdadeComponent', () => {
  let component: ImcFaixaIdadeComponent;
  let fixture: ComponentFixture<ImcFaixaIdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImcFaixaIdadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImcFaixaIdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
