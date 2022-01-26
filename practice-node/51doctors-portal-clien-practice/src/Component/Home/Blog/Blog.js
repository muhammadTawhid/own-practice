import React from 'react';
import wilson from '../../../images/people-3.png'
import BlogCard from '../BlogCard/BlogCard';

const blogData = [
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'Two time brush in a day can keep you healthy',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Sinthia',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'The tooth cancer is taking a challenge',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
]

const Blog = () => {
    return (
        <div>
            <div className="container mb-5 pt-5 text-center">
                <h5 style={{ color: "#1CC7C1", fontWeight: "600" }} >OUR BLOG</h5>
                <h1>From Our Blog News</h1>
            </div>
            <div className="row">
                <div className="d-flex justify-content-around">
                    {
                        blogData.map(data => <BlogCard data={data} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;