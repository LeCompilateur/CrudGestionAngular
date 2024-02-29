export class Localite{
    json(): Localite[] {
      throw new Error('Method not implemented.');
    }

    id !: number;

    ville : string;
    prefecture : string;
    region : string;

    constructor(){

        this.ville ="";
        this.prefecture ="";
        this.region ="";

    }
}