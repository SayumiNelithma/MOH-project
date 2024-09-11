import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import DMsideNav from "../DiseaseManagement/DMNav/DMsideNav";
import HeaderPHI from "../DiseaseManagement/Header/Header";
function ViewStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [BMI, setBMI] = useState("");
  const [stunting, setStunting] = useState("");
  const [wasting, setWasting] = useState("");
  const [overweight, setOverweight] = useState("");
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8090/students/${id}`)
      .then((response) => {
        const data = response.data;
        setName(data.name);
        setAge(data.age);
        setAddress(data.address);
        setDOB(data.DOB);
        setGender(data.gender);
        setMail(data.mail);
        setNumber(data.number);
        setHeight(data.height);
        setWeight(data.weight);
        setBMI(data.BMI);
        setStunting(data.stunting);
        setWasting(data.wasting);
        setOverweight(data.overweight);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError("Error retrieving student data");
      });
  }, [id]);

  if (error) {
    return <div className="container mt-5">Error: {error}</div>;
  }

  return (
    <>
                <HeaderPHI />
        <DMsideNav />
        <div style={{ marginLeft: "300px" }}>
    <div className="container mt-5">
      <Link className="btn btn-primary mb-5" to="/">
        Home
      </Link>
      <div
        className="container mt-5"
        style={{
          border: "2px solid black",
          backgroundColor: "yellow",
          padding: "20px",
        }}
      >
        <h3>View Student Details</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>Name: {name}</li>
          <li style={{ marginBottom: "10px" }}>Age: {age}</li>
          <li style={{ marginBottom: "10px" }}>Address: {address}</li>
          <li style={{ marginBottom: "10px" }}>DOB: {DOB}</li>
          <li style={{ marginBottom: "10px" }}>Gender: {gender}</li>
          <li style={{ marginBottom: "10px" }}>Email: {mail}</li>
          <li style={{ marginBottom: "10px" }}>Contact Number: {number}</li>
          <li style={{ marginBottom: "10px" }}>Height: {height}</li>
          <li style={{ marginBottom: "10px" }}>Weight: {weight}</li>
          <li style={{ marginBottom: "10px" }}>BMI: {BMI}</li>
          <li style={{ marginBottom: "10px" }}>Stunting: {stunting}</li>
          <li style={{ marginBottom: "10px" }}>Wasting: {wasting}</li>
          <li style={{ marginBottom: "10px" }}>Overweight: {overweight}</li>
        </ul>
      </div>
    </div>
    </div></>
  );
}

export default ViewStudent;
