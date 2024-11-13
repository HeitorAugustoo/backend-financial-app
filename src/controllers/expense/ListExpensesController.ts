import { Request, response, Response } from "express";
import { ListExpensesService } from "../../services/expense/ListExpensesService";



class ListExpensesController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id

        const listExpenseService = new ListExpensesService()

        const expenses = await listExpenseService.execute(user_id)

        return res.json({expenses})

    }
}

export { ListExpensesController }