const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

// for (const obj of ingredients) {
//   const listEl = document.createElement("li");
//   listEl.classList.add("item");
//   listEl.textContent = obj;
//   ingredientsEl.append(listEl);
// }

ingredients.map((vegetable) => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = vegetable;
  ingredientsEl.append(listEl);
});
