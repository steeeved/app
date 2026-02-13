"use client";
import { signOut } from "@/lib/supabase/auth";
import { ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavItems,
  NavbarLogo,
  Navbar as ResizableNavbar,
} from "./ui/resizable-navbar";

const navItems = [
  { name: "HOME", link: "/" },
  { name: "ABOUT US", link: "/company" },
  { name: "EARN", link: "/app/earn", soon: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleSignOut = async () => {
    await signOut();
    window.location.reload();
  };

  return (
    <ResizableNavbar className="font-dm-mono sticky top-0 bg-white z-50">
      <NavBody className="justify-between h-[68px] w-full max-w-[1440px] mx-auto">
        <NavbarLogo />
        <div className="flex items-center gap-[64px]">
          <NavItems items={navItems} className="font-dm-mono" />
          <Link
            href="/app"
            className="not-italic mr-4 p-[10px] w-[114px] h-[32px] flex items-center justify-center text-sm bg-spout-deep-teal hover:bg-spout-deep-teal-hover text-white font-semibold transition-colors z-50 relative rounded-md text-[14px] leading-5 font-noto-sans"
          >
            Get Started
          </Link>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader className="px-6 py-[10px] border-b-[1.5px] border-gray-100">
          <NavbarLogo />
          <MobileNavToggle
            isOpen={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)}>
          {/* Menu header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <span className="font-dm-sans font-medium text-[20px] text-black">
              Menu
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1"
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-black" />
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex flex-col w-full">
            {navItems.map((item) => (
              <div key={item.name}>
                <div className="border-b border-gray-100">
                  {item.soon ? (
                    <div className="flex items-center justify-between px-6 py-5">
                      <div className="flex items-center gap-2">
                        <span className="font-dm-mono font-normal text-[18px] text-neutral-900">
                          {item.name}
                        </span>
                        <span className="flex items-center justify-center text-slate-600 font-dm-mono text-[12px] font-medium rounded-[3px] bg-dashboard-accent-blue-light/35 px-[6px] py-[2px]">
                          Soon
                        </span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-neutral-900" />
                    </div>
                  ) : (
                    <Link
                      href={item.link}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between px-6 py-5"
                    >
                      <span className="font-dm-mono font-normal text-[18px] text-neutral-900">
                        {item.name}
                      </span>
                      <ChevronRight className="h-5 w-5 text-neutral-900" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </nav>

          {/* Get Started button */}
          <div className="px-6 mt-auto pb-8 pt-8 w-full">
            <Link
              href="/app"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full h-[47px] bg-spout-deep-teal hover:bg-spout-deep-teal-hover text-white font-dm-sans font-medium text-[18px] rounded-[6px] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </MobileNavMenu>
      </MobileNav>

      <div className="w-full h-[2px] bg-gray-100" />
    </ResizableNavbar>
  );
}
