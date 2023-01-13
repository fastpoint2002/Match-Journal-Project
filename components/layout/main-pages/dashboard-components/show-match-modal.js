import { useSupabaseClient } from "@supabase/auth-helpers-react";


export default function ShowMatchModal(props) {
  const mainClassString = props.hidden;
  const data = props.data[props.matchIndex];
  const supabase = useSupabaseClient()

  async function deleteMatchHandler() {
    const id = data.id;

    if (id < 10000000000) {
      const { data2, error2 } = await supabase
        .from("matches")
        .delete()
        .eq("id", id);
      
      delete props.data[props.matchIndex]
    }
    props.showMatchModalHandler.call()
  }

  if (props.matchIndex) {
    return (
      // hides and unhides the modal
      <div className={mainClassString}>
        <div
          className={
            "fixed inset-x-0 bottom-20 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
          }
        >
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div className="transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-2 sm:p-6 sm:pb-4">
              <div className="mt-4 flex items-center justify-between px-4">
                <div className="text-center sm:mt-0 sm:text-left">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    View Match
                  </h3>
                </div>
                <div className="">
                  <button
                    type="button"
                    className="text-green-500 transition duration-150 ease-in-out hover:text-green-600 focus:underline focus:outline-none"
                    onClick={props.showMatchModalHandler}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col justify-start px-4 py-5 sm:px-6 sm:py-5"
              id="viewMatch"
            >
              <div className="flex justify-between">
                <div className="py-5">
                  <label className="block text-sm font-medium leading-5 text-gray-700">
                    Opponent
                  </label>
                  <div className="form-input mt-1 rounded-md border border-gray-400 py-2 px-3 leading-5 text-gray-900">
                    {data.opponent ?? "N/A"}
                  </div>
                </div>
                <div className="ml-3 mr-16 py-5">
                  <label className="block text-sm font-medium leading-5 text-gray-700">
                    Singles/Doubles
                  </label>
                  <div className="form-input mt-1 rounded-md border border-gray-400 py-2 px-3 leading-5 text-gray-900">
                    {data.is_singles ? "Singles" : "Doubles"}
                  </div>
                </div>
              </div>
              <div className="flex justify-between align-middle">
                <div className="py-5">
                  <label className="block text-sm font-medium leading-5 text-gray-700">
                    Date
                  </label>
                  <div className="form-input mt-1 rounded-md border border-gray-400 py-2 px-3 leading-5 text-gray-900">
                    {data.date ?? "N/A"}
                  </div>
                </div>
                <div className="mr-16 py-5">
                  <label className="block text-sm font-medium leading-5 text-gray-700">
                    Surface
                  </label>
                  <div className="form-input mt-1 rounded-md border border-gray-400 py-2 px-3 leading-5 text-gray-900">
                    {data.surface ?? "N/A"}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="py-5">
                  <label className="block text-sm font-medium leading-5 text-gray-700">
                    Win/Loss
                  </label>
                  <div className="form-input mt-1 rounded-md border border-gray-400 py-2 px-3 leading-5 text-gray-900">
                    {data.is_win ? "Won" : "Lost"}
                  </div>
                </div>
                <div className="ml-6 mr-16 flex flex-col">
                  <label className="block text-sm font-medium leading-5 text-gray-700">
                    Score
                  </label>
                  <div className="form-input mt-1 rounded-md border border-gray-400 py-2 px-3 leading-5 text-gray-900">
                    {data.score ?? "N/A"}
                  </div>
                </div>
              </div>

              <div className="py-5">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                  Notes
                </label>
                <div className="form-input w-full rounded-md border border-gray-400 py-2 px-3 leading-5 text-gray-900">
                  {data.notes ?? "N/A"}
                </div>
              </div>
              <div className="flex items-center justify-end">
                <p className="mr-4 text-left text-xs text-slate-400">
                  Might have to refresh for delete to work if just added (temporary bug)
                </p>
                <p className="mr-4 text-right text-xs text-slate-400">
                  Warning - There is no confirmation for delete
                </p>
                <button
                  onClick={deleteMatchHandler}
                  className="focus:shadow-outline-red inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium leading-5 text-white hover:bg-orange-500 focus:border-orange-700 focus:outline-none active:bg-orange-800"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
