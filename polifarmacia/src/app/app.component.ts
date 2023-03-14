import { Component, OnInit} from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  providers:[UsuarioService]
})
export class AppComponent {
  title = 'Heladería Arazá';
  public titulo:string;
  public us:string;
  public pwd:string;
  public connected=false;
  public messages:any;
  public user:any;
  public id:any;
  constructor(
    private _usuarioService:UsuarioService,
    private _router:Router,
    private _route:ActivatedRoute
  ){
    this.titulo="Heladería Arazá";
    this.us='';
    this.pwd='';
    this.connected=false;
    this.messages=null;
    this.user=null;
    this.id=null;
    this._usuarioService.loggedIn.subscribe(resp =>{
      if(resp==true){
        this.connected=true;
      }
    });
    this._usuarioService.user.subscribe(resp =>{
      if(resp!=''){
        this.user=resp;
      }
    });
    this._usuarioService.id.subscribe(resp =>{
      if(resp!=''){
        this.id=resp;
      }
    });
  }
}
