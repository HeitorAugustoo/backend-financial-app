import { Request, Response } from "express";
import { PayExpenseService } from "../../services/expense/PayExpenseService";

class PayExpenseController{
    async handle(req: Request, res: Response){
        
        const user_id = req.user_id

        const expense_id = req.query.expense_id as string

        const {date} = req.body

        const payExpense = new PayExpenseService()
        
        const paidExpense = await payExpense.execute({
            expense_id,
            user_id,
            date
        })

        return res.json(paidExpense)

    }
}

export { PayExpenseController }