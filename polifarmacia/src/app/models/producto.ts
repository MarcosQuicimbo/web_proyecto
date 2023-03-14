export class Producto {
    constructor(
        public _id: string, 
        public nombre: string, 
        public stock: number, 
        public precio: number, 
        public categoria: string, 
        public imagen: string
    ){}
}
