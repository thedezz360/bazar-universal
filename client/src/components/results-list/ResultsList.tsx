import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Items } from "../../types/types";
import Product from "./Product";
import BoxSearch from "../box-search/BoxSearch";



export function ResultsList() {
	console.log("resultList");

	const [products, setProducts] = useState<Items | null>(null);
	const [categories, setCategories] = useState<[string,number][] | null>(null);
	const [searchParams] = useSearchParams();

	// get the search param
	const itemToSearch = searchParams.get("search");

	// get request to api to get data of search params
	useEffect(() => {
		const fetchData = async()=>{
			const response = await fetch(`http://localhost:3000/api/items?q=${itemToSearch}`);

			try{
				
				if(!response.ok){
					throw new Error("Error to get products");
				}

				const data = await response.json() as Items;
				setProducts(data );

			}catch(error){
				console.error(error);
			}
		};

		fetchData()
			.catch(error=>{console.error(error);});
			
	}, [itemToSearch]);

	

	// to get categories of products 
	useEffect(()=>{
		
		function getCategories (){

			// object to store categories and and number of appeareances
			const categoriesStore:{[key:string]:number}={};
			
			// loop products
			products?.data.forEach(product => {
				
				// if categoriesStore is empty add the first category
				if(Object.keys(categoriesStore).length === 0){
					categoriesStore[product.category]= 1;
				}else{

					// loop categoriesStore
					for (const key in categoriesStore) {
						
						// if product category exist in categoriesStore 
						if (key === product.category){
							categoriesStore[key] += 1;
						}else{
							categoriesStore[product.category] = 1;
						}
					}
				}
			});

		
			setCategories(Object.entries(categoriesStore));
			
		}
		
		getCategories();
	},[products]);

	

	return (
		<>
			<BoxSearch />
			<h1>Search result: {products?.data.length}</h1>
			
			{/* tags */}
			<div className="container-tag">
				{
					categories?.map((category, index) =>(
						<span key={index} className="category-tag">{category[0]} : {category[1]}</span>
					))
				}
			</div>
			
			{/* products */}
			<section className="products-container">
				{products && (
					products.data.map(product =>(
						<Product key={product.id} product={product} />
					))
				)}
			</section>	

			
		</>
	);
}