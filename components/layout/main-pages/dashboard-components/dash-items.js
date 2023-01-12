import useSWR from "swr";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function DashItems() {
  //Set up SWR to run the fetcher function when calling "/api/staticdata"
  //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  //   Gets data from the matches.json file 
  const { data, error, isLoading } = useSWR('/api/getMatchData', fetcher)

  
  //Handle the error state
  if (error) return <div>failed to load</div>
  //Handle the loading state
  if (isLoading) return <div>loading...</div> 
  
  const matchData = JSON.parse(data)

  return (
    <div className="mx-6 my-8 flex flex-col items-center">
        {/* Maps each match from the matches.json file */}
      {matchData.map((match) => (
        <button key={match.id} className="mb-4 max-w-sm overflow-hidden rounded-lg bg-white shadow-md">
          <div className="flex flex-col items-start px-6 py-4">
            {/* Card Title */}
            <div className="mb-2 text-lg font-medium">
              Match Against {match.opponent}
            </div>
            {/* Card Description */}
            <p className="text-left text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex px-6 py-4">
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
            {/* Date Tag */}
            {match.date && (<span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700">
              {match.date}
            </span>)}
            {/* Match Type Tag */}
            <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700">
              {match.is_singles && (<>Singles</>)}
              {!match.is_singles && (<>Doubles</>)}
            </span>
            {/* Score Tag */}
            <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700">
              {match.score}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
