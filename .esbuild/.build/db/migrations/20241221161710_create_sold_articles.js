export async function up(knex) {
  return knex.schema.createTable("sold_articles", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.decimal("price", 10, 2);
    table
      .integer("article_id")
      .unsigned()
      .references("id")
      .inTable("articles")
      .onDelete("CASCADE");
    table.integer("quantity_sold").notNullable();
    table
      .integer("workshop_id")
      .unsigned()
      .references("id")
      .inTable("workshops_v2")
      .onDelete("CASCADE");
    table.integer("updated_by").nullable();
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex) {
  return knex.schema.dropTable("sold_articles");
}
