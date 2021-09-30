namespace tarefas {
    export class Usuario {
        private _id: number; 
        private _nome: string;
        private _tarefas: Tarefa[];

        constructor (id: number, nome: string) {
            this._id = id;
            this._nome = nome;
        }

        
    
        
    }
}