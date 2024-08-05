import { signOutUser } from "../../firebase/auth";

export function SignOutButton() {
  return (
    <button className="border-2 border-red-500" onClick={() => signOutUser()}>
      Sign Out
    </button>
  );
}
