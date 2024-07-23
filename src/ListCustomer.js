import React from "react";
import { deleteCustomer } from "./Slice/CustomerSlice";
import { useDispatch, useSelector } from "react-redux";

const ListCustomer = () => {

    const customers = useSelector((state)=> state.customer);
    const dispatch = useDispatch();

    const deleteCus = (index) => {
        dispatch(deleteCustomer(index));
    }

    return(
        <div>
            <ul style={{listStyle:'none'}}>
                {
                    customers.map((data, index)=>{
                        return(
                            <li key={index.id}>{data} <button onClick={() => deleteCus(index)}>Delete</button></li> 
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ListCustomer