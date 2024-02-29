import { Localite } from "./localite";
import { Type } from "./type";

export class Carriere{

    id !: number;
    nom : string;
    type : Type;
    localite : Localite;

    constructor(){
        this.nom ="";
        this.type = new Type();
        this.localite = new Localite();

    }
}