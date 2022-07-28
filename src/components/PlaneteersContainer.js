import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({ planeteers }) {
  return (
    <ul className="cards">
      {planeteers.map(planeteer => <Planeteer key={planeteer.id} planeteer={planeteer} />)}
    </ul>
  );
}

export default PlaneteersContainer;
