import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController{
    async handle(req: Request, res: Response){

        const categories = new ListCategoryService()

        const categoryList = await categories.execute()

        return res.json({categoryList})
    }
}

export { ListCategoryController }