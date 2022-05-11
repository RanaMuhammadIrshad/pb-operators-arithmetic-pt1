// write your code in this file

//Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold?
console.log(`Q1: ${6450 / 15} tickets are sold`);
//Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
console.log(`Q2: ${500 * 52} dollars are earned by Sylvia per year`);
//Calculate the percentage of 17/30. Expected output: "Q3: [number]%"
console.log(`Q3: The 17% of 30 is: ${30 * 0.17}`);
//Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.
console.log(
  `Q4: The parameter of a square with each side of ${4.75}cm is: ${4 * 4.75}cm`
);
/* Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm. */
console.log(
  `Q5: The parameter of a triangle with sides of ${5}cm, ${6}cm and ${7}cm is: ${
    5 + 6 + 7
  }cm`
);

/* Q6. Calculate the area of a square. Each side is 5cm. */

console.log(`Q6: The area of square with each side of ${5}cm is: ${5 ** 2}`);

/* Q7. Calculate the area of an [right-angled triangle](https://en.wikipedia.org/wiki/Right_triangle). Assume the length of the sides are 3cm, 4cm, 5cm. */

let horizontalLegOfRightAngleTriangle = 3;
let verticalLegOfRightAngleTriangle = 4;
let crossLegOfRightAngleTriangle = 5;
let areaOfRightAngleTriangle =
  (horizontalLegOfRightAngleTriangle * verticalLegOfRightAngleTriangle) / 2;
console.log(
  `Q7: The area of right-angle-triangle is: ${areaOfRightAngleTriangle}`
);
/* Q8. Calculate the volume of a cube. Length of each side is 9cm. */

console.log(`Q8: The volume of a cube with each side of ${9}cm is:${9 ** 3}`);
/* Q9. Calculate the three bills including tips:
- €22.35 + 10% tip
- €26.67 + 15% tip
- €35.92 + 20% tip

Print all three results in one string to the console
 */
console.log(
  `Q9: The first bill with €${22.35} + ${10}% tip is: ${
    22.35 + 22.35 * 0.1
  }, The second bill with €${26.67} + ${15}% tip is: ${
    26.67 + 26.67 * 0.15
  }, The third bill with €${35.62} + ${20}% tip is: ${35.92 + 35.92 * 0.2}`
);

/* Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
What is Noemy's average hours worked per day? */

console.log(
  `Q10: Noemy's average hours worked per day are: ${
    (8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4) / 10
  }`
);
/* Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
Expected output: "Q11: Score in the sixth test: --". */

console.log(
  `Q11: Score in the sixth test:${85 * 6 - (75 + 70 + 85 + 90 + 100)}`
);

/* Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? 
Expected output: "Q12: James needs a minimum of --% to get an 80% average". */

console.log(
  `Q12: James needs a minimum of ${80 * 8 - 78 * 7}% to get an 80% average`
);
