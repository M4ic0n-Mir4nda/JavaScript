// Toda classe criado segue implicitamente as regras chamadas de 'strict mode';

import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(estudante, curso) {
        return `estudante ${estudante} passou no curso ${curso}.`
    }
}
