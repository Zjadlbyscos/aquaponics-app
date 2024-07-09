import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateModule } from "../../redux/moduleSlice";
import { EditDiv } from "../ModuleDetails/Module.Details.styled";

const EditModuleDialog = ({ module, onClose }) => {
  const [name, setName] = useState(module.name);
  const [description, setDescription] = useState(module.description);
  const [targetTemperature, setTargetTemperature] = useState(
    module.targetTemperature
  );
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSave = () => {
    if (
      !name ||
      !description ||
      targetTemperature < 0 ||
      targetTemperature > 40
    ) {
      setError("Please fill in all fields correctly.");
      return;
    }

    dispatch(
      updateModule({
        id: module.id,
        updatedData: { name, description, targetTemperature },
      })
    );
    onClose();
  };

  return (
    <>
      <h2>Edit Module</h2>
      <EditDiv>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Target Temperature:
          <input
            type="number"
            value={targetTemperature}
            onChange={(e) => setTargetTemperature(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </EditDiv>
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </>
  );
};

export default EditModuleDialog;
