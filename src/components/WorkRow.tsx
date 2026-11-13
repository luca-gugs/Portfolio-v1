import Link from "next/link";
import { type ReactNode } from "react";

type WorkRowProps = {
  /** Internal path, external URL, or omitted for an unlinked row. */
  href?: string;
  company: string;
  role?: string;
  dates?: string;
  badge?: string;
};

const rowClass = "group -mx-2 inline-block p-2";

const RowLink = ({ href, children }: { href?: string; children: ReactNode }) => {
  if (!href) return <div className={rowClass}>{children}</div>;
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={rowClass}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={rowClass}>
      {children}
    </Link>
  );
};

export const WorkRow = ({ href, company, role, dates, badge }: WorkRowProps) => {
  return (
    <RowLink href={href}>
      <div className="flex flex-wrap items-center gap-[7px]">
        <span className="relative inline-block">
          <span className="text-[15px] font-medium tracking-[-0.012em]">
            {company}
          </span>
          {href && (
            <span
              aria-hidden="true"
              className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-[240ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
            />
          )}
        </span>
        {badge && (
          <span className="rounded-[5px] bg-[#fdf3d7] px-[5px] py-[2px] text-[10px] font-medium text-[#8a6a00]">
            {badge}
          </span>
        )}
      </div>
      <div className="mt-[2px] flex flex-wrap items-baseline gap-[7px] text-[13px] tracking-[-0.008em] text-muted">
        {role && <span>{role}</span>}
        {dates && (
          <span className="font-mono text-[11px] tracking-normal text-faint">
            {dates}
          </span>
        )}
      </div>
    </RowLink>
  );
};
