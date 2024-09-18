// Components
import { Icon } from "../Icon";

type GoogleSignInProps = {
  onClick: () => void;
};

export function GoogleSignIn(props: GoogleSignInProps) {
  const { onClick } = props;

  return (
    <button
      aria-label="Sign in with Google"
      className="flex space-x-2 bg-white font-semibold py-3 rounded-full px-3.5"
      onClick={onClick}
    >
      <Icon icon="Google" size={24} />
      <span className=" text-gray-500">Sign in with Google</span>
    </button>
  );
}
