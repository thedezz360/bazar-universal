import React from "react";
import { useNavigate } from "react-router-dom";
import "./boxSearch.css";
import iconSearch from "../../assets/svgs/IconSearch.svg";


type DataForm = {
	search :string
}

type props = {
	hideButton: boolean,
}

function BoxSearch({hideButton}: props) {



	const navigate = useNavigate();

	const handleSubmit = (e : React.FormEvent<HTMLFormElement>):void=>{
		e.preventDefault();

		// get reference to form
		const form = document.getElementById("searchForm") as HTMLFormElement;
		
		// crete FormData object 
		const formData = new FormData(form);

		// create object to store data form
		const data :DataForm = {
			search:formData.get("search") as string
		}; 

		
		
		
		navigate(`/items/?search=${data.search}`);
	};

	return (
		<>
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
		</>
	);
}

export default BoxSearch;