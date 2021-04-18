import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';
import axios from 'axios';
import Dashboard from '../Dashboard/Dashboard';

const AddProduct = () => {

    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const serviceData={
           name: data.name,
           price: data.price,
           info: data.info,
           imageURL: imageURL
        };
        const url = `https://floating-brushlands-99076.herokuapp.com/addService`;

        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => console.log('server side response',res))
    };

    const handleImageUpload = event =>{
        const imageData = new FormData();
        imageData.set('key', '3bdab5a422c03ebcf0e2b210ff306d63');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div style={{display: 'flex', justifyContent:'center'}}>
            <div>
                <Dashboard></Dashboard>
                <div>
                    <h3 className="text-warning text-center">Add Services Section</h3>
                </div>
            </div>
            <div className="custom-form m-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col">
                        Service Name <br/>
                        <input name="name"  ref={register({ required: true })} />
                    </div>
                    <div class="col">
                        Service Info <br/>
                        <input name="info" ref={register({ required: true })} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Price <br/>
                        <input name="price"  ref={register({ required: true })} />
                    </div>
                    <div class="col">
                            Add Photo <br/>
                            <input onChange={handleImageUpload} name="file"  type="file" ref={register} />
                    </div>
                </div>

                {errors.exampleRequired && <span>This field is required</span>}
                
                <br/>

                <input className="btn btn-warning" type="submit" />
            </form>
            </div>
            
        </div>
    );
};

export default AddProduct;