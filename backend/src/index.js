const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

 /** 
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do beck-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /** 
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros usados para identificar recursos
   * Request BODY: Corpo da requisição, utilizando para criar ou alterar recursos
   */
/**
 * BANCO DE DADOS: SQL:MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /** 
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
 */


app.listen(3333);
