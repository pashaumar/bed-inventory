export async function up(knex) {
  return knex.schema.createTable("transferred_articles", (table) => {
    table.increments("id").primary(); // Primary key
    table.string("name").notNullable(); // Article name
    table.integer("quantity").unsigned().notNullable(); // Quantity transferred
    table.integer("transferred_from").unsigned().notNullable(); // Source workshop ID
    table.integer("transferred_to").unsigned().notNullable(); // Destination workshop ID
    table.timestamp("updated_at").defaultTo(knex.fn.now()); // Timestamp for updates
  });
}

export async function down(knex) {
  return knex.schema.dropTable("transferred_articles");
}
