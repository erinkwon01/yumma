import { mutation } from "./_generated/server";

export default mutation(async ({ db }, caption, difficulty, ingredients, name, steps, time, type, image) => {
  const recipe = { caption, difficulty, ingredients, name, steps, time, type, image };
  await db.insert("recipes", recipe);
});
