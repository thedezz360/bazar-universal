import React from "react";
import { useNavigate } from "react-router-dom";


function BoxSearch() {

	const navigate = useNavigate();
	const handleSubmit = (e : React.FormEvent<HTMLFormElement>):void=>{
		e.preventDefault();
		
		navigate("/items");
	};
	return (
		<>
			<div>BoxSearch</div>

			<form onSubmit={handleSubmit}>
				
				<input type="search" name="search" id="search" />
				<button type="submit">
					Buscar
				</button>
			</form>
		</>
	);
}

export default BoxSearch;