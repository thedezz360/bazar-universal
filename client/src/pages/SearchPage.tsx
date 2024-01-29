import BoxSearch from "../components/box-search/BoxSearch";
import shopAnimation from "../assets/lotties/shopping-options.json";
import Lottie from "lottie-web";
import { useEffect } from "react";

export default function SearchPage() {

	// to load lottie
	useEffect(()=>{
		
		Lottie.loadAnimation({
			container: document.querySelector("#shopAnimation") as Element,
			animationData: shopAnimation,

		});

		

	},[]);

	return (
		<div>
			<div id="shopAnimation" className="lottie-container"></div>

			<h1 className="text-center mb-2">Bazar online</h1>

			<BoxSearch hideButton={false}  />
		</div>
	);
}