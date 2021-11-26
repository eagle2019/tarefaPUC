import Checkbox from "@mui/material/Checkbox";
import Paper from '@mui/material/Paper';
import './list.css'

function Lista({ list }) {
  return (
    <div className="list">
    <div className="card">
      <Paper elevation={8} className="text">
          {list.nome}
          <Checkbox {...list} />
      </Paper>
    </div>
    </div>
  );
}

export default Lista;