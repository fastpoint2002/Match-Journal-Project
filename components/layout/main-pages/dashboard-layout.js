import HomeWrapper from "../HomeWrapper";
import DashPage from "./dashboard-components/dash-page";
import { useState } from "react";
import CreateMatchModal from "./dashboard-components/create-match-modal";

export default function DashboardDisplay() {
    const [hidden, setHidden] = useState("hidden");

    function modalHandler() {
      if (hidden === "") {
        setHidden("hidden");
      } else {
        setHidden("");
      }
    }

    
  
    return (
    <HomeWrapper>
      <DashPage modalHandler={modalHandler}/>
      <CreateMatchModal modalHandler={modalHandler} hidden={hidden}/>
    </HomeWrapper>
  );
}
