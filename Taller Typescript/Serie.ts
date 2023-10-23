export enum ej{
    dic = "dic",
    unsc = "unsc",
    dab =" dab"
}

export class Serie {

    constructor(
        public id:number ,
        public nombre:string,
        public direccion:string, 
        public temporadas:number , 
        public reseña: string,
        public url:string,
        public imagen:string,
        public ej:ej 
        )
        {

        }
}