
import react, { useState } from 'react'
import { toast } from 'react-toastify'

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
const se = []
const bot = []

const Cutive = () => {
    const [csec,setCsec]= useState();
    const [num, setNum] = useState();
    


    const addAll = () => {

        

        const myArr = String(num).split("").map((num) => {
            if (num == 1 || num == 0) {


                return Number(num)
            }
            else {
               
                    console.log('therv not zero and one');
                    toast('therv not zero and one', { type: "error" })
                }
            }
    )


        console.log(myArr)


   // consectiveOne()

   // const consectiveOne =()=>{
        var Count = 0;
        var MaxCounsectMeOne =0;
        for (var i=0;i< myArr.length;i++){
              if(myArr[i]==1){
                  Count++;
                  MaxCounsectMeOne= Math.max(Count,MaxCounsectMeOne)

              }
              else{
                  Count=0;
              }
              console.log( MaxCounsectMeOne);
              bot.push(MaxCounsectMeOne)
              console.log(bot);
              setCsec(bot[bot.length-1]);
         

        }
 
   // }
}

    return (

        
        <>
        <h1>Find the maximum consecutive 1's in an array of 0's and 1's.
</h1>
            
            <h1>Enter the 0,1 input eg 1010111110</h1>
            <div>
                <FormGroup>
                    <Input
                        type="number"
                        name="number"
                        id="phonenumber"
                        value={num}
                        onChange={e => setNum(e.target.value)}

                        placeholder="zero or one"
                    />
                    <Button onClick={addAll}> addzeroAll</Button>

                    <h1>{num}</h1>
                    <h1>output</h1>
                    <h4>{ csec}</h4>

                </FormGroup>

            </div>
        </>
    )
}

export default Cutive
