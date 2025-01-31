// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Cards from './Components/Cards';
import student1 from '../src/Images/fy_student.jpg';
import student2 from '../src/Images/second_year_stu.jpg';
import student3 from '../src/Images/third_year_stu.jpg';
import student4 from '../src/Images/fourth_year_stu.jpg';

const App = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header Component */}
      <Header />

      {/* Body Content */}
      <div className="body-content my-5">
        <Body />
      </div>

      {/* Cards Section */}
      <div className="d-flex justify-content-around flex-wrap my-5">
        <Cards
          year="First Year"
          academic="FIRST YEAR"
          student={student1}
          para="First-year students focus on adjusting to college life, learning foundational subjects, and exploring new interests while balancing academics and social life."
        />
        <Cards
          year="Second Year"
          academic="SECOND YEAR"
          student={student2}
          para="Second-year students dive into core subjects, participate in practical labs or projects, and start developing skills through clubs or extracurricular activities."
        />
        <Cards
          year="Third Year"
          academic="THIRD YEAR"
          student={student3}
          para="Third-year students tackle advanced topics, work on major projects, and begin preparing for internships, placements, or higher studies with a clearer career focus."
        />
        <Cards
          year="Fourth Year"
          academic="FOURTH YEAR"
          student={student4}
          para="Fourth-year students apply their knowledge through final projects or internships, actively prepare for post-graduation plans, and transition towards their careers."
        />
      </div>
      
    </div>
  );
};

export default App;
