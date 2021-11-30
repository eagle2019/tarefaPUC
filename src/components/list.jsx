import Checkbox from "@mui/material/Checkbox";
import Paper from '@mui/material/Paper';
import './list.css'
import { useHistory } from 'react-router-dom';

function Lista({ list }) {
  const history = useHistory();
  
  const clickHandler = () => {
    history.push(`/tarefa/${list._id}`)
}

  return (
    <div className="list">
    <div className="card">
      <Paper elevation={8} className="text" onClick={clickHandler}>
          {list.nome}
          <Checkbox {...list} />
      </Paper>
    </div>
    </div>
  );
}

export default Lista;