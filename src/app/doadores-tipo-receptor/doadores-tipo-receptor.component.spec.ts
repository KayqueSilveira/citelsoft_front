import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoadoresTipoReceptorComponent } from './doadores-tipo-receptor.component';

describe('DoadoresTipoReceptorComponent', () => {
  let component: DoadoresTipoReceptorComponent;
  let fixture: ComponentFixture<DoadoresTipoReceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoadoresTipoReceptorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoadoresTipoReceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
