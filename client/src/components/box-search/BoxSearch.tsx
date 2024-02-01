import React, { useEffect } from "react";
import Lottie from "lottie-web";
import shopAnimation from "../../assets/lotties/shopping-options.json";
import { useNavigate, Link } from "react-router-dom";
import "./boxSearch.css";
import iconSearch from "../../assets/svgs/IconSearch.svg";



type DataForm = {
	search: string
}

type props = {
	hideButton: boolean,
}

function BoxSearch({ hideButton }: props) {

	//load lotties
	useEffect(() => {
		Lottie.loadAnimation({
			container: document.querySelector("#icon-store") as Element,
			animationData: shopAnimation
		});
	}, []);


	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		// get reference to form
		const form = document.getElementById("searchForm") as HTMLFormElement;

		// crete FormData object 
		const formData = new FormData(form);

		// create object to store data form
		const data: DataForm = {
			search: formData.get("search") as string
		};




		navigate(`/items/?search=${data.search}`);
	};

	return (
		<div className="header">
			<Link to="/">
				<span
					id="icon-store"
					className={!hideButton ? "hide icon-store" : " icon-store"}
				></span>
			</Link>
			<form id="searchForm" onSubmit={handleSubmit}>

				<div className="input-container">
					<input
						className="input-form"
						type="search"
						name="search"
						id="search"
						placeholder="laptop, smartphone, ..."

					/>

					<img className="custom-icon" src={iconSearch} alt="icon search" />

				</div>
				<button className={hideButton ? "hide button-form" : "button-form"} type="submit">
					Buscar
				</button>
			</form>
		</div>
	);
}

export default BoxSearch;