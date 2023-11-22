import React, { forwardRef } from "react";
import Image from "next/image";

export const Projects = forwardRef<HTMLElement, unknown>((props, ref) => {
  return (
    <section
      ref={ref}
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <h3 className="sticky bottom-0 top-0 z-30 w-full bg-slate-900 py-4 text-lg font-semibold text-white lg:hidden">
        Projects
      </h3>
      <div>
        <ol>
          {[
            {
              image: "/welcome.png",
              description:
                "I lead the way on our customer facing onboarding experience titled Welcome To EasyKnock. From ideating it during a hackathon when I built a document upload app for a transaction manager who was complaing about scowering their inbox for mortgage statements, I was able to bring this product to life via strong collaboration with partners in design and product. Currently we are working to integrate this web app with box.com for greater cross department visibility as well as porting our estimate page over from another repo into this one to make the customer experience more seamless.",
              dates: "Jan `22 - Present",
              link: "https://welcome.easyknock.com/",
              title: "Welcome to EasyKnock Portal",
              techUsed: [
                "React",
                "Next.js",
                "TRPC",
                "Prisma",
                "Planetscale",
                "Tailwind",
                "Box.com",
              ],
            },
            {
              image: "/vaeske.png",
              description:
                "Currently working on building out a platform to pair home owners with home equity investors",
              dates: "Jan `22 - Present",
              link: "https://www.vaeske.co/home",
              title: "væske",
              techUsed: [
                "React",
                "Next.js",
                "TRPC",
                "Clerk",
                "Drizzle",
                "Planetscale",
                "Tailwind",
              ],
            },
          ].map(({ description, title, link, techUsed, image }, idx) => {
            return (
              <li key={idx} className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-3">
                    {/* {dates} */}
                    <Image
                      className="w-full"
                      src={image}
                      height={100}
                      width={100}
                      alt="easyknock"
                    />
                  </header>
                  <div className="z-10 sm:col-span-5">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          href={link}
                          className="group/link flex flex-wrap items-center text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span className="flex items-center">
                            {title}
                            <svg
                              stroke="white"
                              fill="white"
                              strokeWidth={0.1}
                              className="ml-1 mt-[-5px] inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">{description}</p>
                    {techUsed.length > 0 && (
                      <ul className="mt-2 flex  flex-wrap">
                        {techUsed.map((item, idx) => {
                          return (
                            <li
                              key={idx}
                              className="mr-1.5 mt-1.5 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                            >
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";
