import { forwardRef } from "react";

export const Experience = forwardRef<HTMLElement, unknown>((props, ref) => {
  return (
    <section
      ref={ref}
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <h3 className="sticky bottom-0 top-0 z-30 w-full bg-slate-900 py-4 text-lg font-semibold text-white lg:hidden">
        Experience
      </h3>
      <div>
        <ol>
          {[
            {
              description:
                "As founding engineer, I've architected and built our entire technical infrastructure from the ground up. Developed a comprehensive customer dashboard, designed and implemented our core API, and built out our mobile application used by warehouses nation-wide. My role extended beyond coding to include on-site warehouse operations, direct customer engagement for product feedback, mentoring our growing engineering team, and collaborating with our founders on strategic product decisions. This full-spectrum involvement has allowed me to shape both our technical foundation and business direction while establishing scalable systems and engineering practices.",
              role: "Founding Engineer",
              dates: "July `24 - Present",
              company: "RetailReady (YC W24)",
              link: "https://www.retailreadyai.com/",
              techUsed: [
                "Next.js",
                "Flask",
                "ReactNative",
                "Expo",
                "DigitalOcean",
                "AWS",
              ],
            },
            {
              description:
                "Developed high-quality, robust production code for a diverse array of projects including serving as the lead engineer on our Customer Portal, building our document upload service, and refactoring our PandaDoc integration.",
              role: "Senior Software Engineer",
              dates: "Jan `22 - July `24",
              company: "EasyKnock",
              link: "https://www.easyknock.com/",
              techUsed: [
                "React",
                "Next.js",
                "Node.js",
                "NestJS",
                "TRPC",
                "Tailwind",
                "AWS",
              ],
            },
            {
              description:
                "Worked on full-stack applications with Node.js and React for both internal and external purposes. One notable project was our sales platform, used by over 80 sales reps to streamline the qualification and purchase single family homes. I also contributed to the architecture of a company website using Next.js and Styled Components.",
              role: "Software Engineer",
              dates: "Jan `20 - Dec `21",
              company: "EasyKnock",
              link: "https://www.easyknock.com/",
              techUsed: ["React", "Next.js", "Node.js", "NestJS", "GCP"],
            },
            {
              description:
                "Ahh my first job in tech! When I was brought in I worked on the companys first true in house site as prior they had been on hubspot. This role really allowed to get my hands dirty as the small team sized forced me to work closely with product and design and handle many of the devops work for getting the site up on heroku.",
              role: "Front End Software Engineer Intern",
              dates: "Sept `19 - Dec `19",
              company: "EasyKnock",
              link: "https://www.easyknock.com/",
              techUsed: [
                "React",
                "Next.js",
                "Node.js",
                "Styled Components",
                "Heroku",
              ],
            },
            {
              description:
                "While I was first teaching myself to code I worked as Biz Dev intern for a commerical furniture company. This was my first office job and taught me a lot about communication and collaboration. It also helped pay the bills while I taught myself to code each night.",
              role: "Business Development Intern",
              dates: "Jun `19 - Aug `19",
              company: "HeartWork",
              link: "https://heartwork.com/",
              techUsed: [],
            },
          ].map(
            ({ description, role, dates, company, link, techUsed }, idx) => {
              return (
                <li key={idx} className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                      {dates}
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          <a
                            href={link}
                            className="group/link flex flex-wrap items-center text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span className="mr-1">{role} - </span>
                            <span className="flex items-center">
                              {company}
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
                      <p className="mt-2 text-sm leading-normal">
                        {description}
                      </p>
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
            },
          )}
        </ol>
        <div className="mt-12">
          <a
            href="/Resume.pdf"
            target="_blank"
            className="group inline-flex cursor-pointer items-center font-medium leading-tight text-slate-100 hover:underline focus:underline"
          >
            View Full Resume
          </a>
        </div>
      </div>
    </section>
  );
});

Experience.displayName = "Experience";
