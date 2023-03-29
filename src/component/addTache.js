import { useState } from "react";
import { addTache } from "../redux/redouseur";
import { useDispatch } from "react-redux";

const AddTach = (props) => {
  const [desc, setDesc] = useState("");
  const dispash = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispash(addTache(desc))
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit} className="input-group">
        <samp className="input-group-text text-primary bg-transparent border border-primary">Ajouter une tâche</samp>
      <input
      className="form-control bg-transparent border border-primary"
        type="text"
        placeholder="Ajouter une tâche"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
    </form>
  );
};

export default AddTach;
