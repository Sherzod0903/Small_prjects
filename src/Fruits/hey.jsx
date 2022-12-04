import React, { useState } from "react";

import {data} from '../utilis/data'

export const Table=()=>{

    const [state,setState]=useState(
    {
    
        info:data,
        name:'',
        price:'',
        quantity:''
    })

    const onChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
      }

      const onAdd=()=>{
        let newUser={
            id:Date.now(),
            name:state.name,
            price:state.price,
            quantity:state.quantity,

           
        }
        setState({
            data:[...state.info,newUser],
            name:'',
            price:'',
        quantity:''
        
        })
      }


const onDelete=(id)=>{
    let res=state.info.data.filter(value=>value.id!==id)
    setState({data:res})
}

return(
<>

<input name="name" value={state.name} onChange={onChange} type='text' placeholder='Add a fruit name' /><br/><br/>
<input name="price" value={state.price} onChange={onChange} type='text' placeholder='Add a fruit price' /><br/><br/>
<input name="quantity" value={state.quantity} onChange={onChange} type='text' placeholder='Add a fruit quantity' /><br/><br/>

<button onClick={onAdd}>Add</button>
<h1>{state.name}</h1>
<table>
                    <tbody>

                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>


                        </tr>
{
state.info.map((value)=>{
        return(
        <tr key={value.id} >
            <td>{value.id}</td>
            <td>{value.name}</td>
            
            <td>{value.quantity} </td>

            <td>{value.price}</td>
        
<td><button onClick={()=>onDelete(value.id)} >delete</button></td>
</tr>
        )
    })
}


</tbody>



            </table>
</>
)
}
export default Table;