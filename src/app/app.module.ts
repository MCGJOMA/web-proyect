import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardsComponent } from './Components/dashboards/dashboards.component';
import { RegistrarUsuarioComponent } from './Components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './Components/verificar-correo/verificar-correo.component';
import { SpinnerComponent } from './Shared/spinner/spinner.component';
import { RecuperarPasswordComponent } from './Components/recuperar-password/recuperar-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardsComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    SpinnerComponent,
    RecuperarPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
