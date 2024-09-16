import { Request, Response } from "express";
import { AddExpanseService } from "../../services/expanse/AddExpanseService";

class AddExpanseController{
    async handle(req: Request, res: Response){

        const { description, amount, due_date, category_id } = req.body

        const user_id = req.user_id

        const addExpanseService = new AddExpanseService()

        const expanse = await addExpanseService.execute({
                description,
                amount,
                due_date,
                category_id,
                user_id
        })

        return res.json(expanse)

    }
}

export { AddExpanseController }