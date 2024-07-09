import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchModuleDetails } from "../../redux/moduleSlice";
import EditModuleDialog from "../EditModule/EditModule";
import HistoricalDataChart from "../HistoricData/HistoricalData";
import socket from "../../utils/socket";
import { ListWrapper } from "../ModuleList/ModuleList.styled";
import { DetailDiv } from "./Module.Details.styled";
import { WrapperDetail } from "./Module.Details.styled";
const ModuleDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const module = useSelector((state) => state.modules.module);
  const [currentTemperature, setCurrentTemperature] = useState("N/A");
  const [showEditDialog, setShowEditDialog] = useState(false);


  useEffect(() => {
    dispatch(fetchModuleDetails(id));

    socket.on("temperatureUpdate", (data) => {
      if (data.id === id) {
        setCurrentTemperature(data.temperature);
      }
    });

    return () => {
      socket.off("temperatureUpdate");
    };
  }, [dispatch, id]);

  if (!module) {
    return <div>Loading...</div>;
  }

  return (
    <DetailDiv>

  
      <Link to="/">
        <button>Back to List </button>{" "}
      </Link>
      <WrapperDetail>
      <ListWrapper>
      <h1>{module.name}</h1>

<p>{module.description}</p>

      </ListWrapper>
      <ListWrapper>
      <p>Available: {module.available ? "Yes" : "No"}</p>
      <p>Target Temperature: {module.targetTemperature}°C</p>
      <p
        style={{
          color:
            currentTemperature >= module.targetTemperature - 0.5 &&
            currentTemperature <= module.targetTemperature + 0.5
              ? "green"
              : "red",
        }}
      >
        Current Temperature: {currentTemperature}°C
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
        <button>Back to List </button>{" "}
      </Link>
    </DetailDiv>
  );
};

export default ModuleDetail;
