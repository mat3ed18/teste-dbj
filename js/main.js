"use strict";
var tarefas;
(function (tarefas) {
    var usuario = new tarefas.Usuario(1, "Renato dos Anjos");
    document.body.innerHTML += "nome do usuário: " + usuario.nome;
    var tarefa1 = new tarefas.Tarefa(1, "Teste 1", tarefas.TarefaEstado.PENDENTE);
    var tarefa2 = new tarefas.Tarefa(2, "Teste 2", tarefas.TarefaEstado.EXECUCAO);
    var tarefa3 = new tarefas.Tarefa(3, "Teste 3", tarefas.TarefaEstado.FINALIZADA);
    usuario.adicionarTarefa(tarefa1);
    usuario.adicionarTarefa(tarefa2);
    usuario.adicionarTarefa(tarefa3);
    usuario.estadoTarefa(1, tarefas.TarefaEstado.FINALIZADA);
    usuario.removerTarefa(2);
    usuario.tarefas.forEach(function (tarefa) {
        document.body.innerHTML += "<br>tarefa: " + tarefa.descricao + " - " + tarefa.estado;
    });
    $(document).on("click", ".addTask", function () {
        // alert("feito");
        $(".alert").modal("show");
    });
})(tarefas || (tarefas = {}));
