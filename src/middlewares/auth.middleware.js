import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token no enviado" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Formato de token invalido" });
  }

  try {
    const secret = process.env.JWT_SECRET || "dev-secret";
    const decoded = jwt.verify(token, secret);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).json({ message: "Token invalido o expirado" });
  }
};
