export async function up(knex) {
  return knex.schema.createTable("articles", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.integer("quantity").defaultTo(0);
    table.decimal("price", 10, 2);
    table
      .integer("workshop_id")
      .unsigned()
      .references("id")
      .inTable("workshops_v2")
      .onDelete("CASCADE");
    table.boolean("is_deleted").defaultTo(false);
    table.timestamp("deleted_at").nullable();
    table.integer("deleted_by").nullable();
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex) {
  return knex.schema.dropTable("articles");
}
