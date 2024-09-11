import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HeaderPHI from '../../DiseaseManagement/Header/Header'
import DMsideNav from '../../DiseaseManagement/DMNav/DMsideNav'
function FactoryDisplay() {
    const [factory, setFactory] = useState([]);

    useEffect(() => {
        getFactory();
    }, []);

    function getFactory() {
        axios.get('http://localhost:8090/factory/')
            .then((response) => {
                setFactory(response.data);
                console.log("Display successful");
            })
            .catch((error) => {
                alert(error);
            });
    }

    // Declare onDeleteClick outside of getFactory
    const onDeleteClick = async (userId) => {
        try {
            await axios.delete(`http://localhost:8090/factory/deletefactory/${userId}`);
            alert('Factory Deleted Successfully');
            window.location.reload();
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    return (
        <>
        
        <HeaderPHI />
        <DMsideNav />
        <div style={{ marginLeft: "300px" }}>
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard- hotel and factory management </h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <a href="/factory/add" className="btn btn-sm btn-outline-secondary">+ New hotelss</a>
                    </div>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Owner Name</th>
                            <th scope="col">Contact Number</th>
                            <th scope="col">NIC</th>
                            <th scope="col">Owner Address</th>
                            <th scope="col">Hotel Name</th>
                            <th scope="col">Hotel Address</th>


                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {factory.map((factoryItem, index) => (
                            <tr key={index}>
                                <td>{factoryItem.ownername}</td>
                                <td>{factoryItem.number}</td>
                                <td>{factoryItem.nic}</td>
                                <td>{factoryItem.owneraddress}</td>
                                <td>{factoryItem.hotelname}</td>
                                <td>{factoryItem.hoteladdress}</td>


                                <td>
                                    <Link to={`/editfactory/${factoryItem._id}`}><button>Update</button></Link>
                                    <button onClick={() => onDeleteClick(factoryItem._id)} className="btn btn-danger btn-small">
                                        <i>Delete</i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
        </div>
        </>
    );
}

export default FactoryDisplay;