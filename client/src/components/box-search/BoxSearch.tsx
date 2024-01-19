import React from "react";
import { useNavigate } from "react-router-dom";

type DataForm = {
	search :string
}

function BoxSearch() {

	const navigate = useNavigate();
	const handleSubmit = (e : React.FormEvent<HTMLFormElement>):void=>{
		e.preventDefault();

		// get reference to form
		const form = document.getElementById("search") as HTMLFormElement;
		
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
			<div>BoxSearch</div>

			<form id="search" onSubmit={handleSubmit}>
				
				<input type="search" name="search" id="search" />
				<button type="submit">
					Buscar
				</button>
			</form>
		</>
	);
}

export default BoxSearch;