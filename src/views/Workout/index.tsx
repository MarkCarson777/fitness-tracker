import { SignOutButton } from "../../components/SignOutButton";

export function Workout() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-end">
        <SignOutButton />
      </div>
      <h1>Workout</h1>
    </div>
  );
}
