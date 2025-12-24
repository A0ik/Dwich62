"use client";

import { Home, UtensilsCrossed, Info, MessageSquare, Phone } from "lucide-react";
import { AnimeNavBar } from "@/components/ui/anime-navbar";

export function FloatingNav() {
  const items = [
    { name: "Accueil", url: "#top", icon: Home },
    { name: "Menu", url: "#menu", icon: UtensilsCrossed },
    { name: "À propos", url: "#about", icon: Info },
    { name: "Avis", url: "#avis", icon: MessageSquare },
    { name: "Contact", url: "#contact", icon: Phone },
  ];

  return <AnimeNavBar items={items} defaultActive="Accueil" className="top-12" />;
}