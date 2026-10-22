"use client";

import { useEffect } from "react";
import { mount } from "@/lib/companion";

let started = false;

// The app builds its own screens inside <div id="app">, exactly like the original HTML version.
export default function Companion() {
  useEffect(() => {
    // React runs effects twice in development; the app must only start once.
    if (started) return;
    started = true;
    mount();
  }, []);
  return <div id="app" />;
}
