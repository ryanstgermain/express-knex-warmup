import React from 'react';

const students = (props) => {
    return (
        <div className="row">
            <div className="col-md-2">{students.name}</div>
            <div className="col-md-2">{students.fave_animal}</div>
            <div className="col-md-2">{students.previous_occupation}</div>
            <div className="col-md-2">{students.hometown_lat}</div>
            <div className="col-md-2">{students.hometown_long}</div>
            <div className="col-md-2">{students.useless_superpower}</div>
        </div>
    )
}

export default students;
