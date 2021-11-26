import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./tarefa.css";

function Tarefa(props) {
  const [nome, setNome] = useState('');
  const [texto, setTexto] = useState('');

  const nomeChangeHandler = (event) => {
    setNome(event.target.value);
  };

  const textChangeHandler = (event) => {
    setTexto(event.target.value);
  }

  const submitHandler = () => {
    props.onTarefaTexto(nome, texto);
    setNome("");
    setTexto("");
  };

  return (
    <div>
      <div className="margintop">
        <TextField
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          onChange={nomeChangeHandler}
          value={nome}
          style={{ width: 500 }}
        />
      </div>
      <div className="margintop">
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Texto"
          style={{ width: 490, height: 100 }}
          onChange={textChangeHandler}
          value={texto}
        />
      </div>
      <div className="margintop">
        <Button variant="contained" onClick={submitHandler}>
          Criar Tarefa
        </Button>
      </div>
    </div>
  );
}
export default Tarefa;
