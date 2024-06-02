import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../candidato/candidato.service';

@Component({
  selector: 'app-imc-faixa-idade',
  templateUrl: './imc-faixa-idade.component.html',
  styleUrl: './imc-faixa-idade.component.css'
})
export class ImcFaixaIdadeComponent implements OnInit {
  candidatos: any[] = [];

  constructor(private candidatoService: CandidatoService) { }

  ngOnInit(): void {
    this.getCandidatosPorFaixaEtaria();
  }

  getCandidatosPorFaixaEtaria(): void {
    this.candidatoService.getCandidatosPorFaixaEtaria()
      .subscribe(data => {
        this.candidatos = Object.entries(data).map(([faixaEtaria, imc]) => ({ faixaEtaria, imc }));
      });
  }
}
