import express, {Request, Response} from 'express';

const api = express();


api.get('/teste', (req: Request, res: Response) => {
  res.json({ success: true });
});

api.listen('3000', () => console.log('Escutando na Porta 3000'))