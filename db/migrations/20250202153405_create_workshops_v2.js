export async function up(knex) {
  return knex.schema
    .createTable("workshops_v2", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
    })
    .then(() => {
      // Insert 3 predefined rows
      return knex("workshops_v2").insert([
        { name: "Muzahimiyah" },
        { name: "Faisaliyah" },
        { name: "Dammam" },
      ]);
    });
}

export async function down(knex) {
  return knex.schema.dropTable("workshops_v2");
}
