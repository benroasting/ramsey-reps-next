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
      <ul className="TabNav flex justify-center mb-4">
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
      <hr className="flex m-auto h-1 w-1/4 rounded-2xl border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4" />
      <div className="TabBody flex m-auto mb-3">
        {(() => {
          switch (activeTab) {
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
