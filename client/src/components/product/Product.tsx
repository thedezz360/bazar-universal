
import { useNavigate } from "react-router-dom";
import { Item } from "../../types/types";
import { Rating } from "../rating/Rating";


type props = {
	product : Item
}


function Product ({product}:props){

	const navigate = useNavigate();
	const handleClickProduct = ()=>{
		navigate(`/items/${product.id}`);
	};


	return(
		<article className="product" onClick={handleClickProduct}>
			<picture>
				<img className="product-img" src={product.thumbnail} alt={`image product ${product.title}`} />
			</picture>
			<div className="product-content">
				
				<h2 className="product-title">{product.title}</h2>
				<p className="product-description">{product.description}</p>
				
				<div className="product-footer">
					<span className="product-price">{product.price}$</span>
					<Rating rating={product.rating}/>
				</div>
			</div>
		</article>
	);
}

export default Product;