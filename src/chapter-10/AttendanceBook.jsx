import React from "react";

const students = [
  {
    id: 0,
    name: "재홍 01",
  },
  {
    id: 1,
    name: "재홍 02",
  },
  {
    id: 2,
    name: "재홍 03",
  },
  {
    id: 3,
    name: "재홍 04",
  },
];

const AttendanceBook = (props) => {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
};

export default AttendanceBook;
