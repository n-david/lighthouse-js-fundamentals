var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:

var i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

for (var j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j]);
}

var k = ingredients.length - 1;
while (k >= 0) {
  console.log(ingredients[k]);
  k--;
}
