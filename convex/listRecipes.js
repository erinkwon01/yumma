import { query } from "./_generated/server";

export default query(async ({ db }, cuisine) => {
  let querySoFar = db.query("recipes");
  if (cuisine) querySoFar = querySoFar.filter(q => q.eq(cuisine, q.field("type")))
  const recipes = await querySoFar.collect();
  return recipes;
});
