import { Request, response, Response } from "express";
import shortId from "shortid";
import { config } from "../config/constants";
import { URLModel } from "../database/model/URL";

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
       const url = await URLModel.findOne({ hash })

       if (url) {
           response.redirect(url.originURL)
           return
       }

       response.status(400).json({ error: 'URL not found ' })

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