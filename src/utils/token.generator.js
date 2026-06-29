import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

export const generateToken = (userData) => {
  const payload = {
    id: userData.id,
  };

  const secret = process.env.JWT_SECRET || "dev-secret";

  return jwt.sign(payload, secret, { expiresIn: "1h" });
};
