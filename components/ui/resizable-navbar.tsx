"use client";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
// import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Image from "next/image";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
    soon?: boolean;
    icon?: React.ReactNode;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("relative inset-x-0 z-40 w-full bg-white", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: "none",
        boxShadow: "none",
        width: "100%",
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-60 mx-auto hidden w-full max-w-450 flex-row items-center justify-between self-start rounded-2xl bg-white px-16 py-2.5 sm:flex dark:bg-white",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden flex-row items-center space-x-2 text-sm font-normal text-gray-700 transition duration-200 hover:text-zinc-800 sm:flex sm:space-x-8",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div key={item.name} className="flex items-center">
          {item.soon ? (
            <>
              <span className="text-gray-700 flex items-center gap-2 font-dm-mono font-medium">
                {item.icon}
                {item.name}
              </span>
              <span className="flex justify-center ml-1 text-slate-600 font-['DM_Mono'] text-[12px] not-italic font-medium leading-normal rounded-[3px] bg-dashboard-accent-blue-light/35 w-[42px] h-[20px] p-[10px]  items-center gap-[10px]">
                Soon
              </span>
            </>
          ) : (
            <Link
              onMouseEnter={() => setHovered(idx)}
              onClick={onItemClick}
              className="relative px-4 py-2 text-gray-700 hover:text-gray-900 dark:text-neutral-300"
              href={item.link}
            >
              <span className="relative z-20 font-dm-mono font-medium text-spout-text-label hover:text-gray-900 ">
                {item.name}
              </span>
            </Link>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className }: MobileNavProps) => {
  return (
    <div
      className={cn(
        "relative z-50 flex w-full flex-col items-center justify-between bg-white sm:hidden",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "fixed inset-0 z-50 flex w-full flex-col bg-white",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} className="relative z-50" aria-label={isOpen ? "Close menu" : "Open menu"}>
      {isOpen ? (
        <X className="size-6 text-black" />
      ) : (
        <Menu className="size-6 text-black" />
      )}
    </button>
  );
};

export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center text-sm font-normal text-black"
    >
      <Image
        src="/spout-full-dark-logo.svg"
        alt="logo"
        width={124}
        height={49}
        className="h-auto w-[92px] sm:w-[124px]"
      />
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "text-black relative cursor-pointer transition duration-200 inline-block text-center";

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
