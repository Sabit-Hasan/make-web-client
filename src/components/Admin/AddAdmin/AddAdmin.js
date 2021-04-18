import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';

const AddAdmin = () => {

    let adminEmail;

    const handleEmail = (e) => {
        adminEmail = e.target.value;
    }

    const handleSubmit = (data) => {
        data.preventDefault();

         const url = 'https://floating-brushlands-99076.herokuapp.com/addAdmin';
 
         fetch(url,{
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({email: adminEmail})
         })
         .then(res => res.json())
         .then(res => {
             alert('Admin added successfully!')
         })
     };

    return (
        <div>
            <div>
                <Dashboard></Dashboard>
                <div className="d-flex justify-content-center align-items-center">
                    <h3 className="title-style mt-2 mb-5">Add Admin</h3>
                </div>
            </div>
            <div style={{width:'40'}} className="d-flex justify-content-center">
                <form onSubmit={handleSubmit}>
                    <input onChange={handleEmail} type="email" name="email" placeholder="Email" required/>
                    <button type="submit" class="btn btn-warning">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;