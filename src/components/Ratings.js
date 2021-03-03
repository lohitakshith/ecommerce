import React, { Component } from 'react';
const RatingFilter = () => {
    return (<div className="card mt-2" style={{minWidth:300}}>
        <div className="card-body">
        <p className="card-title">Ratings</p>

            <ul>
                <li><input type="checkbox"></input> 5</li>
                <li><input type="checkbox"></input> 4</li>
                <li><input type="checkbox"></input> 3</li>
                <li><input type="checkbox"></input> 2</li>
                <li><input type="checkbox"></input> 1</li>
            </ul>
        </div>

    </div>)
}
 
export default RatingFilter;