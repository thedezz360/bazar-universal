import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../types/types";
import { ProductDetail } from "../components/product-detail/ProductDetail";
import BoxSearch from "../components/box-search/BoxSearch";

type data = {
	data: Item
}

export function ProductDetailPage() {
	

	
	const [dataProduct, setDataProduct] = useState<Item | null>(null);
	
	const {id} = useParams();

	/**
	 * function to get data
	 */
	const fetchData =  useCallback(
		async ()=>{
			try{
			// make request to api
				const response = await fetch(`http://localhost:3000/api/items/${id}`);
			
				// check request, if verification succesfully ( cod=200 )
				if(response.ok){
				//get data JSON	
					const dataJSON: data= await response.json() as data;
					console.log({dataJSON});
					//updateData
					setDataProduct(dataJSON.data);
				}else{
				//manage error if requet fail
					console.error("Error get data:", response.status, response.statusText );
				}

			}catch(e){
				console.error("Error request: ",e);
			}
		},[id],
	);
	

	/**
	 * fetch to get data of product
	 */
	useEffect(()=>{
		
		fetchData().catch((e)=>{
			console.error("Error fetchData: ", e);
		});


	},[fetchData]);


	return (
		<>
			{dataProduct ? 
				(
					<>
						<BoxSearch hideButton={true} />

						<ProductDetail data={dataProduct} />
					</>
				):(
					<p>Loading...</p>
				)

			}
		</>
	);
}
