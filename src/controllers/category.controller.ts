import { Request, Response } from "express";
import z from "zod";
import { categorySchema } from "../schemas/category.schema";
import * as service from "../services/category.service";

export async function createCategory(req: Request<{}, {}, z.infer<typeof categorySchema>>, res: Response) {
    try {
        const { name, icon, color } = req.body;

        const newCategory = await service.createCategory(name, icon, color);

        return res.status(201).json(newCategory);
    } catch (error) {
        return res.status(500).json({ message: "Error al crear la categoría" });
    }
}

export async function getCategories(req: Request, res: Response) {
    try {
        const categories = await service.getCategories();
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({ message: "Error al obtener las categorías" });
    }
}

export async function updateCategory(req: Request<{ id: string }, {}, z.infer<typeof categorySchema>>, res: Response) {
    try {
        const { id } = req.params;
        const { name, icon, color } = req.body;

        // Check if category with the given id exists
        const existingCategory = await service.getCategoryById(Number(id));
        if (!existingCategory) {
            return res.status(404).json({ message: "Categoría no encontrada" });
        }

        const updatedCategory = await service.updateCategory(Number(id), name, icon, color);

        return res.status(200).json(updatedCategory);
    } catch (error) {
        return res.status(500).json({ message: "Error al actualizar la categoría" });
    }
}

export async function deleteCategory(req: Request<{ id: string }>, res: Response) {
    try {
        const { id } = req.params;

        // Check if category with the given id exists
        const existingCategory = await service.getCategoryById(Number(id));
        if (!existingCategory) {
            return res.status(404).json({ message: "Categoría no encontrada" });
        }
        await service.deleteCategory(Number(id));

        return res.status(200).json({ message: "Categoría eliminada correctamente" });
    } catch (error) {
        return res.status(500).json({ message: "Error al eliminar la categoría" });
    }
}

