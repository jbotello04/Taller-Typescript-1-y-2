export var ej;
(function (ej) {
    ej["dic"] = "dic";
    ej["unsc"] = "unsc";
    ej["dab"] = " dab";
})(ej || (ej = {}));
var Serie = /** @class */ (function () {
    function Serie(id, nombre, direccion, temporadas, reseña, url, imagen, ej) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.temporadas = temporadas;
        this.reseña = reseña;
        this.url = url;
        this.imagen = imagen;
        this.ej = ej;
    }
    return Serie;
}());
export { Serie };
