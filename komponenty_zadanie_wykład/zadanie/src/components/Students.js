import React from "react";
import Card from "./Card";

const studentData = [
  {
    id: 1,
    name: "Urszula Rutkowska",
    address: "Białystok, ul.Słoneczna",
    group: "PS 7",
    scholarship: "Yes",
    grades: [5, 5, 5],
    index: "113506",
    dateOfBirth: "2003-11-04",
  }
];

function Students() {
  return (
    <div>
      {studentData.map((student) => (
        <Card key={student.id} student={student} />
      ))}
    </div>
  );
}

export default Students;
