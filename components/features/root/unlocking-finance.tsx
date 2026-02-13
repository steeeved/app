"use client";

import Image from "next/image";

import lockImage from "@/assets/images/lock.svg";

export function UnlockingFinance() {
  return (
    <section className="w-full relative">
      {/* Section content */}
      <div className="w-full px-4 sm:px-6 lg:px-0 pb-8 lg:pb-0">
        {/* Header */}
        <div className="px-6! sm:w-full text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="section-heading text-3xl capitalize sm:text-4xl lg:text-5xl font-pt-serif leading-10 sm:leading-14 tracking-[0.192px] text-spout-deep-teal font-normal mb-4 sm:mb-6">
            Unlocking <span className="font-normal">Finance</span> with{" "}
            <br className="sm:hidden block" />
            DeFi <br className="sm:hidden block" />
            <br className="hidden sm:block" />
            through our stablecoin
          </h2>
          <p className="section-description text-center max-w-82.5 md:max-w-full">
            Expand access to traditional assets with security,{" "}
            <br className="sm:hidden block" /> transparency, and real yield
            on-chain.
            <br className="sm:hidden block" />
          </p>
          <p className="section-description text-center max-w-82.5 md:max-w-full">
            Global access, real yield, full transparency, built for{" "}
            <br className="sm:hidden block" /> DeFi.
          </p>
        </div>

        <div className="relative w-full sm:max-w-[1178px] sm:mx-auto bg-transparent sm:border-t sm:border-b border-gray-100">
          <div className="sm:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[2px] bg-gray-100" />
        </div>

        {/* Cards Section */}
        <div className="relative max-w-[calc(100vw-48px)] w-full sm:max-w-[1178px] lg:h-[340px] mx-auto flex flex-col lg:flex-row">
          {/* DeFi Integration Benefits Card */}
          <div className="flex">
            <div className="w-full lg:w-[524px] p-6 lg:p-10 relative">
              <div className="rounded-[4px] border-[1px] border-solid border-dashboard-accent-blue-light flex bg-dashboard-accent-blue-light/35 items-center gap-2 mb-3 lg:mb-4 w-fit px-2 py-1">
                <Image
                  src="/svg-assets/icon-shield-security.svg"
                  alt="Shield"
                  width={24}
                  height={24}
                  className="w-[18px] h-[18px] lg:w-6 lg:h-6"
                />
                <h3 className="text-slate-600 text-center font-dm-sans font-[500] text-[14px] lg:text-[18px] leading-[22px] lg:leading-[28px] tracking-[-0.056px] lg:tracking-[-0.072px]">
                  DeFi Integration Benefits
                </h3>
              </div>

              <p className="text-spout-text-description font-dm-sans text-[14px] lg:text-[16px] pb-5 font-normal leading-[24px] tracking-[0.056px] lg:tracking-[0.064px]">
                DeFi expands access to traditional assets by enabling
                security-backed lending and diversified exposure, unlocking
                opportunities while bridging traditional and decentralized
                markets.
              </p>

              <ul className="space-y-1 lg:space-y-3 mb-0">
                <li className="flex items-center gap-2 text-spout-text-muted-dark font-dm-sans text-[14px] lg:text-[16px] font-normal leading-[28px] tracking-[-0.056px] lg:tracking-[-0.064px]">
                  <div className="w-[10px] h-[10px] rounded-full bg-blue-400 shrink-0"></div>
                  Security-backed lending
                </li>
                <li className="flex items-center gap-2 text-spout-text-muted-dark font-dm-sans text-[14px] lg:text-[16px] font-normal leading-[28px] tracking-[-0.056px] lg:tracking-[-0.064px]">
                  <div className="w-[10px] h-[10px] rounded-full bg-blue-400 shrink-0"></div>
                  Multi-asset exposure
                </li>
                <li className="flex items-center gap-2 text-spout-text-muted-dark font-dm-sans text-[14px] lg:text-[16px] font-normal leading-[28px] tracking-[-0.056px] lg:tracking-[-0.064px]">
                  <div className="w-[10px] h-[10px] rounded-full bg-blue-400 shrink-0"></div>
                  Access to real yield
                </li>
              </ul>

              {/* Benefits icon */}
              <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 optimized">
                <Image
                  src="/svg-assets/defi-integration-benefits.svg"
                  alt="Benefits"
                  width={180}
                  height={180}
                  className="w-[134px] h-[135px] lg:w-40 lg:h-40"
                />
              </div>
            </div>
            {/* Desktop gradient divider */}
            <div className="hidden lg:block bg-linear-gradient-2 w-[64px] h-[340px]"></div>
            {/* Mobile gradient bar */}
            <div className="lg:hidden bg-linear-gradient-2 w-[18px] shrink-0"></div>
          </div>

          <div className="relative h-px w-full sm:hidden block z-100">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[2px] bg-gray-100" />
          </div>

          {/* DeFi Security & Transparency Card */}
          <div className="flex">
            {/* Desktop gradient divider */}
            <div className="hidden lg:block bg-linear-gradient-3 w-[64px] lg:h-auto"></div>

            <div className="w-full lg:w-[524px] p-6 lg:p-8 relative">
              <div className="flex bg-dashboard-accent-blue-light/35 rounded-[4px] border-[1px] border-solid border-dashboard-accent-blue-light items-center gap-2 mb-3 lg:mb-4 w-fit px-2 py-1">
                <Image
                  src="/svg-assets/defi-security-transparency.svg"
                  alt="Lock"
                  width={24}
                  height={24}
                  className="w-[18px] h-[18px] lg:w-6 lg:h-6"
                />
                <h3 className="text-slate-600 text-center font-dm-sans font-[500] text-[14px] lg:text-[18px] leading-[22px] lg:leading-[28px] tracking-[-0.056px] lg:tracking-[-0.072px]">
                  DeFi Security & Transparency
                </h3>
              </div>

              <p className="text-spout-text-description font-dm-sans text-[14px] lg:text-[16px] pb-5 font-normal leading-[24px] tracking-[0.056px] lg:tracking-[0.064px]">
                DeFi combines strong safeguards with full transparency, ensuring
                all assets are protected and fully verifiable while building
                lasting trust and unlocking new opportunities in finance.
              </p>

              <ul className="space-y-1 lg:space-y-3 mb-0">
                <li className="flex items-center gap-2 text-spout-text-muted-dark font-dm-sans text-[14px] lg:text-[16px] font-normal leading-[28px] tracking-[-0.056px] lg:tracking-[-0.064px]">
                  <div className="w-[10px] h-[10px] rounded-full bg-blue-400 shrink-0"></div>
                  Institutional-grade asset protection
                </li>
                <li className="flex items-center gap-2 text-spout-text-muted-dark font-dm-sans text-[14px] lg:text-[16px] font-normal leading-[28px] tracking-[-0.056px] lg:tracking-[-0.064px]">
                  <div className="w-[10px] h-[10px] rounded-full bg-blue-400 shrink-0"></div>
                  Transparent on-chain verification
                </li>
                <li className="flex items-center gap-2 text-spout-text-muted-dark font-dm-sans text-[14px] lg:text-[16px] font-normal leading-[28px] tracking-[-0.056px] lg:tracking-[-0.064px]">
                  <div className="w-[10px] h-[10px] rounded-full bg-blue-400 shrink-0"></div>
                  Continuous independent audits
                </li>
              </ul>

              {/* Lock icon */}
              <div className="absolute bottom-4 right-4 lg:bottom-3 lg:right-6 optimized">
                <Image
                  src="/svg-assets/security-lock.svg"
                  alt="Lock"
                  width={160}
                  height={160}
                  className="w-[70px] h-[86px] lg:w-36 lg:h-36 z-10"
                />
                <Image
                  src={lockImage}
                  alt="Lock"
                  width={160}
                  height={160}
                  className="w-20 h-20 lg:w-26 lg:h-26 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 ml-7 mt-3 hidden lg:block"
                />
              </div>
            </div>
            {/* Mobile gradient bar */}
            <div className="lg:hidden bg-linear-gradient-3 w-[18px] shrink-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
