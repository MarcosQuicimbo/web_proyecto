import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {path:'inicio',component:HomeComponent}, 
  {path:'productos',component:ProductosComponent}, 
  {path:'guardar-producto',component:CrearProductoComponent},
  {path:'contacto',component:ContactoComponent}, 
  {path:'producto/:id',component:DetalleProductoComponent}, 
  {path:'editar-producto/:id',component:EditarProductoComponent}, 
  {path:'guardar-usuario',component:CrearProductoComponent}, 
  {path:'login', component:LoginComponent}, 
  {path:'nosotros',component:NosotrosComponent},
  {path:'contacto',component:ContactoComponent},
  {path: 'buscar/:nombre', component:BuscarComponent},
  {path:'admin',component: AdminComponent},
  {path:'**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
