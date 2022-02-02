import './BlogCard.css'
import React from 'react';

const BlogCard = ({ data }) => {
    return (
        <div className="col-md-4 mb-5 p-4 shadow blog-card" style={{ width: "400px" }}>
            <div className="d-flex mb-2 card-header">
                <img style={{ width: "50px", height: "50px" }} src={data.authorImg} alt="" />
                <div>
                    <p style={{ marginBottom: "0px" }}>{data.author}</p>
                    <small>24 January 2022</small>
                </div>
            </div>
            <h5>{data.title}</h5>
            <p className="text-muted">{data.description}</p>
        </div>
    );
};

export default BlogCard;