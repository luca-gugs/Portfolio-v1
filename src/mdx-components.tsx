import { type MDXComponents } from "mdx/types";

/**
 * Styles for markdown in .mdx posts. `##` is a section heading, `###` is a
 * subheading that sits tight against the paragraph below it.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="m-0 mt-[34px] text-[17px] font-bold tracking-[-0.02em] text-ink">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="m-0 -mb-[10px] text-[15px] font-semibold text-ink">{children}</h3>
    ),
    p: ({ children }) => <p className="m-0">{children}</p>,
    ul: ({ children }) => (
      <ul className="m-0 flex list-disc flex-col gap-[6px] pl-5 marker:text-faint">
        {children}
      </ul>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="underline decoration-faint underline-offset-[3px] transition-colors hover:decoration-ink"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
    ...components,
  };
}
