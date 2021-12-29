import React, { useState } from 'react';
import Navbar from './Navbar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddEvents = () => {
    const [imageUrl, setImageUrl] = useState()

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        const eventData ={
            name: data.name,
            imgUrl: imageUrl
        }
        const url = "https://calm-island-26626.herokuapp.com/addEvent";
        fetch(url, {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(eventData)
        })
        .then(res => {console.log("server side res")})
    };

    const handleImageUpload = e =>{
        console.log(e.target.files[0])
        const imageData = new FormData();
        imageData.set("key", "be8a4cc0a70c10d0afc35bcd7b9def3d");
        imageData.append("image", e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            console.log(response.data.data.display_url);
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    return (
        <div >
            <Navbar/>
            <h3>Add your events here</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            
            <input defaultValue="new exciting event" {...register("name", { required: true })} />
            {errors.name && <span>This field is required</span>}

            <input type="file" onChangeCapture={handleImageUpload} />

            <input type="submit" />
            </form>
            
        </div>
    );
};

export default AddEvents;