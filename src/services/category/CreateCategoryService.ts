import prismaClient from "../../prisma";

interface CategoryRequest {
    name: string
}

class CreateCategoryService{
    async execute({ name }: CategoryRequest){
        
        const categoryAlreadyExists = await prismaClient.category.findFirst({
            where: {
                name: name
            }
        })
        
        if(name === '' || categoryAlreadyExists){
            throw new Error("Name invalid or already exists")
        }

            const category = await prismaClient.category.create({
                data: {
                    name: name
                },
                select: {
                    id: true,
                    name: true
                }
            })

            return category


    }
}

export { CreateCategoryService }