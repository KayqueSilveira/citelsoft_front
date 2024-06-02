import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../candidato/candidato.service';

@Component({
  selector: 'app-doadores-tipo-receptor',
  templateUrl: './doadores-tipo-receptor.component.html',
  styleUrl: './doadores-tipo-receptor.component.css'
})
export class DoadoresTipoReceptorComponent implements OnInit {
  candidatos: any[] = [];

  constructor(private candidatoService: CandidatoService) { }

  ngOnInit(): void {
    this.getCandidatosPorTipoSanguineo();
  }

  getCandidatosPorTipoSanguineo(): void {
    this.candidatoService.getCandidatosPorTipoSanguineo()
    .subscribe(data => {
      this.candidatos = data;
    });
  }
}
