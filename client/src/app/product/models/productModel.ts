export class Product {
    _id?: number;
    nom: string;
    categoria: string;
    desc: string;
    preu: number;
    idbar: number;

    constructor( nom: string , categoria: string, desc: string, preu: number, idbar: number ){
    
        this.nom = nom;
        this.categoria = categoria;
        this.desc = desc;
        this.preu = preu;
        this.idbar = idbar;
    }
}