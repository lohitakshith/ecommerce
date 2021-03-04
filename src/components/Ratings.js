import React from 'react';
import {ratings} from "../Filters"
import {APPLY_RATING_FILTER} from "../Actions"
import { ECommerceContext } from '../context/context';
const RatingFilter = () => {
    const {state,dispatch} = React.useContext(ECommerceContext)

    return (<div className="card mt-2" style={{minWidth:300}}>
        <div className="card-body">
        <p className="card-title text-center">Ratings</p>

            <ul className="list-unstyled">
                {ratings.map((rating, index) =>(
                <li key={index}><input type="checkbox" value={rating.value}></input> {rating.name} </li>
                ))}
            </ul>
        </div>
        <div className="card-footer">
        <button className="btn btn-light" onClick={() => dispatch({type:APPLY_RATING_FILTER})}>APPLY</button>

        </div>

    </div>)
}
 
export default RatingFilter;