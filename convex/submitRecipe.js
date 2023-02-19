import { mutation } from "./_generated/server";

export default mutation(async ({ db }, caption, difficulty, ingredients, name, steps, time, type) => {
  const recipe = { caption, difficulty, ingredients, name, steps, time, type };
  await db.insert("recipes", recipe);
});