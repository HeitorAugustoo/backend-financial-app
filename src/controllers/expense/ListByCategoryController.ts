import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/expense/ListByCategoryService";

class ListByCategoryController{
    async handle(req: Request, res: Response){
        const category_id = req.query.category_id as string

        const user_id = req.user_id

        const listByCategory = new ListByCategoryService()

        const expenses = await listByCategory.execute({
            category_id,
            user_id
        })

        return res.json(expenses)
    }
}

export { ListByCategoryController }