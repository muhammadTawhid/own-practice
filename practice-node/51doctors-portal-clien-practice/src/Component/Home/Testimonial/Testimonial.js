import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'

const testimonialData = [
    {
        name: "Winson Herry",
        address: "California",
        img: people1,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis asperiores hic ducimus cumque neque, culpa dolorem odio animi id fuga voluptas, amet voluptatum iste atque itaque nihil autem.",
    },
    {
        name: "Winson Herry",
        address: "California",
        img: people2,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis asperiores hic ducimus cumque neque, culpa dolorem odio animi id fuga voluptas, amet voluptatum iste atque itaque nihil autem.",
    },
    {
        name: "Winson Herry",
        address: "California",
        img: people3,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis asperiores hic ducimus cumque neque, culpa dolorem odio animi id fuga voluptas, amet voluptatum iste atque itaque nihil autem.",
    },
]

const Testimonial = () => {
    return (
        <div>
            <div className="container pt-5">
                <h5 style={{ color: "#1CC7C1", fontWeight: "600" }} >TESTIMONIAL</h5>
                <h1>What's Our Patients <br /> Says</h1>
                <p></p>
            </div>
            <div className="row ">
                <div className="d-flex justify-content-evenly">
                    {
                        testimonialData.map(data => <TestimonialCard data={data} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;