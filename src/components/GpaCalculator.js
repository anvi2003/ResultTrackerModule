import React, { useState } from 'react';

function GpaCalculator() {
  const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState('');
  const [credits, setCredits] = useState('');
  const [marks, setMarks] = useState('');
  const [gpa, setGpa] = useState(null);

  const addSubject = () => {
    if (subjectName && credits && marks && subjects.length < 7) {
      const newSubject = { name: subjectName, credits: parseInt(credits), marks: parseFloat(marks) };
      setSubjects([...subjects, newSubject]);
      setSubjectName('');
      setCredits('');
      setMarks('');
    }
  };

  const calculateGpa = () => {
    if (subjects.length >= 6 && subjects.length <= 7) {
      const totalCredits = subjects.reduce((acc, subject) => acc + subject.credits, 0);
      let totalGradePoints = 0;
      subjects.forEach(subject => {
        totalGradePoints += gradeToGradePoint(calculateGrade(subject.marks)) * subject.credits;
      });
      const calculatedGpa = totalGradePoints / totalCredits;
      setGpa(calculatedGpa.toFixed(2));
    } else {
      alert("Please enter between 6 and 7 subjects.");
    }
  };

  const calculateGrade = (marks) => {
    if (marks >= 93) {
      return 'A+';
    } else if (marks >= 85) {
      return 'A';
    } else if (marks >= 77) {
      return 'B+';
    } else if (marks >= 69) {
      return 'B';
    } else if (marks >= 61) {
      return 'C+';
    } else if (marks >= 53) {
      return 'C';
    } else if (marks >= 45) {
      return 'D';
    } else {
      return 'F';
    }
  };

  const gradeToGradePoint = (grade) => {
    switch (grade) {
      case 'A+':
        return 10.0;
      case 'A':
        return 9.0;
      case 'B+':
        return 8.0;
      case 'B':
        return 7.0;
      case 'C+':
        return 6.0;
      case 'C':
        return 5.0;
      case 'D':
        return 4.0;
      case 'F':
        return 0.0;
      default:
        return 0.0;
    }
  };

  return (
    <div className='text-center'>
      <h2 className="font-bold my-6 text-2xl">GPA Calculator</h2>
      <div>
        <label htmlFor="subjectName">Subject Name:</label>
        <input className="ml-4 mr-4 border border-black p-2"
          type="text"
          id="subjectName"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
        />
        <label htmlFor="credits">Credits:</label>
        <input className="ml-4 mr-4 border border-black p-2"
          type="number"
          id="credits"
          value={credits}
          onChange={(e) => setCredits(e.target.value)}
        />
        <label htmlFor="marks">Marks (Out of 100):</label>
        <input className="ml-4 mr-4 border border-black p-2"
          type="number"
          id="marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        <button className="p-2 ml-7 rounded-md bg-black text-white shadow-lg" onClick={addSubject}>Add Subject</button>
      </div>
      <div>
        <h3 className='mt-5'>Subjects:</h3>
        <ul>
          {subjects.map((subject, index) => (
            <li key={index}>{subject.name} - Credits: {subject.credits}, Marks: {subject.marks}</li>
          ))}
        </ul>
      </div>
      <button className="p-2 mt-10 rounded-md bg-black text-white shadow-lg" onClick={calculateGpa}>Calculate GPA</button>
      {gpa !== null && <p>Your GPA is: {gpa}</p>}
    </div>
  );
}

export default GpaCalculator;
