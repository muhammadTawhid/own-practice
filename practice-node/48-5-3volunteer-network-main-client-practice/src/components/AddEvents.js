import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const [imgUrl, setImgUrl] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleImgUpload = e =>{
        console.log(e.target.files[0]);
        const imgData = new FormData();
        imgData.set("key", "be8a4cc0a70c10d0afc35bcd7b9def3d");
        imgData.append("image", e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imgData)
        .then(function (response) {
            setImgUrl(response.data.data.display_url);
            console.log(response.data.data.display_url);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    const onSubmit = data => {
        const newEventData = {name: data.name, imgUrl: imgUrl}
        console.log(newEventData);
        axios.post("http://localhost:5000/addEvents", newEventData)
        // fetch("http://localhost:5000/addEvents", {
        //     method: "POST",
        //     headers:{"content-type":"application/json"},
        //     body: JSON.stringify(newEventData)
        // })
        .then(res => console.log(res))
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}
                <input type="file"  onChangeCapture={handleImgUpload}/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvents;