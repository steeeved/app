"use client";

import {
  CTASection,
  FAQSection,
  HeroSection,
  HowSpoutWorks,
  InTheNews,
  InvestmentDifferent,
  ProofOfReserveLanding,
  UnlockingFinance,
} from "@/components/features/root";
import { SmoothScroll } from "@/components/smooth-scroll";
import { PartnerTicker } from "./partner-ticker";

export function LandingContent() {
  return (
    <SmoothScroll>
      <div className="min-h-screen w-full overflow-x-hidden flex flex-col items-center justify-center relative bg-white">
        {/* Hero Section */}
        <div className="relative z-10 w-full overflow-hidden">
          <HeroSection />
        </div>

        {/* Partner Ticker */}
        <div className="relative z-10 w-screen border-t-2 border-b-2 border-gray-100 bg-white">
          <div className="max-w-[1178px] mx-auto hidden md:block optimized">
            <PartnerTicker />
          </div>
          <div className="block md:hidden optimized">
            <PartnerTicker />
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 pointer-events-none z-20 max-w-[calc(100vw-48px)] sm:max-w-[1178px] mx-auto">
            {/* Left vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-100 optimized"></div>
            {/* Right vertical line */}
            <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gray-100 optimized"></div>
          </div>

          

          {/* How Spout Works Section */}
          <div className="relative z-10 w-full">
            <HowSpoutWorks />
          </div>
          <div className="relative h-15 sm:h-25 w-full sm:max-w-[1178px] sm:mx-auto bg-transparent sm:border-b-2 sm:border-t-0 border-gray-100">
            <div className="sm:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[2px] bg-gray-100" />
            <div className="sm:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[2px] bg-gray-100" />
          </div>

          {/* Proof of Reserve Section */}
          <div className="relative z-10 w-full">
            <ProofOfReserveLanding />
          </div>

          {/* Unlocking Finance Section */}
          <div className="relative z-10 w-full">
            <UnlockingFinance />
          </div>
          <div className="relative h-15 sm:h-25 w-full sm:max-w-[1178px] sm:mx-auto bg-transparent sm:border-t-2 sm:border-b-2 border-gray-100">
            <div className="sm:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[2px] bg-gray-100" />
            <div className="sm:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[2px] bg-gray-100" />
          </div>

          {/* Investment Different Section */}
          <div className="relative z-10 w-full">
            <InvestmentDifferent />
          </div>

          {/* In The News Section */}
          <div className="relative z-10 w-full">
            <InTheNews />
          </div>

          {/* FAQ Section */}
          <div className="relative z-10 w-full">
            <FAQSection />
          </div>

          {/* CTA Section */}
          <div className="relative z-10 max-w-[calc(100vw-72px)] sm:max-w-full w-full mx-auto">
            <CTASection />
          </div>
          <div className="relative h-15 sm:h-25 w-full sm:max-w-[1178px] sm:mx-auto bg-transparent sm:border-t-2 border-gray-100">
            <div className="sm:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[2px] bg-gray-100" />
            <div className="sm:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[2px] bg-gray-100" />
          </div>
        </div>
        {/* Full-width line above footer */}
        <div className="hidden sm:block w-full h-[2px] bg-gray-100" />
      </div>
    </SmoothScroll>
  );
}
