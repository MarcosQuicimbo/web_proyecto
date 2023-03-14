import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LoginComponent } from './components/login/login.component';
import { PieComponent } from './components/pie/pie.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    CrearProductoComponent,
    CrearUsuarioComponent,
    DetalleProductoComponent,
    EditarProductoComponent,
    EncabezadoComponent,
    HomeComponent,
    ProductosComponent,
    LoginComponent,
    PieComponent,
    NosotrosComponent,
    BuscarComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
