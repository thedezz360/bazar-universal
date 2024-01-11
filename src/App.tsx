import { Routes, Route } from "react-router-dom";
import "./App.css";
import BoxSearch from "./components/box-search/BoxSearch";

function App() {


	return (
		<>
			<Routes>
				<Route path="/" element={<BoxSearch />} />
			</Routes>
		</>
	);
}

export default App;
