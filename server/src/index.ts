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
		console.log({data});
		res.json({ data });
	} catch (error) {
		console.error("error : ", error);
		
	}


});

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});