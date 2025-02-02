export async function up(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("name");
    table.string("role").notNullable();
    table.integer("workshop_id");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex) {
  return knex.schema.dropTable("users");
}
