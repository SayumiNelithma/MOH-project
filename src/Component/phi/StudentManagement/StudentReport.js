import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function StudentReport() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8090/students")
      .then((response) => {
        setStudents(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:8090/students/${id}`);
      const response = await axios.get("http://localhost:8090/students");
      setStudents(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div><h1>Student Reports</h1></div>
      <div className="mt-5">
        {students.length ? (
          <ul className="list-group">
            {students.map((student) => (
              <li
                key={student._id}
                className="list-group-item d-flex justify-content-between align-items-center"
                style={{ backgroundColor: "palegoldenrod" }}
              >
                <div>
                  <strong>Name:</strong> {student.name}, <strong>DOB:</strong>{" "}
                  {student.DOB}, <strong>Age:</strong> {student.age},{" "}
                  <strong>Address:</strong> {student.address},{" "}
                  <strong>Gender:</strong> {student.gender},{" "}
                  <strong>Email:</strong> {student.mail},{" "}
                  <strong>Height:</strong> {student.height},{" "}
                  <strong>Weight:</strong> {student.weight},{" "}
                  <strong>BMI:</strong> {student.BMI},{" "}
                  <strong>Stunting:</strong> {student.stunting},{" "}
                  <strong>Wasting:</strong> {student.wasting},{" "}
                  <strong>Overweight:</strong> {student.overweight}
                </div>
                
              </li>
            ))}
          </ul>
        ) : (
          <div className="alert alert-info mt-3">
            No students found matching the search criteria.
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentReport;