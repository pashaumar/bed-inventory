import db from "../dbClient.js";

export const createUser = async (email, password, name) => {
  return await db("users")
    .insert({
      email,
      password,
      name,
      created_at: db.fn.now(),
    })
    .returning(["id", "email", "name", "created_at"]);
};

export const getUserByEmail = async (email) => {
  return await db("users")
    .select("id", "email", "password", "name", "created_at")
    .where({ email })
    .first();
};
