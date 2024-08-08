import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { SignOutButton } from "../../components/SignOutButton";

import { WorkoutRecord } from "../../containers/WorkoutRecord";

export function Workout() {
  const { signOutUser } = useContext(AuthContext);

  return (
    <div className="w-full">
      <div className="w-full flex justify-end">
        <button
          className="border-2 border-red-500"
          onClick={() => signOutUser()}
        >
          Sign Out
        </button>
      </div>
      <WorkoutRecord />
    </div>
  );
}
