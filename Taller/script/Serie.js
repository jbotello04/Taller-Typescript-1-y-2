"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = exports.ej = void 0;
var ej;
(function (ej) {
    ej["bach"] = "bach";
    ej["uni"] = "uni";
    ej["asd"] = "asd";
})(ej = exports.ej || (exports.ej = {}));
class Serie {
    constructor(id, nombre, productora, temporadas, reseña, url, imagen, ej) {
        this.id = id;
        this.nombre = nombre;
        this.productora = productora;
        this.temporadas = temporadas;
        this.reseña = reseña;
        this.url = url;
        this.imagen = imagen;
        this.ej = ej;
    }
}
exports.Serie = Serie;
