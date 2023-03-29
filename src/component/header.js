import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../redux/redouseur";

const TachHeader = () => {
    const tasks = useSelector((state)=>{const { todo } = state.todo;
  return todo});
    const undoneTasks =tasks.filter((t) => t.isDone === false);
    const dispatch = useDispatch();

    return (
      <header className="d-flex justify-content">
        <h1>React Todo List</h1>
        <h3>
          Tâches à faire : <strong>{undoneTasks.length}</strong>
        </h3>
        <select name="filtre" onChange={(e)=>dispatch(Filter(e.target.value))}>
            <option value=""></option>
            <option value="done">réalisé</option>
            <option value="notDone">non réalisé</option>
        </select>
      </header>
    );
  };
  
  export default TachHeader;