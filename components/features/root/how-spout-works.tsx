"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    label: "Step 01",
    title: "Complete KYC",
    description:
      "Connect your wallet and complete KYC verification to access investment-grade equities. KYC ensures that we are completely compliant with every jurisdiction",
    image: "/svg-assets/step-1.svg",
    imageMobile: "/svg-assets/step-1-mobile.svg",
  },
  {
    label: "Step 02",
    title: "Access Public Equities",
    description:
      "Access over 1,000 U.S. public equities, including Tesla, Microsoft, Coinbase, and more",
    image: "/svg-assets/step-2.svg",
    imageMobile: "/svg-assets/step-2-mobile.svg",
  },
  {
    label: "Step 03",
    title: "Lever Up",
    description:
      "Trade like the top 1% of equities traders, and borrow against your equities at 0% APR",
    image: "/svg-assets/step-3.svg",
    imageMobile: "/svg-assets/step-3-mobile.svg",
  },
  {
    label: "Step 04",
    title: "Lend for Stable Returns",
    description:
      "If you are looking for a safer and steadier return then come to lend stable circumstances.",
    image: "/svg-assets/step-4.svg",
    imageMobile: "/svg-assets/step-4-mobile.svg",
  },
  {
    label: "Step 05",
    title: "Track Performance",
    description:
      "Monitor your portfolio with real-time analytics and prefer steping toosl to maximize your profit",
    image: "/svg-assets/step-5.svg",
    imageMobile: "/svg-assets/step-5-mobile.svg",
  },
];

export function HowSpoutWorks() {
  const componentRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (isMobile) return;

    let ctx = gsap.context(() => {
      if (!trackRef.current || !componentRef.current) return;

      const calculateScrollDistance = () => {
        const trackWidth = trackRef.current?.scrollWidth || 0;

        return trackWidth - 1178;
      };
      const scrollDistance = calculateScrollDistance();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          pin: true,
          start: "top top",

          end: () => `+=${scrollDistance}`,
          scrub: 1.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        trackRef.current,
        {
          x: () => -scrollDistance,
          ease: "none",
        },
        0,
      );

      tl.to(
        progressRef.current,
        {
          width: "100%",
          ease: "none",
        },
        0,
      );
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full">
      <div ref={componentRef}>
        {/* Header */}
        <div className="py-10 px-6! sm:py-20 border-b-2 border-gray-100 w-full max-w-[1178px] mx-auto">
          <div className="sm:max-w-192.25 flex flex-col justify-center items-center gap-[16px] text-center mx-auto px-6 sm:px-0">
            <h2 className="max-w-82.5 sm:w-full text-spout-deep-teal font-['PT_Serif'] text-[32px] sm:text-[48px] not-italic font-normal leading-[40px] sm:leading-[56px] tracking-[0.192px]">
              How Spout works
            </h2>
            <p className="max-w-79 sm:w-full text-spout-text-description font-['DM_Sans'] text-[16px] not-italic font-normal leading-[24px] tracking-[0.064px]">
              Spout bridges the gap between traditional finance and DeFi by
              tokenizing investment-grade corporate bonds.
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        {/* Desktop: Horizontal carousel with GSAP */}
        <div className="border-b-2 border-gray-100 sm:block hidden max-w-[1178px] mx-auto">
          <div className="relative">
            <div className="relative max-w-[1178px] mx-auto h-[10px] rounded-[24px] bg-gray-200 me-auto">
              <div
                className="absolute inset-y-0 left-0"
                ref={progressRef}
                style={{
                  background:
                    "linear-gradient(90deg, #DDFF87 0%, #0057FF 100%)",
                }}
              />
            </div>
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden max-w-[1175px] mx-auto">
            <div
              ref={trackRef}
              className="flex flex-nowrap will-change-transform transform-gpu flex-shrink-0 pe-1"
            >
              {steps.map((step, i) => (
                <div key={i} className="min-w-[392px] flex-shrink-0">
                  <div className="flex flex-col w-[392px] h-[519px] border-r-[2px] border-gray-100 bg-[#FFF]">
                    <div className=" flex w-[392px] pt-[10px] pr-[313px] pb-[10px] pl-[20px] items-center text-neutral-900 font-['DM_Mono'] text-[14px] not-italic font-normal leading-[20px]">
                      {step.label}
                    </div>

                    <div className="mb-8 w-[392px] h-[274px] inline-flex justify-end items-center bg-black">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={392}
                        height={274}
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-col items-start gap-[8px] self-stretch px-4">
                      <h3 className="text-spout-deep-teal font-['PT_Serif'] text-[24px] not-italic font-normal leading-[34px] tracking-[0.096px]">
                        {step.title}
                      </h3>
                      <p className="text-spout-text-description self-stretch font-['DM_Sans'] text-[15px] not-italic font-normal leading-[24px] tracking-[0.06px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical card stack */}
        <div className="sm:hidden max-w-[calc(100vw-48px)] mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="border-b border-gray-100 last:border-b-0">
              <div className="py-2.5 px-5 text-neutral-900 font-['DM_Mono'] text-[14px] font-normal leading-[20px] bg-[#FAFAFA]">
                {step.label}
              </div>

              <div className="relative w-full! h-60 bg-black rounded-sm overflow-hidden border-b border-gray-100">
                <Image
                  src={step.imageMobile}
                  alt={step.title}
                  fill
                  className="object-cover "
                />
              </div>

              <div className="flex flex-col gap-[8px] pt-4 pb-6 px-4.5">
                <h3 className="text-spout-deep-teal font-['PT_Serif'] text-[24px] font-normal leading-[34px] tracking-[0.096px]">
                  {step.title}
                </h3>
                <p className="text-spout-text-description font-['DM_Sans'] text-[15px] font-normal leading-[24px] tracking-[0.06px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
