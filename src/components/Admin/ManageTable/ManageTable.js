import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const ManageTable = (props) => {
    const {name, price, _id} = props.service;
    console.log(_id);

    const deleteProduct = (id) =>{
        fetch(`https://floating-brushlands-99076.herokuapp.com/services/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            console.log('deleted successfully!')
        })
    }
    return (
        <div className="container">
            {
                <table className="table" style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                <tbody>
                    <tr>
                    <th>{name}</th>
                    <td>{price}</td>
                    <td><FontAwesomeIcon onClick={() => deleteProduct(_id)} icon={faTrashAlt}/> <FontAwesomeIcon icon={faEdit}/></td>
                    </tr>
                </tbody>
                </table>
            }
        </div>
    );
};

export default ManageTable;