"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const partners = [
  {
    src: "/partners/chainlink-logo.svg",
    alt: "Chainlink",
    link: "https://chain.link/",
  },
  {
    src: "/partners/inco-logo.svg",
    alt: "Inco",
    link: "https://www.inco.org/",
  },
  {
    src: "/partners/blocksense-logo.svg",
    alt: "Blocksense",
    link: "https://blocksense.network/",
  },
  {
    src: "/partners/circle-logo.svg",
    alt: "Circle",
    link: "https://circle.com/",
  },
  {
    src: "/partners/solana-logo.svg",
    alt: "Solana",
    link: "https://solana.org/",
  },
  {
    src: "/partners/ripple-logo.svg",
    alt: "Ripple",
    link: "https://ripple.com/",
  },
  {
    src: "/partners/Pharos.svg",
    alt: "Pharos",
    link: "https://pharosnetwork.xyz/",
  },
  // {
  //   src: "/partners/faroswap-full.svg",
  //   alt: "Faroswap",
  //   link: "https://faroswap.xyz/",
  // }
  {
    src: "/partners/injective-logo.svg",
    alt: "Injective",
    link: "https://injective.com/",
  },
];

export function PartnerTicker() {
  const [isPaused, setIsPaused] = useState(false);

  const tickerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const offsetRef = useRef(0);
  const segmentWidthRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  const speed = 0.7;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const updateSegmentWidth = () => {
      if (contentRef.current) {
        segmentWidthRef.current = contentRef.current.scrollWidth / 3;
      }
    };

    updateSegmentWidth();
    window.addEventListener("resize", updateSegmentWidth);

    const animate = () => {
      if (!tickerRef.current || isPaused) return;

      let next = offsetRef.current - speed;
      const segment = segmentWidthRef.current;

      if (segment > 0 && Math.abs(next) >= segment) {
        next = 0;
      }

      offsetRef.current = next;
      tickerRef.current.style.transform = `translate3d(${next}px,0,0)`;

      rafIdRef.current = requestAnimationFrame(animate);
    };

    const start = () => {
      if (rafIdRef.current == null) {
        rafIdRef.current = requestAnimationFrame(animate);
      }
    };

    const stop = () => {
      if (rafIdRef.current != null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
        } else {
          stop();
        }
      },
      { threshold: 0.1 },
    );

    if (tickerRef.current) {
      observer.observe(tickerRef.current);
    }

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", updateSegmentWidth);
    };
  }, [isPaused]);

  return (
    <div className="w-full overflow-hidden border-gray-100 py-5 sm:py-6">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-0">
        <div className="sm:pr-12 flex-shrink-0">
          <h3 className="text-spout-deep-teal font-dm-sans text-[16px] font-medium leading-6 tracking-[0.064px]">
            WORKING WITH
          </h3>
        </div>

        <div className="relative w-full sm:flex-1 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-white z-10 sm:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-white z-10 sm:hidden" />

          <div
            ref={tickerRef}
            className="flex items-center will-change-transform"
          >
            <div
              ref={contentRef}
              className="flex shrink-0 items-center gap-[34px]"
            >
              {[...partners, ...partners, ...partners].map((p, i) => (
                <Link key={i} href={p.link} target="_blank">
                  <div className="min-w-[80px] h-[28px] flex justify-center items-center">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={100}
                      height={28}
                      draggable={false}
                      className="object-contain"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
