import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import { Button } from "../../components/Button";
import { SignOutButton } from "../../components/SignOutButton";
import { WorkoutRecord } from "../../containers/WorkoutRecord";

export function Workout() {
  const { signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen w-full justify-center items-center bg-black-500">
      <div className="w-full flex justify-end">
        <Button
          color="danger"
          onClick={async () => {
            await signOutUser();
            navigate("/");
          }}
        >
          Sign Out
        </Button>
      </div>
      <WorkoutRecord />
    </div>
  );
}
