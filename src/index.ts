import express from 'express';
import { urlController } from './controller/urlController';

const api = express();
const URLcontroller = new urlController;

api.use(express.json());
api.post('/shorten', URLcontroller.shorten);
api.get('/:hash', URLcontroller.redirect);
/* api.get('/teste', (req: Request, res: Response) => {
  res.json({ success: true });
}); */

api.listen('3000', () => console.log('Escutando na Porta 3000'))