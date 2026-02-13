"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does Spout bring traditional assets like bonds to DeFi?",
      answer:
        "Spout brings traditional assets like bonds to DeFi by tokenizing U.S. investment-grade ETFs into secure, yield-bearing tokens backed 1:1 by real assets.",
    },
    {
      question:
        "What guarantees that Spout tokens are secure and fully backed?",
      answer:
        "Every Spout token is backed 1:1 by investment-grade bond ETFs held by qualified U.S. custodians. We provide full transparency through on-chain proof-of-reserve verification, ensuring complete accountability and security for all tokenized assets.",
    },
    {
      question: "How can investors generate yield through Spout's platform?",
      answer:
        "Investors generate yield by holding Spout tokens, which accrue yield on price movement or dividends when attached to the underlying asset. The yield is distributed automatically to token holders. Spout tokens will be eligible to serve as collateral in the Spout lending market to efficiently borrow against your assets.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-4 sm:py-6 lg:py-18">
      {/* Section content */}
      <div className="w-full max-w-294.5 mx-auto px-4 sm:px-6 lg:px-9 pb-8 sm:pb-0">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[36px]">
          {/* Left Column - Header */}
          <div className="text-center lg:text-left lg:basis-[448px]">
            <div className="hidden lg:block text-spout-deep-teal font-['DM_Sans'] text-[14px] not-italic font-medium leading-normal uppercase">
              [ FAQ ]
            </div>
            <h2 className="text-spout-deep-teal font-['PT_Serif'] text-[30px] lg:text-[36px] not-italic font-normal leading-[40px] lg:leading-[56px] tracking-[0.12px] lg:tracking-[0.144px]">
              Frequently asked
              <br />
              questions
            </h2>
            <p className="pt-4 text-spout-text-description font-['DM_Sans'] text-[14px] lg:text-[16px] not-italic font-normal leading-[24px] lg:leading-[28px] tracking-[-0.064px]">
              Everything you need to know about Spout and
              {" "}
              <span className="hidden lg:inline">
                <br />
              </span>
              how we&apos;re changing decentralized investing.
            </p>
          </div>

          {/* Right Column - FAQ Items */}
          <div className=" lg:basis-[610px] max-w-[calc(100vw-48px)] w-full mx-auto">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="text-start"
            >
              {faqs.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="mt-0 lg:mt-[-10px] border-0 border-b border-neutral-200 lg:border-[1.249px] lg:border-solid bg-[#FFF] text-[#000] text-[14px] lg:text-[16px] not-italic font-medium leading-[20px] lg:leading-[28px] tracking-[-0.056px] lg:tracking-[-0.064px] px-3 py-2 lg:px-8 lg:py-5 rounded-none lg:rounded-sm font-dm-sans"
                >
                  <AccordionTrigger className="cursor-pointer text-start py-0 px-0 gap-4 lg:gap-8 items-start font-['DM_Sans'] text-[14px] lg:text-[16px] not-italic font-medium leading-[20px] lg:leading-[28px] tracking-[-0.056px] lg:tracking-[-0.064px]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="mt-5 text-spout-text-muted-dark">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}

              <div className="w-full  flex align-center justify-center mt-4 sm:mt-6 lg:text-end">
                <Link
                  href="/faq"
                  scroll={true}
                  className="w-fit h-9 self-center flex lg:inline-flex items-center justify-center group rounded-[4px] lg:rounded-sm bg-spout-deep-teal lg:bg-white border-0 lg:border lg:border-neutral-200 px-4 py-3 lg:p-[10px] lg:h-[36px] lg:w-[116px] text-[16px] lg:text-base font-['DM_Sans'] lg:font-noto-sans font-medium text-white lg:text-[#000] transition-colors gap-2"
                >
                  View all
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="hidden lg:block transition-transform duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path
                      d="M14.4301 5.93018L20.5001 12.0002L14.4301 18.0702"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 12H20.33"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
