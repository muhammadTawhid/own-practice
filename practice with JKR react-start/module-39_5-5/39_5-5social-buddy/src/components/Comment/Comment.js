import React from 'react';

const Comment = (props) => {
    const {name, body} = props.comment
    return (
        <p>
      <b>Comment Name: </b>{name} : <b>Comment Body: </b> {body}  
        </p>
    );
};

export default Comment;