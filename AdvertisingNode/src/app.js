import express from "express";
import cors from "cors";
import routes from "./Adverstising/routes/advertisingRoutes";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.get("/ping", (req, res, next) => {
  res.send(`{ "status" : "OK","status_code" : 200 }`);
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
