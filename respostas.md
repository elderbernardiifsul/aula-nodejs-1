Respostas — API do Karaokê

1. Status Codes

200 OK: requisição realizada com sucesso, como listar as músicas. 201 Created: usado quando uma nova música é criada. 400 Bad Request: usado quando os dados enviados estão errados ou faltando. 404 Not Found: usado quando a música procurada não existe. 500 Internal Server Error: usado quando acontece um erro no servidor.

2. Content-Type

O Content-Type informa qual é o tipo dos dados enviados. No nosso projeto usamos application/json, pois a API trabalha com JSON. O res.json() envia a resposta como JSON, enquanto o res.send() pode enviar texto ou HTML. Quando o res.send() envia HTML, o tipo é text/html.

3. Tratamento de erros

Se for enviado um JSON inválido, o Express gera um erro. Também pode acontecer algum erro dentro de uma rota, por isso foi colocado um middleware de erro no final do app.js, que mostra o erro no console e retorna o status 500.

4. DAO e persistência

DAO é uma camada responsável pelos dados, deixando as rotas mais organizadas. No projeto, ele controla as músicas e possui funções para listar, buscar, adicionar, atualizar e remover. Como os dados ficam em memória, eles são perdidos quando o servidor é reiniciado. Para manter os dados, seria necessário usar um arquivo ou banco de dados.

5. Singleton

O DAO é exportado como uma única instância usando module.exports = new MusicaDAO(). Assim, todos usam o mesmo conjunto de músicas. Se cada arquivo criasse seu próprio DAO, cada um teria uma lista diferente.

6. PUT, POST e PATCH

POST é usado para criar uma música, PUT para atualizar uma música e PATCH para alterar apenas uma parte dela, como somente o artista.

7. Debugger

O debugger permite acompanhar o código enquanto ele está rodando. Nos testes, podemos observar os dados recebidos e acompanhar o que acontece dentro das rotas, ajudando a encontrar erros e entender melhor a API.
