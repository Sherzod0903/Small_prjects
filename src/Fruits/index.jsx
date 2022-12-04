import React from "react";
import { Card, Container,Hr,Box} from "./styled";
import {data} from '../utilis/data'

export class Fruits extends React.Component{
    constructor(props){
        super(props);
        this.state={
            info:data,
            name:'',
            price:'',
            quantity:0,
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
    
    
    // let res= this.state.info.map((value)=>id===value.id? {...value,quantity:value.quantity-1}:value)
        this.setState({quantity:this.state.quantity+1})
    
// console.log(res);
  
}
const minus=(id)=>{
    // this.state.info.map((value)=>value.id===id? {...value,quantity:value.quantity-1}:value)
    console.log(id);
if (this.state.quantity>0){

    this.setState({quantity:this.state.quantity-1})
}
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

 
    <Card.Button onClick={onAdd}>Add To Cart</Card.Button>


{
 this.state.info.map((value)=>{
    total+=this.state.quantity
    prc+=value.price*this.state.quantity
    return(
<Box.Wrapper key={value.id}>

<Box.Product >{value.name}</Box.Product>
<Box.Product >{value.price}$</Box.Product>

<Box.Plus onClick={()=>plus(value?.id)}>+</Box.Plus>
<Box.Quality>{this.state.quantity}</Box.Quality>
<Box.Minus onClick={()=>minus(value?.id)}>-</Box.Minus>
<Box.Delete onClick={()=>onDelete(value.id)}>Delete</Box.Delete>

</Box.Wrapper>

)
})
}
<Hr/>
<Box.Total>Total: {total}</Box.Total>
<Box.Total>  Total price: {prc}$</Box.Total>








    </Card>

    </Container>



    )
}
}
export default Fruits;