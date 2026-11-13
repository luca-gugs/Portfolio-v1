import Link from "next/link";
import { type ReactNode } from "react";

import { Page } from "~/components/Page";

export type PostMeta = {
  title: string;
  description: string;
  updated: string;
};

/** Layout for writing posts. Each .mdx post passes its `meta` here. */
export const Post = ({ meta, children }: { meta: PostMeta; children: ReactNode }) => {
  return (
    <Page
      title={`${meta.title} · Luca Guglielmi`}
      description={meta.description}
      wide
    >
      <Link
        href="/"
        className="inline-flex items-center gap-[6px] text-[13px] tracking-[-0.008em] text-muted transition-colors hover:text-ink"
      >
        <span aria-hidden="true">&larr;</span>
        <span>Back</span>
      </Link>
      <h1 className="m-0 mt-[26px] text-[22px] font-bold tracking-[-0.03em]">
        {meta.title}
      </h1>
      <div className="mt-[3px] text-[13px] tracking-[-0.008em] text-muted">
        Updated {meta.updated}
      </div>
      <div className="mt-[26px] flex flex-col gap-[14px] text-[15px] leading-[1.6] tracking-[-0.008em] text-body">
        {children}
      </div>
    </Page>
  );
};
