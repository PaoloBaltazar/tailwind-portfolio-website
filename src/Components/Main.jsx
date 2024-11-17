"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import About from './About';
import Skills from './Skills';
import { Projects } from './Projects';
import Contact from './Contact';
import { useMediaQuery } from 'react-responsive';

export function Main() {
  const isMobile = useMediaQuery({ maxWidth: 640 }); // Tailwind's `sm` breakpoint

  return (
    <>
      {isMobile ? (
        <div className="px-4 max-w-6xl mt-24 sm:mt-36">
          <div className="max-w-4xl mx-auto antialiased pt-4 relative">
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
        </div>
      ) : (
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
      )}
    </>
  );
}
