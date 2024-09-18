// React
import { useContext } from "react";
// Routing
import { Link, useNavigate } from "react-router-dom";
// Contexts
import { AuthContext } from "../../contexts/AuthContext";
// Components
import { GoogleSignIn } from "../../components/GoogleSignIn";
// Containers
import { LoginForm } from "../../containers/LoginForm";

export function Login() {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <main className="container relative flex flex-col h-screen justify-center items-center bg-black-500">
      <header className="sr-only">
        <h1>Login to Fit Tracker</h1>
      </header>
      <section
        aria-labelledby="login-section"
        className="max-w-56 md:max-w-72 lg:max-w-96 space-y-2 w-full"
      >
        <h2 id="login-section" className="sr-only">
          Sign in to your account
        </h2>
        <LoginForm />
        <div className="space-y-2 flex flex-col items-center">
          <GoogleSignIn
            onClick={async () => {
              await googleSignIn();
              navigate("/workout");
            }}
          />
          <p className="space-x-1 text-xs">
            <span className="text-white">Don't have an account?</span>
            <Link
              className="text-primary-500 underline hover:no-underline"
              to="/signup"
              aria-label="Sign up for an account"
            >
              Sign up
            </Link>
          </p>
        </div>
      </section>
      <footer
        className="absolute left-8 bottom-8 flex flex-col text-6xl md:text-8xl lg:text-9xl text-white"
        aria-label="Fit Tracker"
      >
        <span>Fit</span>
        <span>Tracker.</span>
      </footer>
    </main>
  );
}
