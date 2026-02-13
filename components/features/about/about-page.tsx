"use client";
import Image, { StaticImageData } from "next/image";

import { CTASection } from "../root";
import JustMe from "@/assets/images/justme.png";

const teamMembers = [
  {
    name: "Marc Ryan",
    title: "Co-Founder & CEO",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F124fa7d8b30741e3b582951ae96e0e12%2Fc8a0c783871f423da7867c0a72ddeaeb",
    description:
      "Former tech investment banker at HSBC, covering fintech and software. Founder of FlipVault, a web3 bartering platform. Angel investor in several blockchain AI companies, including Theoriq, PIN AI, and GAIB AI.",
    links: {
      email: "mailto:marc@spout.finance",
      twitter: "https://x.com/0xmryan",
      linkedin: "https://www.linkedin.com/in/marc-ryan/",
    },
  },
  {
    name: "Paul van Mierlo",
    title: "Co-Founder & CTO",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F124fa7d8b30741e3b582951ae96e0e12%2Fa5a7799be5fe438dbc9ee43a6e98295e",
    description:
      "Paul brings years of expertise in programming having won major hackathon competitions on different blockchain ecosystems with privacy, payments and DeFi solutions.",
    links: {
      email: "mailto:paul@spout.finance",
      twitter: "https://x.com/Mierlo1999",
      linkedin: "https://www.linkedin.com/in/paul-van-mierlo-063b9417a/",
    },
  },
  {
    name: "Paul Jan Reijn",
    title: "Co-Founder & General Counsel",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F124fa7d8b30741e3b582951ae96e0e12%2F2e3ffc42f7c94567a1967833a8d3ebf5",
    description:
      "Legal counsel with years of experience in software. Architect of the legal framework for various succesful software products, such as payments and factory automation.",
    links: {
      email: "mailto:pauljan@spout.finance",
      twitter: "",
      linkedin: "https://www.linkedin.com/in/paul-jan-reijn-70b635227/",
    },
  },
  {
    name: "Onuorah Gabriel (Justme)",
    title: "Chief Marketing Officer",
    image: JustMe,
    description:
      "Growth operator with hands-on go-to-market experience. Led community systems and partnerships at Santa Browser and supported GTM strategy, education initiatives, and growth campaigns at GemXBT to drive users and revenue.",
    links: {
      email: "Justme@Spout.finance",
      twitter: "https://x.com/0xRealjustme",
      linkedin:
        "https://www.linkedin.com/in/onuorah-gabriel-c-1aba61241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  },
  {
    name: "Mihir Sahu",
    title: "Head of Blockchain",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F124fa7d8b30741e3b582951ae96e0e12%2Ffce54c748c2d436da64235d5f4ddaa3e",
    description:
      "Web3 engineer with expertise in privacy, cross-chain systems, and decentralized finance. Experience at Inco building TEE-powered applications for confidential DeFi and payments, and recognized at major hackathon competitions.",
    links: {
      email: "Mihir@Spout.Finance",
      twitter: "https://x.com/0xmihirsahu",
      linkedin: "https://www.linkedin.com/in/0xmihirsahu/",
    },
  },
  {
    name: "Lovish Badlani",
    title: "Head of Engineering",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F124fa7d8b30741e3b582951ae96e0e12%2F08c9e404faeb40cc825c7e6c317c05d0",
    description:
      "Former BlackRock engineer, experienced in scaling institutional fintech apps. Led engineering at DEX token launchpad with 150K+ users, $150M+ TVL. Skilled in EVM chains and Solana deployment, recognized at global hackathons.",
    links: {
      email: "mailto:lovish@spout.finance",
      twitter: "https://x.com/BadlaniLovish",
      linkedin: "https://www.linkedin.com/in/lovish-badlani-250a05151/",
    },
  },
];

// Gradient divider colors between team cards (per the Figma design)
const rowDividerColors = [
  // Row 1
  [
    { from: "#abffe1", to: "#dcffe2" }, // mint
    { from: "#fec8bb", to: "#ffe4c8" }, // peach
    { from: "#ade1ff", to: "#e8fbf9" }, // light blue
  ],
  // Row 2
  [
    { from: "#ffefad", to: "#fbf9e8" }, // yellow
    { from: "#d9adff", to: "#f3e8fb" }, // purple
    { from: "#ffadad", to: "#fbefe8" }, // pink
  ],
];

// Flat list of divider colors for mobile single-column layout
const allDividerColors = [...rowDividerColors[0], ...rowDividerColors[1]];

/* Heights for the mobile V-shaped chevron decoration (symmetric) */
const chevronHeights = [217, 181, 163, 145, 127, 99, 127, 145, 163, 181, 217];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-clip">
      <div className="relative">
        <main className="relative flex flex-col gap-12 sm:gap-16 lg:gap-25 z-10">
          {/* Hero Section */}
          <section className="relative w-full bg-white min-h-[525px] sm:min-h-0 px-6 sm:px-6 lg:px-0">
            <div className="hidden lg:block absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none" />

            {/* Left gradient chevrons — desktop only */}
            <div className="hidden lg:flex flex-col absolute left-0 top-0 bottom-0 pointer-events-none">
              {[22, 20, 18, 16, 14, 16, 18, 20, 22].map((w, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-lime-200"
                  style={{ width: `${w}vw` }}
                />
              ))}
            </div>

            {/* Right gradient chevrons — desktop only */}
            <div className="hidden lg:flex flex-col items-end absolute right-0 top-0 bottom-0 pointer-events-none">
              {[22, 20, 18, 16, 14, 16, 18, 20, 22].map((w, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-l from-blue-600 to-lime-200"
                  style={{ width: `${w}vw` }}
                />
              ))}
            </div>

            {/* Mobile V-shaped gradient chevrons at bottom */}
            <div className="lg:hidden absolute bottom-0 left-0 right-0 flex items-end overflow-hidden pointer-events-none">
              {chevronHeights.map((h, i) => (
                <div
                  key={i}
                  className="flex-1"
                  style={{
                    height: `${h}px`,
                    background:
                      "linear-gradient(to top, rgba(221,255,135,0.76), rgba(0,87,255,0.76))",
                  }}
                />
              ))}
            </div>

            {/* Content — left-aligned on mobile, centered on desktop */}
            <div className="relative z-10 mx-auto text-left sm:text-center flex flex-col justify-center items-start sm:items-center py-16 sm:py-20 lg:py-24">
              <div className="w-fit px-2.5 py-1 rounded-[3px] bg-spout-accent/35 mb-5">
                <span className="text-base font-medium text-slate-600 font-dm-sans">
                  About us
                </span>
              </div>

              <h1 className="text-[36px] sm:text-4xl md:text-5xl lg:text-[52px] font-normal text-spout-primary font-pt-serif leading-[50px] sm:leading-tight mb-4">
                Our Story
              </h1>

              <p className="text-base text-spout-text-description max-w-[330px] sm:max-w-[600px] sm:mx-auto font-dm-sans leading-6 sm:leading-7 tracking-[0.064px]">
                We are building next-generation investment infrastructure that
                prioritizes security, transparency, and returns
              </p>
            </div>
          </section>

          {/* Bordered container */}
          <div className="relative max-w-[calc(100vw-48px)] sm:max-w-[1176px] mx-auto sm:px-6 lg:px-0 lg:border-x-2 lg:border-gray-100">
            {/* Mobile vertical border lines */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-100 block sm:hidden z-100" />
            <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gray-100 block sm:hidden z-100" />

            {/* ── Manifesto Section ── */}
            <div className="relative">
              {/* Full-width horizontal lines */}
              <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none" />
              <div className="hidden lg:block absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none" />
              {/* Blue Banner */}
              <div className="bg-spout-blue-accent py-3.5 sm:py-4 text-center">
                <span className="font-mono text-white text-base sm:text-xl tracking-tight leading-7">
                  MANIFESTO
                </span>
              </div>

              {/* Manifesto Content */}
              <div className="bg-white overflow-hidden flex flex-col lg:flex-row">
                {/* Left Column - Text */}
                <div className="flex-1 px-4 sm:px-8 py-8 sm:py-10 space-y-8 sm:space-y-10">
                  {/* Block 1 */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-1 sm:p-1.5 bg-spout-primary rounded-[3px]">
                        <Image
                          src={"/svg-assets/landingpage/fingerprint.png"}
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"
                          width={16}
                          height={16}
                          alt="Fingerprint"
                        />
                      </div>
                      <h3 className="text-base sm:text-2xl lg:text-[28px] font-medium text-spout-primary leading-5 sm:leading-7 font-dm-sans">
                        Access is a right, not a privilege
                      </h3>
                    </div>
                    <p className="text-[14px] sm:text-lg text-spout-text-muted-dark leading-6 sm:leading-7 font-dm-sans">
                      The global financial system is rigged: institutions borrow
                      for free, while everyone else pays the price. We refuse to
                      accept that status quo. Spout is building the first truly
                      level playing field, taking the &apos;cheat codes&apos; of
                      the wealthy — asset efficiency and 0% loans — and putting
                      them on-chain for the world to use. We aren&apos;t just
                      democratizing finance; we&apos;re open-sourcing it.
                    </p>
                  </div>

                  {/* Block 2 */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-1 sm:p-1.5 bg-spout-primary rounded-[3px]">
                        <Image
                          src={"/svg-assets/landingpage/users.png"}
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"
                          width={16}
                          height={16}
                          alt="People"
                        />
                      </div>
                      <h3 className="text-base sm:text-2xl lg:text-[28px] font-medium text-spout-primary leading-5 sm:leading-7 font-dm-sans">
                        Built by defectors
                      </h3>
                    </div>
                    <p className="text-[14px] sm:text-lg text-spout-text-muted-dark leading-6 sm:leading-7 font-dm-sans">
                      We are ex-bankers and engineers who saw the unfair
                      advantages from the inside — and left to share them with
                      you. We bridge the gap between institutional structure and
                      DeFi speed. Our code is permission-less, our team is
                      global, and our goal is simple: To make sure no one&apos;s
                      capital ever has to sit &apos;dead&apos; again.
                    </p>
                  </div>
                </div>

                {/* Right Column - Decorative Image */}
                <div className="relative w-full lg:w-105.25 h-[214px] sm:h-87.5 lg:h-auto overflow-hidden border-t-[5px] border-gray-100 lg:border-t-0 lg:border-l-[6px] shrink-0">
                  <div className="relative w-full h-full">
                    <Image
                      src="/svg-assets/landingpage/globe-bg.png"
                      alt=""
                      width={638}
                      height={425}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      unoptimized
                    />
                    <Image
                      src="/svg-assets/landingpage/globe.png"
                      alt="Manifesto illustration"
                      width={638}
                      height={425}
                      className="absolute inset-0 w-full h-full object-cover z-10"
                      loading="lazy"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Gap between manifesto bottom line and team top line */}
            <div className="h-12 sm:h-16 lg:h-25" />

            {/* ── Meet the Team Section ── */}
            <div className="relative pt-8 sm:pt-12 lg:pt-15 mb-12 sm:mb-16 lg:mb-25">
              {/* Full-width horizontal line at top of team section */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none z-10" />

              <h2 className="text-[30px] sm:text-4xl lg:text-[56px] font-pt-serif text-spout-primary text-center leading-10 sm:leading-tight mb-8 sm:mb-12 lg:mb-15">
                Meet the Team
              </h2>

              {/* Mobile: all cards stacked with gradient dividers */}
              <div className="sm:hidden font-dm-sans relative">
                {teamMembers.map((member, i) => (
                  <div key={member.name}>
                    <TeamCard {...member} />
                    <div
                      className="h-[22px] w-full"
                      style={{
                        background: `linear-gradient(to right, ${allDividerColors[i].from}, ${allDividerColors[i].to})`,
                      }}
                    />
                  </div>
                ))}
                {/* Full-width line below last card */}
                <div className="h-[2px] bg-gray-100 -mx-[24px] w-[calc(100%+48px)]" />
              </div>

              {/* Tablet + Desktop rows */}
              <div className="hidden sm:block">
                {/* Row 1 — top + bottom full-width lines */}
                <div className="relative mb-6 sm:mb-8 lg:mb-15 font-dm-sans">
                  <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none z-10" />
                  <div className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none z-10" />
                  <TeamRow
                    members={teamMembers.slice(0, 3)}
                    dividerColors={rowDividerColors[0]}
                  />
                </div>

                {/* Row 2 — top + bottom full-width lines */}
                <div className="relative font-dm-sans">
                  <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none z-10" />
                  <div className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none z-10" />
                  <TeamRow
                    members={teamMembers.slice(3, 6)}
                    dividerColors={rowDividerColors[1]}
                  />
                </div>
              </div>
            </div>

            {/* ── Newsletter CTA Section — top + bottom full-width lines ── */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none" />
              <div className="overflow-hidden max-w-[calc(100vw-72px)] mx-auto sm:max-w-full w-full">
                <CTASection />
              </div>
            </div>

            {/* Gap before footer — vertical lines continue through here */}
            <div className="h-16 sm:h-20 lg:h-24" />
          </div>
        </main>
      </div>
      {/* Bottom horizontal line above footer */}
      <div className="w-full border-t-2 border-gray-100" />
    </div>
  );
}

/* ─── Team Row (tablet + desktop only) ─── */
function TeamRow({
  members,
  dividerColors,
}: {
  members: typeof teamMembers;
  dividerColors: { from: string; to: string }[];
}) {
  return (
    <>
      {/* Desktop: cards with gradient dividers; center row when fewer than 3 */}
      <div
        className={`hidden lg:flex overflow-hidden ${members.length < 3 ? "justify-center" : ""}`}
      >
        {members.map((member, i) => (
          <div key={member.name} className="flex overflow-hidden">
            <TeamCard {...member} />
            <div
              className="w-5.5 self-stretch shrink-0"
              style={{
                background: `linear-gradient(to bottom, ${dividerColors[i].from}, ${dividerColors[i].to})`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Tablet: 2-column grid */}
      <div className="grid lg:hidden grid-cols-2 gap-4 sm:gap-6 relative">
        {members.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>
    </>
  );
}

/* ─── Team Card ─── */
function TeamCard({
  name,
  title,
  image,
  description,
  links,
}: {
  name: string;
  title: string;
  image: string | StaticImageData;
  description: string;
  links?: {
    email?: string;
    twitter?: string;
    linkedin?: string;
  };
}) {
  return (
    <div className="w-full lg:w-92.5 bg-white flex flex-col sm:overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none z-10 sm:hidden" />
      {/* Image Section */}
      <div className="relative w-full h-[214px] sm:h-56 border-b border-neutral-200">
        <Image
          src={image}
          alt={name}
          width={370}
          height={224}
          className="w-full h-full object-cover object-[center_26%]"
          loading="lazy"
          unoptimized
        />
        <div className="hidden lg:block absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none" />
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        {/* Title Badge */}
        <div className="inline-flex items-center px-2.5 py-1 border border-spout-accent bg-spout-accent/35 rounded-[3px] mb-4 w-fit">
          <span className="text-[14px] sm:text-base font-medium text-slate-600 font-dm-sans">
            {title}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-xl sm:text-2xl font-semibold text-spout-primary mb-1.5 font-dm-sans">
          {name}
        </h3>

        {/* Description */}
        <p className="text-[14px] sm:text-base text-spout-text-muted-dark leading-7 mb-6 flex-1 font-dm-sans">
          {description}
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-auto">
          {links?.email && (
            <a
              href={links.email}
              className="text-spout-text-secondary hover:text-spout-primary transition-colors"
              aria-label={`Email ${name}`}
            >
              <Image
                src={"/svg-assets/landingpage/email.png"}
                width={24}
                height={24}
                alt="Mail"
                className="w-6"
              />
            </a>
          )}
          {links?.twitter && (
            <a
              href={links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-spout-text-secondary hover:text-spout-primary transition-colors"
              aria-label={`${name}'s Twitter`}
            >
              <Image
                src={"/svg-assets/landingpage/x.png"}
                width={24}
                height={24}
                alt="X"
                className="w-5"
              />
            </a>
          )}
          {links?.linkedin && (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-spout-text-secondary hover:text-spout-primary transition-colors"
              aria-label={`${name}'s LinkedIn`}
            >
              <Image
                src={"/svg-assets/landingpage/linkedin.png"}
                width={24}
                height={24}
                alt="LinkedIn"
                className="w-5"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
