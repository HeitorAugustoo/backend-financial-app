import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest{
    user_id: string,
    new_name: string,
    new_email: string,
    new_password: string
}

class EditUserService{
    async execute({user_id, new_name, new_email, new_password}: UserRequest){

        const nameOrEmailAlreadyExists = await prismaClient.user.findFirst({
            where: {
                OR: [
                    { name: new_name },
                    { email: new_email }
                ]
            }
        });

        if(nameOrEmailAlreadyExists){
            throw new Error("name or email already exists")
        }
        
        const dataToUpdate: any = {};
        if (new_name) dataToUpdate.name = new_name;
        if (new_email) dataToUpdate.email = new_email;
        if (new_password) {
            const passwordHash = await hash(new_password, 8);
            dataToUpdate.password = passwordHash;
        }

        const editUser = await prismaClient.user.update({
            where: {
                id: user_id,
            },
            data: dataToUpdate,
            
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        
        
        

        return editUser
    }
}

export { EditUserService }