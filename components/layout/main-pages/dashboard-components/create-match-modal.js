import { useRef } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function CreateMatchModal(props) {
  const supabase = useSupabaseClient();
  const mainClassString = props.hidden;
  const opponentRef = useRef();
  const dateRef = useRef();
  const isWinRef = useRef();
  const scoreRef = useRef();
  const surfaceRef = useRef();
  const notesRef = useRef();
  const singlesRef = useRef();
  // let tempId = 10000000000;

  async function submitFormHandler(event) {
    // can use this to prevent reload but won't for now because needs to fetch after sending
    // good for debugging as well
    event.preventDefault();

    const opponent = opponentRef.current.value;
    const date = dateRef.current.value;
    const is_win = isWinRef.current.value;
    const score = scoreRef.current.value;
    const surface = surfaceRef.current.value;
    const notes = notesRef.current.value;
    const singles = singlesRef.current.value;

    const did_win = is_win === "Win" ? true : false;
    const is_singles = singles === "Singles" ? true : false;

    // tempId++;
    // updates local match data file
    // props.data.push({
    //   id: 101010101,
    //   opponent: opponent,
    //   username: props.user.username, // required
    //   is_win: did_win, // required
    //   date: date,
    //   notes: notes,
    //   is_singles: is_singles, // required
    //   score: score, // required
    //   surface: surface,
    //   user_id: props.user.id, // required
    // });

    const newMatchData = {};

    // add keys to object if valid to prevent error in uploading to database
    opponent !== null ? (newMatchData.opponent = opponent) : null;
    props.user.username !== null
      ? (newMatchData.username = props.user.username)
      : null;
    did_win !== null ? (newMatchData.is_win = did_win) : null;
    date !== null ? (newMatchData.date = date) : null;
    notes !== null ? (newMatchData.notes = notes) : null;
    is_singles !== null ? (newMatchData.is_singles = is_singles) : null;
    score !== null ? (newMatchData.score = score) : null;
    surface !== null ? (newMatchData.surface = surface) : null;
    props.user.id !== null ? (newMatchData.user_id = props.user.id) : null;

    // testing
    // console.log({
    //   opponent: opponent,
    //   username: props.user.username, // required
    //   is_win: did_win, // required
    //   date: date,
    //   notes: notes,
    //   is_singles: is_singles, // required
    //   score: score, // required
    //   surface: surface,
    //   user_id: props.user.id, // required
    // });

    // sends new match to supabase
    const { data, error } = await supabase
      .from("matches")
      .insert([newMatchData])
      .select();

    props.data.push(data[0]);
    props.modalHandler.call();
    document.getElementById("newMatch").reset();
  }

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
                  Create Match
                </h3>
              </div>
              <div className="">
                <button
                  type="button"
                  className="text-green-500 transition duration-150 ease-in-out hover:text-green-600 focus:underline focus:outline-none"
                  onClick={props.modalHandler}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
          <form
            onSubmit={submitFormHandler}
            className="flex flex-col justify-start px-4 py-5 sm:px-6 sm:py-5"
            id="newMatch"
          >
            <div className="flex justify-between">
              <div className="py-5">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                  <div className="flex">
                    Opponent<p className="text-orange-600">*</p>
                  </div>
                </label>
                <input
                  required
                  placeholder="Nick Kyrgios"
                  className="form-input mt-1 rounded-md border border-gray-400 py-2 px-3 leading-5 text-gray-900"
                  type="text"
                  ref={opponentRef}
                />
              </div>
              <div className="ml-3 mr-16 py-5">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                  <div className="flex">
                    Singles/Doubles<p className="text-orange-600">*</p>
                  </div>
                </label>
                <div className="relative">
                  <select
                    ref={singlesRef}
                    required
                    className="form-select rounded-md border border-gray-400 bg-white py-2 px-3 leading-5 text-gray-900 focus:border-blue-500 focus:outline-none"
                  >
                    <option>Singles</option>
                    <option>Doubles</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-between align-middle">
              <div className="py-5">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                  <div className="flex">
                    Date<p className="text-orange-600">*</p>
                  </div>
                </label>
                <input
                  required
                  className="form-input mt-1 rounded-md border border-gray-400 py-2 px-3 leading-5 text-gray-900"
                  type="date"
                  ref={dateRef}
                />
              </div>
              <div className="mr-16 py-5">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                  <div className="flex">
                    Surface<p className="text-orange-600">*</p>
                  </div>
                </label>
                <div className="relative">
                  <select
                    required
                    ref={surfaceRef}
                    className="form-select rounded-md border border-gray-400 bg-white py-2 px-3 leading-5 text-gray-900 focus:border-blue-500 focus:outline-none"
                  >
                    <option>Hard</option>
                    <option>Indoor</option>
                    <option>Clay</option>
                    <option>Grass</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="py-5">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                  <div className="flex">
                    Win/Loss<p className="text-orange-600">*</p>
                  </div>
                </label>
                <div className="relative">
                  <select
                    ref={isWinRef}
                    required
                    className="form-select rounded-md border border-gray-400 bg-white py-2 px-3 leading-5 text-gray-900 focus:border-blue-500 focus:outline-none"
                  >
                    <option>Win</option>
                    <option>Loss</option>
                  </select>
                </div>
              </div>
              <div className="ml-6 mr-16 flex flex-col">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                  <div className="flex">
                    Score<p className="text-orange-600">*</p>
                  </div>
                </label>
                <input
                  required
                  className="form-input rounded-md border border-gray-400 py-2 px-3 leading-5 text-gray-900"
                  type="text"
                  placeholder="6-0 6-0"
                  ref={scoreRef}
                />
              </div>
            </div>

            <div className="py-5">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Notes
              </label>
              <textarea
                placeholder="Other important match factors - we will be upgrading the form in the future!"
                className="form-input w-full rounded-md border border-gray-400 py-2 px-3 leading-5 text-gray-900"
                rows="5"
                ref={notesRef}
              ></textarea>
            </div>
            <div className="flex items-end justify-between">
              <p className="text-left text-orange-600">*Required</p>
              <button
                type="submit"
                className="focus:shadow-outline-green inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium leading-5 text-white hover:bg-green-500 focus:border-green-700 focus:outline-none active:bg-green-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
