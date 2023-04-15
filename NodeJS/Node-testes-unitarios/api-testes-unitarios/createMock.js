/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable no-empty */
import fs from 'fs';
import { exit } from 'process';
import readline from 'readline';

await getConsentAnswer();

let savedAutoresIds = null;
let savedEditorasIds = null;
let savedLivrosIds = null;

const [autor1, autor2, autor3] = savedAutoresIds || [getId(), getId(), getId()];
const [editora1, editora2, editora3, editora4] = savedEditorasIds || [
  getId(),
  getId(),
  getId(),
  getId(),
];
const [livro1, livro2, livro3, livro4, livro5, livro6] = savedLivrosIds || [
  getId(),
  getId(),
  getId(),
  getId(),
  getId(),
  getId(),
];

console.log();

console.log('Deletando arquivos sqlite e sql:');
deleteFileIfExists('src/db/livraria.sqlite');
deleteFileIfExists('populate.sql');

console.log();

console.log('Criando pastas para mock de base de dados:');
createFolderIfNotExists('src/db/data');
console.log();

console.log('Criando arquivos de mock:');
createAndUpdateFiles();

console.log();
saveCreatedIdsForFutureUses();
console.log();
console.log('Está tudo pronto para continuar o curso! Bons estudos!! :D');

// function getConsentAnswer() {
//   return new Promise((resolve) => {
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
//     console.log('Você está prestes a alterar os arquivos da aplicação para utilizar um mock de base de dados em vez do SQLite.');
//     rl.question('Esta ação é irreversível, deseja continuar? (s/n): ', (answer) => {
//       resolve(answer);
//       rl.close();
//       if (!['s', 'y', 'sim', 'yes'].includes(answer.toLowerCase())) {
//         exit();
//       }
//     });
//   });
// }
function createFolderIfNotExists(folder) {
  try {
    fs.mkdirSync(folder);
    console.log(`pasta ${folder} criada`);
  } catch (err) {
    if (err.code !== 'EEXIST') {
      console.log(err);
    }
    console.log(`pasta ${folder} já existe`);
  }
}
function deleteFileIfExists(file) {
  try {
    fs.unlinkSync(file);
    console.log('arquivo', file, 'deletado');
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error(err);
    }
    console.log('arquivo', file, 'já foi deletado');
  }
}
function createAndUpdateFiles() {
  createOrUpdateFile('src/db/data/autores.json', getPreMadeFilesData('autores.json'));
  createOrUpdateFile('src/db/data/editoras.json', getPreMadeFilesData('editoras.json'));
  createOrUpdateFile('src/db/data/livros.json', getPreMadeFilesData('livros.json'));
  createOrUpdateFile('src/db/dbconfig.js', getPreMadeFilesData('dbconfig.js'));
  createOrUpdateFile('src/models/autor.js', getPreMadeFilesData('autor.js'));
  createOrUpdateFile('src/models/editora.js', getPreMadeFilesData('editora.js'));
  createOrUpdateFile('src/models/livro.js', getPreMadeFilesData('livro.js'));
  createOrUpdateFile('nodemon.json', getPreMadeFilesData('nodemon.json'));
  createOrUpdateFile('.gitignore', getPreMadeFilesData('.gitignore'));
}
function createOrUpdateFile(file, data) {
  fs.writeFileSync(file, data);
  console.log('arquivo', file, 'criado/atualizado');
}
function saveCreatedIdsForFutureUses() {
  const thisFile = fs.readFileSync('createMock.js').toString();

  /* eslint-disable no-useless-escape */
  const autoresIdRegex = /let\ssavedAutoresIds[^\]\[\]\n]+;/;
  const editorasIdRegex = /let\ssavedEditorasIds[^\]\[\]\n]+;/;
  const livrosIdRegex = /let\ssavedLivrosIds[^\]\[\]\n]+;/;
  /* eslint-enable no-useless-escape */

  if (autoresIdRegex.exec(thisFile) === null
  || editorasIdRegex.exec(thisFile) === null
  || livrosIdRegex.exec(thisFile) === null) {
    console.log('Objetos nos arquivos de dados foram criados usando os mesmos ids');
  } else {
    fs.writeFileSync('createMock.js', thisFile
      .replace(autoresIdRegex, `let savedAutoresIds = [${autor1}, ${autor2}, ${autor3}];`)
      .replace(editorasIdRegex, `let savedEditorasIds = [${editora1}, ${editora2}, ${editora3}, ${editora4}];`)
      .replace(livrosIdRegex, `let savedLivrosIds = [\n  ${livro1},\n  ${livro2},\n  ${livro3},\n  ${livro4},\n  ${livro5},\n  ${livro6},\n];`));
    console.log('Objetos criados nos arquivos de dados serão criados usando os mesmos ids em futuras execuções deste arquivo');
  }

  console.log(
    'Para evitar esse comportamento uma vez, '
    + 'altere as variaveis "savedAutoresIds", "savedEditorasIds" e "savedLivrosIds" '
    + 'para null e execute o código novamente',
  );
  console.log(
    'Para evitar esse comportamento por completo, '
      + 'faça as alterações nas variáveis, comente a linha 61 '
      + 'e execute o código novamente',
  );
}
function getId() {
  function pause(milliseconds) {
    const dt = new Date();
    while (new Date() - dt <= milliseconds) {}
  }
  pause(Math.floor(Math.random() * 100) + 1);
  return new Date().getTime();
}
function getPreMadeFilesData(fileName) {
  const files = {
    'autores.json': `[{"id": ${autor1},"nome": "JRR Tolkien","nacionalidade": "sul-africano","created_at": "2022-11-12T21:48:44.050Z","updated_at": "2022-11-12T21:48:44.050Z"},{"id": ${autor2},"nome": "Ursula LeGuin","nacionalidade": "estadunidense","created_at": "2022-11-12T21:48:44.143Z","updated_at": "2022-11-12T21:48:44.143Z"},{"id": ${autor3},"nome": "Machado de Assis","nacionalidade": "brasileira","created_at": "2022-11-12T21:48:44.174Z","updated_at": "2022-11-12T21:48:44.174Z"}]`,
    'editoras.json': `[{"id": ${editora1},"nome": "Europa-América","cidade": "Lisboa","email": "e@e.com","created_at": "2022-11-12T21:48:44.284Z","updated_at": "2022-11-12T21:48:44.284Z"},{"id": ${editora2},"nome": "Morro Branco","cidade": "São Paulo","email": "m@m.com","created_at": "2022-11-12T21:48:44.292Z","updated_at": "2022-11-12T21:48:44.292Z"},{"id": ${editora3},"nome": "Aleph","cidade": "São Paulo","email": "al@al.com","created_at": "2022-11-12T21:48:44.384Z","updated_at": "2022-11-12T21:48:44.384Z"},{"id": ${editora4},"nome": "Ateliê","cidade": "São Paulo","email": "a@a.com","created_at": "2022-11-12T21:48:44.453Z","updated_at": "2022-11-12T21:48:44.453Z"}]`,
    'livros.json': `[{"id": ${livro1},"titulo": "O Hobbit","paginas": 230,"editora_id": ${editora1},"autor_id": ${autor1},"created_at": "2022-11-12T21:48:44.506Z","updated_at": "2022-11-12T21:48:44.506Z"},{"id": ${livro2},"titulo": "O Silmarillion","paginas": 400,"editora_id": ${editora1},"autor_id": ${autor1},"created_at": "2022-11-12T21:48:44.551Z","updated_at": "2022-11-12T21:48:44.551Z"},{"id": ${livro3},"titulo": "O Silmarillion","paginas": 400,"editora_id": ${editora1},"autor_id": ${autor1},"created_at": "2022-11-12T21:48:44.624Z","updated_at": "2022-11-12T21:48:44.624Z"},{"id": ${livro4},"titulo": "O Feiticeiro de Terramar","paginas": 450,"editora_id": ${editora2},"autor_id": ${autor2},"created_at": "2022-11-12T21:48:44.660Z","updated_at": "2022-11-12T21:48:44.660Z"},{"id": ${livro5},"titulo": "Os Despossuídos","paginas": 300,"editora_id": ${editora3},"autor_id": ${autor2},"created_at": "2022-11-12T21:48:44.697Z","updated_at": "2022-11-12T21:48:44.697Z"},{"id": ${livro6},"titulo": "Memórias Póstumas de Brás Cubas","paginas": 150,"editora_id": ${editora4},"autor_id": ${autor3},"created_at": "2022-11-12T21:48:44.792Z","updated_at": "2022-11-12T21:48:44.792Z"}]`,
    '.gitignore': 'node_modules\nsrc/db/data/',
    'dbconfig.js':
`/* eslint-disable eqeqeq */
/* eslint-disable no-empty */
/* eslint-disable no-param-reassign */
import fs from 'fs';
const cache = {};
function readSavedFiles(path) {
  try {
    return JSON.parse(fs.readFileSync(path));
  } catch {
    return [];
  }
}
function saveInFile(path, data) {
  const dataString = JSON.stringify(data);
  fs.writeFileSync(path, dataString);
}
function pause(milliseconds) {
  const dt = new Date();
  while (new Date() - dt <= milliseconds) {}
}
const db = (file) => {
  const dbObj = {
    select() {
      return {
        // HAS RESULTS
        from(fromFile) {
          const path = \`src/db/data/$\{fromFile}.json\`;
          if (!cache[fromFile]) {
            cache[fromFile] = readSavedFiles(path);
          }
          const cacheFile = cache[fromFile];
          return {
            results: cacheFile,
            async insert(obj) {
              pause(10);
              if (Object.entries(obj).filter(([k]) => k !== 'id' && k !== 'created_at' && k !== 'updated_at').lenght) {
                throw new Error('Insert object does not contains required values');
              }
              if (!obj.id) {
                obj.id = new Date().getTime();
              } else if (cacheFile.map((cacheObj) => cacheObj.id).includes(obj.id)) {
                throw new Error('Id must be unique');
              }
              if (!obj.created_at) {
                obj.created_at = new Date().toISOString();
              }
              if (!obj.updated_at) {
                obj.updated_at = new Date().toISOString();
              }
              cacheFile.push(JSON.parse(JSON.stringify(obj)));
              saveInFile(path, cacheFile);
              return [obj.id];
            },
            // HAS ASYNC RESULTS
            async where(searchObjOrCollumn, value) {
              pause(10);
              let columns = [searchObjOrCollumn];
              let columnValues = [value];
              if (typeof searchObjOrCollumn === 'object' && !value) {
                columns = Object.keys(searchObjOrCollumn);
                columnValues = Object.values(searchObjOrCollumn);
              }
              const filterResults = cacheFile.filter((obj) => {
                const mapResults = columns.map(
                  (key, index) => obj[key] == columnValues[index],
                );
                return mapResults.reduce((prev, curr) => curr && prev);
              });
              return {
                results: filterResults,
                async update(updateObject) {
                  pause(10);
                  filterResults.forEach((obj) => {
                    const objIndexInCache = cacheFile.findIndex(
                      (cacheObj) => obj.id == cacheObj.id,
                    );
                    cacheFile[objIndexInCache] = {
                      ...cacheFile[objIndexInCache],
                      ...updateObject,
                    };
                    saveInFile(path, cacheFile);
                  });
                },
                async del() {
                  pause(10);
                  filterResults.forEach((obj) => {
                    const objIndexInCache = cacheFile.findIndex(
                      (cacheObj) => obj.id == cacheObj.id,
                    );
                    cacheFile.splice(objIndexInCache, 1);
                  });
                  saveInFile(path, cacheFile);
                },
              };
            },
          };
        },
      };
    },
  };
  if (file) {
    return dbObj.select().from(file);
  }
  return dbObj;
};
export default db;
`,
    'autor.js':
`/* eslint-disable class-methods-use-this */
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
`,
    'editora.js':
`/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
import db from '../db/dbconfig.js';
class Editora {
  constructor({
    id,
    nome,
    cidade,
    email,
    created_at,
    updated_at,
  }) {
    this.id = null || id;
    this.nome = nome;
    this.cidade = cidade;
    this.email = email;
    this.created_at = created_at || new Date().toISOString();
    this.updated_at = updated_at || new Date().toISOString();
  }
  static async pegarEditoras() {
    return (await db().select('*').from('editoras')).results;
  }
  static async pegarPeloId(id) {
    const resultado = (await db().select('*').from('editoras').where({ id })).results;
    return resultado[0];
  }
  async criar() {
    return db('editoras').insert(this)
      .then((registroCriado) => db('editoras')
        .where('id', registroCriado[0]))
      .then((registroSelecionado) => new Editora(registroSelecionado.results[0]));
  }
  async atualizar(id) {
    // o update retorna a quantidade de rows atualizados e não o objeto do registro atualizado
    await (await db('editoras')
      .where({ id }))
      .update({ ...this, updated_at: new Date().toISOString() });
    return (await db().select('*').from('editoras').where({ id })).results;
  }
  static async excluir(id) {
    // o del retorna a quantidade de rows deletados
    await (await db('editoras')
      .where({ id }))
      .del();
  }
  async salvar() {
    // verificar se o id existe no banco
    // se não existir é create
    // se existir é update
    if (this.id) {
      return this.atualizar(this.id);
    }
    return this.criar();
  }
  static async pegarLivrosPorEditora(editoraId) {
    return (await db('livros')
      .where({ editora_id: editoraId })).results;
  }
}
export default Editora;
`,
    'livro.js':
`/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
import db from '../db/dbconfig.js';
class Livro {
  constructor({
    id,
    titulo,
    paginas,
    editora_id,
    autor_id,
    created_at,
    updated_at,
  }) {
    this.id = null || id;
    this.titulo = titulo;
    this.paginas = paginas;
    this.editora_id = editora_id;
    this.autor_id = autor_id;
    this.created_at = created_at || new Date().toISOString();
    this.updated_at = updated_at || new Date().toISOString();
  }
  static async pegarLivros() {
    return (await db().select('*').from('livros')).results;
  }
  static async pegarPeloId(id) {
    const resultado = (await db().select('*').from('livros').where({ id })).results;
    return resultado[0];
  }
  async criar() {
    return db('livros').insert(this)
      .then((registroCriado) => db('livros')
        .where('id', registroCriado[0]))
      .then((registroSelecionado) => new Livro(registroSelecionado.results[0]));
  }
  async atualizar(id) {
    // o update retorna a quantidade de rows atualizados e não o objeto do registro atualizado
    await (await db('livros')
      .where({ id }))
      .update({ ...this, updated_at: new Date().toISOString() });
    return (await db().select('*').from('livros').where({ id })).results;
  }
  static async excluir(id) {
    // o del retorna a quantidade de rows deletados
    await (await db('livros')
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
}
export default Livro;
`,
    'nodemon.json':
`{
  "ignore": ["src/db/data/"]
}`,
  };
  return files[fileName];
}