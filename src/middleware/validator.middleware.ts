import { NextFunction, Request, Response } from "express";
import { ZodType, ZodError } from "zod";

export const validateSchema = (schema: ZodType<any>) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            res.status(400).json({
                message: "Datos inválidos",
                errors: error.issues.map((e) => ({
                    path: e.path?.[0] ?? '',
                    message: e.message
                })),
            });
            return;
        }

        res.status(500).json({ message: "Error inesperado en validación" });
        return;
    }
}
