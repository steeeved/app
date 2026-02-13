"use client";

import { CTASection } from "@/components/features/root";
import { PressCard, PressRow, type MediaOutlet } from "@/components/features/shared/press-card";
import morning_star from "@/assets/images/morningstar.png";
import bz from "@/assets/images/bz.png";

const mediaOutlets: MediaOutlet[] = [
  {
    name: "The Block",
    date: "JAN 20, 2026",
    image: "/svg-assets/block.svg",
    imageType: "logo",
    url: "#",
  },
  {
    name: "MEXC",
    date: "JAN 21, 2026",
    image: "/svg-assets/mexc-global-seeklogo.svg",
    bgColor: "#000000",
    imageType: "logo",
    url: "#",
  },
  {
    name: "Kucoin",
    date: "JAN 21, 2026",
    image: "/svg-assets/logo_general_green.svg",
    imageType: "logo",
    url: "#",
  },
  {
    name: "Morningstar",
    date: "JAN 4, 2026",
    image: morning_star,
    imageType: "cover",
    bgColor: "#f50202",
    url: "#",
  },
  {
    name: "Business Insider",
    date: "JAN 16, 2026",
    image: "/svg-assets/insider.svg",
    imageType: "logo",
    url: "#",
  },
  {
    name: "Bezinga",
    date: "JAN 24, 2026",
    image: bz,
    imageType: "cover",
    bgColor: "#0d1f40",
    url: "#",
  },
];

const rowDividerColors = [
  // Row 1
  [
    { from: "#fec8bb", to: "#ffe4c8" }, // peach
    { from: "#ade1ff", to: "#e8fbf9" }, // light blue
    { from: "#abffe1", to: "#dcffe2" }, // mint
  ],
  // Row 2
  [
    { from: "#abffe1", to: "#dcffe2" }, // mint
    { from: "#ade1ff", to: "#e8fbf9" }, // light blue
    { from: "#fec8bb", to: "#ffe4c8" }, // peach
  ],
];

/* Flat array of divider colors for mobile single-column layout */
const allDividerColors = [
  { from: "#fec8bb", to: "#ffe4c8" }, // peach (The Block)
  { from: "#ade1ff", to: "#e8fbf9" }, // light blue (MEXC)
  { from: "#abffe1", to: "#dcffe2" }, // mint (Kucoin)
  { from: "#abffe1", to: "#dcffe2" }, // mint (Morningstar)
  { from: "#abffe1", to: "#dcffe2" }, // mint (Business Insider)
  { from: "#abffe1", to: "#dcffe2" }, // mint (Bezinga)
];

