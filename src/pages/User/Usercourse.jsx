import React, { useState, useEffect } from 'react';

const Usercourses = ({ facultyName }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchedCourses = [
      { id: 1, name: 'Introduction to c++' },
      { id: 2, name: 'Operating Systems' },
      { id: 3, name: 'Advanced Java' },
      { id: 4, name: 'Physical Science' },
    ];
    setCourses(fetchedCourses);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">Assigned Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-slate-800">{course.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Usercourses;
