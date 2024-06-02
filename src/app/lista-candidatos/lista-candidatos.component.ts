import { Candidato } from '../candidato/candidato.model';
import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../candidato/candidato.service';

@Component({
  selector: 'app-lista-candidatos',
  templateUrl: './lista-candidatos.component.html',
  styleUrls: ['./lista-candidatos.component.css']
})
export class ListaCandidatosComponent implements OnInit {
  candidatos: Candidato[] = [];

  constructor(private candidatoService: CandidatoService) { }

  ngOnInit(): void {
    this.getCandidatos();
  }

  getCandidatos(): void {
    this.candidatoService.getCandidatos()
      .subscribe(candidatos => this.candidatos = candidatos);
  }
}
