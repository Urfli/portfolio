import React from 'react'
import './Title.css';

function Title({title, span}) {
    return (
        <div className="title">
            <h2>{title} <b></b></h2>
        </div>
    )
}
export default Title;
