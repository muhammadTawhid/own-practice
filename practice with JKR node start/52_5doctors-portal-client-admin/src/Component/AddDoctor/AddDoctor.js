import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e =>{
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileUpload = e =>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", info.name);
        formData.append("email", info.email);

            console.log(formData);
        fetch('http://localhost:5000/addDoctor', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <section className="container-fluid row">
            <Sidebar/>
            <div style={{marginLeft:"15em"}} className="col-md-8 p-4 pr-5">
                <h5 className="color-text">Add a doctor</h5>
                <div>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onBlur={handleBlur} type="email" class="form-control" name='email' placeholder="Enter email"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Name"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Upload a image</label>
                    <input onChange={handleFileUpload} type="file" class="form-control" id="exampleInputPassword1" placeholder="Picture"/>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
            </div>
        </section>
        
    );
};

export default AddDoctor;