import React from "react";
import { Card, Container,Hr} from "./styled";
import {data} from '../utilis/data'

export class Fruits extends React.Component{
    constructor(props){
        super(props);
        this.state={
            info:data,
            name:'',
            price:'',
            quantity:3,
            count:0,
        }
    }

render(){
    var total=0;
    var prc=0;
const onChange=(e)=>{
this.setState({[e.target.name]:e.target.value})
}

const onAdd=()=>{
        let newUser={
            id:Date.now(),
            name:this.state.name,
            price:this.state.price
            
        }
        this.setState({
            info:[...this.state.info,newUser],
            name:'',
            price:''
        })


}


const plus=(id)=>{
    let res=this.state.info.map((value)=>value.id===id? {...value,quantity:value.quantity+1}:value)
    console.log(id);

this.setState({quantity:this.state.quantity+1})
console.log(res);


   
}
const minus=(id)=>{
    let ress=this.state.info.map((value)=>value.id===id? {...value,quantity:value.quantity-1}:value)
    console.log(id);

    this.setState({quantity:this.state.quantity-1})


}

const onDelete=(id)=>{
    let del=this.state.info.filter((value)=>value.id!==id)
    this.setState({info:del})
}
return(




<Container>
    <Card>
     
    <Card.Title >Please add a fruit</Card.Title>
    <Card.Input name='name' value={this.state.name} onChange={onChange}  type='text' placeholder='Add a fruit...' />
    <Card.Input name='price' value={this.state.price} onChange={onChange}  type='text' placeholder='Add price...' />

 
    <button onClick={onAdd}>add</button>


{
 this.state.info.map((value)=>{
    total+=this.state.quantity
    prc+=value.price*this.state.quantity
    return(
<Container.Wrapper key={value.id}>

<Container.Product >{value.name}</Container.Product>
<Container.Product >{value.price}$</Container.Product>

<Container.Plus onClick={()=>plus(value.id)}>+</Container.Plus>
<Container.Quality>{this.state.quantity}</Container.Quality>
<Container.Minus onClick={()=>minus(value.id)}>-</Container.Minus>
<button onClick={()=>onDelete(value.id)}>delete</button>

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
}
export default Fruits;