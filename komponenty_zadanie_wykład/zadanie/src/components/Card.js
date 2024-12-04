import React from "react";
import Name from "./Name";
import Address from "./Address";
import Group from "./Group";
import Scholarship from "./Scholarship";
import Grades from "./Grades";
import Index from "./Index";
import DateOfBirth from "./DateOfBirth";

function Card({ student }) {
  return (
    <div className="card">
      <Name name={student.name} />
      <Address address={student.address} />
      <Group group={student.group} />
      <Scholarship scholarship={student.scholarship} />
      <Grades grades={student.grades} />
      <Index index={student.index} />
      <DateOfBirth dateOfBirth={student.dateOfBirth} />
    </div>
  );
}

export default Card;
