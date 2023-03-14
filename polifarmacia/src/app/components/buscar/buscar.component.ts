import { Component, OnInit} from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { Global } from '../../services/global';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
  providers: [ProductoService]

})
export class BuscarComponent implements OnInit{
  
  public productos:Producto[];
  public url:string;
  public nombre: string; 
  public producto:Producto; 

  constructor(
    private _productoService:ProductoService,
    ) {
      this.url=Global.url;
      this.productos=[];
      this.nombre = ""; 
      this.producto = new Producto("","",1,23,"","");
  }
  
  ngOnInit(): void {
    
  }

  getProductoNombre(form:NgForm){
    this._productoService.getProductoNombre(this.producto.nombre).subscribe(
      response=>{
        if(response.productos){
          this.productos=response.productos;
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }
}
