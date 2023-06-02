import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RolesComponent } from './pages/roles/roles.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'roles' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
