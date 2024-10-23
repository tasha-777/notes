import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './four.css';

function Four() {
  const location = useLocation();
  const navigate = useNavigate();
  const { branch, semester, courseType, userType } = location.state || { branch: 'Unknown', semester: 'Unknown', courseType: 'Unknown', userType: 'Unknown' };
  const subjects = ['Maths', 'Physics', 'Chemistry', 'Computer Science', 'Data Structures', 'Operating Systems', 'Electronics'];
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredSubjects = subjects.filter(subject =>
    subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubjectClick = (subject) => {
    navigate('/five', { state: { branch, semester, courseType, subject, userType } });
  };

  const handleHomeClick = () => {
    navigate('/second', { state: { branch, semester, userType } });
  };

  return (
    <div className="four-page">
      <div className="sidebar">
        <h1>RSET NOTES</h1>
        <button className="sidebar-btn" onClick={handleHomeClick}>
          <i className="fas fa-home"></i> HOME
        </button>
        <button className="sidebar-btn dark-mode-btn">
          <i className="fas fa-moon"></i> DARK MODE
        </button>
        <div className="branch-info">
          <h3>Branch: {branch}</h3>
          <h3>Semester: {semester}</h3>
          <h3>Course: {courseType}</h3>
          <h3>User Type: {userType}</h3>
        </div>
      </div>
      <div className="main-content">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Subjects..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="subject-list">
          {filteredSubjects.length > 0 ? (
            filteredSubjects.map((subject, index) => (
              <button
                key={index}
                className="subject-btn"
                onClick={() => handleSubjectClick(subject)}
              >
                {subject}
              </button>
            ))
          ) : (
            <p>No subjects found</p>
          )}
        </div>
      </div>
    </div>
  );
}

// Add this line to export the Four component as default
export default Four;
