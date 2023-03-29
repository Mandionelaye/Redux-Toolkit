import { useDispatch } from "react-redux";
import { deleteTache, modifTache, togelle } from "../redux/redouseur";
import { useState } from "react";


const Tache = (props) => {
    const {task} = props;
    const dispash = useDispatch();
    const [mode,setMode]= useState(false);
    const [desc,setDesc]= useState();
    const [id,setId]= useState();
    function handleSubmit(e){
        e.preventDefault();
        dispash(modifTache({id:id, desc:desc}));
        setId("");
        setDesc("");
        setMode(false);
    }
    return (
        <tr>
            <td>
        <div className="form-check form-switch">
          <input
          className="form-check-input"
            type="checkbox"
            checked={task.isDone}
            onChange={() => dispash(togelle(task.id))}
          />
          <label className="form-check-label">
          {task.description}
          </label>
          </div>
          </td>
          <td>
          <samp
            onClick={() =>{dispash(deleteTache(task.id))}}
           role="button"
           className="btn btn-outline-primary btn-sm"
          >
            supprime
          </samp>
          </td>
          <td>
          <samp
            onClick={() =>{setMode(!mode); setId(task.id)}}
           role="button"
           className="btn btn-outline-primary btn-sm "
          >
            modifie
          </samp>
          </td>
          {mode?
            <td>
                <form onSubmit={handleSubmit}>
                <input
                className="form-control"
                    type="text"
                    placeholder="Ajouter une tâche"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                </form>
            </td>
            :null}
          
          </tr>
    );
  };
  
  export default Tache;
  