import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ImcFaixaIdadeComponent } from './imc-faixa-idade/imc-faixa-idade.component';
import { PercentualObesosComponent } from './percentual-obesos/percentual-obesos.component';
import { MediaIdadeTipoSanguineoComponent } from './media-idade-tipo-sanguineo/media-idade-tipo-sanguineo.component';
import { DoadoresTipoReceptorComponent } from './doadores-tipo-receptor/doadores-tipo-receptor.component';
import { ListaCandidatosComponent } from './lista-candidatos/lista-candidatos.component';
import {CandidatosPorEstadoComponent} from './candidatos-por-estado/candidatos-por-estado.component';


const routes: Routes = [
  { path: 'imc-faixa-idade', component: ImcFaixaIdadeComponent },
  { path: 'percentual-obesos', component: PercentualObesosComponent },
  { path: 'media-idade-tipo-sanguineo', component: MediaIdadeTipoSanguineoComponent },
  { path: 'doadores-tipo-receptor', component: DoadoresTipoReceptorComponent },
  { path: 'candidatos', component: ListaCandidatosComponent },
  { path: 'candidatos/por-estado' , component: CandidatosPorEstadoComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ImcFaixaIdadeComponent,
    PercentualObesosComponent,
    MediaIdadeTipoSanguineoComponent,
    DoadoresTipoReceptorComponent,
    ListaCandidatosComponent,
    CandidatosPorEstadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
