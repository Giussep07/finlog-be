import { prisma } from "../config/db";

export async function createCategory(name: string, icon: string, color: string) {
    return prisma.category.create({
        data: {
            name,
            icon,
            color
        }
    });
}

export async function getCategories() {
    return prisma.category.findMany();
}

export async function getCategoryById(id: number) {
    return prisma.category.findUnique({
        where: { id }
    });
}

export async function updateCategory(id: number, name: string, icon: string, color: string) {
    return prisma.category.update({
        where: { id },
        data: {
            name,
            icon,
            color
        }
    });
}

export async function deleteCategory(id: number) {
    return prisma.category.delete({
        where: { id }
    });
}
