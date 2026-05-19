"use client";

import { useState, useEffect } from "react";

/* -----------------------------
   NAV STRUCTURE
------------------------------*/

type Section =
  | "home"
  | "photography"
  | "videography"
  | "music"
  | "video-essays"
  | "writing"
  | "about"
  | "contact";

const navItems: { id: Section; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "photography", label: "Photography" },
  { id: "videography", label: "Videography" },
  { id: "music", label: "Music" },
  { id: "video-essays", label: "Video Essays" },
  { id: "writing", label: "Writing" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

/* -----------------------------
   MAIN PAGE
------------------------------*/

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<Section>("home");

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-5">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm tracking-wide transition-colors ${
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="mx-auto max-w-6xl px-6 py-16">
        {activeSection === "home" && <Home />}
        {activeSection === "about" && <About />}
        {activeSection === "contact" && <Contact />}
        {activeSection !== "home" &&
          activeSection !== "about" &&
          activeSection !== "contact" && (
            <ComingSoon section={activeSection} />
          )}
      </main>
    </div>
  );
}

/* -----------------------------
   HOME (CINEMATIC HERO)
------------------------------*/

function Home() {
  return (
    <div className="grid gap-16 md:grid-cols-2 items-center">
      
      {/* TEXT */}
      <div>
        <p className="text-3xl md:text-4xl font-light leading-tight">
          Tobias Robertson
        </p>

        <p className="mt-6 text-muted-foreground leading-relaxed">
          Interdisciplinary filmmaker and multimedia artist working across
          video essays, photography, music, and experimental narrative forms.
        </p>

        <p className="mt-6 text-muted-foreground leading-relaxed">
          My work explores attention, digital systems, memory, and perception
          in contemporary media environments.
        </p>
      </div>

      {/* VISUAL BLOCK */}
      <div className="aspect-[4/5] overflow-hidden bg-neutral-900">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900"
          alt="Portrait"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

/* -----------------------------
   ABOUT
------------------------------*/

function About() {
  return (
    <div className="max-w-2xl space-y-6 leading-relaxed">
      <h1 className="text-2xl">About</h1>

      <p className="text-muted-foreground">
        I am a filmmaker, writer, and interdisciplinary artist based in Australia.
      </p>

      <p className="text-muted-foreground">
        My practice sits between essay film, photography, and sound design,
        focusing on how media systems shape human attention and cultural perception.
      </p>
    </div>
  );
}

/* -----------------------------
   CONTACT
------------------------------*/

function Contact() {
  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-2xl">Contact</h1>

      <p className="text-muted-foreground">
        For collaborations or commissions:
      </p>

      <a
        href="mailto:your@email.com"
        className="text-foreground underline underline-offset-4"
      >
        your@email.com
      </a>
    </div>
  );
}

/* -----------------------------
   FALLBACK SECTION
------------------------------*/

function ComingSoon({ section }: { section: string }) {
  return (
    <div className="text-muted-foreground">
      <h1 className="text-xl capitalize">{section}</h1>
      <p className="mt-4">This section is coming soon.</p>
    </div>
  );
}
