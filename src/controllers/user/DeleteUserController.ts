import { Request, Response } from "express";
import { DeleteUserService } from "../../services/user/DeleteUserService";

class DeleteUserController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id

        const deleteUser = new DeleteUserService()

        const userDeleted = await deleteUser.execute({
            user_id
        })

        return res.json(userDeleted)
    }
}

export { DeleteUserController }