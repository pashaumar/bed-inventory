export async function up(knex) {
  return knex.schema.createTable("user_tokens", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.text("refresh_token").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("expires_at");
  });
}

export async function down(knex) {
  return knex.schema.dropTable("user_tokens");
}
