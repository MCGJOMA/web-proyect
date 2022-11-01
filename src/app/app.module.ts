//modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modulos
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http'

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardsComponent } from './Components/dashboards/dashboards.component';
import { RegistrarUsuarioComponent } from './Components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './Components/verificar-correo/verificar-correo.component';
import { SpinnerComponent } from './Shared/spinner/spinner.component';
import { RecuperarPasswordComponent } from './Components/recuperar-password/recuperar-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ManguerasComponent } from './Components/mangueras/mangueras.component';
import { RegistroManguerasComponent } from './Components/registro-mangueras/registro-mangueras.component';
import { HumedadComponent } from './Components/humedad/humedad.component';
import { RegistroHumedadComponent } from './Components/registro-humedad/registro-humedad.component';
import { TemperaturaComponent } from './Components/temperatura/temperatura.component';
import { RegistroTemperaturaComponent } from './Components/registro-temperatura/registro-temperatura.component';
import { Dashboards2Component } from './Components/dashboards2/dashboards2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardsComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    SpinnerComponent,
    RecuperarPasswordComponent,
    ManguerasComponent,
    RegistroManguerasComponent,
    HumedadComponent,
    RegistroHumedadComponent,
    TemperaturaComponent,
    RegistroTemperaturaComponent,
    Dashboards2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
