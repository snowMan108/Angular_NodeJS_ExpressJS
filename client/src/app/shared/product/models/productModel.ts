export class Product {
    _id?: String;
    nom: string;
    categoria: string;
    desc: string;
    preu: number;
    idbar: number;

    constructor( _id:String, nom: string , categoria: string, desc: string, preu: number, idbar: number ){
        this._id = _id;
        this.nom = nom;
        this.categoria = categoria;
        this.desc = desc;
        this.preu = preu;
        this.idbar = idbar;
    }
}