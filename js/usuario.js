"use strict";
var tarefas;
(function (tarefas_1) {
    var Usuario = /** @class */ (function () {
        function Usuario(id, nome) {
            this._id = id;
            this._nome = nome;
        }
        Object.defineProperty(Usuario.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (id) {
                this._id = id;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Usuario.prototype, "nome", {
            get: function () {
                return this._nome;
            },
            set: function (nome) {
                this._nome = nome;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Usuario.prototype, "tarefas", {
            get: function () {
                return this._tarefas;
            },
            set: function (tarefas) {
                this._tarefas = tarefas;
            },
            enumerable: false,
            configurable: true
        });
        return Usuario;
    }());
    tarefas_1.Usuario = Usuario;
})(tarefas || (tarefas = {}));
