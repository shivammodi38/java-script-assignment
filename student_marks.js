// 1.Student detail for marks
let names = "Rahul kumar";
let rollNo = 101;
let department = "Computer Science";
//2.task
let marks = [78, 85, 62, 91, 34];

// 3. Total marks
function calculateTotal(marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  return total;
}

// 4. Percentage (5 subjects, each out of 100)

function calculatePercentage(marks) {
  let total = calculateTotal(marks);
  let percentage = total / 5;

  return percentage;
}

// 5. Highast mark
function find_Highest(marks) {
  return Math.max(...marks);
}

// 6. Lowest mark
function find_Lowest(marks) {
  return Math.min(...marks);
}

// 7. Subjects with 40 or more marks
function countPassed(marks) {
  let passed = 0;

  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 40) {
      passed = passed + 1;
    }
  }

  return passed;
}
//8.upper case 

names=names.toUpperCase()
nameupper=names.length;


//9. performance based on marks
function getPerformance(marks) {
  let percentage = calculatePercentage(marks);

  if (percentage >= 85) {
    return "Excellent";
  } else if (percentage >= 60) {
    return "Good";
  } else if (percentage >= 40) {
    return "Average";
  } else {
    return "you need Improvement";
  }
}


// Final report
console.log("Student:- " + names); 
console.log("Roll Number:- " + rollNo);
console.log("Department:- " + department);
console.log("Total Marks:- " + calculateTotal(marks));
console.log("Percentage:-"  +  calculatePercentage(marks) + "%");
console.log("Highast Marks:-  " + find_Highest(marks));
console.log("Lowest Marks:- " + find_Lowest(marks));
console.log("Subjects Passed:- " + countPassed(marks));
console.log("name in uppercase:-"+ nameupper)
console.log("Performance:- " + getPerformance(marks));