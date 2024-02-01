
export function calRating(rating: number){
	const decimales = rating % 1;
	const entero = Math.floor(rating);
	const decimal = Math.floor(decimales * 10);

	return {entero, decimal};
}