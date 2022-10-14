import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import { EmpleadoComponent } from './components/empleado/empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
