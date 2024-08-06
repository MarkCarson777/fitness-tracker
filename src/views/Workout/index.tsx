import { SignOutButton } from "../../components/SignOutButton";

import { WorkoutRecord } from "../../containers/WorkoutRecord";

export function Workout() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-end">
        <SignOutButton />
      </div>
      <WorkoutRecord />
    </div>
  );
}
