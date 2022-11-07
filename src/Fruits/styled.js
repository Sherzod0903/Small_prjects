import styled from "styled-components";



export const Container=styled.div`

display:flex;
justify-content:center;
align-items:center;
margin-top:200px;
`
export const Card=styled.div`
display:flex;
flex-direction:column;
width:400px;
height:450px;
background-color:#EC8171;
border-radius:5px;



`
Card.Job=styled.div`
`
Card.Input=styled.input`
margin:10px 5px;
width:375px;
height:38px;
border-radius:5px;
border:none;
padding-left:10px;
background-color:#FDCEC6;
color:#EC8171;

font-size:20px;

`
Card.Title=styled.h3`
text-align:center;
opacity:0.7;

`


Card.Add=styled.div`

position:absolute;
/* display:flex;
justify-content:center;
align-items:center; */


top:29.5%;
left:57.6%;
font-size:22px;
color:#EC8171;
/* transform:translateY(-50%); */
cursor: pointer;



`



Container.Product=styled.div`

/* width:100%; */

font-size:20px;
color:whitesmoke;
opacity:0.9;
margin-left:10px

`

export const Hr=styled.hr`
display:flex;
justify-content:center;
align-items:center;
width:380px;


`
Container.Total=styled.h3`
margin-left:90px;
color:whitesmoke;
margin-bottom:20px;

`
Container.Wrapper=styled.div`
display:flex;
width:100%;
justify-content:space-between;
align-items:center;
height:60px;

`
Container.Plus=styled.button`
margin-left:190px;
border-radius:50%;
border:none;
cursor: pointer;

`
Container.Minus=styled.button`
margin-right:15px;
border-radius:50%;
border:none;
font-size:15px;
cursor: pointer;


`
Container.Quality=styled.div`
/* margin-left:300px; */
`