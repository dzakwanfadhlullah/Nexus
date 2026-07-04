"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;

    const syncPlayback = () => {
      const video = videoRef.current;
      if (!video) return;

      if (mediaQuery.matches || !visible || document.hidden) {
        video.pause();
        if (mediaQuery.matches) video.currentTime = 0;
        return;
      }

      void video.play().catch(() => {
        // The poster remains visible when a browser blocks autoplay.
      });
    };

    syncPlayback();
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        syncPlayback();
      },
      { threshold: 0.08 }
    );
    if (videoRef.current) observer.observe(videoRef.current);

    const syncVisibility = () => syncPlayback();
    mediaQuery.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncVisibility);
    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncVisibility);
    };
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
