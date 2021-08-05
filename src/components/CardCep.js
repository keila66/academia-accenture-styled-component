import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { Styled } from "./styles";

function CardCep() {
  const [cep, setCep] = useState({});
  const [cepNum, setCepNum] = useState(0);

  function handleTextChange(e) {
    e.preventDefault();
    setCepNum(e.target.value);
  }

  function handleClick() {
    fetch(`https://viacep.com.br/ws/${cepNum}/json`)
      .then((res) => res.json())
      .then((res) => setCep(res));
  }

  useEffect(() => {
    document.getElementById("button").disabled = true;
    if (cepNum.length === 8) {
      document.getElementById("button").disabled = false;
    }
  });

  return (
    <Styled.Div>
      <Styled.Form>
        <Row className="mb-3">
          <h1>Buscar Cep</h1>
          <Styled.FormGroup as={Col} controlId="formGridEmail">
            <Styled.Input
              className="cep"
              name="cep"
              type="text"
              placeholder="Insira o cep"
              onChange={handleTextChange}
              maxLength="8"
            />
            <Styled.Button onClick={handleClick} variant="primary" id="button">
              Pesquisar
            </Styled.Button>
          </Styled.FormGroup>
        </Row>
        <Styled.Card>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label>Cidade</Form.Label>
              <Styled.Input
                className="input"
                type="text"
                value={cep.localidade}
                readonly
                width="100%"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Bairro</Form.Label>
              <Styled.Input
                className="input"
                type="text"
                value={cep.bairro}
                readonly
                width="80%"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label>Endereço</Form.Label>
              <Styled.Input
                className="input"
                type="text"
                value={cep.logradouro}
                readonly
                width="100%"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>UF</Form.Label>
              <Styled.Input
                className="input"
                type="text"
                value={cep.uf}
                readonly
                width="30%"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Complemento</Form.Label>
              <Styled.Input
                className="input"
                type="text"
                value={cep.complemento}
                readonly
                width="48%"
              />
            </Form.Group>
          </Row>
        </Styled.Card>
      </Styled.Form>
    </Styled.Div>
  );
}

export default CardCep;
