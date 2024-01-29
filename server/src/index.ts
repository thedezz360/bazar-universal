import express, { json, Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import productsData from "./dataBase/products.json";
import { ParsedQs } from "qs";

const app = express();

const PORT = 3000;

app.use(json());

const corsOptions: CorsOptions = {
	origin: "*"
};

app.use(cors(corsOptions));

type Query = string | string[] | ParsedQs | ParsedQs[] | undefined;
type Item = {
	"id": number,
	"title": string,
	"description": string,
	"price": number,
	"discountPercentage": number,
	"rating": number,
	"stock": number,
	"brand": string,
	"category": string,
	"thumbnail": string,
	"images": string[]
}
type Items = Item[];

function getItemById(id: number):Item | null{
	
	if(!id) return null;
	
	const  item  = productsData.products.find(product => product.id === id);


	if(typeof item === "undefined"){
		return null;
	}
	return item;

}

function getItems (searchParam: Query):Items | null{
	if(typeof searchParam !== "string") return null;
	const items:Items = productsData.products.filter((product:Item) =>(
		Object.values(product).some(value => (
			typeof value === "string" && value.toLowerCase().includes(searchParam.toLowerCase())
		))
	));
	return items;
}

app.get("/api/items", (req: Request, res: Response) => {
	console.log("entramos");
	try {
		const { q } = req.query;
		console.log({ q });
		const items = getItems(q);
		const data = items ? items : "NOT_FOUND";
		res.json({ data });
	} catch (error) {
		console.error("error : ", error);
		
	}
});

app.get("/api/items/:id", (req:Request, res:Response)=>{
	try{
		const {id} = req.params;
		const item = getItemById(parseInt(id));
		const data = item ? item : "NOT_FOUND";
		res.json({data});
	}catch(e){
		console.error("Error get items id: " , e);
	}
});

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});