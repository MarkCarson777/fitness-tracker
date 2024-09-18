// Routing
import { Link } from "react-router-dom";
// Containers
import { SignupForm } from "../../containers/SignupForm";

export function Signup() {
  return (
    <main className="relative flex flex-col h-screen w-full justify-center items-center bg-black-500">
      <header className="sr-only">
        <h1>Sign up to Fit Tracker</h1>
      </header>
      <section
        aria-labelledby="signup-section"
        className="max-w-56 md:max-w-72 lg:max-w-96 space-y-2 w-full"
      >
        <h2 id="signup-section" className="sr-only">
          Sign up for an Account
        </h2>
        <SignupForm />
        <p className="space-x-1 text-xs flex justify-center">
          <span className="text-white">Already have an account?</span>
          <Link
            className="text-primary-500 underline hover:no-underline"
            to="/"
            aria-label="Log In"
          >
            Log in
          </Link>
        </p>
      </section>
      <footer
        className="absolute left-8 bottom-8 flex flex-col text-6xl md:text-8xl lg:text-9xl text-white"
        aria-label="Fit Tracker"
      >
        <span>Sign Up.</span>
      </footer>
    </main>
  );
}
