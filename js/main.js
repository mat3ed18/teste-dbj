"use strict";
var tarefas;
(function (tarefas) {
    var usuario = new tarefas.Usuario(1, "Renato Silva");
    document.write("nome do usuário: " + usuario.nome);
})(tarefas || (tarefas = {}));
