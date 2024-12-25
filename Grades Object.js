class Grades {
  constructor() {
      this.grades = [];
  }

  // Method to add a grade
  addGrade(grade) {
      if (typeof grade === 'number' && grade >= 0 && grade <= 100) {
          this.grades.push(grade);
      } else {
          console.error('Invalid grade. Please enter a number between 0 and 100.');
      }
  }

  // Method to calculate and display the average grade
  calculateAverage() {
      if (this.grades.length === 0) {
          console.log('No grades available to calculate the average.');
          return null;
      }

      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      const average = sum / this.grades.length;
      console.log(`The average grade is: ${average.toFixed(2)}`);
      return average;
  }
}

// Example usage
const studentGrades = new Grades();
studentGrades.addGrade(85);
studentGrades.addGrade(90);
studentGrades.addGrade(78);
studentGrades.calculateAverage();
