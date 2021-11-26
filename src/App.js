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
    { nome: "Arroz", texto: "teste" },
    { nome: "Feijão", texto: "teste" },
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
            <Tarefa onTarefaTexto={cadastrarNome} />
          </div>
          <hr></hr>
          <div className="bottom">
            <ModelList listas={listas} />
          </div>
        </Route>
        <Route path="/tarefa/:nome" component={listas}>
        {/* <Route path={['/tarefa', ...listas.map(a => a.nome)]}> */}
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
