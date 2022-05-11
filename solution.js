// write your code in this file

//Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold?

let costOfTicket = 15;
let totalRevenue = 6450;
let ticketsSold = totalRevenue / costOfTicket;
console.log(`Q1: ${ticketsSold} tickets are sold`);
//Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
let dollarsEarnedPerWeekBySylvia = 500;
let numberOfWeeksInYear = 52;
let yearlyIncome = dollarsEarnedPerWeekBySylvia * numberOfWeeksInYear;
console.log(`Q2: ${yearlyIncome} dollars are earned by Sylvia per year`);
//Calculate the percentage of 17/30. Expected output: "Q3: [number]%"
let theNumber = 30;
let thePercentage = 17 / 100;
let the17PercentOfNumber = theNumber * thePercentage;
console.log(`Q3: The 17% of 30 is: ${the17PercentOfNumber}`);
//Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.
let sideOfSquare = 4.75;
let perimeterOfSquare = sideOfSquare * 4;
console.log(
  `Q4: The parameter of a square with each side of ${perimeterOfSquare}cm`
);
/* Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm. */
let firstSideOfTriangle = 5;
let secondSideOfTriangle = 6;
let thirdSideOfTriangle = 7;
let parameterOfTriangle =
  firstSideOfTriangle + secondSideOfTriangle + thirdSideOfTriangle;

console.log(
  `Q5: The parameter of a triangle with sides of ${5}cm, ${6}cm and ${7}cm is: ${parameterOfTriangle}cm`
);

/* Q6. Calculate the area of a square. Each side is 5cm. */
let eachSideOfSquare = 5;
let areaOfSquare = eachSideOfSquare ** 2;

console.log(
  `Q6: The area of square with each side of ${5}cm is: ${areaOfSquare}`
);

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
let lengthOfEachSideOfCube = 9;
let volumeOfCube = lengthOfEachSideOfCube ** 3;

console.log(
  `Q8: The volume of a cube with each side of ${9}cm is:${volumeOfCube}`
);
/* Q9. Calculate the three bills including tips:
- €22.35 + 10% tip
- €26.67 + 15% tip
- €35.92 + 20% tip

Print all three results in one string to the console
 */

let initialFirstAmount = 22.35;
let firstTip = 0.1;
let firstBill = initialFirstAmount + initialFirstAmount * firstTip;

let initialSecondAmount = 26.67;
let secondTip = 0.15;
let secondBill = initialSecondAmount + initialSecondAmount * secondTip;
let initialThirdAmount = 35.92;
let thirdTip = 0.2;
let thirdBill = initialThirdAmount + initialThirdAmount * thirdTip;
console.log(
  `Q9: The first bill with €${22.35} + ${10}% tip is: ${firstBill}, The second bill with €${26.67} + ${15}% tip is: ${secondBill}, The third bill with €${35.62} + ${20}% tip is: ${thirdBill}`
);

/* Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
What is Noemy's average hours worked per day? */
let totalWorkingHours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
let totalWorkingDays = 10;
let averageHoursWorkedPerDay = totalWorkingHours / totalWorkingDays;

console.log(
  `Q10: Noemy's average hours worked per day are: ${averageHoursWorkedPerDay}`
);
/* Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
Expected output: "Q11: Score in the sixth test: --". */

let scoreOf5Tests = 75 + 70 + 85 + 90 + 100;
let averageOf6Tests = 85;
let numberOfTests = 6;
let scoreOf6thTest = averageOf6Tests * numberOfTests - scoreOf5Tests;

console.log(`Q11: Score in the sixth test:${scoreOf6thTest}`);

/* Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? 
Expected output: "Q12: James needs a minimum of --% to get an 80% average". */
let initialNumberOfAssessments = 8;
let averageOf8Assessments = 78;
let finalNumberOfAssessments = 9;
let averageOf9AssessmentsShouldBe = 80;
let percentageOf9thAssessment =
  finalNumberOfAssessments * averageOf9AssessmentsShouldBe -
  initialNumberOfAssessments * averageOf8Assessments;

console.log(
  `Q12: James needs a minimum of ${percentageOf9thAssessment}% to get an 80% average`
);
