import express, { json } from "express";
import cors, { CorsOptions } from "cors";
import { router } from "./routes/item";


const app = express();

const PORT = 3000;

app.use(json());

// to recive request of all origins
const corsOptions: CorsOptions = {
	origin: "*"
};

app.use(cors(corsOptions));

// to use routers
app.use(router);


app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});