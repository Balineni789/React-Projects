
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './Employee1.css';

const Employee1 = () => {
  const [name, setName]   = useState("");
  const [role, setRole]   = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept]   = useState("");
  
  const [submittedData, setSubmittedData]   = useState(null);
  const [showBackground, setShowBackground] = useState(false);

  const notify = () => toast("Your Data Submitted Sucessfully ✅");

  const submit = (e) => {
    e.preventDefault();
     notify();

    // Save the submitted data in the state
    const details = { name, role, email, dept };
    setSubmittedData(details);

    setShowBackground(true);
  };

  return (
    <div className='P'>
      <div className='C'>
        <h2>Employee Form</h2>

        <ToastContainer/>

        <form onSubmit={submit}>
          <label>Employee Name :</label>
          <input 
            type="text" 
            name="name"  
            value={name}
            required
            placeholder='Enter Your Name'
            onChange={(e) => setName(e.target.value)} 
          /><br />

          <label>Employee Role :</label>
          <input 
            type="text" 
            name="role"  
            value={role}
            required
            placeholder='Enter Your Role'
            onChange={(e) => setRole(e.target.value)} 
          /><br />

          <label>Employee Email :</label>
          <input 
            type="email" 
            name="email" 
            value={email}
            required
            placeholder='Enter Your Email'
            onChange={(e) => setEmail(e.target.value)} 
          /><br />

          <label>Employee Dept :</label>
          <input 
            type="text" 
            name="dept"  
            value={dept}
            required
            placeholder='Enter Your Dept'
            onChange={(e) => setDept(e.target.value)} 
          /><br />

          <button type="submit">Submit</button>
        </form>

        <div className={`${showBackground ? 'show-background' : 'hide-background'}`}>
          {submittedData && (
            <div>
              {/* <h3>Submitted Data</h3> */}
              <div className='form-con'>
                
                <form>
                <h3>Submitted Data</h3>
                <div className='form-group'>
                <label for ="name" className='l'>Name:</label>
                <span id="name" className="v"> {submittedData.name}</span>
                </div>
        
                <div className='form-group'>
                <label for ="role" className='l'>Role:</label>
                <span id="role" className="v"> {submittedData.role}</span>
                </div>

                <div className='form-group'>
                <label for ="email" className='l'>Email:</label>
                <span id="email" className="v"> {submittedData.email}</span>
                </div>

                <div className='form-group'>
                <label for ="dept" className='l'>Department:</label>
                <span id="dept" className="v"> {submittedData.dept}</span>
                </div>

                 </form>
              </div>
            </div>
          )}
        </div>

    </div>
    </div>
  );
};

export default Employee1;

