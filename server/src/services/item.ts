import productsData from "../dataBase/products.json";
import { Query, Items, Item } from "../types/item";


export function getProducts (searchParam: Query):Items | null{
	if(typeof searchParam !== "string") return null;
	const items:Items = productsData.products.filter((product:Item) =>(
		Object.values(product).some(value => (
			typeof value === "string" && value.toLowerCase().includes(searchParam.toLowerCase())
		))
	));
	return items;
}

export function getProductById(id: number):Item | null{
	
	if(!id) return null;
	
	const  item  = productsData.products.find((product:Item) => product.id === id);

	if(typeof item === "undefined"){
		return null;
	}
	return item;

}