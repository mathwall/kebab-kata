import { describe, expect, test } from "bun:test";
import { Kebab } from ".";

describe("Kebab is vegetarian", () => {
  test("salad only is vegetarian", () => {
    const kebab = new Kebab(["salade"]);
    expect(kebab.isVegetarian()).toBe(true);
  });
  test("several veggie ingredients is vegetarian", () => {
    const kebab = new Kebab(["salade", "tomate", "oignon"]);
    expect(kebab.isVegetarian()).toBe(true);
  });
  test("poulet is not vegetarian", () => {
    const kebab = new Kebab(["salade", "poulet"]);
    expect(kebab.isVegetarian()).toBe(false);
  });
  test("crevettes is not vegetarian", () => {
    const kebab = new Kebab(["crevette", "salade"]);
    expect(kebab.isVegetarian()).toBe(false);
  });
});

describe("Kebab is piscitarian", () => {
  test("salad only is piscitarian", () => {
    const kebab = new Kebab(["salade"]);
    expect(kebab.isPiscitarian()).toBe(true);
  });
  test("several veggie ingredients is piscitarian", () => {
    const kebab = new Kebab(["salade", "tomate", "oignon"]);
    expect(kebab.isPiscitarian()).toBe(true);
  });
  test("poulet is not piscitarian", () => {
    const kebab = new Kebab(["salade", "crevette", "poulet"]);
    expect(kebab.isPiscitarian()).toBe(false);
  });
  test("crevettes is piscitarian", () => {
    const kebab = new Kebab(["crevette", "salade"]);
    expect(kebab.isPiscitarian()).toBe(true);
  });
});

describe("remove oignon", () => {
  test("without oignon", () => {
    const kebab = new Kebab(["salade"]);
    expect(kebab.removeOnion().ingredients).toEqual(kebab.ingredients);
  });
  test("had oignon", () => {
    const kebab = new Kebab(["salade", "oignon"]);
    expect(kebab.removeOnion().ingredients).toEqual(["salade"]);
  });
  test("had 2 oignons", () => {
    const kebab = new Kebab(["crevette", "oignon", "salade", "oignon"]);
    expect(kebab.removeOnion().ingredients).toEqual(["crevette", "salade"]);
  });
});

describe("double cheese", () => {
  test("without cheese", () => {
    const kebab = new Kebab(["salade", "oignon"]);
    expect(kebab.doubleCheese().ingredients).toEqual(kebab.ingredients);
  });
  test("with cheese", () => {
    const kebab = new Kebab(["salade", "fromage", "oignon"]);
    expect(kebab.doubleCheese().ingredients).toEqual([
      "salade",
      "fromage",
      "fromage",
      "oignon",
    ]);
  });
  test("with a lot of cheese", () => {
    const kebab = new Kebab(["salade", "fromage", "fromage", "oignon"]);
    expect(kebab.doubleCheese().ingredients).toEqual([
      "salade",
      "fromage",
      "fromage",
      "fromage",
      "fromage",
      "oignon",
    ]);
  });
  test("with cheese and chicken", () => {
    const kebab = new Kebab([
      "salade",
      "fromage",
      "poulet",
      "fromage",
      "oignon",
    ]);
    expect(kebab.doubleCheese().ingredients).toEqual([
      "salade",
      "fromage",
      "fromage",
      "poulet",
      "fromage",
      "fromage",
      "oignon",
    ]);
  });
});

// manque une enum pour remplacer les string sur les ingrédients
// on ne gère pas les pluriels/fautes de frappe sur les ingrédients
