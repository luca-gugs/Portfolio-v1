import {
  IconBookmarks,
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

type HeaderProps = {
  closestSection: string;
};
export const Header = ({ closestSection }: HeaderProps) => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 ">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Luca Guglielmi
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full-Stack Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build exceptional and accessible digital experiences for the web.
        </p>
        <nav className="nav hidden lg:block">
          <ul className="mt-16 w-max">
            {[
              { text: "About", link: "#about" } as {
                text: string;
                link: string;
              },
              { text: "Experience", link: "#experience" } as {
                text: string;
                link: string;
              },
              { text: "Projects", link: "#projects" } as {
                text: string;
                link: string;
              },
            ].map((item: { text: string; link: string }, idx) => {
              const isActive = item.text === closestSection;
              return (
                <li key={idx}>
                  <a href={item.link} className="group flex items-center py-3">
                    <span
                      className={`nav-indicator ${
                        isActive ? "w-16 !bg-slate-200" : ""
                      } mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                    ></span>
                    <span
                      className={`nav-text ${
                        isActive ? "!text-slate-200" : ""
                      } text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200`}
                    >
                      {item.text}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="mt-8 flex space-x-4 lg:mt-0">
        <Link
          href="https://github.com/lucarr722"
          className="transition-all hover:scale-150"
          target="_blank"
        >
          <IconBrandGithub size={25} />
        </Link>
        <Link
          href="https://x.com/lucadottsx"
          className="transition-all hover:scale-150"
          target="_blank"
        >
          <IconBrandX size={25} />
        </Link>
        {/* HIDE SUBSTACK */}
        {/* <Link
          href="https://lucagg.substack.com/"
          className="transition-all hover:scale-150"
          target="_blank"
        >
          <IconBookmarks size={25} className="" />
        </Link> */}
      </div>
    </header>
  );
};
