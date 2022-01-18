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

    public async redirect(req: Request, res: Response): Promise<void> {
       const { hash } = req.params
       const url = {
           originUrl: "https://cloud.mongodb.com/v2#/org/601161db62036a6bf8a49d91/",
           hash: "L2-GqsbV6",
           shortURL: "http://localhost:3000/L2-GqsbV6"
       }
       res.redirect(url.originUrl)
    }
}




/* Passos 
- verificar se a url não existe
- criar o hash url
- salvar a url no banco
- retornar a url salva
*/


/* Passos 2 
 - Pegar o hash da Url
 - Encontrar a Url original pelo  hash encontrado
 - Direcionar  para a Url original a partir do que encontramos no banco de dados

*/