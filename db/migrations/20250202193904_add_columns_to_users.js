export async function up(knex) {
  return knex.schema.alterTable("users", (table) => {
    table.string("role").notNullable();
    table.integer("workshop_id");
  });
}

export async function down(knex) {
  return knex.schema.alterTable("users", (table) => {
    table.dropColumn("role");
    table.dropColumn("workshop_id");
  });
}
