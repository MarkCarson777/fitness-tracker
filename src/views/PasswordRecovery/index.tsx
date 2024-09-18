// Routing
import { Link } from "react-router-dom";
// Containers
import { RecoveryForm } from "../../containers/RecoveryForm";

export function PasswordRecovery() {
  return (
    <main className="relative flex flex-col h-screen w-full justify-center items-center bg-black-500">
      <header className="sr-only">
        <h1>Fit Tracker password recovery</h1>
      </header>
      <section
        aria-labelledby="password-recovery-section"
        className="max-w-56 md:max-w-72 lg:max-w-96 space-y-2 w-full"
      >
        <h2 id="password-recovery-section" className="sr-only">
          Send email to recover password
        </h2>
        <RecoveryForm />
        <p className="space-x-1 text-xs flex justify-center">
          <Link
            className="text-primary-500 underline hover:no-underline"
            to="/"
            aria-label="Log In"
          >
            Back to login
          </Link>
        </p>
      </section>
      <footer
        className="absolute left-8 bottom-8 text-6xl md:text-8xl lg:text-9xl text-white"
        aria-label="Fit Tracker"
      >
        <span>Recovery.</span>
      </footer>
    </main>
  );
}
