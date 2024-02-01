import { Rating } from "../rating/Rating";
import { Item } from "../../types/types";
import "./productDetail.css";



type props = {
	data: Item
}
export function ProductDetail({ data }: props) {
	


	const {
		thumbnail,
		title,
		images,
		price,
		brand,
		stock,
		description,
		rating,

	} = data;

	// change img thumbnail when click over img
	const handleClick = (e:React.MouseEvent<HTMLImageElement>)=>{
		const currentTarget = e.currentTarget;
		const src= currentTarget.src;
		const thumbnail = document.getElementById("thumbnail");
		
		thumbnail?.setAttribute("src",src);
	};

	return (
		<div className="product-detail-card">
			<div className="card-header">

				<picture className="thumbnail">
					<img src={thumbnail} alt={`img ${title}`}  id="thumbnail"/>
				</picture>
				<picture className="slider">
					{
						images.map((image, index) => {
							
							return (
								<img 
									key={index} 
									src={image} 
									alt={`img ${title}`} 
									onClick={handleClick} 
								/>);

						}
							
						)
					}
				</picture>

			</div>

			<div className="card-body">

				<div className="card-title">
					<h1>{title} - {brand}</h1>

					<span className="card-price">
						<span>
							{price} $
							<br />
							{stock} disponibles
						</span>
						<span>
							<Rating rating={rating} />
						</span>
					</span>

				</div>

				<p className="card-description">
					{description}
				</p>

			</div>
			
			<div className="card-footer">
				<button className="btn btn-comprar">
				Buy
				</button>

			</div>

		</div>
	);
}
