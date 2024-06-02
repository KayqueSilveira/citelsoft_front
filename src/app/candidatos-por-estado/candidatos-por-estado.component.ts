import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../candidato/candidato.service';
import { Candidato } from '../candidato/candidato.model';


@Component({
  selector: 'app-candidatos-por-estado',
  templateUrl: './candidatos-por-estado.component.html',
  styleUrl: './candidatos-por-estado.component.css'
})
export class CandidatosPorEstadoComponent implements OnInit {
  candidatosPorEstado: any[] = [];

  constructor(private candidatoService: CandidatoService) { }

  ngOnInit(): void {
    this.getCandidatosPorEstado();
  }

  getCandidatosPorEstado(): void {
    this.candidatoService.getCandidatosPorEstado()
    .subscribe(data => this.candidatosPorEstado = data);
  }
}
