
import react, { useState } from 'react'
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


const Raneven = () => {




//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
  const [remodom, setRemodom] = useState(["0"])
  const [phoneNumber, setPhoneNumber] = useState("");
  var so = []
  const add = () => {
    console.log(phoneNumber);
    setRemodom([...remodom, phoneNumber])
    console.log(remodom)
    setPhoneNumber('')
  }

  for (var i = 0; i < remodom.length; i++)
    if (remodom[i] % 2 === 0) {
      so.push(remodom[i]);
      console.log(so);
    }
  return (
    <>
                

    

      <h1>The Random Number of arry enter  one elemented at time in arry  </h1>

      <FormGroup>
        <Input
          type="number"
          name="number"
          id="phonenumber"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}

          placeholder="phone number"
        />
        <Button
          type="submit"
          color="primary"
          block
          className="text-uppercase"
          onClick={add}>add number</Button>

      </FormGroup>

      <h1 >{remodom} </h1>

      <h1>Print the even number of arry</h1>
      <h1>{so}</h1>
      </>



  )
}

export default Raneven;