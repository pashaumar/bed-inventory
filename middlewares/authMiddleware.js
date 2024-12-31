import jwt from "jsonwebtoken";

const SECRET_KEY = "your-secret-key";

export const authenticate = (req) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new Error("Authorization header is missing");
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    throw new Error("Token is missing");
  }

  try {
    const payload = jwt.verify(token, SECRET_KEY);
    return payload;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};
