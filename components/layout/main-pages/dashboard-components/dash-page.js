import DashItems from "./dash-items";

export default function DashPage(props) {
  return (
    <div className="h-min-screen bg-gray-100">
      <div className="flex items-center justify-around bg-white py-4 px-6">
        <h1 className="text-3xl font-medium">Matches</h1>
        <button
          className="rounded-lg bg-green-500 py-2 px-4 font-medium text-white hover:bg-green-600"
          onClick={props.modalHandler}
        >
          Create Match
        </button>
      </div>
      <DashItems
        data={props.data}
        matchIndex={props.matchIndex}
        showMatchModalHandler={props.showMatchModalHandler}
        hidden={props.hidden}
      />
    </div>
  );
}
