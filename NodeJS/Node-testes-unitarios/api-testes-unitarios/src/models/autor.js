/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
// import db from '../db/dbconfig.js';
import db from '../db/dbconfig.js';
class Autor {
  constructor({
    id,
    nome,
    nacionalidade,
    created_at,
    updated_at,
  }) {
    this.id = null || id;
    this.nome = nome;
    this.nacionalidade = nacionalidade;
    this.created_at = created_at || new Date().toISOString();
    this.updated_at = updated_at || new Date().toISOString();
  }
  static async pegarAutores() {
    return (await db().select('*').from('autores')).results;
  }
  static async pegarPeloId(id) {
    const resultado = (await db().select('*').from('autores').where({ id })).results;
    return resultado[0];
  }
  async criar() {
    return db().select().from('autores').insert(this)
      .then(async (registroCriado) => db('autores').where('id', registroCriado[0]))
      .then((registroSelecionado) => new Autor(registroSelecionado.results[0]));
  }
  async atualizar(id) {
    // o update retorna a quantidade de rows atualizados e não o objeto do registro atualizado
    await (await db('autores')
      .where({ id }))
      .update({ ...this, updated_at: new Date().toISOString() });
    return (await db().select('*').from('autores').where({ id })).results;
  }
  static async excluir(id) {
    // o del retorna a quantidade de rows deletados
    await (await db('autores')
      .where({ id }))
      .del();
  }
  async salvar() {
    // verificar se o id existe no banco
    // se não existir é create
    // se existir é update
    if (this.id) {
      const resultado = await this.atualizar(this.id);
      return resultado;
    }
    const resultado = await this.criar();
    return resultado;
  }
  static async pegarLivrosPorAutor(autorId) {
    return (await db('livros')
      .where({ autor_id: autorId })).results;
  }
}
export default Autor;
