import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SugerenciasComponent } from './components/main/sugerencias/sugerencias.component';
import { SolicitudesComponent } from './components/main/solicitudes/solicitudes.component';
import { CasosComponent } from './components/main/casos/casos.component';
import { ComunicacionComponent } from './components/main/comunicacion/comunicacion.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'main', component: MainComponent},
  {path:'request', component: SolicitudesComponent},
  {path:'cases', component: CasosComponent},
  {path:'contact', component: ComunicacionComponent},
  {path:'suggest', component: SugerenciasComponent},
  {path:'admin', component: AdminComponent},
  {path:'**', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
