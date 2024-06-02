import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../candidato/candidato.service';

@Component({
  selector: 'app-media-idade-tipo-sanguineo',
  templateUrl: './media-idade-tipo-sanguineo.component.html',
  styleUrl: './media-idade-tipo-sanguineo.component.css'
})
export class MediaIdadeTipoSanguineoComponent implements OnInit {
  candidatos: any[] = [];

  constructor(private candidatoService: CandidatoService) { }

  ngOnInit(): void {
    this.getCandidatosPorMediaSanguinea();
  }

  getCandidatosPorMediaSanguinea(): void {
    this.candidatoService.getCandidatosPorMediaSanguinea()
    .subscribe(data => {
      this.candidatos = data;
    });
  }
}

