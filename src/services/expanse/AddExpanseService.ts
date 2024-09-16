import prismaClient from "../../prisma";

interface ExpanseRequest{
    description: string;
    amount: number;
    due_date: string;
    category_id: string;
    user_id: string;
}

class AddExpanseService{
    async execute({ description, amount, due_date, category_id, user_id }: ExpanseRequest){

        const verifyCategory = await prismaClient.category.findFirst({
            where: {
                id: category_id,
                userId: user_id
            }
        })

        if(!verifyCategory){
            throw new Error(`Category not found or not selected`)
        }

        const expanse = await prismaClient.expanse.create({
            data: {
                description: description,
                amount: amount,
                due_date: due_date,
                categoryId: category_id,
                userId: user_id
            }
        })

        return expanse
    }
}

export { AddExpanseService }