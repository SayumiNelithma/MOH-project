import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import '../indexMidwife.css';

export default function EditCouple() {
  const [wifeName, setWifeName] = useState("");
  const [husbandName, setHusbandName] = useState("");
  const [wifeNic, setWifeNic] = useState("");
  const [husbandNic, setHusbandNic] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [familyPlan, setFamilyPlan] = useState("");
  const [error, setError] = useState("");

  const { id } = useParams();

  const validateNIC = (nic) => {
    const nicCheck = /^[0-9]{9}[vV]|[0-9]{12}$/;
    return nicCheck.test(nic);
  };

  useEffect(() => {
    axios.get(`http://localhost:8090/coupledetails/get/${id}`)
      .then((res) => {
        const couple = res.data.couple;
        setWifeName(couple.wifeName);
        setHusbandName(couple.husbandName);
        setWifeNic(couple.wifeNic);
        setHusbandNic(couple.husbandNic);
        setEmail(couple.email);
        setTel(couple.tel);
        setAddress(couple.address);
        setFamilyPlan(couple.familyPlan);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  const updateCouple = (e) => {
    e.preventDefault();

    if (!validateNIC(wifeNic) || !validateNIC(husbandNic)) {
      setError('Please enter valid NIC numbers.');
      return;
    }

    const updatedCouple = {
      wifeName,
      husbandName,
      wifeNic,
      husbandNic,
      email,
      tel,
      address,
      familyPlan
    };

    axios.put(`http://localhost:8090/coupledetails/editcouple/${id}`, updatedCouple)
      .then(() => {
        alert("Couple Updated");
        window.location.href = "/allcouple";
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const onDeleteClick = async () => {
    await axios.delete(`http://localhost:8090/coupledetails/deletecouple/${id}`)
      .then(() => {
        alert("Couple deleted");
        window.location.href = "/allcouple";
      });
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className='tableCouple'>
        <div className="d-flex justify-content-between flex-wrap flex-md nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Edit {wifeName} & {husbandName}</h1>
        </div>

        <div className="col py-3">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/allcouple">Newly Married Couple Management</a></li>
                  <li className="breadcrumb-item active">{wifeName} & {husbandName}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <form onSubmit={updateCouple}>
          <div className="row form-group mb-4">
            <div className="col">
              <h3>Wife</h3>
              <label htmlFor="wifeName">Wife's Name : </label>
              <input
                type="text"
                className="form-control"
                id="wifeName"
                name="wifeName"
                placeholder="Wife Name"
                value={wifeName}
                onChange={(e) => setWifeName(e.target.value)}
                required
              />
            </div>

            <div className="col">
              <h3>Husband</h3>
              <label htmlFor="husbandName">Husband's Name : </label>
              <input
                type="text"
                className="form-control"
                id="husbandName"
                name="husbandName"
                placeholder="Husband Name"
                value={husbandName}
                onChange={(e) => setHusbandName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row form-group mb-5">
            <div className="col">
              <label htmlFor="wifeNic">Wife's NIC : </label>
              <input
                type="text"
                className={`form-control ${!validateNIC(wifeNic) ? 'is-invalid' : ''}`}
                id="wifeNic"
                name="wifeNic"
                placeholder="Wife NIC"
                maxLength="12"
                minLength="10"
                value={wifeNic}
                onChange={(e) => setWifeNic(e.target.value)}
                required
              />
              {!validateNIC(wifeNic) && (
                <div className="invalid-feedback">
                  Please enter a valid NIC number.
                </div>
              )}
            </div>

            <div className="col">
              <label htmlFor="husbandNic">Husband's NIC : </label>
              <input
                type="text"
                className={`form-control ${!validateNIC(husbandNic) ? 'is-invalid' : ''}`}
                id="husbandNic"
                name="husbandNic"
                placeholder="Husband NIC"
                maxLength="12"
                minLength="10"
                value={husbandNic}
                onChange={(e) => setHusbandNic(e.target.value)}
                required
              />
              {!validateNIC(husbandNic) && (
                <div className="invalid-feedback">
                  Please enter a valid NIC number.
                </div>
              )}
            </div>
          </div>

          <div className="row form-group mb-4">
            <div className="col">
              <label htmlFor="tel">Telephone : </label>
              <input
                type="tel"
                className="form-control"
                id="tel"
                name="tel"
                placeholder="Telephone"
                pattern="07[0-9]{8}"
                maxLength="10"
                minLength="10"
                title="Please enter a valid telephone number starting with 07."
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                required
              />
              <div className="invalid-feedback">
                Please enter a valid telephone number starting with 07.
              </div>
            </div>

            <div className="col">
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                maxLength="54"
                minLength="12"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row form-group mb-4">
            <div className="col">
              <label htmlFor="address"> Address : </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="familyPlan">Family Plan : </label>
            <i> </i>
            <input
              type="radio"
              name="familyPlan"
              value="earlyBabyPlan"
              checked={familyPlan === 'earlyBabyPlan'}
              onChange={(e) => setFamilyPlan(e.target.value)}
            />{' '}
            Early Baby Plan
            <i> </i>
            <i> </i>
            <input
              type="radio"
              name="familyPlan"
              value="lateBabyPlan"
              checked={familyPlan === 'lateBabyPlan'}
              onChange={(e) => setFamilyPlan(e.target.value)}
            />{' '}
            Late Baby Plan
          </div>

          <br />
          <div>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Update Couple
            </button>
            <i> </i>
            <button type="button" onClick={onDeleteClick} className="btn btn-danger">
              Delete Couple
            </button>
          </div>
          {error && <div className="text-danger">{error}</div>}
        </form>
      </div>
    </div>
  );
}
