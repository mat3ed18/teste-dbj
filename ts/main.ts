namespace tarefas {
    
    const usuario = new Usuario(1, "Renato dos Anjos");

    document.body.innerHTML += "nome do usuário: " + usuario.nome;

    const tarefa1 = new Tarefa(1, "Teste 1", TarefaEstado.PENDENTE);
    const tarefa2 = new Tarefa(2, "Teste 2", TarefaEstado.EXECUCAO);
    const tarefa3 = new Tarefa(3, "Teste 3", TarefaEstado.FINALIZADA);

    usuario.adicionarTarefa(tarefa1);
    usuario.adicionarTarefa(tarefa2);
    usuario.adicionarTarefa(tarefa3);

    usuario.estadoTarefa(1, TarefaEstado.FINALIZADA);

    usuario.removerTarefa(2);

    usuario.tarefas.forEach(tarefa => {
        document.body.innerHTML += "<br>tarefa: " + tarefa.descricao + " - " + tarefa.estado;
    });

    $(document).on("click", ".addTask", function(){
        $(".adicionar_tarefa").modal("show");
    });
    
    $(document).on("click", ".addUser", function(){
        $(".adicionar_usuario").modal("show");
    });

    $(document).on("click", ".adicionar_usuario .btn-outline-success", function(){
        if (localStorage.getItem("usuarios") != null) {

            const usuarios = JSON.parse(localStorage.getItem("usuarios"));

            const random_id = Math.floor(Math.random() * 10000) + 1;

            usuarios.push(new Usuario(random_id, $("#nameUser").val().toString()));

            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        } else {
            const usuarios = [];

            const random_id = Math.floor(Math.random() * 10000) + 1;

            usuarios.push(new Usuario(random_id, $("#nameUser").val().toString()));

            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }

        $(".adicionar_usuario").modal("hide");
        $("#alertMsg").html("O usuário foi cadastrado com sucesso");
        $("#nameUser").val(null);
        $(".alert").modal("show");
    });
    
    $(document).on("click", ".adicionar_tarefa .btn-outline-success", function(){
        $(".adicionar_tarefa").modal("hide");
        $("#alertMsg").html("A tarefa foi cadastrada com sucesso");

        $(".alert").modal("show");
    });
    
    

}