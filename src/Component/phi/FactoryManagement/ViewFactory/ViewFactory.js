import React from 'react'
import HeaderPHI from '../../DiseaseManagement/Header/Header'
import DMsideNav from '../../DiseaseManagement/DMNav/DMsideNav'
function ViewFactory() {
 
  
    return (
        <>
        <HeaderPHI />
    <DMsideNav />
    <div style={{ marginLeft: "300px" }}>
        <h1>ViewFactory</h1>
        </div>
        </>
    )
}

export default ViewFactory