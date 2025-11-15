import { Router } from "express";
import { validateSchema } from "../middleware/validator.middleware";
import { categorySchema } from "../schemas/category.schema";
import { createCategory, deleteCategory, getCategories, updateCategory } from "../controllers/category.controller";

const router = Router();

router.post("/", validateSchema(categorySchema), createCategory);
router.get("/", getCategories);
router.put("/:id", validateSchema(categorySchema), updateCategory);
router.delete("/:id", deleteCategory);

export default router;
