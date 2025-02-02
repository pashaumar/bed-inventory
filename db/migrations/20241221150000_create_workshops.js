export async function up(knex) {
  return knex("workshops")
    .where({ name: "Workshop A" })
    .update({ name: "Muzahimiyah" })
    .then(() =>
      knex("workshops")
        .where({ name: "Workshop B" })
        .update({ name: "Faisaliyah" })
    )
    .then(() =>
      knex("workshops").where({ name: "Workshop C" }).update({ name: "Dammam" })
    );
}

export async function down(knex) {
  return knex("workshops")
    .where({ name: "Muzahimiyah" })
    .update({ name: "Workshop A" })
    .then(() =>
      knex("workshops")
        .where({ name: "Faisaliyah" })
        .update({ name: "Workshop B" })
    )
    .then(() =>
      knex("workshops").where({ name: "Dammam" }).update({ name: "Workshop C" })
    );
}
