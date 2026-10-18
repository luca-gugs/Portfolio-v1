import { Page } from "~/components/Page";
import { WorkRow } from "~/components/WorkRow";

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.07-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.15 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.55.74.55 1.5 0 1.08-.01 1.96-.01 2.23 0 .21.15.46.55.38A7.99 7.99 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M12.6 1.5h2.45L9.7 7.62 16 15.9h-4.97l-3.9-5.1-4.45 5.1H.23l5.72-6.55L0 1.5h5.1l3.62 4.79L12.6 1.5Zm-.86 12.94h1.36L4.33 2.88H2.87l8.87 11.56Z" />
  </svg>
);

const socials = [
  { href: "https://github.com/lucarr722", label: "GitHub", Icon: GitHubIcon },
  { href: "https://x.com/lucadottsx", label: "X", Icon: XIcon },
];

const writing = [
  {
    href: "/writing/how-to-work-with-me",
    company: "How to work with me",
    dates: "October 2026",
  },
];

const work = [
  {
    href: "https://www.retailreadyai.com/",
    company: "RetailReady",
    badge: "YC W24",
    role: "First employee · Founding Engineer",
    dates: "2024 to now",
  },
  {
    company: "EasyKnock",
    role: "Senior Engineer",
    dates: "2019 to 2024",
  },
];

export default function Home() {
  return (
    <Page
      title="Luca Guglielmi"
      description="Luca Guglielmi. Founding engineer and first employee at RetailReady (YC W24)."
    >
      <h1 className="m-0 text-[34px] font-bold leading-[1.05] tracking-[-0.032em]">
        Luca Guglielmi
      </h1>
      <p className="mt-[14px] text-[17px] leading-[1.5] tracking-[-0.012em] text-ink">
        Founding engineer and first hire at{" "}
        <a
          href="https://www.retailreadyai.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-faint underline-offset-[3px] transition-colors hover:decoration-ink"
        >
          RetailReady
        </a>
        . We help brands sell into big-box retailers without the chargebacks.
      </p>

      <div className="mt-5 flex items-center gap-[14px]">
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex text-icon transition-colors hover:text-ink"
          >
            <Icon />
          </a>
        ))}
      </div>

      <div className="h-[72px]" />

      <div className="font-mono text-xs text-faint">Work</div>
      <div className="mt-4 flex flex-col items-start gap-1">
        {work.map((item) => (
          <WorkRow key={item.company} {...item} />
        ))}
      </div>

      <div className="h-[48px]" />

      <div className="font-mono text-xs text-faint">Writing</div>
      <div className="mt-4 flex flex-col items-start gap-1">
        {writing.map((item) => (
          <WorkRow key={item.href} {...item} />
        ))}
      </div>
    </Page>
  );
}
