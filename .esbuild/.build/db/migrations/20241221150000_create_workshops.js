export async function up(knex) {
  return knex.schema
    .createTable("workshops", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
    })
    .then(() => {
      // Insert 3 predefined rows
      return knex("workshops").insert([
        { name: "Workshop A" },
        { name: "Workshop B" },
        { name: "Workshop C" },
      ]);
    });
}

export async function down(knex) {
  return knex.schema.dropTable("workshops");
}
