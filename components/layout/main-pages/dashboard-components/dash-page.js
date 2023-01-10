export default function DashPage(props) {
  return (
    <body className="bg-gray-100">
      <div className="flex items-center justify-around bg-white py-4 px-6">
        <h1 className="text-3xl font-medium">Matches</h1>
        <button className="rounded-lg bg-green-500 py-2 px-4 font-medium text-white hover:bg-green-600" onClick={props.modalHandler}>
          Create Match
        </button>
      </div>
      <div className="mx-6 my-8 flex flex-col items-center">
        <div className="mb-4 max-w-sm overflow-hidden rounded-lg bg-white shadow-md">
          {/* <img className="w-full" src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Match image"> */}
          <div className="px-6 py-4">
            <div className="mb-2 text-lg font-medium">Match Title</div>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700">
              #tag1
            </span>
            <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700">
              #tag2
            </span>
            <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700">
              #tag3
            </span>
          </div>
        </div>
        <div className="mb-4 max-w-sm overflow-hidden rounded-lg bg-white shadow-md">
          {/* <img className="w-full" src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Match image"> */}
          <div className="px-6 py-4">
            <div className="mb-2 text-lg font-medium">Match Title</div>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700">
              #tag1
            </span>
            <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700">
              #tag2
            </span>
            <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700">
              #tag3
            </span>
          </div>
        </div>
        <div className="mb-4 max-w-sm overflow-hidden rounded-lg bg-white shadow-md">
          {/* <img className="w-full" src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Match image"> */}
          <div className="px-6 py-4">
            <div className="mb-2 text-lg font-medium">Match Title</div>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700">
              #tag1
            </span>
            <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700">
              #tag2
            </span>
            <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700">
              #tag3
            </span>
          </div>
        </div>
      </div>
    </body>
  );
}
