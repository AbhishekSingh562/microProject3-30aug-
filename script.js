const foodOriginalData = [
  {
    id: 1,
    foodname: "Apple",
    calorie: 95,
    category: "Fruit",
    protiens: 0.3,
    cab: 25,
  },
  {
    id: 2,
    foodname: "Banana",
    calorie: 105,
    category: "Fruit",
    protiens: 1.3,
    cab: 27,
  },
  {
    id: 3,
    foodname: "Orange",
    calorie: 62,
    category: "Fruit",
    protiens: 1.2,
    cab: 15,
  },
  {
    id: 4,
    foodname: "Pear",
    calorie: 95,
    category: "Fruit",
    protiens: 0.5,
    cab: 25,
  },
  {
    id: 5,
    foodname: "Grapefruit",
    calorie: 42,
    category: "Fruit",
    protiens: 1.1,
    cab: 11,
  },
  {
    id: 6,
    foodname: "Strawberry",
    calorie: 46,
    category: "Fruit",
    protiens: 1.5,
    cab: 10,
  },
  {
    id: 7,
    foodname: "Blueberry",
    calorie: 52,
    category: "Fruit",
    protiens: 1.1,
    cab: 14,
  },
  {
    id: 8,
    foodname: "Raspberry",
    calorie: 52,
    category: "Fruit",
    protiens: 1.4,
    cab: 15,
  },
  {
    id: 9,
    foodname: "Broccoli",
    calorie: 34,
    category: "Vegetable",
    protiens: 3.3,
    cab: 5,
  },
  {
    id: 10,
    foodname: "Cauliflower",
    calorie: 25,
    category: "Vegetable",
    protiens: 2.6,
    cab: 5,
  },
  {
    id: 11,
    foodname: "Green Beans",
    calorie: 31,
    category: "Vegetable",
    protiens: 2.4,
    cab: 4,
  },
  {
    id: 12,
    foodname: "Asparagus",
    calorie: 20,
    category: "Vegetable",
    protiens: 2.2,
    cab: 2,
  },
  {
    id: 13,
    foodname: "Spinach",
    calorie: 23,
    category: "Vegetable",
    protiens: 3.5,
    cab: 4,
  },
  {
    id: 14,
    foodname: "Kale",
    calorie: 33,
    category: "Vegetable",
    protiens: 4.3,
    cab: 7,
  },
  {
    id: 15,
    foodname: "Sweet Potato",
    calorie: 103,
    category: "Vegetable",
    protiens: 2,
    cab: 27,
  },
  {
    id: 16,
    foodname: "Potato",
    calorie: 161,
    category: "Vegetable",
    protiens: 4.3,
    cab: 37,
  },
  {
    id: 17,
    foodname: "Carrot",
    calorie: 41,
    category: "Vegetable",
    protiens: 0.9,
    cab: 9,
  },
  {
    id: 18,
    foodname: "Onion",
    calorie: 40,
    category: "Vegetable",
    protiens: 1.4,
    cab: 9,
  },
  {
    id: 19,
    foodname: "Egg",
    calorie: 77,
    category: "Protein",
    protiens: 6.3,
    cab: 0.5,
  },
  {
    id: 20,
    foodname: "Chicken Breast",
    calorie: 165,
    category: "Protein",
    protiens: 31,
    cab: 0,
  },
  {
    id: 21,
    foodname: "Salmon",
    calorie: 206,
    category: "Protein",
    protiens: 22,
    cab: 0,
  },
  {
    id: 22,
    foodname: "Tuna",
    calorie: 179,
    category: "Protein",
    protiens: 39,
    cab: 0,
  },
  {
    id: 23,
    foodname: "Beef",
    calorie: 250,
    category: "Protein",
    protiens: 26,
    cab: 0,
  },
  {
    id: 24,
    foodname: "Pork",
    calorie: 242,
    category: "Protein",
    protiens: 26,
    cab: 0,
  },
  {
    id: 25,
    foodname: "Lamb",
    calorie: 294,
    category: "Protein",
    protiens: 25,
    cab: 0,
  },
  {
    id: 26,
    foodname: "Shrimp",
    calorie: 85,
    category: "Protein",
    protiens: 20,
    cab: 0.2,
  },
  {
    id: 27,
    foodname: "Quinoa",
    calorie: 120,
    category: "Grain",
    protiens: 4.4,
    cab: 21,
  },
  {
    id: 28,
    foodname: "Brown Rice",
    calorie: 216,
    category: "Grain",
    protiens: 4.5,
    cab: 45,
  },
  {
    id: 29,
    foodname: "Oats",
    calorie: 389,
    category: "Grain",
    protiens: 16.9,
    cab: 66,
  },
  {
    id: 30,
    foodname: "Quinoa",
    calorie: 120,
    category: "Grain",
    protiens: 4.4,
    cab: 21,
  },
  {
    id: 31,
    foodname: "Bread",
    calorie: 265,
    category: "Grain",
    protiens: 9.4,
    cab: 49,
  },
  {
    id: 32,
    foodname: "Pasta",
    calorie: 131,
    category: "Grain",
    protiens: 5.5,
    cab: 26,
  },
  {
    id: 33,
    foodname: "Milk",
    calorie: 60,
    category: "Dairy",
    protiens: 3.2,
    cab: 5.1,
  },
  {
    id: 34,
    foodname: "Cheese",
    calorie: 402,
    category: "Dairy",
    protiens: 25,
    cab: 2.4,
  },
  {
    id: 35,
    foodname: "Yogurt",
    calorie: 59,
    category: "Dairy",
    protiens: 3.5,
    cab: 5,
  },
  {
    id: 36,
    foodname: "Butter",
    calorie: 717,
    category: "Dairy",
    protiens: 0.9,
    cab: 0.1,
  },
  {
    id: 37,
    foodname: "Almonds",
    calorie: 579,
    category: "Nuts",
    protiens: 21,
    cab: 22,
  },
  {
    id: 38,
    foodname: "Walnuts",
    calorie: 654,
    category: "Nuts",
    protiens: 15,
    cab: 14,
  },
  {
    id: 39,
    foodname: "Peanuts",
    calorie: 567,
    category: "Nuts",
    protiens: 26,
    cab: 16,
  },
  {
    id: 40,
    foodname: "Cashews",
    calorie: 553,
    category: "Nuts",
    protiens: 18,
    cab: 30,
  },
];

