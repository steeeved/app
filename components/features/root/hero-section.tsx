import Link from "next/link";
import { JoinMailingList } from "./join-mailing-list";

import desktopHeroImg from "@/assets/images/hero/1.png";
import mobileHeroImg from "@/assets/images/hero/2.png";

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full flex flex-col relative overflow-hidden sm:pl-5 mb-[-34px]">
      {/* Hero content wrapper */}
      <div className="relative w-full h-auto sm:h-[702px]">
        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/svg-assets/landingpage/grid-bg.svg"
            className="object-cover w-full h-full optimized"
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 sm:ps-16 pt-8 sm:pt-0 pb-0 sm:pb-16 flex flex-col sm:flex-row gap-8 sm:gap-10 xl:gap-[80px] justify-center items-center">
          {/* Left column */}
          <div className="sm:max-w-[840px]">
            <div className="flex flex-col gap-[32px] sm:gap-0">
              <div>
                <h1 className="mb-[16px] text-spout-deep-teal font-pt-serif text-[36px] sm:text-[52px] font-normal leading-[50px] sm:leading-[72px] tracking-[0.144px] sm:tracking-[0.208px]">
                  The Go-To Platform for Margin Trading at{" "}
                  <span className="text-spout-blue">0%</span> Rates
                </h1>

                <p className="text-spout-text-description font-dm-sans text-[16px] sm:text-[18px] font-normal leading-[24px] tracking-[0.064px] sm:tracking-[0.072px] max-w-[330px] sm:max-w-none">
                  Spout enables you to borrow against your equities at 0% APR or
                  lend your stablecoins for <br className="hidden sm:inline" />{" "}
                  10%+ APY
                </p>
              </div>

              <div className="mb-[44px] flex flex-row items-center gap-6">
                <Link
                  href="/app"
                  className="flex h-9 px-4 py-3 justify-center items-center gap-3 bg-spout-primary hover:bg-spout-primary/90 text-white font-dm-sans text-[16px] font-medium leading-normal rounded-[4px] transition-all"
                >
                  Launch Platform
                </Link>

                <button className="flex h-9 px-4 py-3 justify-center items-center gap-[11.916px] border border-neutral-300 rounded-[4px] not-italic font-medium leading-normal text-black font-dm-sans text-[16px] transition-all group">
                  Try Demo
                </button>
              </div>

              <p className="hidden sm:block text-spout-deep-teal font-dm-sans text-base not-italic font-medium leading-normal uppercase">
                [ Join our mailing list for early access and updates ]
              </p>

              <div className="hidden sm:block max-w-lg pt-4">
                <JoinMailingList />
              </div>
            </div>
          </div>

          {/* Right column - image */}
          <div className="w-full sm:w-[365px] sm:h-[640px] relative">
            <Image
              src={desktopHeroImg}
              alt="Spout Water Tokens"
              fill
              quality={100}
              className="hidden sm:block"
              style={{ objectFit: "cover" }}
            />
            <div className="-mx-5 block sm:hidden mb-17.5">
              <Image
                src={mobileHeroImg}
                alt="Spout Water Tokens"
                quality={100}
                width={640}
                height={346}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
