"use strict";
// Lesson 108, 109

// The nullish Coalescing Operator (??)

// Logical Assignment Operators

const rest1 = {
  name: "Capri",
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// OR assignment operator

// rest2.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
rest2.owner = rest2.owner && "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);
