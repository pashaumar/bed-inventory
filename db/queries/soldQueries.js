import db from "../dbClient.js";

export const getAllSoldArticles = async (search, workshop_id) => {
  const query = db("sold_articles").select("*");

  if (search) {
    query.whereIn("article_id", function () {
      this.select("id").from("articles").where("name", "ILIKE", `%${search}%`);
    });
  }

  if (workshop_id) {
    query.andWhere({ workshop_id });
  }

  return await query;
};

export const addSoldArticle = async (
  article_id,
  quantity_sold,
  workshop_id,
  name
) => {
  // Deduct quantity from articles
  await db("articles")
    .where({ id: article_id })
    .andWhere("quantity", ">=", quantity_sold)
    .update({ quantity: db.raw("quantity - ?", [quantity_sold]) });

  return await db("sold_articles")
    .insert({
      name,
      article_id,
      quantity_sold,
      workshop_id,
    })
    .returning("*");
};

export const updateSoldArticle = async (id, quantity_sold) => {
  return await db("sold_articles")
    .update({
      quantity_sold,
      updated_at: db.fn.now(),
    })
    .where({ id })
    .returning("*");
};

export const deleteSoldArticle = async (id) => {
  return await db("sold_articles").where({ id }).del().returning("*");
};
