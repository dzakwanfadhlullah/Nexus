"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPlayback = () => {
      const video = videoRef.current;
      if (!video) return;

      if (mediaQuery.matches) {
        video.pause();
        video.currentTime = 0;
        return;
      }

      void video.play().catch(() => {
        // The poster remains visible when a browser blocks autoplay.
      });
    };

    syncPlayback();
    mediaQuery.addEventListener("change", syncPlayback);
    return () => mediaQuery.removeEventListener("change", syncPlayback);
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/images/hero/nexus-ascii-poster.png"
      disablePictureInPicture
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/videos/nexus-ascii-hero.mp4" type="video/mp4" />
    </video>
  );
}
