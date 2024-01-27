import React from 'react';
import './Login.css';
import newowner from "../assets/newowner.png.jpg"
import newtenant from "../assets/newtenant.png.jpg"
import { useNavigate } from "react-router-dom"

const Page3 = () => {
  const navigate = useNavigate()
  return (
    <div className='pagee3'>
      <div className="how">How do you want to use E-KIRAYA</div>
      <div className='page3main'>
        <div onClick={() => navigate("/owner")} className='left1'>
          <img className="owner" src={newowner} alt="owner" />
          <br></br>
         <b> Owner</b>
        </div>
        <div onClick={() => navigate("/tenant")} className='right1'>
          <img className="owner" src={newtenant} alt="owner" />
          <br></br>
          <b>Tenant</b>
        </div>
      </div>
    </div>
  );
};

export default Page3;