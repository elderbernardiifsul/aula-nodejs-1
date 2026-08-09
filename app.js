const express = require('express');

const musicaDAO = require('./karaoke/DAO/MusicaDAO');

const app = express();

app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

// GET /api/musicas
// Lista todas as músicas sem mostrar suas partes
app.get('/api/musicas', (req, res) => {
    const musicas = musicaDAO.listarTodas();

    const resumo = [];

    for (let i = 0; i < musicas.length; i++) {
        const m = musicas[i];

        resumo.push({
            id: m.id,
            nome: m.nome,
            artista: m.artista,
            totalPartes: m.partes.length
        });
    }

    res.status(200).json(resumo);
});

// GET /api/musicas/:id
// Busca uma música completa pelo ID
app.get('/api/musicas/:id', (req, res) => {
    const id = Number(req.params.id);

    const musica = musicaDAO.buscarPorId(id);

    if (!musica) {
        return res.status(404).json({
            erro: `Música com id ${id} não encontrada`
        });
    }

    res.status(200).json(musica);
});

// POST /api/musicas
// Cria uma nova música
app.post('/api/musicas', (req, res) => {
    const { nome, artista } = req.body;

    if (!nome || !artista) {
        return res.status(400).json({
            erro: 'Campos obrigatórios: nome, artista'
        });
    }

    const novaMusica = musicaDAO.inserir(nome, artista);

    res.status(201).json(novaMusica);
});

// PUT /api/musicas/:id
// Atualiza uma música existente
app.put('/api/musicas/:id', (req, res) => {
    const id = Number(req.params.id);
    const { nome, artista } = req.body;

    if (!nome || !artista) {
        return res.status(400).json({
            erro: 'Campos obrigatórios: nome, artista'
        });
    }

    const musicaAtualizada = musicaDAO.atualizar(id, nome, artista);

    if (!musicaAtualizada) {
        return res.status(404).json({
            erro: `Música com id ${id} não encontrada`
        });
    }

    res.status(200).json(musicaAtualizada);
});

// DELETE /api/musicas/:id
// Remove uma música existente
app.delete('/api/musicas/:id', (req, res) => {
    const id = Number(req.params.id);

    const musicaRemovida = musicaDAO.remover(id);

    if (!musicaRemovida) {
        return res.status(404).json({
            erro: `Música com id ${id} não encontrada`
        });
    }

    res.status(200).json(musicaRemovida);
});

// Middleware de erro genérico
app.use((err, req, res, next) => {
    console.error('Erro detectado:', err.message);

    res.status(500).json({
        erro: 'Erro interno do servidor'
    });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});