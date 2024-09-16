import { Request, response, Response } from "express";
import { ListExpansesService } from "../../services/expanse/ListExpansesService";



class ListExpansesController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id

        const listExpanseService = new ListExpansesService()

        const expanses = await listExpanseService.execute(user_id)

        return res.json(expanses)

    }
}

export { ListExpansesController }