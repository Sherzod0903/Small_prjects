import styled from "styled-components";



export const Container=styled.div`

display:flex;
justify-content:center;
align-items:center;
/* background-color:red; */
margin-top:200px;

padding:auto;
width:100%;
/* height:500px; */



`
export const Card=styled.div`
display:flex;
flex-direction:column;
max-width:auto;


background-color:yellow;
border-radius:5px;
opacity:0.85;


`

Card.Input=styled.input`
/* margin-left:5px; */
margin-bottom:10px;
margin-right:15px;


width:100%;
/* margin:auto; */
height:38px;
border-radius:5px;
border:none;
padding-left:10px;
background-color:#FDCEC6;
color:black ;
font-size:20px;
`


Card.Button=styled.button`
font-family:Georgia, 'Times New Roman', Times, serif;
background-color:green;
color:white;
height:24px;
margin-left:auto;
width:100px;
border-radius:3px;
margin-right:10px;
cursor: pointer;
:hover{
height:34px;
width:120px;
font-size:20px;
    background-color:blue;
    color:yellow;
    opacity:0.7;
    /* transform:scale(0.2) */
}
`


Card.Title=styled.h3`
margin:20px;
text-align:center;
opacity:0.7;

`


export const Hr=styled.hr`
display:flex;
justify-content:center;
align-items:center;
width:100%;


`
export const Box=styled.div`
`





Box.Wrapper=styled.div`
display:flex;
width:100%;
justify-content:space-between;
align-items:center;
height:60px;
`
Box.Product=styled.div`

/* width:100%; */

font-size:20px;
color:black;
opacity:0.9;
margin-left:10px

`
Box.Delete=styled.button`
width:50px;
height:30px;
border-radius:3px;
margin-right:10px;
cursor: pointer;
color:green;
`
Box.Plus=styled.button`

width:15px;
height:17px;
font-weight:4px;
margin-left:190px;
margin-right:3px;

border-radius:50%;
border:none;
cursor: pointer;

`
Box.Quality=styled.div`
`

Box.Total=styled.h3`
margin-left:90px;
color:black;
margin-bottom:20px;

`
Box.Minus=styled.button`
margin-right:15px;
margin-left:3px;
border-radius:50%;
border:none;
font-size:15px;
cursor: pointer;

width:15px;
height:17px;
font-weight:4px;

border-radius:50%;
border:none;
cursor: pointer;

`
Box.button=styled.button`
`


