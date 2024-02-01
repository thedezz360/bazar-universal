import { ParsedQs } from "qs";

export type Query = string | string[] | ParsedQs | ParsedQs[] | undefined;
export type Item = {
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
export type Items = Item[];