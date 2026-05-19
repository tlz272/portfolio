"use client";

import { useState, useEffect } from "react";

// Content data - replace with your actual content
const photos = [
  { title: "Photo Series One", year: "2024", image: "" },
  { title: "Photo Series Two", year: "2023", image: "" },
  { title: "Photo Series Three", year: "2023", image: "" },
  { title: "Photo Series Four", year: "2022", image: "" },
  { title: "Photo Series Five", year: "2022", image: "" },
  { title: "Photo Series Six", year: "2021", image: "" },
];

const videography = [
  { title: "Video One", year: "2024", embedUrl: "" },
  { title: "Video Two", year: "2023", embedUrl: "" },
];

const music = [
  { title: "Track One", year: "2024", embedUrl: "" },
  { title: "Track Two", year: "2023", embedUrl: "" },
];

const videoEssays = [
  { title: "Video Essay One", year: "2024", embedUrl: "" },
  { title: "Video Essay Two", year: "2023", embedUrl: "" },
];

const writings = [
  { title: "Essay One", year: "2024", link: "#" },
  { title: "Essay Two", year: "2023", link: "#" },
  { title: "Essay Three", year: "2022", link: "#" },
];

type Section = "home" | "photography" | "videography" | "music" | "video-essays" | "writing" | "about" | "contact";

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

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`group relative text-sm font-normal tracking-wide transition-colors ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-foreground hover:text-muted-foreground"
                }`}
              >
                {item.label}
                {/* Underline animation */}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-current transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {activeSection === "home" && <HomeSection />}
        {activeSection === "photography" && <PhotographySection />}
        {activeSection === "videography" && <VideographySection />}
        {activeSection === "music" && <MusicSection />}
        {activeSection === "video-essays" && <VideoEssaysSection />}
        {activeSection === "writing" && <WritingSection />}
        {activeSection === "about" && <AboutSection />}
        {activeSection === "contact" && <ContactSection />}
      </main>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm transition-all duration-300 hover:bg-card ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </div>
  );
}

function HomeSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-73px)] overflow-hidden">
      {/* Portrait - right side */}
      <div
        className={`absolute right-0 top-0 h-full w-1/2 md:w-3/5 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
      >
        <div className="h-full w-full bg-muted">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop"
            alt="Portrait"
            className="h-full w-full object-cover object-center"
            crossOrigin="anonymous"
          />
        </div>
      </div>

      {/* Bio - left side */}
      <div className="relative z-10 flex min-h-[calc(100vh-73px)] items-center px-6 md:px-12 lg:px-24">
        <div
          className={`max-w-md transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-serif text-lg leading-relaxed text-foreground md:text-xl md:leading-relaxed">
            <span className="font-medium">Tobias Robertson</span> is an interdisciplinary
            filmmaker, writer, and multimedia artist based in Australia, working across
            video essays, photography, and sound.
          </p>
          <p className="mt-6 font-serif text-lg leading-relaxed text-foreground md:text-xl md:leading-relaxed">
            His practice explores how digital systems, media environments, and cultural
            structures shape attention, memory, and perception — spanning long-form video
            essays, documentary photography, and music.
          </p>
        </div>
      </div>
    </div>
  );
}

