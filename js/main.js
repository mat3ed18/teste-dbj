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
        $(".adicionar_tarefa").modal("show");
    });
    $(document).on("click", ".addUser", function () {
        $(".adicionar_usuario").modal("show");
    });
    $(document).on("click", ".adicionar_usuario .btn-outline-success", function () {
        if (localStorage.getItem("usuarios") != null) {
            var usuarios = JSON.parse(localStorage.getItem("usuarios"));
            var random_id = Math.floor(Math.random() * 10000) + 1;
            usuarios.push(new tarefas.Usuario(random_id, $("#nameUser").val().toString()));
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }
        else {
            var usuarios = [];
            var random_id = Math.floor(Math.random() * 10000) + 1;
            usuarios.push(new tarefas.Usuario(random_id, $("#nameUser").val().toString()));
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }
        $(".adicionar_usuario").modal("hide");
        $("#alertMsg").html("O usuário foi cadastrado com sucesso");
        $("#nameUser").val(null);
        $(".alert").modal("show");
    });
    $(document).on("click", ".adicionar_tarefa .btn-outline-success", function () {
        $(".adicionar_tarefa").modal("hide");
        $("#alertMsg").html("A tarefa foi cadastrada com sucesso");
        $(".alert").modal("show");
    });
})(tarefas || (tarefas = {}));
