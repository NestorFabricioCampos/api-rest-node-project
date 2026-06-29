import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/products.router.js";
import categoriesRouter from "./src/routes/categories.router.js";
import usersRouter from "./src/routes/users.router.js";
import authRouter from "./src/routes/auth.router.js";

import { auth } from "./src/middlewares/auth.middleware.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Servidor funcionando correctamente",
  });
});

app.use("/api/products", productsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/users", usersRouter);
app.use("/auth", authRouter);
app.use("/api/auth", authRouter);

app.get("/up", (req, res) => {
  res.json({
    status: "ok",
    message: "Servidor activo",
  });
});

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

export default app;
