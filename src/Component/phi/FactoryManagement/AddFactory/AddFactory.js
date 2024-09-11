import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './main.css'
import HeaderPHI from '../../DiseaseManagement/Header/Header'
import DMsideNav from '../../DiseaseManagement/DMNav/DMsideNav'
function AddFactory() {
    const [ownername, setOwnername] = useState("");
    const [number, setNumber] = useState("");
    const [nic, setNic] = useState("");
    const [owneraddress, setOwneraddress] = useState("");
    const [hotelname, setHotelname] = useState("");
    const [hoteladdress, setHoteladdress] = useState("");
    const [Date, setDate] = useState("");
    const [workers, setWorkers] = useState("");
    // const [email, setEmail] = useState("");

    async function sendData(e) {
        // alert('insert')
        e.preventDefault();

        const newFactory = {
            ownername,
            number,
            nic,
            owneraddress,
            hotelname,
            hoteladdress,
            Date,
            workers
            // email,
        };

        console.log(newFactory)

        axios.post("http://localhost:8090/factory/add", newFactory)
            // axios.post('http://localhost:8090/factory/add')
            .then(() => {
                alert("Factory added successfully");
                window.location.replace("/factory/display")
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <>
        <HeaderPHI />
        <DMsideNav />
        <div style={{ marginLeft: "300px" }}>
        <form onSubmit={sendData}>
            <div className="row form-group mb-4">
                <div className="col">
                    <label htmlFor="ownername">Owner Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="ownername"
                        name="ownername"
                        placeholder="Owner Name"
                        value={ownername}
                        onChange={(e) => setOwnername(e.target.value)}
                        required
                    />
                </div>
                <div className="col">
                    <label htmlFor="number">Contact Number:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="number"
                        name="number"
                        placeholder="Contact Number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="row form-group mb-4">
                <div className="col">
                    <label htmlFor="workers">workers:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="workers"
                        name="nic"
                        placeholder="NIC"
                        value={workers}
                        onChange={(e) => setWorkers(e.target.value)}
                        required
                    />
                </div>   </div>

            <div className="row form-group mb-4">
                <div className="col">
                    <label htmlFor="nic">NIC:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nic"
                        name="nic"
                        placeholder="NIC"
                        value={nic}
                        onChange={(e) => setNic(e.target.value)}
                        required
                    />
                </div>   </div>

            <div className="row form-group mb-4">
                <div className="col">
                    <label htmlFor="Date">date:</label>
                    <input
                        type="Date"
                        className="form-control"
                        id="Date"
                        name="Date"
                        placeholder="Date"
                        value={Date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="row form-group mb-4">
                <div className="col">
                    <label htmlFor="nic">NIC:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nic"
                        name="nic"
                        placeholder="NIC"
                        value={nic}
                        onChange={(e) => setNic(e.target.value)}
                        required
                    />
                </div>
                <div className="col">
                    <label htmlFor="owneraddress">Owner Address:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="owneraddress"
                        name="owneraddress"
                        placeholder="Owner Address"
                        value={owneraddress}
                        onChange={(e) => setOwneraddress(e.target.value)}
                        required
                    />
                </div>
            </div>

            <div className="row form-group mb-4">
                <div className="col">
                    <label htmlFor="hotelname">Hotel Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="hotelname"
                        name="hotelname"
                        placeholder="Hotel Name"
                        value={hotelname}
                        onChange={(e) => setHotelname(e.target.value)}
                        required
                    />
                </div>
                <div className="col">
                    <label htmlFor="hoteladdress">Hotel Address:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="hoteladdress"
                        name="hoteladdress"
                        placeholder="Hotel Address"
                        value={hoteladdress}
                        onChange={(e) => setHoteladdress(e.target.value)}
                        required
                    />
                </div>
            </div>

            {/* <div className="row form-group mb-4">
                <div className="col">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
            </div> */}

            <div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>

            <div className="btn-group me-2">
                <Link className="btn btn-primary me-3" to="/remark">Other Remarks</Link>
            </div>
        </form></div>
        </>
    );
}

export default AddFactory