import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";

class DeleteCategoryController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id

        const category_id = req.query.category_id as string

        const deleteCategory = new DeleteCategoryService()

        const categoryDeleted = await deleteCategory.execute({
            category_id,
            user_id
        })

        return res.json(categoryDeleted)

    }
}

export { DeleteCategoryController }