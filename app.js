const express = require('express');
// Criando uma instância do Express
const app = express();
const path = require('path');

const router = express.Router();
app.use('/',router);
app.use(express.static(path.join(__dirname)));



router.get('/obra/', function (req, res) {
    res.sendFile(path.join(__dirname,  'index.html'));
})

router.get('/simone', function (req, res) {
    res.sendFile(path.join(__dirname,  'simone/index.html'));
})


router.get('/advance', function (req, res) {
    res.sendFile(path.join(__dirname,  'advance/index.html'));
})

router.get('/bhcamcaba', function (req, res) {
    res.sendFile(path.join(__dirname,  'bhcacamba/index.html'));
})

app.get('/victor', (req, res) => {    
    res.sendFile(path.join(__dirname,  'victor/index.html'));
});


app.get('/particular', (req, res) => {    
    res.sendFile(path.join(__dirname,  'particular.html'));
});


app.get('/planos', (req, res) => {    
    res.sendFile(path.join(__dirname,  'planos.html'));
});


app.get('/register', (req, res) => {    
    res.sendFile(path.join(__dirname, 'register.html'));
});


app.get('/saibamais', (req, res) => {    
    res.sendFile(path.join(__dirname,  'saibamais.html'));
});


app.get('/template', (req, res) => {    
    res.sendFile(path.join(__dirname,  'template.html'));
});

// Configurando o servidor para escutar na porta 3000
const port = 3001;
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});


