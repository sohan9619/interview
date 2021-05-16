import React, { useState } from 'react'
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
const Sorte = () => {
    const [so, setSo] = useState()
    const [points, SetPoints] = useState()
    const [repeated, setRepeated] = useState()
    const [ret, setRet] = useState([])

    const rep = []




    const Sortadd = () => {
        console.log(points);
        const myArr = String(points).split("").map((points) => {
        console.log( points)
            return Number(points)

        }
        )
        console.log(myArr);

        myArr.sort(function (a, b) { return a - b })
        console.log(myArr);

       // console.log(so);
        for (var i = 0; i < myArr.length; i++) {
          for (var j = i+1; j < myArr.length; j++) {
              if (myArr[i] === myArr[j]) {
              console.log(myArr[i]);
             rep.push(myArr[i]);
            
             
              }
            }
       }
          

       // console.log(so.length);
console.log(rep);
       setSo(rep);


    }
    
		



   
    return (
        <>
           <h1>Write a js code to find the repeated number.</h1>
            <div>
                <FormGroup>
                    <Input
                        type="number"
                        name="number"
                        id="phonenumber"
                        value={points}
                        onChange={e => SetPoints(e.target.value)}

                        placeholder="zero or one"
                    />
                    <Button onClick={Sortadd}> Sortadd</Button>

                    <h1>{points}</h1>
                    <h1>output</h1>
                    <h4>{so}</h4>

                </FormGroup>

            </div>

        </>
    )

}
export default Sorte;
