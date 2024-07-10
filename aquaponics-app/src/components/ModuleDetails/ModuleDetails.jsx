import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchModuleDetails } from "../../redux/thunks/module.thunk";
import { initializeSocket } from "../../redux/slices/temperatureSlice";

import EditModuleDialog from "../EditModule/EditModule";
import HistoricalDataChart from "../HistoricData/HistoricalData";
import CurrentTemperature from "../CurrentTemperature/CurrentTemperature";

import { ListWrapper } from "../ModuleList/ModuleList.styled";
import { DetailDiv, WrapperDetail } from "./Module.Details.styled";

const ModuleDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const module = useSelector((state) => state.modules.module);
  const [showEditDialog, setShowEditDialog] = useState(false);

  useEffect(() => {
    dispatch(fetchModuleDetails(id));
    dispatch(initializeSocket());

    return () => {};
  }, [dispatch, id]);

  if (!module) {
    return <div>Loading...</div>;
  }

  return (
    <DetailDiv>
      <Link to="/">
        <button>Back to List</button>
      </Link>
      <WrapperDetail>
        <ListWrapper>
          <h1>{module.name}</h1>
          <p>{module.description}</p>
        </ListWrapper>
        <ListWrapper>
          <p>Available: {module.available ? "Yes" : "No"}</p>
          <p>Target Temperature: {module.targetTemperature}°C</p>
          <p>
            Current Temperature:{" "}
            <CurrentTemperature
              moduleId={module.id}
              targetTemperature={module.targetTemperature}
            />
          </p>
        </ListWrapper>
      </WrapperDetail>
      <button
        onClick={() => setShowEditDialog(true)}
        disabled={!module.available}
      >
        Edit Module
      </button>

      {showEditDialog && (
        <EditModuleDialog
          module={module}
          onClose={() => setShowEditDialog(false)}
        />
      )}
      <HistoricalDataChart moduleId={id} />
      <Link to="/">
        <button>Back to List</button>
      </Link>
    </DetailDiv>
  );
};

export default ModuleDetail;
