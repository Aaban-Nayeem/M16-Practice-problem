//^ Marks of Mathematics
var math = 75.25;

//^ Marks of Biology
var biology = 65;

//^ Marks of Chemistry
var chemistry = 80;

//^ Marks of Physics
var physics = 35.45;

//^ Marks of Bangla
var bangla = 99.5;

//* The average mark of these subject
var average = (math + biology + chemistry + physics + bangla) / 5;

average = average.toFixed(2);

//* Print the result
console.log(average);
