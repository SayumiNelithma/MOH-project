import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

function Addstudent() {
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
  const [emailError, setEmailError] = useState("");

  const resetForm = () => {
    setName("");
    setAge("");
    setAddress("");
    setDOB("");
    setGender("");
    setMail("");
    setNumber("");
    setHeight("");
    setWeight("");
    setBMI("");
    setStunting("");
    setWasting("");
    setOverweight("");
  };

  // Function to calculate BMI
  const calculateBMI = () => {
    if (weight && height) {
      const bmi = (weight / Math.pow(height, 2)).toFixed(2);
      setBMI(bmi);
    }
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setMail(value);
  };

  useEffect(() => {
    calculateBMI(); // Calculate BMI initially and whenever weight or height changes
  }, [weight, height]);

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const setData = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "gender":
        setGender(value);
        break;
      case "stunting":
        setStunting(value);
        break;
      case "wasting":
        setWasting(value);
        break;
      case "overweight":
        setOverweight(value);
        break;
      default:
        break;
    }

    // Log the selected radio button value to the console
    if (
      name === "gender" ||
      name === "stunting" ||
      name === "wasting" ||
      name === "overweight"
    ) {
      console.log(`Selected ${name}:`, value);
    }
  };

  const addStudData = () => {
    const data = {
      name,
      age,
      address,
      DOB,
      gender,
      mail,
      number,
      height,
      weight,
      BMI,
      stunting,
      wasting,
      overweight,
    };
    axios
      .post("http://localhost:8090/students", data)
      .then(() => {
        resetForm();
        Navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (DOB) {
      setAge(calculateAge(DOB)); // Calculate age when DOB changes
    }
  }, [DOB]);

  return (
    <div className="container mt-5">
      <Link className="btn btn-primary mb-5" to="/allstud">
        Home
      </Link>

      <h3 className="mt-5">Fill the Student details</h3>

      <div className="row">
        {/* First Column */}
        <div className="col">
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputdate1" className="form-label">
              DOB
            </label>
            <input
              type="date"
              className="form-control"
              id="exampleInputdate1"
              name="DOB"
              onChange={(e) => setDOB(e.target.value)}
              value={DOB}
              aria-describedby="dobHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputage1" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputage1"
              name="age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputaddress1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputaddress1"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              aria-describedby="addressHelp"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Stunting</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="stunting"
                id="stunting-yes"
                onChange={setData}
                value="yes"
                checked={stunting === "yes"}
              />
              <label className="form-check-label" htmlFor="stunting-yes">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="stunting"
                id="stunting-no"
                onChange={setData}
                value="no"
                checked={stunting === "no"}
              />
              <label className="form-check-label" htmlFor="stunting-no">
                No
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Wasting</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="wasting"
                id="wasting-yes"
                onChange={setData}
                value="yes"
                checked={wasting === "yes"}
              />
              <label className="form-check-label" htmlFor="wasting-yes">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="wasting"
                id="wasting-no"
                onChange={setData}
                value="no"
                checked={wasting === "no"}
              />
              <label className="form-check-label" htmlFor="wasting-no">
                No
              </label>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="col">
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={setData}
                checked={gender === "male"}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={setData}
                checked={gender === "female"}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className={`form-control ${emailError && "is-invalid"}`}
              id="exampleInputEmail1"
              name="email"
              onChange={handleEmailChange}
              value={mail}
              aria-describedby="emailHelp"
            />
            {emailError && (
              <div className="invalid-feedback">{emailError}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputcontact" className="form-label">
              Contact Number
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputcontact"
              name="contactnumber"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              aria-describedby="contactHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputheight" className="form-label">
              Height
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputheight"
              name="height"
              onChange={(e) => setHeight(e.target.value)}
              value={height}
              aria-describedby="heightHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputweight" className="form-label">
              Weight
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputweight"
              name="weight"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
              aria-describedby="weightHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputbmi" className="form-label">
              BMI
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputbmi"
              name="bmi"
              onChange={(e) => setBMI(e.target.value)}
              value={BMI}
              aria-describedby="bmiHelp"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Overweight</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="overweight"
                id="overweight-yes"
                onChange={setData}
                value="yes"
                checked={overweight === "yes"}
              />
              <label className="form-check-label" htmlFor="overweight-yes">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="overweight"
                id="overweight-no"
                onChange={setData}
                value="no"
                checked={overweight === "no"}
              />
              <label className="form-check-label" htmlFor="overweight-no">
                No
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>

      <button type="submit" className="btn btn-primary" onClick={addStudData}>
        Add Student
      </button>
    </div>
  );
}

export default Addstudent;