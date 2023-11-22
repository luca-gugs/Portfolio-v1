import { forwardRef } from "react";

export const About = forwardRef<HTMLElement, unknown>((props, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="relative mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <h3 className="sticky bottom-0 top-0 w-full bg-slate-900 py-4 text-lg font-semibold text-white lg:hidden">
        About
      </h3>
      <p className="mb-4">
        In 2019 I was a junior at NYU studying philosophy and creative writing
        when my roomate and I paid an overseas dev team to build us a commerical
        real estate listings website. Sadly they took our money and ran and
        seemingly out of options we said, &quot;fine we&apos;ll do it
        ourselves&quot;. Fast-forward to today, and I&apos;ve had the privledge
        of building a variety of both internal and customer facing applications
        and websites with a diverse set of technologies.
      </p>
      <p className="mb-4">
        My main focus these days is building products for our customers at
        EasyKnock. In my free time I&apos;ve also worked on several personal
        projects some of which you can find listed below.
      </p>
      <p>
        When I&apos;m not at the computer, I&apos;m usually training Jiu Jitsu
        at Unity HQ, hanging out with my girlfriend and our dog Honey, or
        working my way throug David Foster Wallace&apos;s bibliography.
      </p>
    </section>
  );
});

About.displayName = "About";
