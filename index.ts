const vegetarianIngredients = [
  "pain",
  "salade",
  "tomate",
  "oignon",
  "oeuf",
  "fromage",
];
const piscitarianIngredients = ["crevette", "poisson"];

export class Kebab {
  ingredients: string[];
  constructor(ingredients: string[]) {
    this.ingredients = ingredients;
  }
  isVegetarian = (): boolean => {
    for (const ingredient of this.ingredients) {
      if (!vegetarianIngredients.includes(ingredient)) {
        return false;
      }
    }
    return true;
  };
  isPiscitarian = (): boolean => {
    return this.ingredients.every(
      (ingredient) =>
        vegetarianIngredients.includes(ingredient) ||
        piscitarianIngredients.includes(ingredient)
    );
  };
  removeOnion = (): Kebab => {
    return new Kebab(this.ingredients.filter((i) => i !== "oignon"));
  };

  doubleCheese = (): Kebab => {
    const newIngredients = this.ingredients.flatMap((i) =>
      i === "fromage" ? [i, i] : i
    );
    return new Kebab(newIngredients);
  };
}
