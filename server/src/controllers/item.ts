import { Request, Response } from "express";
import { getProducts,getProductById } from "../services/item";

export function getItems (req:Request, res:Response){
	try {
		const { q } = req.query;
		const items = getProducts(q);
		const data = items ? items : "NOT_FOUND";
		res.json({ data });
	} catch (error) {
		console.error("error : ", error);
		
	}
}

export function getItem (req:Request, res:Response){
	try{
		const {id} = req.params;
		const item = getProductById(parseInt(id));
		const data = item ? item : "NOT_FOUND";
		res.json({data});
	}catch(e){
		console.error("Error get items id: " , e);
	}
}