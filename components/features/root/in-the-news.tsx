import Link from "next/link";
import { PressRow, type MediaOutlet } from "../shared/press-card";

const newsItems: MediaOutlet[] = [
  {
    image: "/svg-assets/block.svg",
    name: "The Block",
    date: "JAN 20, 2026",
    imageType: "logo",
    url: "https://apnews.com/press-release/globenewswire-mobile/onepiece-labs-solana-accelerator-officially-launches-f2e8e0a2478df30533933fdfe8f07a5e",
  },
  {
    image: "/svg-assets/mexc-global-seeklogo.svg",
    name: "MEXC",
    date: "JAN 21, 2026",
    bgColor: "#000000",
    imageType: "logo",
    url: "https://markets.businessinsider.com/news/stocks/onepiece-labs-solana-accelerator-officially-launches-1035128439",
  },
  {
    image: "/svg-assets/logo_general_green.svg",
    name: "Kucoin",
    date: "JAN 21, 2026",
    imageType: "logo",
    url: "https://www.marketwatch.com/press-release/onepiece-labs-solana-accelerator-officially-launches-7b06ee13?mod=search_headline",
  },
];

const dividerColors = [
  { from: "#FEC8BB", to: "#FFE4C8" }, // peach
  { from: "#ADE1FF", to: "#E8FBF9" }, // light blue
  { from: "#ABFFE1", to: "#DCFFE2" }, // cyan
];

export function InTheNews() {
  return (
    <section className="w-full border-t-2 border-gray-100 sm:border-none">
      {/* Section content */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0 pb-8">
        {/* Header */}
        <div className="text-center ">
          <h2 className="max-w-79 w-full mx-auto sm:max-w-full text-spout-deep-teal text-center font-['PT_Serif'] text-3xl sm:text-5xl not-italic font-normal leading-[56px] tracking-[0.192px]">
            In the <span className="">Press</span>
          </h2>
          <p className="max-w-79 w-full mx-auto sm:max-w-full text-spout-text-description pt-3 text-center font-['DM_Sans'] text-[16smriunge@gmail.compx] not-italic font-normal leading-[28px] tracking-[-0.064px]">
            Financial media outlets are highlighting our approach to secure,
            regulated
            <br />
            investing with real returns
          </p>
        </div>

        <div className="w-full max-w-[1178px] mx-auto bg-transparent border-t border-b mt-[70px] border-gray-100"></div>

        {/* News Cards Grid */}
        <div className="sm:mb-12 lg:mb-0 max-w-[1178px] mx-auto pr-[2px]">
          <PressRow outlets={newsItems} dividerColors={dividerColors} />
        </div>
        <div className="w-full max-w-[1178px] mx-auto bg-transparent border-t border-b border-gray-100"></div>
        <div className="mt-4 sm:mt-7 text-center sm:text-end max-w-294.5 mx-auto sm:pe-[22px]">
          <Link
            href="/press"
            scroll={true}
            className="w-fit h-9 inline-flex items-center justify-center px-4 py-3 bg-spout-deep-teal rounded-[4px] text-white font-dm-sans text-[16px] font-medium hover:bg-spout-deep-teal-hover transition-colors"
          >
            View all
          </Link>
        </div>
      </div>
      <div className="w-full max-w-[1178px] mx-auto bg-transparent border-t border-b border-gray-100"></div>
    </section>
  );
}
