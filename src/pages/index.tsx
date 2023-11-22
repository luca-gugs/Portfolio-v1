import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { About } from "~/components/About";
import { Experience } from "~/components/Experience";
import { Header } from "~/components/Header";
import { Projects } from "~/components/Projects";

export default function Home() {
  const divRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [closestSection, setClosestSection] = useState<string>("About");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };
  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };
  const handleMouseEnter = () => {
    setOpacity(1);
  };

  useEffect(() => {
    const handleScroll = () => {
      const distances = [
        aboutRef.current
          ? Math.abs(aboutRef.current.getBoundingClientRect().top)
          : Infinity,
        experienceRef.current
          ? Math.abs(experienceRef.current.getBoundingClientRect().top)
          : Infinity,
        projectsRef.current
          ? Math.abs(projectsRef.current.getBoundingClientRect().top)
          : Infinity,
      ];

      // console.log("distances", distances);

      // Find the index of the section with the minimum distance
      const minDistanceIndex = distances.indexOf(Math.min(...distances));
      setClosestSection(
        minDistanceIndex === 0
          ? "About"
          : minDistanceIndex === 1
            ? "Experience"
            : "Projects",
      );
    };

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect will run once when the component mounts
  console.log("closestSection", closestSection);
  return (
    <>
      <Head>
        <title>Luca Guglielmi</title>
        <meta
          name="description"
          content="Luca Guglielmi, Full-Stack Software Engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <div
          ref={divRef}
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          className="selection:text-teal-900; mx-auto min-h-screen max-w-screen-xl bg-slate-900 px-6 py-12 font-sans leading-relaxed text-slate-400 antialiased selection:bg-teal-300 md:px-12 md:py-20 lg:px-24 lg:py-0"
        >
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Header closestSection={closestSection} />

            <main className="pt-16 lg:w-1/2 lg:py-24 lg:pt-24">
              <About ref={aboutRef} />
              <Experience ref={experienceRef} />
              <Projects ref={projectsRef} />
            </main>
          </div>
          {/* Pointer Effect */}
          <div
            className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
            style={{
              opacity,
              background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
            }}
          />
        </div>
      </div>
    </>
  );
}
