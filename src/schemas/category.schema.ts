import { z } from "zod";

export const categorySchema = z.object({
    name: z
        .string()
        .min(5, "El nombre debe tener al menos 5 caracteres")
        .max(10, "El nombre debe tener como máximo 10 caracteres"),
    color: z.string().min(7, "Debes seleccionar un color"),
    icon: z.string().min(1, "Debes seleccionar un ícono"),
});