/* Heights for the mobile V-shaped chevron decoration (symmetric) */
const chevronHeights = [217, 181, 163, 145, 127, 99, 127, 145, 163, 181, 217];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-clip">
      <div className="relative">
        <main className="relative flex flex-col gap-[100px]">
          {/* ── Hero Section ── */}
          <section className="relative w-full bg-white min-h-[525px] sm:min-h-0">
            <div className="hidden lg:block absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none" />

            {/* Left gradient chevrons — desktop only */}
            <div className="hidden lg:flex flex-col absolute left-0 top-0 bottom-0 pointer-events-none">
              {[22, 20, 18, 16, 14, 16, 18, 20, 22].map((w, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-r from-spout-gradient-cyan to-spout-gradient-blue"
                  style={{ width: `${w}vw` }}
                />
              ))}
            </div>

            {/* Right gradient chevrons — desktop only */}
            <div className="hidden lg:flex flex-col items-end absolute right-0 top-0 bottom-0 pointer-events-none">
              {[22, 20, 18, 16, 14, 16, 18, 20, 22].map((w, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-l from-spout-gradient-cyan to-spout-gradient-blue"
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
                      "linear-gradient(to top, rgba(78,210,255,0.68), rgba(0,87,216,0.68))",
                  }}
                />
              ))}
            </div>

            {/* Content — left-aligned on mobile, centered on desktop */}
            <div className="relative z-10 mx-auto px-6 sm:px-0 text-left sm:text-center flex flex-col justify-center items-start sm:items-center py-16 sm:py-20 lg:py-24">
              <div className="w-fit px-2.5 py-1 rounded-[3px] bg-spout-accent/35 mb-5">
                <span className="text-base font-medium text-[#3d5678] font-dm-sans">
                  Press &amp; Media
                </span>
              </div>

              <h1 className="text-[36px] sm:text-4xl md:text-5xl lg:text-[52px] font-normal text-spout-primary font-pt-serif leading-[50px] sm:leading-tight mb-4">
                In the Press
              </h1>

              <p className="text-base text-[#757679] max-w-[330px] sm:max-w-[646px] sm:mx-auto font-dm-sans leading-6 sm:leading-7 tracking-[0.064px]">
                Financial media outlets are highlighting our approach to secure,
                regulated investing with real returns
              </p>
            </div>
          </section>

          {/* Wrapper so gap-[100px] doesn't separate gradient bar from bordered container */}
          <div>
            {/* ── Bordered container ── */}
            <div className="max-w-[calc(100vw-48px)] relative sm:max-w-[1176px] mx-auto sm:px-6 lg:px-0 lg:border-x-2 lg:border-gray-100">
              {/* Mobile vertical border lines */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#F3F4F6] block sm:hidden z-100" />
              <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-[#F3F4F6] block sm:hidden z-100" />

              {/* Full-width horizontal line at top */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none" />
              </div>

              {/* Gap before cards */}
              <div className="sm:h-[72px]" />

              {/* Full-width horizontal line above cards */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none z-10" />
              </div>

              {/* ── Mobile: all cards stacked with gradient dividers ── */}
              <div className="sm:hidden font-dm-sans relative">
                {mediaOutlets.map((outlet, i) => (
                  <div key={outlet.name}>
                    <PressCard {...outlet} />
                    <div
                      className="h-[20px] w-full"
                      style={{
                        background: `linear-gradient(to right, ${allDividerColors[i].from}, ${allDividerColors[i].to})`,
                      }}
                    />
                    {/* Edge-to-edge line after gradient */}
                    <div className="h-[2px] bg-[#F3F4F6] -mx-[24px] w-[calc(100%+48px)]" />
                  </div>
                ))}
              </div>

              {/* ── Tablet + Desktop rows ── */}
              <div className="hidden sm:block">
                {/* Row 1 — top + bottom full-width lines */}
                <div className="relative mb-6 sm:mb-8 lg:mb-[60px]">
                  <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none z-10" />
                  <div className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none z-10" />
                  <div className="overflow-hidden">
                    <PressRow
                      outlets={mediaOutlets.slice(0, 3)}
                      dividerColors={rowDividerColors[0]}
                    />
                  </div>
                </div>

                {/* Row 2 — top + bottom full-width lines */}
                <div className="relative">
                  <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none z-10" />
                  <div className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none z-10" />
                  <div className="overflow-hidden">
                    <PressRow
                      outlets={mediaOutlets.slice(3, 6)}
                      dividerColors={rowDividerColors[1]}
                    />
                  </div>
                </div>
              </div>

              {/* Gap before gradient bar */}
              <div className="h-8 sm:h-12 lg:h-[60px]" />

              {/* Full-width horizontal line before gradient bar */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none" />
              </div>
            </div>

            {/* ── Gradient bar separator ── */}
            <div className="flex w-full overflow-hidden">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-[39px] sm:h-[44px] flex-1 bg-gradient-to-r from-blue-600 to-lime-200"
                />
              ))}
            </div>

            {/* ── Lower bordered container: Newsletter ── */}
            <div className="max-w-[calc(100vw-48px)] relative sm:max-w-[1176px] mx-auto sm:px-6 lg:px-0 lg:border-x-2 lg:border-gray-100">
              {/* Mobile vertical border lines */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#F3F4F6] block sm:hidden z-100" />
              <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-[#F3F4F6] block sm:hidden z-100" />

              {/* Gap after gradient bar */}
              <div className="h-12 sm:h-16 lg:h-[100px]" />

              {/* Full-width horizontal line above CTA */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none" />
              </div>

              {/* ── Newsletter CTA ── */}
              <div className="relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen border-t-2 border-gray-100 pointer-events-none" />
                <div className="overflow-hidden max-w-[calc(100vw-72px)] mx-auto sm:max-w-full w-full">
                  <CTASection />
                </div>
              </div>

              {/* Gap before footer */}
              <div className="h-12 sm:h-16 lg:h-[100px]" />
            </div>
          </div>
        </main>
      </div>
      {/* Bottom horizontal line above footer */}
      <div className="w-full border-t-2 border-[#F3F4F6]" />
    </div>
  );
}
