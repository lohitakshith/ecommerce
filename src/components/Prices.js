import React, { Component } from 'react';
import "../index.css"

const PriceFilter = () => {
    return (<div className="card mt-2" style={{minWidth:300}}>
        <div className="card-body">
            <p className="card-title">Prices</p>
            <ul>
                <li><input type="checkbox"></input> Below 1000</li>
                <li><input type="checkbox"></input> 1000-5000</li>
                <li><input type="checkbox"></input> 5001-10000</li>
                <li><input type="checkbox"></input> 10001-15000</li>
                <li><input type="checkbox"></input> Above 15000</li>
            </ul>
        </div>

    </div>)
}
 
export default PriceFilter;