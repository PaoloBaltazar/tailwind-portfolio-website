"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";


import javascript from '../assets/javascript.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import python from '../assets/python.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'

const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <section className="text-white content-center">
        <div className="justify-items-center mb-8">
          <div>
            <h1 className="font-primaryBold text-3xl lg:text-5xl text-center">Skills</h1>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />
          </div>
          
          
          <h2 className="font-primaryMedium text-lg mt-2 lg:text-xl text-center">
            These are the technologies I’ve worked with
          </h2>
          
        </div>

        <div className="grid gap-8 justify-items-center md:grid-cols-2 lg:grid-cols-3">
          <Card title="JavaScript" icon={<img src={javascript} alt="Tailwind Icon" className="h-16 w-16" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [255, 255, 255],
              [245, 245, 245],
            ]}
            dotSize={2} />
          {/* Radial gradient for the cute fade */}
          <div
            className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>

        <Card title="React.js" icon={<img src={react} alt="Tailwind Icon" className="h-16 w-16" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [255, 255, 255],
              [245, 245, 245],
            ]}
            dotSize={2} />
          {/* Radial gradient for the cute fade */}
          <div
            className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>

        <Card title="Python" icon={<img src={python} alt="Tailwind Icon" className="h-16 w-16" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [255, 255, 255],
              [245, 245, 245],
            ]}
            dotSize={2} />
          {/* Radial gradient for the cute fade */}
          <div
            className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>

        <Card title="HTML" icon={<img src={html} alt="Tailwind Icon" className="h-16 w-16" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [255, 255, 255],
              [245, 245, 245],
            ]}
            dotSize={2} />
          {/* Radial gradient for the cute fade */}
          <div
            className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>

        <Card title="CSS" icon={<img src={css} alt="Tailwind Icon" className="h-16 w-16" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [255, 255, 255],
              [245, 245, 245],
            ]}
            dotSize={2} />
          {/* Radial gradient for the cute fade */}
          <div
            className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>

        <Card title="Tailwind" icon={<img src={tailwind} alt="Tailwind Icon" className="h-16 w-16" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [255, 255, 255],
              [245, 245, 245],
            ]}
            dotSize={2} />
          {/* Radial gradient for the cute fade */}
          <div
            className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        </div>
      </section>

    </div>
  )
}

const Card = ({
  title,
  icon,
  children
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[15rem]">
      
      {/* Static Icons */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      {/* CanvasRevealEffect with hover animation */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0 z-10">
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icon and Title */}
      <div className="relative z-20 flex flex-col items-center">
        <div className="text-center w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl text-black mt-4 font-bold">
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({
  className,
  ...rest
}) => {
  return (
    (<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>)
  );
};

export default Skills;