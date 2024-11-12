"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import About from './About'
import Skills from './Skills'
import { Projects } from './Projects'
import Contact from './Contact'

export function Main() {
  return (
    <TracingBeam className="px-6 max-w-6xl mt-36">
      <div className="max-w-5xl mx-auto antialiased pt-4 relative">
        <div id="About">
          <About />
        </div>
        <div id="Skills">
          <Skills />
        </div>
        <div id="Projects">
          <Projects />
        </div>
        <div id="Contact">
          <Contact />
        </div>
      </div>
    </TracingBeam>
  );
}
