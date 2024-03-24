import React, { useState } from 'react';
import "./index.css";

const App = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const dob = new Date(birthDate);
    const currentDate = new Date();
    
    let ageYears = currentDate.getFullYear() - dob.getFullYear();

    if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
      ageYears--;
    }

    let ageMonths = currentDate.getMonth() - dob.getMonth();
    let ageDays = currentDate.getDate() - dob.getDate();

    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    const totalAge = `${ageYears}Y ${ageMonths}M ${ageDays}D`;
    setAge(totalAge);
  };

  return (
    <div className='card'>
      <div className='clender'>
        <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
      </div>
      <div className='totalAge'>
        <button onClick={calculateAge}>Calculate age</button>
      </div>
      <p>Your age is: {age}</p>
    </div>
  );
};

export default App;
