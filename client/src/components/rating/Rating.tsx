import iconStar from "../../assets/svgs/star.svg";
import halfStar from "../../assets/svgs/halfStar.svg";

type props = {
	rating: number
}

export function Rating({rating}:props) {
	const decimales = rating % 1;
	const entero = Math.floor(rating);
	const decimal = Math.floor(decimales * 10);

	const arrStarsRating = [];
	for(let i = 0 ; i < entero ; i++){
		arrStarsRating.push(<img key={i} src={iconStar}/>);
	}

	if(decimal > 2 && decimal <= 9){
		arrStarsRating.push(<img src={halfStar}/>);
	}
	
	return (
		<span>{arrStarsRating}</span>
	);
}
