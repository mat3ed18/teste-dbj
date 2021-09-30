namespace tarefas {
    
    


    



    const usuario = new Usuario(1, "Renato dos Anjos");


    document.body.innerHTML += "nome do usuário: " + usuario.nome;

    const tarefa1 = new Tarefa(1, "Teste 1", TarefaEstado.PENDENTE);
    const tarefa2 = new Tarefa(2, "Teste 2", TarefaEstado.PENDENTE);
    const tarefa3 = new Tarefa(3, "Teste 3", TarefaEstado.PENDENTE);

    usuario.adicionarTarefa(tarefa1);
    usuario.adicionarTarefa(tarefa2);
    usuario.adicionarTarefa(tarefa3);

    usuario.tarefas.forEach(tarefa => {
        document.body.innerHTML += "<br>tarefa: " + tarefa.descricao;
    });
    


}