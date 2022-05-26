products = [
  { name: 'Sonoma', ingredients: ['artichoke', 'sundried tomatoes', 'mushrooms'], containsNuts: false },
  { name: 'Pizza Primavera', ingredients: ['roma', 'sundried tomatoes', 'goats cheese', 'rosemary'], containsNuts: false },
  { name: 'South Of The Border', ingredients: ['black beans', 'jalapenos', 'mushrooms'], containsNuts: false },
  { name: 'Blue Moon', ingredients: ['blue cheese', 'garlic', 'walnuts'], containsNuts: true },
  { name: 'Taste Of Athens', ingredients: ['spinach', 'kalamata olives', 'sesame seeds'], containsNuts: true }
];
// it('should count the ingredient occurrence (functional)', function () {
  var ingredientCount = { '{ingredient name}': 0 };

  /* chain() together map(), flatten() and reduce() */
  _(products).chain()
    .map(function(products) { return products.ingredients; })
    .flatten()
    .reduce(function(prev, curr) {
      return ingredientCount[curr] = (products[curr] || 0) + 1;
    });

  // expect(ingredientCount['mushrooms']).toBe(1);
// });