import Head from "next/head";
import { type ReactNode } from "react";

type PageProps = {
  title: string;
  description: string;
  children: ReactNode;
  /** Column width. Defaults to the 560px homepage column. */
  wide?: boolean;
};

/** Shared shell: white page, fluid top padding, centered column. */
export const Page = ({ title, description, children, wide }: PageProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white px-6 pb-24 pt-[clamp(44px,8vw,92px)] font-sans text-ink">
        <div className={`mx-auto ${wide ? "max-w-[680px]" : "max-w-[560px]"}`}>
          {children}
        </div>
      </div>
    </>
  );
};
