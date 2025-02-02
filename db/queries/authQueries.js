import db from "../../db.js";

export const createUser = async (email, password, name, role, workshop_id) => {
  return await db("users")
    .insert({
      email,
      password,
      name,
      created_at: db.fn.now(),
      role,
      workshop_id,
    })
    .returning(["id", "email", "name", "created_at"]);
};

export const getUserByEmail = async (email) => {
  return await db("users")
    .select("id", "email", "password", "name", "created_at", "role")
    .where({ email })
    .first();
};
