import { Item } from "../../types/types";


type props = {
	product : Item
}


function Product ({product}:props){
	return(
		<article className="product">
			<picture>
				<img className="product-img" src={product.thumbnail} alt={`image product ${product.title}`} />
			</picture>
			<div className="product-content">
				
				<h2 className="product-title">{product.title}</h2>
				<p className="product-description">{product.description}</p>
				
				<div className="product-footer">
					<span className="product-price">{product.price}$</span>
					<span className="product-rating">{product.rating}</span>
				</div>
			</div>
		</article>
	);
}

export default Product;