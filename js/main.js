"use strict";
var tarefas;
(function (tarefas) {
    var usuario = new tarefas.Usuario(1, "Renato dos Anjos");
    document.body.innerHTML += "nome do usuário: " + usuario.nome;
    var tarefa1 = new tarefas.Tarefa(1, "Teste 1", tarefas.TarefaEstado.PENDENTE);
    var tarefa2 = new tarefas.Tarefa(2, "Teste 2", tarefas.TarefaEstado.PENDENTE);
    var tarefa3 = new tarefas.Tarefa(3, "Teste 3", tarefas.TarefaEstado.PENDENTE);
    usuario.adicionarTarefa(tarefa1);
    usuario.adicionarTarefa(tarefa2);
    usuario.adicionarTarefa(tarefa3);
    usuario.tarefas.forEach(function (tarefa) {
        document.body.innerHTML += "<br>tarefa: " + tarefa.descricao;
    });
})(tarefas || (tarefas = {}));
