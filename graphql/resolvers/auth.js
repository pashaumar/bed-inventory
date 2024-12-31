import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createUser, getUserByEmail } from "../../db/queries/authQueries.js";

const SECRET_KEY = "your-secret-key"; // Use environment variables in production

export const auth = {
  Mutation: {
    signUp: async (_, { input: { email, password, name } }) => {
      // Check if the user already exists
      const existingUser = await getUserByEmail(email);
      if (existingUser) {
        throw new Error("User already exists with this email");
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create the user
      const response = (await createUser(email, hashedPassword, name)) || [];

      const user = response[0];

      return user;
    },

    login: async (_, { input: { email, password } }) => {
      // Check if the user exists
      const user = await getUserByEmail(email);
      if (!user) {
        throw new Error("Invalid email or password");
      }

      // Verify the password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error("Invalid email or password");
      }

      // Generate a JWT token
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        SECRET_KEY,
        { expiresIn: "7d" }
      );

      return { user, token };
    },
  },
};
