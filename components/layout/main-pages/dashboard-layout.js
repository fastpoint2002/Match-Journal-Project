import HomeWrapper from "../HomeWrapper";
import DashPage from "./dashboard-components/dash-page";
import { useState } from "react";
import CreateMatchModal from "./dashboard-components/create-match-modal";
import ShowMatchModal from "./dashboard-components/show-match-modal";

export default function DashboardDisplay(props) {
  const [hidden1, setHidden1] = useState("hidden");
  const [hidden2, setHidden2] = useState("hidden");
  const [matchIndex, setMatchIndex] = useState(null);

  function modalHandler() {
    if (hidden1 === "") {
      setHidden1("hidden");
    } else {
      setHidden1("");
    }
  }

  function showMatchModalHandler(event) {
    if (hidden2 === "") {
      setMatchIndex(null);
      setHidden2("hidden");
    } else {
      setMatchIndex(event.currentTarget.id);
      setHidden2("");
    }
  }

  return (
    <HomeWrapper>
      <DashPage
        showMatchModalHandler={showMatchModalHandler}
        modalHandler={modalHandler}
        user={props.user}
        data={props.data}
      />
      <CreateMatchModal
        modalHandler={modalHandler}
        user={props.user}
        hidden={hidden1}
        data={props.data}
      />
      <ShowMatchModal
        matchIndex={matchIndex}
        showMatchModalHandler={showMatchModalHandler}
        user={props.user}
        hidden={hidden2}
        data={props.data}
      />
    </HomeWrapper>
  );
}
