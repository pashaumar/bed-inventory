import db from "../../db.js";

export const getAllArticles = async (search, workshop_id) => {
  const query = db("articles").select("*").where({ is_deleted: false });

  if (search) {
    query.andWhere("name", "ILIKE", `%${search}%`);
  }

  if (workshop_id) {
    query.andWhere({ workshop_id });
  }

  const result = await query;

  return await query;
};
export const getAllWorkshops = async () => {
  const query = await db("workshops").select("*");

  return query;
};

export const getSingleArticle = async (id) => {
  return await db("articles").select("*").where({ id, is_deleted: false });
};

export const addArticle = async ({ name, price, quantity, workshop_id }) => {
  console.log({ name, price, quantity, workshop_id });
  return await db("articles")
    .insert({ name, price, quantity, workshop_id })
    .returning("*");
};

export const updateArticle = async ({
  id,
  name,
  price,
  quantity,
  workshop_id,
}) => {
  const updateFields = {};

  if (name) updateFields.name = name;
  if (price) updateFields.price = price;
  if (quantity) updateFields.quantity = quantity;
  if (workshop_id) updateFields.workshop_id = workshop_id;

  if (Object.keys(updateFields).length === 0) {
    throw new Error("No fields to update");
  }

  updateFields.updated_at = db.fn.now();

  return await db("articles").update(updateFields).where({ id }).returning("*");
};

export const deleteArticle = async (id) => {
  return await db("articles")
    .update({ is_deleted: true, deleted_at: db.fn.now() })
    .where({ id })
    .returning("*");
};
