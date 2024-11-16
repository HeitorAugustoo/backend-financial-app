import { Request, Response } from "express";
import { EditCategoryService } from "../../services/category/EditCategoryService";

class EditCategoryController{
    async handle(req: Request, res: Response){
        
        const user_id = req.user_id

        const category_id = req.query.category_id as string

        const { new_name } = req.body

        console.log(user_id, category_id, new_name)

        const editCategory = new EditCategoryService()

        const categoryUpdated = await editCategory.execute({
            category_id,
            new_name,
            user_id
        })

        return res.json(categoryUpdated)
    }
}

export { EditCategoryController }