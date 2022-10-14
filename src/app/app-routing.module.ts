import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientesComponent} from "./components/clientes/clientes.component";
import {EmpleadoComponent} from "./components/empleado/empleado.component";

const routes: Routes = [
  {
    path: 'clientes',
    component:ClientesComponent
  },
  {
    path: 'empleado',
    component:EmpleadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