//q1-list all the food items
console.log("q1");
function listAllFoodItems(data) {
  const foodItems = data.map((item) => item.foodname);
  return foodItems;
}
const allFoodItems = listAllFoodItems(foodOriginalData);
console.log(allFoodItems);

//q2-list all the food items with category vegetables
console.log("q2");
function listVegetableFoodItems(data) {
  const vegetableFoodItems = data.filter(
    (item) => item.category === "Vegetable"
  );
  return vegetableFoodItems;
}

const vegetableItems = listVegetableFoodItems(foodOriginalData);
console.log(vegetableItems);

//q3-list all the food items with category fruit
console.log("q3");
function listFruitFoodItems(data) {
  const fruitFoodItems = data.filter((item) => item.category === "Fruit");
  return fruitFoodItems;
}
const fruitItems = listFruitFoodItems(foodOriginalData);
console.log(fruitItems);

//q4-list all the food items with category protien
console.log("q4");
function listProteinFoodItems(data) {
  const proteinFoodItems = data.filter((item) => item.category === "Protein");
  return proteinFoodItems;
}
const proteinItems = listProteinFoodItems(foodOriginalData);
console.log(proteinItems);

//q5-list all the food items with category nuts
console.log("q5");
function listNutsFoodItems(data) {
  const nutsFoodItems = data.filter((item) => item.category === "Nuts");
  return nutsFoodItems;
}

const nutsItems = listNutsFoodItems(foodOriginalData);
console.log(nutsItems);

//q6-list all the food items with category grains
console.log("q6");
function listGrainFoodItems(data) {
  const grainFoodItems = data.filter((item) => item.category === "Grain");
  return grainFoodItems;
}
const grainItems = listGrainFoodItems(foodOriginalData);
console.log(grainItems);

//q7-list all the food items with category dairy
console.log("q7");
function listDairyFoodItems(data) {
  const dairyFoodItems = data.filter((item) => item.category === "Dairy");
  return dairyFoodItems;
}
const dairyItems = listDairyFoodItems(foodOriginalData);
console.log(dairyItems);

//q8-list all the food items with calorie above 100
console.log("q8");
function listFoodItemsAboveCalorie(data, calorieThreshold) {
  const foodItemsAboveCalorie = data.filter(
    (item) => item.calorie > calorieThreshold
  );
  return foodItemsAboveCalorie;
}

const calorieThreshold = 100;
const foodItemsAboveCalorie = listFoodItemsAboveCalorie(
  foodOriginalData,
  calorieThreshold
);
console.log(foodItemsAboveCalorie);

//q9-ist all the food items with calorie below 100
console.log("q9");
function listFoodItemsBelowCalorie(data, calorieThreshold1) {
  const foodItemsBelowCalorie = data.filter(
    (item) => item.calorie < calorieThreshold1
  );
  return foodItemsBelowCalorie;
}

const calorieThreshold1 = 100;
const foodItemsBelowCalorie = listFoodItemsBelowCalorie(
  foodOriginalData,
  calorieThreshold1
);
console.log(foodItemsBelowCalorie);

//q10-list all the food items with highest protien content to lowest
console.log("q10");
function listFoodItemsByProtein(data) {
  const foodItemsByProtein = data
    .slice()
    .sort((a, b) => b.protiens - a.protiens);
  return foodItemsByProtein;
}
const foodItemsByProtein = listFoodItemsByProtein(foodOriginalData);
console.log(foodItemsByProtein);

//q11-list all the food items with lowest cab content to highest
console.log("q11");
function listFoodItemsByCarbohydrates(data) {
  const foodItemsByCarbohydrates = data.slice().sort((a, b) => a.cab - b.cab);
  return foodItemsByCarbohydrates;
}

const foodItemsByCarbohydrates = listFoodItemsByCarbohydrates(foodOriginalData);
console.log(foodItemsByCarbohydrates);
