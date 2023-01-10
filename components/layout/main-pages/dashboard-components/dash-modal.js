export default function DashModal(props) {
  const mainClassString = props.hidden;

  return (
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
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex items-center justify-between px-4">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Create Match
                </h3>
              </div>
              <div className="mt-4">
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
          <form className="flex flex-col justify-start px-4 py-3 sm:px-6 sm:py-5">
            <div className="mb-3">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Title
              </label>
              <input
                className="form-input mt-1 rounded-md border border-gray-400 py-2 px-3 leading-5 text-gray-900"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Date
              </label>
              <input
                className="form-input mt-1 rounded-md py-2 px-3 leading-5 text-gray-900"
                type="date"
              />
            </div>
            <div className="flex justify-between">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Win/Loss
              </label>
              <div className="relative inline-block text-left">
                <input
                  id="win"
                  type="radio"
                  name="winloss"
                  className="form-radio h-4 w-4 text-green-600 transition duration-150 ease-in-out"
                />
                <label for="win" className="ml-2">
                  Win
                </label>
              </div>
              <div className="relative ml-6 inline-block text-left">
                <input
                  id="loss"
                  type="radio"
                  name="winloss"
                  className="form-radio text-red-600 h-4 w-4 transition duration-150 ease-in-out"
                />
                <label for="loss" className="ml-2">
                  Loss
                </label>
              </div>
            </div>
            <div className="flex items-center">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Score
              </label>
              <input
                className="form-input mt-1 ml-8 rounded-md border border-gray-400 py-2 px-3 leading-5 text-gray-900"
                type="text"
                placeholder="Score"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Surface
              </label>
              <div className="relative">
                <select className="form-select rounded-md border border-gray-400 bg-white py-2 px-3 leading-5 text-gray-900 focus:border-blue-500 focus:outline-none">
                  <option>Hard</option>
                  <option>Indoor</option>
                  <option>Clay</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium leading-5 text-gray-700">
                Notes
              </label>
              <textarea
                className="form-input rounded-md border border-gray-400 py-2 px-3 leading-5 text-gray-900"
                rows="3"
              ></textarea>
            </div>
            <div className="flex justify-end">
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
