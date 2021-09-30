"use strict";
var tarefas;
(function (tarefas) {
    var TarefaEstado;
    (function (TarefaEstado) {
        TarefaEstado[TarefaEstado["PENDENTE"] = 1] = "PENDENTE";
        TarefaEstado[TarefaEstado["EXECUCAO"] = 2] = "EXECUCAO";
        TarefaEstado[TarefaEstado["FINALIZADA"] = 3] = "FINALIZADA";
    })(TarefaEstado = tarefas.TarefaEstado || (tarefas.TarefaEstado = {}));
})(tarefas || (tarefas = {}));
