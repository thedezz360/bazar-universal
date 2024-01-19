import { Routes, Route } from "react-router-dom";
import "./App.css";
import BoxSearch from "./components/box-search/BoxSearch";
import { ResultsList } from "./components/results-list/ResultsList";

function App() {


	return (
		<div className="container">
			<Routes>
				<Route path="/" element={<BoxSearch />} />
				<Route path="/items/" element={<ResultsList />} />
			</Routes>
		</div>
	);
}

export default App;
