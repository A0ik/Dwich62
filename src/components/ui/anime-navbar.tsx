"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string; // "#menu" etc
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
  defaultActive?: string;
}

export function AnimeNavBar({
  items,
  className,
  defaultActive = "Accueil",
}: NavBarProps) {
  const [mounted, setMounted] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>(defaultActive);

  useEffect(() => setMounted(true), []);

  const smoothScrollToHash = (hash: string) => {
    if (!hash.startsWith("#")) return;

    const el = document.querySelector(hash);
    if (!el) return;

    // scroll smooth
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // update URL sans jump
    history.replaceState(null, "", hash);
  };

  if (!mounted) return null;

  return (
    <div className={cn("fixed left-0 right-0 z-[9999]", className)}>
      <div className="flex justify-center">
        <motion.div
          className={cn(
            "flex items-center gap-1 md:gap-2",
            "rounded-full px-2 py-2",
            "border backdrop-blur-lg shadow-lg",
            "bg-green-700/35 border-white/15"
          )}
          initial={{ y: -18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;
            const isHovered = hoveredTab === item.name;

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={(e) => {
                  // IMPORTANT: empêcher le jump instantané
                  if (item.url.startsWith("#")) {
                    e.preventDefault();
                    setActiveTab(item.name);
                    smoothScrollToHash(item.url);
                  } else {
                    setActiveTab(item.name);
                  }
                }}
                onMouseEnter={() => setHoveredTab(item.name)}
                onMouseLeave={() => setHoveredTab(null)}
                className={cn(
                  "relative select-none",
                  "cursor-pointer rounded-full",
                  "px-4 py-2 md:px-6 md:py-3",
                  "text-sm font-semibold transition-all duration-300",
                  "text-white/80 hover:text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 -z-10 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ boxShadow: "0 10px 35px rgba(22,163,74,0.20)" }}
                  >
                    <div className="absolute inset-0 bg-green-500/25 blur-md" />
                    <div className="absolute inset-[-10px] bg-green-400/15 blur-2xl" />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
                        animation: "shine 3s ease-in-out infinite",
                      }}
                    />
                  </motion.div>
                )}

                <span className="hidden md:inline relative z-10">{item.name}</span>
                <span className="md:hidden relative z-10">
                  <Icon size={18} strokeWidth={2.5} />
                </span>

                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      className="absolute inset-0 -z-10 rounded-full bg-white/10"
                    />
                  )}
                </AnimatePresence>

                {isActive && (
                  <motion.div
                    layoutId="anime-mascot"
                    className="absolute -top-11 left-1/2 -translate-x-1/2 pointer-events-none"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  >
                    <div className="relative w-11 h-11">
                      <motion.div
                        className="absolute w-9 h-9 rounded-full left-1/2 -translate-x-1/2 bg-white"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div className="absolute left-[26%] top-[40%] h-2 w-2 rounded-full bg-black" />
                        <div className="absolute right-[26%] top-[40%] h-2 w-2 rounded-full bg-black" />
                        <div className="absolute left-[14%] top-[56%] h-2 w-2 rounded-full bg-green-200/90" />
                        <div className="absolute right-[14%] top-[56%] h-2 w-2 rounded-full bg-green-200/90" />
                        <div className="absolute left-[34%] top-[62%] h-2 w-4 rounded-b-full border-b-2 border-black" />
                      </motion.div>

                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-4 h-4 -translate-x-1/2"
                        animate={{ y: [0, 2, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div className="w-full h-full bg-white rotate-45 origin-center" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
