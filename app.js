// importacoes dos objetos locais
const {musica, play} = require('./karaoke/player');

console.log('Titulo da musica: ' + musica.nome);


// 1. Importar o Express
const express = require('express');

// 2. Criar a aplicação (a "loja")
const app = express();

// 3. Configurar middlewares (pré-processamento)
app.use(express.json());

// 4. Definir rotas (os "balcões de atendimento")
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

app.get('/teste', (req, res)=>{
    res.contentType('html');
    const html = "<html> <body> <b>Este é o meu site Express.js. </body> <html> "
    res.send(html);
});

app.post('/testePost', (req,res) => {

} );

/**
 * API da musica
 * GET /musica/:id -> retornar a musica inteira
 * GET /mussica/:id/nome
 * GET /musica:id/:parte -> retornar parte da musica
 * 
 */




// 5. Abrir a loja (escutar a porta)
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});