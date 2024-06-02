import { Routes } from '@angular/router';
import {ImcFaixaIdadeComponent} from './imc-faixa-idade/imc-faixa-idade.component';
import {DoadoresTipoReceptorComponent} from './doadores-tipo-receptor/doadores-tipo-receptor.component';
import {MediaIdadeTipoSanguineoComponent} from './media-idade-tipo-sanguineo/media-idade-tipo-sanguineo.component';
import {PercentualObesosComponent} from './percentual-obesos/percentual-obesos.component';
import {ListaCandidatosComponent} from './lista-candidatos/lista-candidatos.component';
import {CandidatosPorEstadoComponent} from './candidatos-por-estado/candidatos-por-estado.component';


export const routes: Routes = [
  { path: 'imc-faixa-idade', component: ImcFaixaIdadeComponent },
  { path: 'doadores-tipo-receptor' , component: DoadoresTipoReceptorComponent},
  { path: 'media-idade-tipo-sanguineo' , component: MediaIdadeTipoSanguineoComponent},
  { path: 'percentual-obesos' , component: PercentualObesosComponent},
  { path: 'candidatos' , component: ListaCandidatosComponent},
  { path: 'candidatos/por-estado' , component: CandidatosPorEstadoComponent}
];
