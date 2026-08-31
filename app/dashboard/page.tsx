"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase/client";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setEmail(user.email || "");
    }

    checkUser();
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  return (
    <main className="page">
      <div className="card dashboard">
        <div className="top">
          <span className="badge">🎓 StudyAI</span>

          <button className="btn secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <h1>Your Study Dashboard 📚</h1>

        <p>Welcome, {email}</p>

        <div className="grid">
          <div className="tile">
            📄 <b>My Documents</b>
            <small>Upload and study your material</small>
          </div>

          <div className="tile">
            🤖 <b>AI Tutor</b>
            <small>Ask questions from your study material</small>
          </div>

          <div className="tile">
            ✨ <b>AI Notes</b>
            <small>Generate revision-ready notes</small>
          </div>

          <div className="tile">
            📝 <b>Practice</b>
            <small>MCQs and answer evaluation</small>
          </div>
        </div>
      </div>
    </main>
  );
}
