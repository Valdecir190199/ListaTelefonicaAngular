import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { ValdecirComponent } from './valdecir/valdecir.component';
import { ServicoLista } from './servico/servico.lista'


@NgModule({
  declarations: [
    AppComponent, HomeComponent, ValdecirComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicoLista],
  bootstrap: [AppComponent]
})
export class AppModule { }
