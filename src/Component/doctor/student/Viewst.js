import React, { useEffect, useState } from 'react';  
import { Link, useParams } from 'react-router-dom';

export default function ViewStudent() {  // Component name starts with an uppercase letter

    const [student, setStudent] = useState({});  // Hook name starts with "use" and renamed SetGetstud to setStudent

    const { id } = useParams();  // Hook name starts with "use"

    const getStudentData = async () => {  // Renamed getstuddata to getStudentData
        try {
            const res = await fetch(`http://localhost:8090/getstud/${id}`, {  // Fixed template string
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();
            
            if (!res.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            setStudent(data);  // Changed SetGetstud to setStudent
            console.log("get data");
        } catch (error) {
            console.error("Error fetching student data:", error.message);
        }
    };

    useEffect(() => {
        getStudentData();
    }, [id]);  // Hook name starts with "use"

    return (
        <div className="container mt-5">
            <div className="row justify-content-center"> {/* Centering the container */}
                <div className="col-md-8"> {/* Adjusting column width */}
                    {/* Main content */}
                    <div className="text-center"> {/* Centering content */}
                        <h4>All Student Information</h4>
                        <div className="underline"></div>
                    </div>
                    <ul className="list-group mt-4">
                        <li className="list-group-item active" aria-current="true">All Information About</li>
                        <li className="list-group-item">Student Name: {student.name}</li>
                        <li className="list-group-item">Student Address: {student.address}</li>
                        <li className="list-group-item">Parent name: {student.parent}</li>
                        <li className="list-group-item">Student Mobile: {student.contact}</li>
                        <li className="list-group-item">Student Health issue: {student.health}</li>
                    </ul>
                    <div className="text-center mt-5"> {/* Centering the button */}
                        <Link className="btn btn-primary" to="/homedoctor">Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
