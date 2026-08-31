import Link from "next/link";

export default function Home() {
  return (
    <main className="page">
      <div className="hero">
        <span className="badge">🎓 StudyAI</span>

        <h1>Learn smarter with your own AI study tutor.</h1>

        <p>
          Upload study material, ask questions, create notes and practice
          with AI.
        </p>

        <div className="actions">
          <Link className="btn" href="/signup">
            Get Started
          </Link>

          <Link className="btn secondary" href="/login">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
