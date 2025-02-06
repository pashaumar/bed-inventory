import db from "../../db.js";

export const getAllTransferredArticles = async (search) => {
  const query = db("transferred_articles").select("*");

  if (search) {
    query.whereIn("article_id", function () {
      this.select("id").from("articles").where("name", "ILIKE", `%${search}%`);
    });
  }

  return await query;
};

export const addTransferredArticle = async (
  article_id,
  transferred_from,
  transferred_to,
  quantity,
  name
) => {
  // Deduct quantity from source workshop
  await db("articles")
    .where({ id: article_id, workshop_id: transferred_from })
    .update({ quantity: db.raw("quantity - ?", [quantity]) });

  const article = await db("articles").where({ id: article_id });

  const { price } = article[0];

  // Add quantity to destination workshop
  await db("articles").insert({
    name,
    price,
    quantity,
    workshop_id: transferred_to,
  });

  // Insert into transferred_articles table
  return await db("transferred_articles")
    .insert({
      transferred_from,
      transferred_to,
      quantity,
      name,
    })
    .returning("*");
};

export const updateTransferredArticle = async (id, quantity) => {
  return await db("transferred_articles")
    .update({
      quantity,
      updated_at: db.fn.now(),
    })
    .where({ id })
    .returning("*");
};
