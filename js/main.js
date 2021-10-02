"use strict";
var tarefas;
(function (tarefas) {
    // const usuario = new Usuario(1, "Renato dos Anjos");
    // document.body.innerHTML += "nome do usuário: " + usuario.nome;
    // const tarefa1 = new Tarefa(1, "Teste 1", TarefaEstado.PENDENTE);
    // const tarefa2 = new Tarefa(2, "Teste 2", TarefaEstado.EXECUCAO);
    // const tarefa3 = new Tarefa(3, "Teste 3", TarefaEstado.FINALIZADA);
    // usuario.adicionarTarefa(tarefa1);
    // usuario.adicionarTarefa(tarefa2);
    // usuario.adicionarTarefa(tarefa3);
    // usuario.estadoTarefa(1, TarefaEstado.FINALIZADA);
    // usuario.removerTarefa(2);
    // usuario.tarefas.forEach(tarefa => {
    //     document.body.innerHTML += "<br>tarefa: " + tarefa.descricao + " - " + tarefa.estado;
    // });
    $(document).on("click", ".addTask", function () {
        var usuarios = JSON.parse(localStorage.getItem("usuarios"));
        $("#usuarioTarefa").html("<option value=\"\" selected>Selecione um autor</option>");
        for (var i = 0; i < usuarios.length; i++) {
            $("#usuarioTarefa").append("<option value=\"" + usuarios[i]._id + "\">" + usuarios[i]._nome + "</option>");
        }
        $(".adicionar_tarefa").modal("show");
    });
    $(document).on("click", ".addUser", function () {
        $(".adicionar_usuario").modal("show");
    });
    function main_tasks() {
        var usuarios = JSON.parse(localStorage.getItem("usuarios"));
        var html_task = "";
        $(".main_tasks").html("");
        if (localStorage.getItem("usuarios") != null) {
            for (var i = 0; i < usuarios.length; i++) {
                for (var j = 0; j < usuarios[i]._tarefas.length; j++) {
                    if (usuarios[i]._tarefas[j] != null) {
                        switch (usuarios[i]._tarefas[j]._estado) {
                            case "Pendente":
                            default:
                                html_task += "<div class=\"card col-4 text-dark bg-light mb-3\" style=\"max-width: 18rem;\">";
                                break;
                            case "Em execução":
                                html_task += "<div class=\"card col-4 text-dark bg-success mb-3\" style=\"max-width: 18rem;\">";
                                break;
                            case "Finalizada":
                                html_task += "<div class=\"card col-4 text-dark bg-danger mb-3\" style=\"max-width: 18rem;\">";
                                break;
                        }
                        html_task += "<div class=\"card-header font-weight-bold text-white\">Tarefa #11</div>";
                        html_task += "<div class=\"card-body\">";
                        html_task += "<p class=\"card-text text-white\">" + usuarios[i]._tarefas[j]._descricao + "</p>";
                        html_task += "<a id-task=\"" + usuarios[i]._tarefas[j]._id + "\" class=\"btn btn-secondary btnUpdatePending\"><i class=\"bi bi-clock\"></i></a>";
                        html_task += "<a id-task=\"" + usuarios[i]._tarefas[j]._id + "\" class=\"btn btn-primary btnUpdateCurrent\"><i class=\"bi bi-check2\"></i></a>";
                        html_task += "<a id-task=\"" + usuarios[i]._tarefas[j]._id + "\" class=\"btn btn-outline-dark btnUpdateDone\"><i class=\"bi bi-check2-all\"></i></a>";
                        html_task += "<a id-task=\"" + usuarios[i]._tarefas[j]._id + "\" class=\"btn btn-danger btnDeleteTask\"><i class=\"bi bi-trash\"></i></a>";
                        html_task += "</div>";
                        html_task += "</div>";
                    }
                }
            }
            $(".main_tasks").html(html_task);
        }
        else {
            $(".main_tasks").html("Você não tem nenhuma tarefa");
        }
    }
    $(document).ready(function () {
        main_tasks();
    });
    function events_tasks() {
        $(document).on("click", ".card .btnUpdatePending", function () {
            var usuarios = JSON.parse(localStorage.getItem("usuarios"));
            for (var i = 0; i < usuarios.length; i++) {
                for (var j = 0; j < usuarios[i]._tarefas.length; j++) {
                    if (usuarios[i]._tarefas[j] != null) {
                        if (usuarios[i]._tarefas[j]._id == parseInt($(this).attr("id-task"))) {
                            usuarios[i]._tarefas[j]._estado = tarefas.TarefaEstado.PENDENTE;
                        }
                    }
                }
            }
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            main_tasks();
        });
        $(document).on("click", ".card .btnUpdateCurrent", function () {
            var usuarios = JSON.parse(localStorage.getItem("usuarios"));
            for (var i = 0; i < usuarios.length; i++) {
                for (var j = 0; j < usuarios[i]._tarefas.length; j++) {
                    if (usuarios[i]._tarefas[j] != null) {
                        if (usuarios[i]._tarefas[j]._id == parseInt($(this).attr("id-task"))) {
                            usuarios[i]._tarefas[j]._estado = tarefas.TarefaEstado.EXECUCAO;
                        }
                    }
                }
            }
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            main_tasks();
        });
        $(document).on("click", ".card .btnUpdateDone", function () {
            var usuarios = JSON.parse(localStorage.getItem("usuarios"));
            for (var i = 0; i < usuarios.length; i++) {
                for (var j = 0; j < usuarios[i]._tarefas.length; j++) {
                    if (usuarios[i]._tarefas[j] != null) {
                        if (usuarios[i]._tarefas[j]._id == parseInt($(this).attr("id-task"))) {
                            usuarios[i]._tarefas[j]._estado = tarefas.TarefaEstado.FINALIZADA;
                        }
                    }
                }
            }
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            main_tasks();
        });
        $(document).on("click", ".card .btnDeleteTask", function () {
            var usuarios = JSON.parse(localStorage.getItem("usuarios"));
            for (var i = 0; i < usuarios.length; i++) {
                for (var j = 0; j < usuarios[i]._tarefas.length; j++) {
                    if (usuarios[i]._tarefas[j] != null) {
                        if (usuarios[i]._tarefas[j]._id == parseInt($(this).attr("id-task"))) {
                            delete usuarios[i]._tarefas[j];
                        }
                    }
                }
            }
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            main_tasks();
        });
    }
    events_tasks();
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
        if (localStorage.getItem("usuarios") != null) {
            var usuarios = JSON.parse(localStorage.getItem("usuarios"));
            for (var i = 0; i < usuarios.length; i++) {
                if (usuarios[i]._id == $("#usuarioTarefa").val()) {
                    var random_id = Math.floor(Math.random() * 10000) + 1;
                    switch ($("#estadoTarefa").val()) {
                        case "PENDENTE":
                            usuarios[i]._tarefas.push(new tarefas.Tarefa(random_id, $("#descricao").val().toString(), tarefas.TarefaEstado.PENDENTE));
                            break;
                        case "EM ANDAMENTO":
                            usuarios[i]._tarefas.push(new tarefas.Tarefa(random_id, $("#descricao").val().toString(), tarefas.TarefaEstado.EXECUCAO));
                            break;
                        case "FINALIZADA":
                            usuarios[i]._tarefas.push(new tarefas.Tarefa(random_id, $("#descricao").val().toString(), tarefas.TarefaEstado.FINALIZADA));
                            break;
                    }
                }
            }
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            $(".adicionar_tarefa").modal("hide");
            $("#alertMsg").html("A tarefa foi cadastrada com sucesso");
            $("#nameUser").val(null);
            $(".alert").modal("show");
            main_tasks();
        }
        else {
            $(".adicionar_tarefa").modal("hide");
            $("#alertMsg").html("<small>Adicione um usuário ou faça seu cadastro para adicionar tarefas</small>");
            $("#nameUser").val(null);
            $(".alert").modal("show");
        }
        events_tasks();
    });
})(tarefas || (tarefas = {}));
