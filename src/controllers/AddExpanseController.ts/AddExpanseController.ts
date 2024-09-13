import { Request, Response } from "express";
import { AddExpanseService } from "../../services/expanse/AddExpanseService";



class AddExpanseController{
    async handle(req: Request, res: Response){

        const { description, amount, due_date, category_id, user_id } = req.body

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