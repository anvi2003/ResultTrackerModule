import React, { useState } from 'react';


function CgpaCalculator() {
  const [semesters, setSemesters] = useState([]);
  const [currentSemester, setCurrentSemester] = useState('');
  const [currentGPA, setCurrentGPA] = useState('');
  const [cgpa, setCGPA] = useState(null);
  const [cgpaHistory, setCGPAHistory] = useState([]);

  const addSemester = () => {
    if (currentSemester && currentGPA) {
      setSemesters([...semesters, { semester: currentSemester, gpa: parseFloat(currentGPA) }]);
      setCurrentSemester('');
      setCurrentGPA('');
    }
  };

  const calculateCGPA = () => {
    if (semesters.length > 0) {
      const totalCredits = semesters.reduce((acc, semester) => acc + semester.gpa, 0);
      const averageCGPA = totalCredits / semesters.length;
      setCGPA(averageCGPA.toFixed(2));
      
    }
  };

  return (
    <div className='text-center'>
      <h1 className="font-bold my-6 text-2xl text-center ">CGPA Calculator</h1>
      <div>
        <label htmlFor="semester">Semester:</label>
        <input className=" ml-4 mr-4 border border-black p-2"
          type="text"
          id="semester"
          value={currentSemester}
          onChange={(e) => setCurrentSemester(e.target.value)}
        />
        <label htmlFor="gpa">GPA:</label>
        <input
          className="border border-black p-2 ml-4 mr-4"
          type="number"
          step="0.01"
          id="gpa"
          value={currentGPA}
          onChange={(e) => setCurrentGPA(e.target.value)}
        />
        <button className="p-2 ml-7 rounded-md bg-black
               text-white shadow-lg absolute" onClick={addSemester}>Add Semester</button>
      </div>
      <div className='text-center'>
        <h2 className='mt-5'>Semesters:</h2>
        <ul className='my-8 mt-5 '>
          {semesters.map((semester, index) => (
            <li key={index}>
              Semester {semester.semester}: GPA {semester.gpa}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <button className="p-2 mt-10 rounded-md bg-black text-white shadow-lg" onClick={calculateCGPA}>
    Calculate CGPA
  </button>
</div>

      {cgpa !== null && <h3 className=''>Your CGPA is: {cgpa}</h3>}
    </div>
  );
}

export default CgpaCalculator;


