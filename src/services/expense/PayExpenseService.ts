import prismaClient from "../../prisma";

interface ExpenseRequest{
    expense_id: string,
    user_id: string
}

class PayExpenseService{
    async execute({expense_id, user_id}: ExpenseRequest){

        const payExpense = await prismaClient.expense.update({
            where: {
                id: expense_id,
                userId: user_id
            },
            data: {
                status: true
            }
        })

        return payExpense
    }
}

export { PayExpenseService }