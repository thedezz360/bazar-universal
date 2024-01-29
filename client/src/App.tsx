import { Routes, Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";

function App() {


	return (
		<div className="container">
			<Routes>
				<Route path="/" element={<SearchPage />} />
				<Route path="/items/" element={<ProductsPage />} />
				<Route path="/items/:id" element={<ProductDetailPage />} />
			</Routes>
		</div>
	);
}

export default App;
