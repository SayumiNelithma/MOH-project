import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import HeaderPHI from '../../DiseaseManagement/Header/Header'
import DMsideNav from '../../DiseaseManagement/DMNav/DMsideNav'
export default function UpdateFactory() {
  const [ownername, setOwnername] = useState("");
  const [number, setNumber] = useState("");
  const [nic, setNic] = useState("");
  const [owneraddress, setOwneraddress] = useState("");
  const [hotelname, setHotelname] = useState("");
  const [hoteladdress, setHoteladdress] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8090/factory/get/${id}`)
      .then((res) => {
        const factory = res.data.factory;
        setOwnername(factory.ownername);
        setNumber(factory.number);
        setNic(factory.nic);
        setOwneraddress(factory.owneraddress);
        setHotelname(factory.hotelname);
        setHoteladdress(factory.hoteladdress);
        setTel(factory.tel);
        setAddress(factory.address);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFactoryData();
  };

  const updateFactoryData = () => {
    const updatefactory = {
      ownername,
      number,
      nic,
      owneraddress,
      hotelname,
      hoteladdress,
      tel,
      address
    };

    axios
      .put(`http://localhost:8090/factory/editfactory/${id}`, updatefactory)
      .then((res) => {
        alert("Updated");
        window.location.replace("/factory/display");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
    <HeaderPHI />
    <DMsideNav />
    <div style={{ marginLeft: "300px" }}>
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Edit {ownername}</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button className="btn btn-sm btn-outline-secondary">?</button>
          </div>
        </div>
      </div>

      <div className="col py-3">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/display">hotel and factory management</a></li>
                <li className="breadcrumb-item active">{ownername}</li>
              </ol>
            </nav>
          </div>
          <div className="col text-end fw-lighter">
            <b>UserId: {id}</b>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row form-group mb-4">
          <div className="col">
            <h3>Owner</h3>
            <label htmlFor="ownername">Owner Name</label>
            <input type="text" className="form-control" id="ownername" name="ownername" value={ownername} onChange={(e) => setOwnername(e.target.value)} placeholder="Owner Name" required />
          </div>
          <div className="col">
            <h3>Number</h3>
            <label htmlFor="nic">NIC</label>
            <input type="text" className="form-control" id="nic" name="nic" value={nic} onChange={(e) => setNic(e.target.value)} placeholder="NIC" required />
          </div>
        </div>

        <div className="row form-group mb-5">
          <div className="col">
            <label htmlFor="ownerAddress">Owner Address</label>
            <input type="text" className="form-control" id="ownerAddress" name="ownerAddress" value={owneraddress} onChange={(e) => setOwneraddress(e.target.value)} placeholder="Owner Address" required />
          </div>
          <div className="col">
            <label htmlFor="hotelAddress">Hotel Address</label>
            <input type="text" className="form-control" id="hotelAddress" name="hotelAddress" value={hoteladdress} onChange={(e) => setHoteladdress(e.target.value)} placeholder="Hotel Address" required />
          </div>
        </div>

        <hr style={{ borderTop: '5px solid black', fontWeight: 'bold' }} />

        <div className="row form-group mb-4">
          <div className="col">
            <label htmlFor="tel">Telephone</label>
            <input type="text" className="form-control" id="tel" name="tel" value={tel} onChange={(e) => setTel(e.target.value)} placeholder="Telephone" required />
          </div>
          <div className="col">
            <label htmlFor="address">Address</label>
            <input type="text" className="form-control" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
          </div>
        </div>

        <div className="form-group mb-4">
          <button type="submit" className="btn btn-success">Update</button>
        </div>
      </form>
    </div>
    </div></>
  );
}