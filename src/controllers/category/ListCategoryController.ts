import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id

        const categories = new ListCategoryService()

        const categoryList = await categories.execute(user_id)

        return res.json({categoryList})
    }
}

export { ListCategoryController }