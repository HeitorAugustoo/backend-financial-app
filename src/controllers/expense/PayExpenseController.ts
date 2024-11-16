import { Request, Response } from "express";
import { PayExpenseService } from "../../services/expense/PayExpenseService";

class PayExpenseController{
    async handle(req: Request, res: Response){
        
        const user_id = req.user_id

        const expense_id = req.query.expense_id as string

        const { new_status } = req.body

        console.log(req.body);
        
        console.log(new_status);

        const payExpense = new PayExpenseService()
        
        const paidExpense = await payExpense.execute({
            expense_id,
            new_status,
            user_id
        })

        return res.json(paidExpense)

    }
}

export { PayExpenseController }