import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistrarUsuarioComponent } from './Components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './Components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './Components/recuperar-password/recuperar-password.component';
import { DashboardsComponent } from './Components/dashboards/dashboards.component';
import { ManguerasComponent } from './Components/mangueras/mangueras.component';
import { RegistroManguerasComponent } from './Components/registro-mangueras/registro-mangueras.component';
import { HumedadComponent } from './Components/humedad/humedad.component';
import { RegistroHumedadComponent } from './Components/registro-humedad/registro-humedad.component';
import { TemperaturaComponent } from './Components/temperatura/temperatura.component';
import { RegistroTemperaturaComponent } from './Components/registro-temperatura/registro-temperatura.component';
import { Dashboards2Component } from './Components/dashboards2/dashboards2.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'verificar-correo', component: VerificarCorreoComponent },
  { path: 'recuperar-password', component: RecuperarPasswordComponent },
  { path: 'dashboards', component: DashboardsComponent },
  { path: 'mangueras', component: ManguerasComponent },
  { path: 'registro-mangueras', component: RegistroManguerasComponent },
  { path: 'humedad', component: HumedadComponent },
  { path: 'registro-humedad', component: RegistroHumedadComponent },
  { path: 'temperatura', component: TemperaturaComponent },
  { path: 'registro-temperatura', component: RegistroTemperaturaComponent },
  { path: 'dashboards2', component: Dashboards2Component },
  { path: '**', redirectTo: 'login', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
