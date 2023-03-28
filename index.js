import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    return res.json('Hello World !!!');
});

app.listen(3001, () => {
    console.log('Servidor rodando...');
});