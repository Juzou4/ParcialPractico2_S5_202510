// import {Recipe} from "./recipe";

export class Recipe {
    id:number;
    nombre: string;
    image: string;
    porcion: number;
    tiempo: string;
    ingredientes: string;
    pasos: string;

    constructor( id:number, image: string, nombre: string, porcion: number, tiempo: string, ingredientes: string, pasos: string ) {
        this.id = id;
        this.image =image;
        this.nombre = nombre;
        this.tiempo = tiempo;
        this.porcion = porcion;
        this.ingredientes = ingredientes;
        this.pasos = pasos;

    }
}