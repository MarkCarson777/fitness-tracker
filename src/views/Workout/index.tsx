import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import { SignOutButton } from "../../components/SignOutButton";
import { WorkoutRecord } from "../../containers/WorkoutRecord";

export function Workout() {
  const { signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="w-full flex justify-end">
        <button
          className="border-2 border-red-500"
          onClick={async () => {
            await signOutUser();
            navigate("/");
          }}
        >
          Sign Out
        </button>
      </div>
      <WorkoutRecord />
    </div>
  );
}
