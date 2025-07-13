// js/main.ts

// 1. Define the interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: 'Alice',
  lastName: 'Doe',
  age: 21,
  location: 'Nairobi',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 25,
  location: 'Addis Ababa',
};

// 3. Add them to an array
const studentsList: Student[] = [student1, student2];

// 4. Render a table to the document
const table = document.createElement('table');
const header = table.insertRow();
header.innerHTML = '<th>First Name</th><th>Location</th>';

studentsList.forEach((student) => {
  const row = table.insertRow();
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
});

document.body.appendChild(table);

