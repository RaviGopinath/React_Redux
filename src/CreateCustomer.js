import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCustomer } from './Slice/CustomerSlice';

export default function CreateCustomer(){

    const [input, setInput] = useState([]);
    const dispatch = useDispatch();

    const add = () => {
        if(input){
            dispatch(addCustomer(input));
            setInput('');
        }

    }

    return(
        <div className='form-outline' style={{marginTop: '5%'}}>
            <input type='text' placeholder='Name' value={input} onChange={(e)=> setInput(e.target.value)}></input>
            <button onClick={add}>Add</button>
        </div>
    )
}