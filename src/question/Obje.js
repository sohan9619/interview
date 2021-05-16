import React,{ useState } from 'react'
import {
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Spinner,
    Row,
    Col
} from "reactstrap"
const Obje = () => {
    const[ data ,setData]= useState()

    const x=[]
   const order= ()=>{
    const obj = [
       { id : 4, name : "abc",},
      {  id : 10, name : "ab2",},
      {  id : 5, name : "abc3",},
       { id : 6, name : "abc5",}
    ]

console.log(x);
 function byid(a,b){
  return parseInt(a.id)-parseInt(b.id)
}
setData(obj.sort(byid))
//setData(x)
console.log(data);

   }
 //setData(obj.sort(byid));

    

       
    return (
        <>
        <div>
            <h1>double onClick</h1>
        <Button onClick={order}>order</Button>
        <h4>Output in console</h4>
    
        </div>

        
        
        </>
    )
}

export default Obje
