import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import api from "../../api";
import { useHistory } from "react-router-dom";
import LoginImage from "../../assets/images/login_image.svg";
import {
  Container,
  RightContainer,
  LeftContainer,
  Title,
  Button,
  InlineButton,
} from "../styles";
import { LinkContainer } from "react-router-bootstrap";

const RegisterPage = () => {
  const [usernameReg, setusernameReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");

  const history = useHistory();

  const handleSubmit = event => {  
    event.preventDefault();  
    api
        .post("auth/register", { username: usernameReg, password: passwordReg })
        .then((response) => {
          console.log(response);
          history.push("login")
        })
      .catch((error) =>  {
      console.log(error);
      alert("Esse usuário e senha já está cadastrado.")
    })
  };

  return (
    <Container>
      <Row>
        <Col>
          <LeftContainer>
            <Title>CADASTRO</Title>
            <Form onSubmit={handleSubmit} >
              <Form.Group controlId="formGroupEmail">
                <Form.Control
                  type="E-mail"
                  placeholder="E-mail"
                  value={usernameReg}
                  onChange={(e) => setusernameReg(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Control
                  type="password"
                  placeholder="Senha"
                  value={passwordReg}
                  onChange={(e) => setpasswordReg(e.target.value)}
                />
              </Form.Group>
              <Button type="submit">Cadastrar</Button>
            </Form>
            <LinkContainer to="/login">
              <InlineButton>Já possui cadastro? Entre aqui.</InlineButton>
            </LinkContainer>
          </LeftContainer>
        </Col>
        <RightContainer>
          <img src={LoginImage} alt="Imagem de Login" id="image" />
        </RightContainer>
      </Row>
    </Container>
  );
};

export default RegisterPage;
