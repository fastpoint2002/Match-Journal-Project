import HomeWrapper from "../HomeWrapper";
import DashModal from "./dashboard-components/dash-modal";
import DashPage from "./dashboard-components/dash-page";
import { useState } from "react";

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
      <DashModal modalHandler={modalHandler} hidden={hidden}/>
    </HomeWrapper>
  );
}