function PhotographySection() {
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({
    open: false,
    index: 0,
  });

  const openLightbox = (index: number) => setLightbox({ open: true, index });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });

  const nextImage = () =>
    setLightbox((prev) => ({ ...prev, index: (prev.index + 1) % photos.length }));
  const prevImage = () =>
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + photos.length) % photos.length,
    }));

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox.open) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox.open]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="mb-8 font-serif text-3xl">Photography</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className="group text-left"
          >
            <div className="aspect-[4/5] overflow-hidden bg-card">
              {photo.image ? (
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  crossOrigin="anonymous"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  Add image
                </div>
              )}
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="font-serif text-lg transition-colors group-hover:text-muted-foreground">
                {photo.title}
              </span>
              <span className="text-xs text-muted-foreground">{photo.year}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute right-6 top-6 text-foreground transition-colors hover:text-muted-foreground"
            aria-label="Close lightbox"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 text-foreground transition-colors hover:text-muted-foreground"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 text-foreground transition-colors hover:text-muted-foreground"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="max-h-[85vh] max-w-[85vw]"
            onClick={(e) => e.stopPropagation()}
          >
            {photos[lightbox.index].image ? (
              <img
                src={photos[lightbox.index].image}
                alt={photos[lightbox.index].title}
                className="max-h-[85vh] max-w-[85vw] object-contain"
                crossOrigin="anonymous"
              />
            ) : (
              <div className="flex h-[60vh] w-[60vw] items-center justify-center bg-card text-muted-foreground">
                No image available
              </div>
            )}
            <p className="mt-4 text-center font-serif text-lg">
              {photos[lightbox.index].title}{" "}
              <span className="text-muted-foreground">({photos[lightbox.index].year})</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function VideographySection() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="mb-8 font-serif text-3xl">Videography</h2>
      <div className="space-y-12">
        {videography.map((video, i) => (
          <div key={i} className="group">
            <div className="aspect-video overflow-hidden bg-card transition-all duration-300 group-hover:ring-1 group-hover:ring-border">
              {video.embedUrl ? (
                <iframe
                  src={video.embedUrl}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                  Add embed URL
                </div>
              )}
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="font-serif text-lg">{video.title}</span>
              <span className="text-xs text-muted-foreground">{video.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MusicSection() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="mb-8 font-serif text-3xl">Music</h2>
      <div className="space-y-8">
        {music.map((track, i) => (
          <div key={i} className="group">
            <div className="aspect-[3/1] overflow-hidden bg-card transition-all duration-300 group-hover:ring-1 group-hover:ring-border">
              {track.embedUrl ? (
                <iframe
                  src={track.embedUrl}
                  className="h-full w-full"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                  Add Spotify/SoundCloud embed URL
                </div>
              )}
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="font-serif text-lg">{track.title}</span>
              <span className="text-xs text-muted-foreground">{track.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VideoEssaysSection() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="mb-8 font-serif text-3xl">Video Essays</h2>
      <div className="space-y-12">
        {videoEssays.map((essay, i) => (
          <div key={i} className="group">
            <div className="aspect-video overflow-hidden bg-card transition-all duration-300 group-hover:ring-1 group-hover:ring-border">
              {essay.embedUrl ? (
                <iframe
                  src={essay.embedUrl}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                  Add embed URL
                </div>
              )}
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="font-serif text-lg">{essay.title}</span>
              <span className="text-xs text-muted-foreground">{essay.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WritingSection() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="mb-8 font-serif text-3xl">Writing</h2>
      <div className="space-y-0">
        {writings.map((essay, i) => (
          <a
            key={i}
            href={essay.link}
            className="group flex items-baseline justify-between border-t border-border py-6 transition-colors first:border-t-0"
          >
            <span className="font-serif text-lg transition-colors group-hover:text-muted-foreground">
              {essay.title}
            </span>
            <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">
              {essay.year}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="mb-8 font-serif text-3xl">About</h2>
      <div className="space-y-6 font-serif text-lg leading-relaxed md:text-xl md:leading-relaxed">
        <p>
          Add your full biography here. This section can include your background, education,
          artistic philosophy, and any other information you want visitors to know about you.
        </p>
        <p>
          You can include multiple paragraphs, links to publications, exhibitions, or other
          accomplishments. The serif typography gives this section a refined, editorial feel.
        </p>
      </div>
    </div>
  );
}

function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your form handling logic
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="mb-8 font-serif text-3xl">Contact</h2>
      
      <div className="grid gap-12 md:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-6 font-serif text-lg">
          <p className="text-muted-foreground">
            For inquiries, collaborations, or commissions:
          </p>
          <div className="space-y-3">
            <p>
              <a
                href="mailto:your@email.com"
                className="underline underline-offset-4 transition-colors hover:text-muted-foreground"
              >
                your@email.com
              </a>
            </p>
            <div className="flex gap-6">
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-all hover:text-foreground hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-all hover:text-foreground hover:-translate-y-0.5"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="https://vimeo.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-all hover:text-foreground hover:-translate-y-0.5"
                aria-label="Vimeo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          {submitted ? (
            <div className="flex h-full items-center justify-center">
              <p className="font-serif text-lg text-muted-foreground">
                Thank you for your message. I&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full border-b border-border bg-transparent py-3 font-serif text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full border-b border-border bg-transparent py-3 font-serif text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full resize-none border-b border-border bg-transparent py-3 font-serif text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="mt-4 border border-foreground bg-transparent px-8 py-3 font-sans text-sm tracking-wide text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
