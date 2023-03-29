import { useSelector } from "react-redux";
import Tache from "./Tache";

const ListTache = () => {
    const states = useSelector((state)=> {
        const { todo, filter } = state.todo;
        if (filter === 'done') {
          return todo.filter(task => task.isDone);
        } else if (filter === 'notDone') {
          return todo.filter(task => !task.isDone);
        } else {
          return todo;
        }
      });
  return (
    <>
      <div className="dev">
    <table className="table">
       <tr>
            <th>Tache</th>
            <th>supprime</th>
            <th>modifier</th>
        </tr>
      {states.map((t) => (
        <Tache
          key={t.id}
          task={t}
        />
      ))}
      </table> 
      </div> 
    </>
  );
};

export default ListTache;
