import React, { useEffect, useState } from 'react';
import axios from "axios";
import Header from '../Header';
import Sidebar from '../Sidebar';
import '../indexMidwife.css';

function Allbabies() {
  const [babydetails, setBaby] = useState([]);

  useEffect(() => {
    function getBaby() {
      axios.get('http://localhost:8090/babydetails/')
        .then((res) => {
          console.log(res);
          setBaby(res.data);
        })
        .catch((err) => {
          console.error(err);
          alert(err.message);
        });
    }
    getBaby();
  }, []);

  // Function to handle deletion of a staff member
  const onDeleteClick = async (userId) => {
    try {
      await axios.delete(`http://localhost:8090/babydetails/deletebaby/${userId}`)
        .then(() => {
          alert('Baby Deleted Successfully');
          window.location.href = "/allbaby";
        });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div className='dashBaby'><h1 className="h2">Dashboard</h1></div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <a href="/addbaby" className="btn btn-sm btn-outline-secondary">+ New Baby</a>
          </div>
        </div>
      </div>

      <div className="AllTable table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Weight</th>
              <th scope="col">Height</th>
              <th scope="col">Blood Type</th>
              <th scope="col">Allergies</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col" className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {babydetails.map((babydetails, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td>{babydetails.Name}</td>
                  <td>{babydetails.Gender}</td>
                  <td>{babydetails.Weight}</td>
                  <td>{babydetails.Height}</td>
                  <td>{babydetails.BloodType}</td>
                  <td>{babydetails.Allergies}</td>
                  <td>{babydetails.date}</td>
                  <td>{babydetails.phone}</td>
                  <td>{babydetails.Email}</td>
                  <td>{babydetails.Address}</td>
                  <td className="text-end">
                    <div className="d-flex flex-row justify-content-end gap-2">
                      <a href={`/viewbaby/${babydetails._id}`} className="btn btn-primary btn-small" alt="View">
                        <i className="bi bi-eye"></i>
                      </a>
                      <a href={`/editbaby/${babydetails._id}`} className="btn btn-warning btn-small">
                        <i className="bi bi-pencil"></i>
                      </a>
                      <form className="position-relative">
                        <a href={`/deletebaby/${babydetails._id}`}>
                          <button onClick={() => onDeleteClick(babydetails._id)} type="button" className="btn btn-danger btn-small">
                            <i className="bi bi-person-x"></i>
                          </button>
                        </a>
                      </form>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Allbabies;
