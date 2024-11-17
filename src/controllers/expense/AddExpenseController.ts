import { Request, Response } from "express";
import { AddExpenseService } from "../../services/expense/AddExpenseService";

class AddExpenseController{
    async handle(req: Request, res: Response){

        const { description, amount, due_date, category_id, ...optionalFields } = req.body

        const user_id = req.user_id

        const addExpenseService = new AddExpenseService()

        const expense = await addExpenseService.execute({
                description,
                amount,
                due_date,
                category_id,
                user_id,
                ...optionalFields
        })

        return res.json(expense)

    }
}

export { AddExpenseController }