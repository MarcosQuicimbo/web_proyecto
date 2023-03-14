import { Component,OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CargarService } from '../../services/cargar.service';
import { ProductoService } from '../../services/producto.service';
import { Contacto } from '../../models/contacto';
import { Global } from '../../services/global';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  public titulo: string; 
  public contacto: Contacto; 
  public contactoGuardar: Contacto; 
  public url: string; 
  public status:string;
  public idGuardado:string;

  constructor(
    private _contactoService: ProductoService, 
  ){
    this.titulo="Contacto"; 
    this.url=Global.url; 
    this.contacto= new Contacto("","","",""); 
    this.contactoGuardar = new Contacto("","","",""); 
    this.status='';
    this.idGuardado='';
  }
  ngOnInit(): void {
  }

  guardarContacto(form:NgForm){
    this._contactoService.guardarContacto(this.contacto).subscribe(
      response=>{
        if(response.contacto){
          if(0==0){
            (result:any)=>{
              this.contactoGuardar=result.response;
              this.status='success';
              //console.log(result.response.result._id);
              this.idGuardado=result.contacto._id;
              form.reset();
            };
          }else{
            this.status='failed';
          }          
        }else{
          this.status='failed';
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}






  
