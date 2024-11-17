import { Request, Response } from "express";
import { DeleteExpenseService } from "../../services/expense/DeleteExpenseService";

class DeleteExpenseController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id

        const expense_id = req.query.expense_id as string

        const deleteExpense = new DeleteExpenseService()

        const deletedExpense = await deleteExpense.execute({
            user_id,
            expense_id
        })

        return res.json(deletedExpense)

    }
}

export { DeleteExpenseController }