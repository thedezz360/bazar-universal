import { Router } from "express";
import { getItems,getItem } from "../controllers/item";

export const router= Router();

router.get("/api/items",getItems);

router.get("/api/items/:id", getItem);

