import "./App.css";
import * as React from "react";
import Tarefa from "./components/tarefa";
import ModelList from "./components/model-list";
import Detalhes from "./components/Detalhes";
import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "@mui/material/Container";
import Headers from "./components/Headers";

function App() {
  const demoData = [
    { _id: 'uni0', nome: "Arroz", texto: "teste" },
    { _id: 'uni1', nome: "Feijão", texto: "teste" },
  ];

  const [listas, setListas] = useState(demoData);

  const cadastrarNome = (novoNome) => {
    setListas([novoNome, ...listas]);
  };

  return (
    <Container>
      <Headers />
      <hr></hr>
      <Switch>
        <Route path="/" exact>
          <div className="media">
            <Tarefa id={listas.length} onTarefaTexto={cadastrarNome} />
          </div>
          <hr></hr>
          <div className="bottom">
            <ModelList listas={listas} />
          </div>
        </Route>
        <Route path="/tarefa/:_id">
          <Detalhes listas={listas}/>
        </Route>
        <Route path="*">
          <h1> Page not found. </h1>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
