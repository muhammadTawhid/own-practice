import React from 'react';
import { useState } from 'react';
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const AddDoctor = () => {
    const [userData, setUserData] = useState({});
    const [userImg, setUserImg] = useState(null);

    const handleBlur = e =>{
        const newUserData = {...userData}
        newUserData[e.target.name] = e.target.value;
        setUserData(newUserData);
    }

    const handleImgUpload = e =>{
        console.log(e.target.files[0]);
        setUserImg(e.target.files[0])
    }

    const handleSubmit = e =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', userData.name)
        formData.append('email', userData.email)
        formData.append('file', userImg)
            console.log(formData);

        fetch('http://localhost:5000/addDoctor', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data, "resData")
        })
        .catch(error => {
          console.error(error)
        })
      }

    return (
        <div className="container-fluid row">
            <Sidebar />
            <div style={{marginLeft:"15em"}} className="col-md-10 p-4">
                <h5 className="text-color text-center">Add a Doctor</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Email</label>
                        <input onBlur={handleBlur} type="email" name="email"  className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Upload Image</label>
                        <input onChange={handleImgUpload} type="file" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;