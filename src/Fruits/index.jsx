import React, { useState } from "react";
import { Card, Container,Hr} from "./styled";
import {data} from '../utilis/data'

const Fruits=()=>{

const [state,setState]=useState(data)
var total=0;
var prc=0;


const plus =(id)=>{
let res=state.map((value)=>value.id===id ? {...value,quantity:value.quantity+1}:value)
setState(res)

}
const minus =(id)=>{
    let res=state.map((value)=>value.id===id && value.quantity > 0 ? {...value,quantity:value.quantity-1}:value)
    setState(res)
    
    }

    const onAdd=()=>{
       
        
    }

return(




<Container>
    <Card>
    <Card.Title >Please add a fruit</Card.Title>
    <Card.Input type='text' placeholder='Add a fruit...'/>
    <Card.Add onClick={onAdd}>Add</Card.Add>

{
 state.map((value)=>{
    total+=value.quantity
    prc+=value.price*value.quantity
    return(
<Container.Wrapper key={value.id}>

<Container.Product >{value.name}</Container.Product>
<Container.Product >{value.price}$</Container.Product>

<Container.Plus onClick={()=>plus(value.id)}>+</Container.Plus>
<Container.Quality>{value.quantity}</Container.Quality>

<Container.Minus onClick={()=>minus(value.id)}>-</Container.Minus>

</Container.Wrapper>

    )
 })
}
<Hr/>
<Container.Total>Total: {total}</Container.Total>
<Container.Total>  Total price: {prc}$</Container.Total>








    </Card>

    </Container>


    )

}
export default Fruits;