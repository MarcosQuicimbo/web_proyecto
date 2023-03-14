import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { Global } from '../../services/global';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'], 
  providers: [ProductoService]
})
export class DetalleProductoComponent implements OnInit {
  public url:string;
  public producto:Producto;
  public confirm:boolean;
 
  constructor(
    private _productoService:ProductoService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this.url=Global.url;
    this.producto=new Producto("","",2,23,"","");
    this.confirm=false;
  }
 
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id=params['id'];
      //console.log(id);
      this.getProducto(id);
    })
  }
  getProducto(id:string){
    this._productoService.getProducto(id).subscribe(
      response=>{
        this.producto=response.producto;
        //console.log(this.libro);
      },
      error=>{
        console.log(<any>error);
      }
    )
  }
  setConfirm(confirm:boolean){
    this.confirm=confirm;
  }
  borrarProducto(id:String){
    this._productoService.deleteProducto(id).subscribe(
      response=>{
        if(response.producto){
          this._router.navigate(['/productos']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

}
