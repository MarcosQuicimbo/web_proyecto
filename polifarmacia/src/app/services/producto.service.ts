import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Producto } from '../models/producto';
import { Contacto } from '../models/contacto';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class ProductoService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }
    // ver todos los productos
    //http://localhost:3600/libros
    getProductos():Observable<any>{
        //console.log(this.url+'libros');
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'productos',{headers:headers});;
    }
    // guardar producto
    //http://localhost:3600/guardar-libro
    guardarProducto(producto:Producto):Observable<any>{
        let params=JSON.stringify(producto);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'guardar-producto',params,{headers:headers});
    }
    // ver producto
    //http://localhost:3600/libro/:id
    getProducto(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'producto/'+id,{headers:headers});
    }
    // editar producto
    //http://localhost:3600/libro/:id
    updateProducto(producto:Producto):Observable<any>{
        let params=JSON.stringify(producto);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'producto/'+producto._id,params,{headers:headers});
    }
    //eliminar producto
    //http://localhost:3600/libro/:id
    deleteProducto(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'producto/'+id,{headers:headers});
    }

    //buscar producto por nombre
    getProductoNombre(id:String):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json'); 
        return this._http.get(this.url+'producto-nombre/'+id,{headers:headers});
    }

    guardarContacto(contacto:Contacto):Observable<any>{
        let params=JSON.stringify(contacto);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'guardar-contacto',params,{headers:headers});
    }

}