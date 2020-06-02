import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import module form y http
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import de los providers
import { UsuariosService } from './services/usuarios.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AccederComponent } from './components/acceder/acceder.component';
import { ProductosComponent } from './components/productos/productos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProyectosComponent,
    AccederComponent,
    ProductosComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
