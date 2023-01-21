import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRef } from "react";
import HomeWrapper from "../HomeWrapper";
import { useState } from "react";

export default function ProfilePageBody(props) {
  const supabase = useSupabaseClient();
  const nameRef = useRef();
  const typeRef = useRef();
  const [name, setName] = useState(
    props.user.full_name ? props.user.full_name : undefined
  );

  async function profileHandler() {
    const name = nameRef.current.value;
    const pType = typeRef.current.value;
    const player = pType === "Player" ? true : false;

    const { data, error } = await supabase
      .from("profiles")
      .update({ full_name: name, isPlayer: player })
      .eq("id", props.user.id)
      .select();

    // get reassign error with the bottom code
    // props.user = data[0];
  }

  return (
    <HomeWrapper>
      <form className="h-min-screen bg-gray-100">
        <div className="flex items-center justify-around bg-white py-4 px-6">
          <h1 className="text-3xl font-medium">Profile</h1>
          <button
            className="rounded-lg bg-green-500 py-2 px-4 font-medium text-white hover:bg-green-600"
            type="submit"
            onClick={profileHandler}
          >
            Update Profile
          </button>
        </div>
        <div className="flex flex-col items-center p-2">
          <div className="rounded-sm bg-white p-4">
            <div className="mb-4 flex items-center ">
              <p>Full Name:</p>
              <input
                required
                className="form-input ml-4 rounded-md border border-gray-400 py-2 px-3 leading-5 text-gray-900"
                type="text"
                ref={nameRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <p>Account Type:</p>
              <select
                required
                className="form-input ml-4 rounded-md border border-gray-400 py-2 px-3 leading-5 text-gray-900"
                type="text"
                ref={typeRef}
                defaultValue={props.user.isPlayer ? "Player" : "Coach"}
              >
                <option>Player</option>
                <option>Coach</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </HomeWrapper>
  );
}
