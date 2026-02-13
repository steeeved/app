"use client";
import Image from "next/image";

export function InvestmentDifferent() {
  const features = [
    {
      icon: "/svg-assets/landingpage/lock.svg",
      title: "Privacy Protection",
      description: "Confidential transactions with encrypted data",
      badges: ["Encrypted data", "Private transfers"],
      gradient: "linear-gradient-green-2",
    },
    {
      icon: "/svg-assets/landingpage/security-safe.svg",
      title: "Regulated Assets",
      description: "Backed by real corporate debt obligations",
      badges: ["SEC Compliant", "FDIC protected"],
      gradient: "linear-gradient-blue-2",
    },
    {
      icon: "/svg-assets/landingpage/flash.svg",
      title: "Instant Liquidity",
      description: "Trade tokens 24/7 on decentralized exchanges",
      badges: ["No Lock-up Period", "24/7 Trading"],
      gradient: "linear-gradient-4",
    },
    {
      icon: "/svg-assets/landingpage/key.svg",
      title: "Confidential Assets",
      description: "Protected identity and private records",
      badges: ["Secure handling", "Private layers"],
      gradient: "linear-gradient-5",
    },
  ];

  // Map gradient identifiers to concrete Tailwind classes so they are discoverable by the
  // Tailwind compiler (avoid using dynamic `bg-${...}` strings)
  const gradientMap: Record<string, string> = {
    "linear-gradient-green-2": "bg-linear-gradient-green-2",
    "linear-gradient-blue-2": "bg-linear-gradient-blue-2",
    "linear-gradient-4": "bg-linear-gradient-4",
    "linear-gradient-5": "bg-linear-gradient-5",
  };

  return (
    <section className="w-full py-10 sm:py-20 relative">
      {/* Section content */}
      <div className="w-full  px-4 sm:px-8 lg:px-0 pb-8 lg:pb-0">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="max-w-79 w-full mx-auto sm:max-w-full text-spout-deep-teal text-center font-['PT_Serif'] text-3xl sm:text-5xl not-italic font-normal sm:leading-[56px] tracking-[0.192px]">
            Smarter On-chain Investing
          </h2>
          <p className="max-w-79 w-full mx-auto sm:max-w-full pt-5 text-spout-text-description text-center font-['DM_Sans'] text-[16px] not-italic font-normal sm:leading-[28px] tracking-[-0.064px]">
            Consistent returns from regulated investment-grade securities, with
            instant trading
            <br />
            and full transparency
          </p>
        </div>

        {/* <div className="w-full bg-transparent border-t border-b border-gray-100 block hidden"></div> */}

        {/* Features Grid */}
        <div className="h-px w-full max-w-[1178px] mx-auto bg-transparent border-b-2 border-gray-100"></div>
        <div className="max-w-[calc(100vw-48px)] w-full mx-auto sm:max-w-[1176px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 mb-8 sm:mb-12 lg:mb-0">
          {features.map((feature, index) => (
            <div key={index} className="flex relative">
              <div
                className={`${gradientMap[feature.gradient] ?? "bg-linear-gradient-1"} w-[18px] h-[146px] lg:h-[183px]`}
              />
              <div
                className={`flex-1 sm:border sm:border-gray-100 px-4 py-6 lg:p-6 rounded-none flex flex-col justify-center ${
                  index === 0
                    ? "lg:rounded-tl-lg"
                    : index === features.length - 1
                      ? "lg:rounded-br-lg"
                      : ""
                } ${index < 2 ? "lg:border-b-0" : ""} ${index % 2 === 0 ? "lg:border-r-0" : ""}`}
              >
                {/* Icon and Title */}
                <div className="flex items-center gap-1.5 lg:gap-3 mb-1.5 lg:mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                    className="w-4 h-4 lg:w-6 lg:h-6"
                  />
                  <h3 className="text-black font-dm-sans text-[16px] lg:text-[20px] font-medium leading-[20px] lg:leading-[28px] tracking-[-0.064px] lg:tracking-[-0.08px]">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-spout-text-label font-dm-sans text-[14px] lg:text-[16px] leading-[20px] lg:leading-[28px] tracking-[-0.056px] lg:tracking-[-0.064px]">
                  {feature.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-[18px] lg:mt-auto font-dm-sans">
                  {feature.badges.map((badge, badgeIndex) => (
                    <span
                      key={badgeIndex}
                      className="px-2 lg:px-3 py-1 rounded-[3px] lg:rounded-[4px] border border-solid border-dashboard-accent-blue-light bg-dashboard-accent-blue-light/35 text-slate-600 text-center font-dm-sans text-[12px] lg:text-[16px] font-medium leading-[22px] lg:leading-[28px] tracking-[-0.048px] lg:tracking-[-0.064px]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-px sm:hidden block bg-transparent border-t-2 z-100 border-gray-100"></div>
            </div>
          ))}
        </div>
        {/* <div className="h-[100px] w-screen bg-transparent border-t-2 border-b-2 border-gray-100"></div> */}
      </div>
    </section>
  );
}
