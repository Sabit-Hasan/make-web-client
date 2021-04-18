import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import ManageTable from '../ManageTable/ManageTable';

const Manage = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch(`https://floating-brushlands-99076.herokuapp.com/services`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                <h3 className="title-style">Manage Section</h3>
            </div>
            <div>
                <Dashboard></Dashboard>
            </div>
            <div className="container">
                <table className="table" style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                    <thead>
                        <tr>
                            <th scope="col">Service Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                </table>
            </div>

            <div style={{display: 'flex', justifyContent:'center', flexWrap: 'wrap'}}>
                {
                    services.map( service => <ManageTable service={service} key={service._id}></ManageTable>)
                }
            </div>
        </div>
    );
};

export default Manage;