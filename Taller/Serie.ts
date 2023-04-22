export enum ej {
  bach = "bach",
  uni = "uni",
  asd = "asd",
}

export class Serie {
  constructor(
    public id: number,
    public nombre: string,
    public productora: string,
    public temporadas: number,
    public reseña: string,
    public url: string,
    public imagen: string,
    public ej: ej
  ) {}
}

