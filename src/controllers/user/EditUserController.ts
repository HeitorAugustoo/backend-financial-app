import { Request, Response } from "express";
import { EditUserService } from "../../services/user/EditUserService";

class EditUserController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id

        const { new_name, new_email, new_password, confirm_password} = req.body

        const editUser = new EditUserService()

        const user = await editUser.execute({
            user_id,
            new_email,
            new_name,
            new_password,
            confirm_password
        })

        return res.json(user)

    }
}

export { EditUserController }