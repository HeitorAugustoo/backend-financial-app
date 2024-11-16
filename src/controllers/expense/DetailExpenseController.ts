import { Request, Response } from "express";
import { DetailExpenseService } from "../../services/expense/DetailExpenseService";

class DetailExpenseController{
    async handle(req: Request, res: Response){
        const user_id = req.user_id    
        
        const expense_id = req.query.expense_id as string

        const detailExpense = new DetailExpenseService()

        const expense = await detailExpense.execute({
            expense_id,
            user_id
        })
        
        return res.json(expense)
    }
}

export { DetailExpenseController }