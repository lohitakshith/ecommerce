import React from 'react';
import { APPLY_PRICE_FILTER, END_PRICE_CHANGE, START_PRICE_CHANGE } from '../Actions';
import { ECommerceContext } from '../context/context';
import "../index.css"

const PriceFilter = () => {
    const {state,dispatch} = React.useContext(ECommerceContext)
    return (<div className="card mt-2" style={{minWidth:300}}>
        <div className="card-body">
            <p className="card-title text-center">Price Range</p>
            <p  className="form-label">{state.startPrice < state.endPrice ? "Start Price" :"End Price"} ({state.startPrice})</p>
            <input type="range" min="0" max="200000" step="5000" value={state.startPrice} onChange={e => dispatch({type:START_PRICE_CHANGE ,payload:e.target.value})}></input>
            <p className="form-label">{state.startPrice < state.endPrice ? "End Price" :"Start Price"}({state.endPrice})</p>
            <input type="range" min="0" max="200000" step="5000" value={state.endPrice} onChange={e => dispatch({type:END_PRICE_CHANGE ,payload:e.target.value})}></input>
        </div>
        <div className="card-footer">
        <button className="btn btn-light" onClick={() => dispatch({type:APPLY_PRICE_FILTER})}>APPLY</button>
        <button className="btn btn-light" onClick={() => dispatch({type:APPLY_PRICE_FILTER})}>CLEAR</button>

        </div>

    </div>)
}
 
export default PriceFilter;