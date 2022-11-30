import React, { useState } from "react";
import Link from "next/link";
import PushUpTab from "./Tabs/PushUpTab";
import SitUpTab from "./Tabs/SitUpTab";
import SquatsTab from "./Tabs/SquatsTab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("pushUp");

  const pushUpHandler = () => {
    setActiveTab("pushUp");
  };

  const sitUpHandler = () => {
    setActiveTab("sitUp");
  };

  const squatHandler = () => {
    setActiveTab("squat");
  };
  return (
    <div className="TabContainer">
      <ul className="TaNav">
        <li
          className={activeTab === "pushUp" ? "active" : ""}
          onClick={pushUpHandler}
        >
          Push Ups
        </li>
        <li
          className={activeTab === "sitUp" ? "active" : ""}
          onClick={sitUpHandler}
        >
          Sit Ups
        </li>
        <li
          className={activeTab === "squat" ? "active" : ""}
          onClick={squatHandler}
        >
          Squats
        </li>
      </ul>
      <div className="TabBody">
        {(() => {
          switch (tab) {
            case "pushUp":
              return <PushUpTab />;
            case "sitUp":
              return <SitUpTab />;
            case "squat":
              return <SquatsTab />;
            default:
              return <PushUpTab />;
          }
        })()}
      </div>
    </div>
  );
};

export default Tabs;
