import prismaClient from "../../prisma";

class ListExpansesService{
    async execute(user_id: string){

        const expansesList = await prismaClient.expanse.findMany({
            where: {
                userId: user_id
            }
        })
        return expansesList
    }
}

export { ListExpansesService }