import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidato } from './candidato.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  private baseUrl = 'http://localhost:8080/api/candidatos';

  // Configuração das credenciais
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('admin:password') // Ou 'user:password' para o usuário comum
    })
  };

  constructor(private http: HttpClient) { }

  getCandidatos(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(this.baseUrl, this.httpOptions);
  }

  getCandidatosElegivel(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(this.baseUrl + '/elegivel', this.httpOptions);
  }

  getCandidatosPorEstado(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/por-estado', this.httpOptions);
  }

  getCandidatosPorFaixaEtaria(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/por-faixa-etaria', this.httpOptions);
  }

  getCandidatosPorPercentualObeso(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/percentual-obeso', this.httpOptions);
  }

  getCandidatosPorMediaSanguinea(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/media-idade-sanguineo', this.httpOptions);
  }

  getCandidatosPorTipoSanguineo(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/doadores-tipo-sanguineo', this.httpOptions);
  }
}
