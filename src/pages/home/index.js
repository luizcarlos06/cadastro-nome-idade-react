import React, { useState, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Container, H1, Image, ContainerItens, InputLabel, Input, Button } from "./styles";
import People from '../../assets/people.svg';
import Arrow from '../../assets/arrow.svg'



function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()
  const history = useHistory()


  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", { name: inputName.current.value, age: inputAge.current.value });

    setUsers([...users, newUser]);

    history.push('./usuarios')
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>



        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /> </Button>


      </ContainerItens>
    </Container>
  );
}

export default App;