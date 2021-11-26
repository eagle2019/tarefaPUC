import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useState } from "react";
import "./Detalhes.css";

function Detalhes({ listas }) {
  const params = useParams();
  const tarefa = listas.find(a => a.nome === params.nome);

  const [texto, setTexto] = useState(""); //

  const textChangeHandler = (event) => {
    //
    setTexto(event.target.value);
  };

  const submitHandler = (props) => {
    //
    props.onTarefaTexto(texto);
    setTexto("");
  };

  return (
    <div>
      <div>
        <Button variant="contained">Voltar</Button>
      </div>
      <div className="center">
        <h2>{tarefa}</h2>
        <div>
          <TextareaAutosize
            onChange={textChangeHandler}
            style={{ width: 490, height: 100 }}
            value={texto}
          >
            {tarefa}
          </TextareaAutosize>
        </div>
        <div className="bts">
          <Button 
              variant="contained" onClick={submitHandler}>
            Completar Tarefa
          </Button>
          <Button variant="contained">Cancelar Tarefa</Button>
        </div>
      </div>
    </div>
  );
}
export default Detalhes;
