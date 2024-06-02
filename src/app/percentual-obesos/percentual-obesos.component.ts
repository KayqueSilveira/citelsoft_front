import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../candidato/candidato.service';

@Component({
  selector: 'app-percentual-obesos',
  templateUrl: './percentual-obesos.component.html',
  styleUrl: './percentual-obesos.component.css'
})
export class PercentualObesosComponent implements OnInit {
  candidatos: any[] = [];

  constructor(private candidatoService: CandidatoService) { }

  ngOnInit(): void {
    this.getCandidatosPorPercentualObeso();
  }

  getCandidatosPorPercentualObeso(): void {
    this.candidatoService.getCandidatosPorPercentualObeso()
    .subscribe(data => {
      this.candidatos = data;
    });
  }
}
