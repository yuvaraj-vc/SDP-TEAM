import React from 'react';

const sampleTimetable = [
    {
      day: 'Monday',
      time: '9:00 AM - 10:00 AM',
      course: 'Introduction to Computer Science',
      room: 'Room A101',
    },
    {
      day: 'Monday',
      time: '10:00 AM - 11:00 AM',
      course: 'Data Structures',
      room: 'Room B202',
    },
    {
      day: 'Tuesday',
      time: '11:00 AM - 12:00 PM',
      course: 'Algorithms',
      room: 'Room C303',
    },
    {
      day: 'Wednesday',
      time: '1:00 PM - 2:00 PM',
      course: 'Operating Systems',
      room: 'Room D404',
    },
    {
      day: 'Thursday',
      time: '2:00 PM - 3:00 PM',
      course: 'Computer Networks',
      room: 'Room E505',
    },
    {
      day: 'Friday',
      time: '3:00 PM - 4:00 PM',
      course: 'Database Systems',
      room: 'Room F606',
    },
  ];

const Usertimetable = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Timetable</h2>
      <div className="grid grid-cols-4 gap-4 text-center font-semibold">
        <div>Day</div>
        <div>Time</div>
        <div>Course</div>
        <div>Room</div>
      </div>
      {sampleTimetable.map((entry, index) => (
        <div key={index} className="grid grid-cols-4 gap-4 text-center border-b border-gray-200 py-2">
          <div>{entry.day}</div>
          <div>{entry.time}</div>
          <div>{entry.course}</div>
          <div>{entry.room}</div>
        </div>
      ))}
    </div>
  );
};

export default Usertimetable;
