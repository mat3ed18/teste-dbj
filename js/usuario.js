"use strict";
var tarefas;
(function (tarefas) {
    var Usuario = /** @class */ (function () {
        function Usuario(id, nome) {
            this._id = id;
            this._nome = nome;
        }
        return Usuario;
    }());
    tarefas.Usuario = Usuario;
})(tarefas || (tarefas = {}));
