import { Container, Card, Row, Text, Button } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import { Input  } from '@nextui-org/react';
import axios from "axios";
import { useState } from "react";


  

export default function App() {

    const [data,setdata] = useState({
        name : "",
        email :"",
        password :"",
    })

    const HandleInput = (e) =>{
        const thename = e.target.name;
        const value = e.target.value;
        setdata((prev)=>{

            return {...prev,[thename]:value}
        })
    }

    const Submit = () =>{

        axios.post('http://localhost:4001/insertdata/user',{
            name : data.name,
            email : data.email,
            password : data.password
        }).then(()=>{
            console.log("data inserted..");
        }).catch((err)=>{
            console.log(err);
        })
    }


  return (
    <Container>
    <Spacer y={3}/>
      <Card css={{ $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Row justify="center" align="center">
            <Text h6 size={15} color="white" css={{ m: 0 }}>
            Welcome Our Next Form  
            </Text>
          </Row>
        </Card.Body>
      </Card>

      <Spacer y={1}/>
      <Card css={{ $$cardColor: '$colors$primary' }}>
        <Card.Body>
        <Spacer y={1}/>
          <Row justify="center" align="center">
          <Input labelPlaceholder="Name" name="name" value={data.name} onChange={HandleInput} />
          
          </Row>

        <Spacer y={2}/>
          <Row justify="center" align="center">
          <Input labelPlaceholder="Email" name="email" value={data.email} onChange={HandleInput}/>
          
          </Row>
          <Spacer y={2} />
          <Row justify="center" align="center">
         
      <Input.Password
        labelPlaceholder="Password"
        name="password"
        value={data.password}
        onChange={HandleInput}
      />
          
          </Row>
          <Spacer y={1} />
          <Row justify="center" align="center">
            <Button color="success" onPress={Submit} auto>Submit</Button>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
