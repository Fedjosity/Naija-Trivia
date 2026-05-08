"use client";

import { useState } from "react";
import clsx from "clsx";
import SendIcon from "@mui/icons-material/Send";

export default function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Subscription failed");

      setStatus("success");
      setMessage("Welcome aboard! Check your inbox 🎉");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again!");
    }

    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 4000);
  };

  return (
    <form onSubmit={handleSubmit} className={clsx("relative", className)}>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-text-primary text-sm placeholder:text-text-muted outline-none focus:border-naija-green/50 focus:ring-1 focus:ring-naija-green/30 transition-all duration-300"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={clsx(
            "px-5 py-3 rounded-xl bg-gradient-to-r from-naija-green to-naija-green-light text-white text-sm font-semibold transition-all duration-300 cursor-pointer",
            "hover:shadow-lg hover:shadow-naija-green/25 hover:scale-[1.02]",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
            "flex items-center gap-2"
          )}
        >
          <SendIcon sx={{ fontSize: 16 }} />
          <span className="hidden sm:inline">
            {status === "loading" ? "..." : "Subscribe"}
          </span>
        </button>
      </div>
      {message && (
        <p
          className={clsx(
            "mt-2 text-xs",
            status === "success" ? "text-naija-green-light" : "text-red-400"
          )}
        >
          {message}
        </p>
      )}
    </form>
  );
}
