import Image from "next/image";
import { ChefHat, Heart, Zap } from "lucide-react";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FloatingNav } from "@/components/sections/floating-nav";

const ORDER =
  "https://www.ubereats.com/fr/store/dwich-62/hzRUGGVdVcKtznoiMcZBOA?srsltid=AfmBOoozqp5x_Q1fpKtyQyZuWswIiNdNzNsM7GFz609yxOE34fHpo9Rk";

const GMAPS =
  "https://www.google.com/maps/place/Dwich+62+Lievin/@50.4330542,2.7790753,17z";

const INSTAGRAM = "https://instagram.com/cagraille.restaurant"; // remplace si t'as le vrai

const ADDRESS = "135 Ter Rue Jules Guesde, 62800 Liévin";
const PHONE_DISPLAY = "07 67 46 95 02";
const PHONE_TEL = "+33767469502";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.4319658241984!2d2.7790753131479025!3d50.43305417147043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd3a7becd1e46d%3A0x8fc1fb24a40cc03!2sDwich%2062%20Lievin!5e0!3m2!1sfr!2sfr!4v1766597860765!5m2!1sfr!2sfr";

const menuCards = [
  {
    title: "Burgers",
    price: "À partir de 8,90€",
    desc: "Burgers généreux, options gourmandes, ça cale.",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Kebabs",
    price: "À partir de 7,50€",
    desc: "Viande grillée, crudités, sauces bien choisies.",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/25/D%C3%B6ner_kebap.jpg",
  },
  {
    title: "Sandwich",
    price: "À partir de 3,50€",
    desc: "Sandwichs chauds et snacks, rapide et efficace.",
    img: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function Page() {
  return (
    <main id="top" className="min-h-screen bg-[#f7f6f3]">
      <FloatingNav />

      {/* HERO */}
      <section className="relative h-[78vh] sm:h-[86vh] min-h-[520px] w-full overflow-hidden">
        <Image
          alt="Dwich 62 - Liévin"
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=2400&q=80"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
          <div className="mt-24" />
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight">
            Dwich 62
          </h1>
          <p className="mt-4 max-w-2xl text-white/85 text-sm sm:text-base">
            Liévin. Restaurant halal. Burgers, kebabs & sandwiches généreux.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#menu"
              className="rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
            >
              Voir le menu
            </a>

            <a
              href={ORDER}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
            >
              Commander (Uber Eats)
            </a>
          </div>

          {/* BADGES: 4,9 / 815 */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-white/75">
            <span className="rounded-full bg-white/10 px-3 py-1">4,9★ (815 avis)</span>
            <span className="rounded-full bg-white/10 px-3 py-1">Restaurant</span>
            <span className="rounded-full bg-white/10 px-3 py-1">Halal</span>
            <span className="rounded-full bg-white/10 px-3 py-1">À emporter</span>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60">
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/50">
              <div className="mt-1 h-2 w-1 rounded-full bg-white/60" />
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="scroll-mt-32 mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Notre Menu
          </h2>
          <p className="mt-4 text-black/60 text-sm sm:text-base">
            De quoi manger vraiment. Pas un truc décoratif.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-3">
          {menuCards.map((c) => (
            <article key={c.title} className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <div className="relative h-52 sm:h-56 w-full">
                <Image alt={c.title} src={c.img} fill className="object-cover" />
                <div className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-sm text-white">
                  {c.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-black/60 text-sm sm:text-base">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={ORDER}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-600 px-7 py-3 text-sm font-semibold text-white hover:bg-green-700"
          >
            Commander sur Uber Eats
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-32 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              À propos
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-black/60 text-sm sm:text-base">
              Chez <span className="text-green-700">Dwich 62</span>, l’objectif est simple:
              manger bien, manger vite, repartir content.
            </p>
          </div>

          <div className="mt-10 sm:mt-14 grid gap-6 md:gap-8 md:grid-cols-3">
            {[
              { title: "Cuisiné sur place", text: "Préparé à la minute, pas du micro-ondes triste.", Icon: ChefHat },
              { title: "Fait avec passion", text: "Recettes généreuses, sauces bien dosées.", Icon: Heart },
              { title: "Service rapide", text: "Efficace pour les pressés, propre pour les exigeants.", Icon: Zap },
            ].map(({ title, text, Icon }) => (
              <div key={title} className="rounded-2xl border bg-[#f7f6f3] p-6 sm:p-10 text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <Icon className="h-7 w-7 text-green-700" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
                <p className="mt-4 text-black/60 text-sm sm:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVIS */}
      <div id="avis" className="scroll-mt-32">
        <TestimonialsSection />
      </div>

      {/* CONTACT + MAP */}
      <section id="contact" className="scroll-mt-32 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Contact
            </h2>
            <p className="mt-4 text-black/60 text-sm sm:text-base">
              Les infos utiles, direct.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-stretch">
            <div className="rounded-2xl border bg-[#f7f6f3] p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold">📞 Téléphone</h3>
              <a
                className="mt-3 inline-block font-semibold text-green-700 hover:underline"
                href={`tel:${PHONE_TEL}`}
              >
                {PHONE_DISPLAY}
              </a>

              <h3 className="mt-8 text-lg sm:text-xl font-semibold">📍 Adresse</h3>
              <p className="mt-3 text-black/60 text-sm sm:text-base">{ADDRESS}</p>

              <h3 className="mt-8 text-lg sm:text-xl font-semibold">📷 Instagram</h3>
              <a
                className="mt-3 inline-block font-semibold text-green-700 hover:underline"
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                {INSTAGRAM.replace("https://", "")}
              </a>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
                  href={ORDER}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Commander (Uber Eats)
                </a>
                <a
                  className="rounded-full border bg-white px-5 py-3 text-sm font-semibold hover:bg-[#f0fff4]"
                  href={GMAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Itinéraire (Google Maps)
                </a>
              </div>

              <div className="mt-10 rounded-2xl border bg-white p-6">
                <h4 className="font-semibold">Horaires</h4>
                <ul className="mt-3 space-y-2 text-black/70 text-sm">
                  <li>Mercredi : 11:00–22:00</li>
                  <li>Jeudi : 11:00–15:00, 18:00–22:00</li>
                  <li>Vendredi : 11:00–15:00, 18:00–22:00</li>
                  <li>Samedi : 11:00–15:00, 18:00–22:00</li>
                  <li>Dimanche : 11:00–15:00, 18:00–22:00</li>
                  <li>Lundi : 11:00–15:00, 18:00–22:00</li>
                  <li>Mardi : 11:00–15:00, 18:00–22:00</li>
                </ul>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm min-h-[420px] sm:min-h-[520px] lg:min-h-0 lg:h-full">
              <div className="relative h-full w-full">
                <iframe
                  title="Carte Dwich 62 Liévin"
                  src={MAP_EMBED}
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <footer className="mt-12 sm:mt-16 text-center text-sm text-black/50">
            © {new Date().getFullYear()} Dwich 62. Tous droits réservés.
          </footer>
        </div>
      </section>
    </main>
  );
}
