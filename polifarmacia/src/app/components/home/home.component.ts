import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

import { Global } from 'src/app/services/global';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UsuarioService]
})
export class HomeComponent implements OnInit{
  public titulo:string;
  public connected=false;
  public messages:any;
  public user:any;
  public id:any;

  constructor(
    private _usuarioService:UsuarioService,
    private _router:Router,
    private _route:ActivatedRoute
  ){
    this.titulo="INICIO";
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
  ngOnInit(): void {
    
  }
}
