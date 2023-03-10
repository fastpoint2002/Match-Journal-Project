export default function DashItems(props) {
  if (props.data.length == 0) {
    return (
      <div className="mx-6 my-8 flex flex-col items-center">
        <div className="mb-4 max-w-sm overflow-hidden rounded-lg bg-white shadow-md">
          <div className="flex flex-col items-start px-6 py-4">
            {/* Card Title */}
            <div className="mb-2 text-lg font-medium">
              You have no matches to show
            </div>
            {/* Card Description */}
            <p className="text-left text-base text-gray-500">
              Get started by hitting the create match button!
            </p>
          </div>
        </div>
      </div>
    );
  }

  function formatDate(dateString) {
    const dateArray = dateString.split("-");
    return `${dateArray[1]}/${dateArray[2]}/${dateArray[0].slice(2)}`;
  }

  return (
    <div className="mx-6 my-8 flex flex-col items-center">
      {/* Maps each match from the matches.json file */}
      {props.data.map((match, index) => (
        <button
          onClick={props.showMatchModalHandler}
          key={match.id}
          id={index}
          className="mb-4 w-96 max-w-sm overflow-hidden rounded-lg bg-white shadow-md"
        >
          <div className="flex flex-col items-start px-6 py-4">
            {/* Card Title */}
            <div className="mb-2 text-lg font-medium">
              Match against {match.opponent}
            </div>
            {/* Card Description */}
            <p className="text-left text-base text-gray-700">
              {match.notes &&
                match.notes.length > 84 &&
                match.notes.slice(0, 80) + "..."}
              {match.notes && !(match.notes.length > 84) && match.notes}
            </p>
          </div>
          <div className="flex items-center px-6 py-4">
            {/* Win Loss Tag */}
            {match.is_win && (
              <span className="mr-2 inline-block rounded-full bg-green-200 px-3 py-1 text-sm font-medium text-gray-800">
                Win
              </span>
            )}
            {!match.is_win && (
              <span className="mr-2 inline-block rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-gray-800">
                Loss
              </span>
            )}
            {/* Match Type Tag */}
            <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700">
              {match.is_singles && <>Singles</>}
              {!match.is_singles && <>Doubles</>}
            </span>
            {/* Score Tag */}
            <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700">
              {match.score}
            </span>
            {/* Date Tag */}
            {match.date && (
              <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700">
                {/* {match.date} */}
                {formatDate(match.date)}
              </span>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
