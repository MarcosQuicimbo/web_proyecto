import { Component,OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CargarService } from '../../services/cargar.service';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { Global } from '../../services/global';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
  providers:[ProductoService,CargarService]
})
export class CrearProductoComponent implements OnInit {
  public titulo: string; 
  public producto: Producto; 
  public productoGuardar: Producto; 
  public url: string; 
  public status:string;
  public idGuardado:string;
  public archivosParaCargar:Array<File>;
  @ViewChild('archivoImagen') fileInput:any;

  constructor(
    private _productoService: ProductoService, 
    private _cargarService: CargarService
  ){
    this.titulo="Guardar nuevo producto"; 
    this.url=Global.url; 
    this.producto= new Producto("","",100,4,"",""); 
    this.productoGuardar = new Producto("", "",100,4,"",""); 
    this.status='';
    this.idGuardado='';
    this.archivosParaCargar=[];
  }

  ngOnInit(): void {
  }
  guardarProducto(form:NgForm){
    this._productoService.guardarProducto(this.producto).subscribe(
      response=>{
        if(response.producto){
          if(this.archivosParaCargar){
            this._cargarService.peticionRequest(Global.url+'subir-imagen/'+response.producto._id,[],this.archivosParaCargar,'imagen')
            .then((result:any)=>{
              this.productoGuardar=result.response;
              this.status='success';
              //console.log(result.response.result._id);
              this.idGuardado=result.producto._id;
              form.reset();
              this.fileInput.nativeElement.value='';
            });
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
  imagenChangeEvent(archivoSeleccionado:any){
    this.archivosParaCargar=<Array<File>>archivoSeleccionado.target.files;
  }
}
