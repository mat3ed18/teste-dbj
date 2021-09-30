namespace tarefas {
    export class Tarefa {
        private _id: number;
        private _descricao: string;
        private _estado: TarefaEstado;

        get id () {
            return this._id;
        }

        set id (id: number) {
            this._id = id;
        }
        
        get descricao () {
            return this._descricao;
        }

        set descricao (descricao: string) {
            this._descricao = descricao;
        }
        
        get estado () {
            return this._estado;
        }

        set estado (estado: TarefaEstado) {
            this._estado = estado;
        }                
    }
}