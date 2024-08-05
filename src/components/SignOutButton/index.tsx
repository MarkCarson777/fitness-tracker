import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";

export function SignOutButton() {
  const { signOut } = useContext(AuthContext);

  return (
    <button className="border-2 border-red-500" onClick={() => signOut()}>
      Sign Out
    </button>
  );
}
