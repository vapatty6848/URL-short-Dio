import { Request, Response } from "express";
import shortId from "shortid";
import { config } from "../config/constants";

export class urlController {
    public async shorten(req: Request, res: Response): Promise<void> {
       const { originUrl } = req.body
       console.log(req.body);
       const hash = shortId.generate()
       const shortURL = `${config.API_URL}/${hash}`
       res.json({ originUrl, hash, shortURL})
    }
}



/* Passos 
- verificar se a url não existe
- criar o hash url
- salvar a url no banco
- retornar a url salva
*/