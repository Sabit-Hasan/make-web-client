import React from 'react';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import Dashboard from '../Dashboard/Dashboard';

const Book = () => {
    return (
        <div>
            <div>
                <Dashboard></Dashboard>
                <div className="d-flex justify-content-center align-items-center">
                    <h3 className="title-style mt-2 mb-5">Book Section</h3>
                </div>
                <div style={{width:'40'}} className="d-flex justify-content-center">
                    <form action="">
                        Name:
                        <input type="text" name="name" placeholder="Name." required/>
                        <br/>
                        Email:
                        <input type="email" name="email" placeholder="Email" required/>
                        <br/>
                        <ProcessPayment required></ProcessPayment>
                        <br/>
                        <input class="btn btn-warning" type="submit" value="Checkout"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Book;