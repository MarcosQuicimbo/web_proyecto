import { Component,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { CargarService } from 'src/app/services/cargar.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Global } from '../../services/global';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
  providers:[UsuarioService]
})
export class CrearUsuarioComponent implements OnInit{
  public titulo:string;
  public usuario:Usuario;
  public usuarioGuardar:Usuario;
  public url:string;
  public status:string;
  public idGuardado:string;
  constructor(
    private _usuarioService:UsuarioService
  ){
    this.titulo="Nuevo cliente";
    this.url=Global.url;
    this.usuario=new Usuario('','','','','','');
    this.usuarioGuardar=new Usuario('','','','','','');
    this.status='';
    this.idGuardado='';
  }
  ngOnInit(): void {
    
  }
  guardarUsuario(form:NgForm){
    this._usuarioService.guardarUsuario(this.usuario).subscribe(
      response=>{
        form.reset();
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
}
