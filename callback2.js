function assignGrade(percentage) {
    let grade;
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    console.log(`Percentage: ${percentage.toFixed(2)}%`);
    console.log(`Grade: ${grade}`);
}

function calculatePercentage(marks, callback) {
    let totalMarks = 0;
    
    for (let i = 0; i < marks.length; i++) {
        totalMarks += marks[i];
    }

    let percentage = (totalMarks / (marks.length * 100)) * 100;
    callback(percentage);
}

const studentMarks = [85, 92, 78, 88, 90]; 
calculatePercentage(studentMarks, assignGrade);
