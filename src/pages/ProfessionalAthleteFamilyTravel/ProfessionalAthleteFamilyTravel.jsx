import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Ship,
  Users,
  MapPin,
  Award,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Star,
  Compass,
  Anchor,
  Sparkles,
  CalendarClock,
  Snowflake,
  Sun,
  Gift,
  Shield,
  Trophy,
  PartyPopper,
  FileSignature,
  Flag,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import AboutImage from "../../assets/AboutAngela.jpeg";

import HeroImage2 from "../../assets/PrivateJetConciergeTravel/private-jet-concierge-travel-professional-athletes.webp";
import HeroImage3 from "../../assets/PrivateJetConciergeTravel/championship-celebrations-milestone-travel-luxury-family..webp";
import HeroImage4 from "../../assets/PrivateJetConciergeTravel/privacy-security-travel-private-jet-tarmac.png";

import PrivacyImage from "../../assets/PrivateJetConciergeTravel/privacy-security-travel-private-villa-terrace-family.png";

import BucketAfrica from "../../assets/PrivateJetConciergeTravel/Luxury-African-Safaris.png";
import BucketGalapagos from "../../assets/PrivateJetConciergeTravel/galapagos-expedition-wildlife.jpg";
import BucketAntarctica from "../../assets/PrivateJetConciergeTravel/antarctica-iceberg-reflection.webp";
import BucketNorthernLights from "../../assets/IcelandGreenlandCruisesExploraJourneys/GreenlandHero.jpg";
import BucketSouthPacific from "../../assets/CaribbeanCruisesExploraJourneys/explora-caribbean-beach-aerial.jpg";

import VillaImage from "../../assets/PrivateJetConciergeTravel/off-season-luxury-travel-professional-athletes-private-villa-retreat.webp";
import WellnessImage from "../../assets/PrivateJetConciergeTravel/luxury-wellness-recovery-travel-professional-athlete.webp";
import ConciergeImage from "../../assets/PrivateJetConciergeTravel/family-concierge-travel-services-luxury-family-arrival.webp";
import CruiseImage from "../../assets/PrivateJetConciergeTravel/private-villas-yachts-exclusive-resorts-luxury-superyacht.webp";
import AdvisorImage from "../../assets/PrivateJetConciergeTravel/privacy-security-travel-luxury-advisor-planning.png";
import CtaImage from "../../assets/PrivateJetConciergeTravel/french-polynesia-overwater-villa-luxury-private-aviation.webp";

import { Helmet } from "react-helmet-async";

/* ── Schema ─────────────────────────────────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://tripsandships.com",
      logo: "https://www.tripsandships.com/Copy-of-TRIPSSHIPS-e1592486640831.webp",
    },
    {
      "@type": "TravelAgency",
      name: "Trips & Ships Luxury Travel",
      url: "https://tripsandships.com",
      description:
        "Luxury travel agency specializing in private travel planning for professional athletes and their families, including villas, yachts, wellness retreats, and private aviation.",
    },
    {
      "@type": "Person",
      name: "Angela Hughes",
      jobTitle: "CEO of Trips & Ships Luxury Travel",
      description:
        "Luxury travel expert with over 40 years of experience and travel to 121+ countries.",
    },
    {
      "@type": "WebPage",
      name: "Professional Athlete Family Travel",
      url: "https://tripsandships.com/professional-athlete-family-travel",
      description:
        "Discover luxury family travel designed for professional athletes. From private villas and luxury cruises to off-season vacations, wellness retreats, private aviation, and concierge planning, create unforgettable family experiences with complete privacy and flexibility.",
    },
    {
      "@type": "AboutPage",
      name: "About Professional Athlete Family Travel Planning",
      url: "https://tripsandships.com/professional-athlete-family-travel",
      description:
        "Learn how Trips & Ships Luxury Travel designs private, flexible, and recovery-focused vacations for professional athletes and their families.",
    },
    {
      "@type": "Service",
      serviceType: "Luxury Travel Planning for Professional Athletes",
      provider: {
        "@type": "TravelAgency",
        name: "Trips & Ships Luxury Travel",
      },
      areaServed: "Worldwide",
      description:
        "Concierge-level luxury travel planning built around athletes' schedules, privacy needs, and family priorities.",
    },
    {
      "@type": "Article",
      headline: "Professional Athlete Family Travel",
      description:
        "A complete guide to luxury family travel for professional athletes, covering privacy, off-season timing, villas, private aviation, wellness retreats, concierge services, and milestone celebrations.",
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      publisher: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://tripsandships.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Family Travel",
          item: "https://tripsandships.com/family-travel",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Professional Athlete Family Travel",
          item: "https://tripsandships.com/professional-athlete-family-travel",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Ways Luxury Travel Supports Professional Athlete Families",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Prioritize Privacy & Security",
          description:
            "Private villas, boutique resorts, yacht charters, and secure transportation keep families out of the spotlight.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Make the Most of the Off-Season",
          description:
            "Expert planning allows athletes to begin relaxing the moment they leave home, even with a short window.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Choose Private Aviation",
          description:
            "Flexible departure times and direct routing simplify travel with children and tight schedules.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Focus on Recovery",
          description:
            "Wellness retreats combine spa treatments, fitness, and mindfulness with quality family time.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Work With a Concierge Team",
          description:
            "Dedicated planning support manages every detail, from transfers to milestone celebrations.",
        },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "Professional Athlete Family Vacation",
      provider: {
        "@type": "Organization",
        name: "Trips & Ships Luxury Travel",
      },
      touristType: "Professional athletes and their families",
    },
    {
      "@type": "Review",
      itemReviewed: {
        "@type": "Service",
        name: "Professional Athlete Family Travel Planning",
      },
      author: {
        "@type": "Person",
        name: "Angela Hughes",
      },
      reviewBody:
        "The best athlete family vacations are built around privacy, flexibility, and recovery — not just a destination. Thoughtful planning turns a short off-season window into lasting family memories.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why do professional athletes use luxury travel advisors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury travel advisors save valuable time, coordinate complex itineraries, provide concierge-level service, and ensure vacations remain flexible around changing schedules.",
          },
        },
        {
          "@type": "Question",
          name: "What are the best vacations for athlete families?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury cruises, private villas, safari adventures, wellness retreats, Caribbean resorts, Mediterranean journeys, and multi-generational vacations are among the most popular choices.",
          },
        },
        {
          "@type": "Question",
          name: "Are private villas better than hotels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For many athlete families, yes. Villas provide greater privacy, more living space, dedicated staff, and a home-like environment.",
          },
        },
        {
          "@type": "Question",
          name: "Why are luxury cruises popular with professional athletes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury cruises combine exceptional accommodations, personalized service, multiple destinations, and wellness facilities into one seamless vacation.",
          },
        },
        {
          "@type": "Question",
          name: "Should athletes travel during the off-season?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The off-season is often the ideal time to recharge, reconnect with family, and recover before returning to training.",
          },
        },
        {
          "@type": "Question",
          name: "Can luxury travel accommodate changing schedules?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Professional travel advisors can recommend flexible booking options and adjust itineraries when needed.",
          },
        },
        {
          "@type": "Question",
          name: "Are wellness retreats beneficial for athletes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many athletes appreciate wellness retreats that combine recovery therapies, healthy dining, fitness, and relaxation.",
          },
        },
        {
          "@type": "Question",
          name: "What types of celebrations can be planned?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Championship victories, retirement trips, anniversaries, birthdays, contract signings, family reunions, and milestone vacations can all be customized.",
          },
        },
        {
          "@type": "Question",
          name: "Are luxury vacations suitable for children?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Many luxury resorts, villas, and cruise lines offer family-friendly accommodations and personalized experiences for travelers of every age.",
          },
        },
        {
          "@type": "Question",
          name: "Is using a luxury travel advisor worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For professional athletes with demanding schedules and limited vacation time, expert planning often delivers exceptional value through convenience, flexibility, and personalized service.",
          },
        },
        {
          "@type": "Question",
          name: "How do you guarantee privacy and prevent unwanted public attention during travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work with vetted, high-security luxury properties, private villa rentals with gated perimeters, yacht charters, and private aviation. We also coordinate with local security teams and utilize private entrances and VIP check-in services at airports and resorts to ensure complete anonymity.",
          },
        },
        {
          "@type": "Question",
          name: "Can you coordinate travel for an athlete's extended entourage or security detail?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we frequently arrange multi-tier itineraries. We can book adjacent, high-security accommodations for security personnel, chefs, physical therapists, family assistants, and extended family members, keeping logistics seamless while maintaining boundaries.",
          },
        },
        {
          "@type": "Question",
          name: "How do you handle last-minute schedule changes due to play-offs, trades, or injuries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We prioritize flexible booking terms, private jet charters that can pivot at a moment's notice, and top-tier travel insurance coverage. Our team provides 24/7 support to cancel, delay, or reroute travel plans as your professional obligations evolve.",
          },
        },
        {
          "@type": "Question",
          name: "Are you able to arrange specialized training, nutrition, or recovery facilities at our destination?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We can source properties with state-of-the-art private gym facilities, pre-arrange custom menus with private chefs matching your exact macros and nutritional guidelines, and book on-site physical therapy, massage, or hyperbaric recovery resources.",
          },
        },
        {
          "@type": "Question",
          name: "Do you handle commercial airline VIP meet-and-greet services if we do not fly private?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. For commercial flights, we arrange premium airport concierge services. This includes tarmac transfers, private suite access (like the Private Suite at LAX or Heathrow VIP), expedited customs/security clearance, and baggage handling so you never have to navigate crowded terminals.",
          },
        },
      ],
    },
  ],
};

/* ── Data: Bucket-list adventures (tabbed panel) ─────────────────── */
const bucketListTrips = [
  {
    id: "safari",
    title: "African Safari",
    badge: "Safari",
    icon: Compass,
    image: BucketAfrica,
    window: "Witness the Big Five in complete comfort",
    desc: "Luxury safari lodges pair front-row wildlife encounters with the privacy and service athlete families expect, far from crowded tourist routes.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Luxury Safari Lodges",
          "Private Expert Guides",
          "Dawn & Dusk Game Drives",
        ],
      },
    ],
    themeLabel: "Once-in-a-Lifetime Wildlife",
    themeText:
      "Families who want an immersive, screen-free adventure often find an African safari to be the most memorable off-season trip they take.",
  },
  {
    id: "galapagos",
    title: "Galápagos Expedition",
    badge: "Galápagos",
    icon: Anchor,
    image: BucketGalapagos,
    window: "Extraordinary wildlife encounters, up close",
    desc: "Small expedition ships and expert naturalist guides make the Galápagos one of the most unique and educational family adventures available.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Small Expedition Ships",
          "Expert Naturalist Guides",
          "Snorkeling & Island Walks",
        ],
      },
    ],
    themeLabel: "Untouched Natural Wonder",
    themeText:
      "The Galápagos offers a rare combination of adventure and privacy, with wildlife encounters unlike anywhere else on earth.",
  },
  {
    id: "antarctica",
    title: "Antarctica Expedition",
    badge: "Antarctica",
    icon: Snowflake,
    image: BucketAntarctica,
    window: "One of the world's most remote destinations",
    desc: "Antarctica delivers a genuine sense of discovery, with ice landings, wildlife encounters, and expert expedition teams supporting every step.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Ice Landings & Zodiac Excursions",
          "Penguin & Whale Encounters",
          "Expert Expedition Teams",
        ],
      },
    ],
    themeLabel: "The Ultimate Adventure",
    themeText:
      "For families who have traveled everywhere else, Antarctica remains one of the few truly unforgettable frontiers.",
  },
  {
    id: "northern-lights",
    title: "Northern Lights Journey",
    badge: "Northern Lights",
    icon: Sparkles,
    image: BucketNorthernLights,
    window: "Watch the Aurora Borealis in luxury",
    desc: "Luxury lodges across Scandinavia and Iceland pair guided aurora viewing with rich cultural experiences the whole family can enjoy.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Luxury Arctic Lodges",
          "Guided Aurora Viewing",
          "Scandinavian & Icelandic Culture",
        ],
      },
    ],
    themeLabel: "Nature's Rarest Display",
    themeText:
      "Few sights compare to the Aurora Borealis, making this an especially memorable trip for families celebrating a milestone.",
  },
  {
    id: "south-pacific",
    title: "South Pacific Escape",
    badge: "South Pacific",
    icon: Sun,
    image: BucketSouthPacific,
    window: "Relax in overwater luxury",
    desc: "Overwater villas surrounded by crystal-clear lagoons offer total privacy and relaxation, ideal for unwinding after a demanding season.",
    columns: [
      {
        label: "Plan Around:",
        items: [
          "Overwater Villas",
          "Crystal-Clear Lagoons",
          "World-Class Snorkeling",
        ],
      },
    ],
    themeLabel: "Pure Island Serenity",
    themeText:
      "Families who prioritize relaxation and privacy above all else often find the South Pacific to be the perfect off-season retreat.",
  },
];

/* ── FAQ Component ─────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Why do professional athletes use luxury travel advisors?",
      a: "Luxury travel advisors save valuable time, coordinate complex itineraries, provide concierge-level service, and ensure vacations remain flexible around changing schedules.",
    },
    {
      q: "What are the best vacations for athlete families?",
      a: "Luxury cruises, private villas, safari adventures, wellness retreats, Caribbean resorts, Mediterranean journeys, and multi-generational vacations are among the most popular choices.",
    },
    {
      q: "Are private villas better than hotels?",
      a: "For many athlete families, yes. Villas provide greater privacy, more living space, dedicated staff, and a home-like environment.",
    },
    {
      q: "Why are luxury cruises popular with professional athletes?",
      a: "Luxury cruises combine exceptional accommodations, personalized service, multiple destinations, and wellness facilities into one seamless vacation.",
    },
    {
      q: "Should athletes travel during the off-season?",
      a: "The off-season is often the ideal time to recharge, reconnect with family, and recover before returning to training.",
    },
    {
      q: "Can luxury travel accommodate changing schedules?",
      a: "Yes. Professional travel advisors can recommend flexible booking options and adjust itineraries when needed.",
    },
    {
      q: "Are wellness retreats beneficial for athletes?",
      a: "Many athletes appreciate wellness retreats that combine recovery therapies, healthy dining, fitness, and relaxation.",
    },
    {
      q: "What types of celebrations can be planned?",
      a: "Championship victories, retirement trips, anniversaries, birthdays, contract signings, family reunions, and milestone vacations can all be customized.",
    },
    {
      q: "Are luxury vacations suitable for children?",
      a: "Absolutely. Many luxury resorts, villas, and cruise lines offer family-friendly accommodations and personalized experiences for travelers of every age.",
    },
    {
      q: "Is using a luxury travel advisor worth it?",
      a: "For professional athletes with demanding schedules and limited vacation time, expert planning often delivers exceptional value through convenience, flexibility, and personalized service.",
    },
    {
      q: "How do you guarantee privacy and prevent unwanted public attention during travel?",
      a: "We work with vetted, high-security luxury properties, private villa rentals with gated perimeters, yacht charters, and private aviation. We also coordinate with local security teams and utilize private entrances and VIP check-in services at airports and resorts to ensure complete anonymity.",
    },
    {
      q: "Can you coordinate travel for an athlete's extended entourage or security detail?",
      a: "Yes, we frequently arrange multi-tier itineraries. We can book adjacent, high-security accommodations for security personnel, chefs, physical therapists, family assistants, and extended family members, keeping logistics seamless while maintaining boundaries.",
    },
    {
      q: "How do you handle last-minute schedule changes due to play-offs, trades, or injuries?",
      a: "We prioritize flexible booking terms, private jet charters that can pivot at a moment's notice, and top-tier travel insurance coverage. Our team provides 24/7 support to cancel, delay, or reroute travel plans as your professional obligations evolve.",
    },
    {
      q: "Are you able to arrange specialized training, nutrition, or recovery facilities at our destination?",
      a: "Absolutely. We can source properties with state-of-the-art private gym facilities, pre-arrange custom menus with private chefs matching your exact macros and nutritional guidelines, and book on-site physical therapy, massage, or hyperbaric recovery resources.",
    },
    {
      q: "Do you handle commercial airline VIP meet-and-greet services if we do not fly private?",
      a: "Yes. For commercial flights, we arrange premium airport concierge services. This includes tarmac transfers, private suite access (like the Private Suite at LAX or Heathrow VIP), expedited customs/security clearance, and baggage handling so you never have to navigate crowded terminals.",
    },
  ];

  return (
    <div className="Asc-faq-list">
      {faqData.map((item, i) => (
        <div
          key={i}
          className={`Asc-faq-item${open === i ? " Asc-open" : ""}`}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="Asc-faq-q">
            <span>{item.q}</span>
            <span className="Asc-faq-icon">
              {open === i ? (
                <Minus size={18} strokeWidth={1.5} />
              ) : (
                <Plus size={18} strokeWidth={1.5} />
              )}
            </span>
          </div>
          {open === i && (
            <div className="Asc-faq-a">
              <div className="Asc-faq-a-inner">{item.a}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────────────── */
const ProfessionalAthleteFamilyTravel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [activeTrip, setActiveTrip] = useState("safari");
  const currentTrip =
    bucketListTrips.find((d) => d.id === activeTrip) || bucketListTrips[0];

  const ActiveIcon = currentTrip.icon;

  const images = [HeroImage2, HeroImage3, HeroImage4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="Asc-page-wrapper">
      <Helmet>
        <title>
          Professional Athlete Family Travel | Luxury Travel Planning for Elite
          Athletes &amp; Their Families
        </title>
        <meta name="title" content="Professional Athlete Family Travel" />
        <meta
          name="description"
          content="Discover luxury family travel designed for professional athletes. From private villas and luxury cruises to off-season vacations, wellness retreats, private aviation, and concierge planning, create unforgettable family experiences with complete privacy and flexibility."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="Scenic_hero_section">
        {images.map((img, index) => (
          <div
            key={index}
            className={`Scenic_hero_bg ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="Scenic_hero_overlay"></div>

        <div className="Scenic_hero_content">
          <h1>
            Professional Athlete <br /> Family Travel
          </h1>

          <p>
            For most families, vacation planning revolves around school
            calendars and work schedules. For professional athletes, it's
            entirely different.
          </p>

          <p>
            A season can stretch for months, off-seasons are often surprisingly
            short, and schedules can change with very little notice. That's why
            many professional athletes choose to work with luxury travel
            advisors who understand the unique demands of elite sports.
          </p>

          {readMore && (
            <>
              <p>
                Rather than simply booking flights and hotels, a well-designed
                itinerary balances recovery, family time, privacy, flexibility,
                and unforgettable experiences. Whether celebrating a
                championship, planning an off-season escape, or checking off a
                bucket-list adventure, luxury travel should fit around an
                athlete's lifestyle — not the other way around.
              </p>

              <p>
                According to luxury travel expert Angela Hughes, athlete
                families get the most from their limited time away when every
                logistical detail is handled in advance, leaving nothing but
                relaxation and connection.
              </p>

              <p>
                With more than 40 years in the travel industry, experience
                spanning over 121 countries, and recognition as the 2024 Luxury
                Travel Influencer of the Year by Travel Leaders Network, Angela
                Hughes has become one of the most trusted voices in private,
                family-focused luxury travel.
              </p>
            </>
          )}

          <div className="Scenic_readmore_wrapper">
            <button
              className="Scenic_readmore_btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </section>

      {/* ── WHY ATHLETES TRAVEL DIFFERENTLY ──────────────────────────── */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-athlete-challenges"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Why Professional Athletes Travel Differently
            </h2>
            <div className="Asc-accent-line"></div>
          </div>

          <p className="Asc-body-text" style={{ marginBottom: "20px" }}>
            Elite athletes don't simply need a vacation — they need a carefully
            planned experience. Every vacation has to maximize valuable time
            while minimizing stress, so a luxury travel advisor helps eliminate
            the logistics athletes and their families shouldn't have to manage
            themselves.
          </p>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>What Makes Athlete Travel Unique</th>
                  <th>Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Unpredictable Schedules</strong>
                  </td>
                  <td>
                    Training and season demands can shift with little notice
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Limited Vacation Windows</strong>
                  </td>
                  <td>Off-seasons are often only a few weeks long</td>
                </tr>
                <tr>
                  <td>
                    <strong>Constant Media Attention</strong>
                  </td>
                  <td>Privacy becomes a genuine planning requirement</td>
                </tr>
                <tr>
                  <td>
                    <strong>Physical Recovery Requirements</strong>
                  </td>
                  <td>Vacations often double as recovery time</td>
                </tr>
                <tr>
                  <td>
                    <strong>Family Commitments</strong>
                  </td>
                  <td>Every trip needs to work for spouses and children too</td>
                </tr>
                <tr>
                  <td>
                    <strong>Security Considerations</strong>
                  </td>
                  <td>Discreet arrivals and transportation reduce exposure</td>
                </tr>
                <tr>
                  <td>
                    <strong>International Travel Demands</strong>
                  </td>
                  <td>Complex logistics require expert coordination</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PRIVACY & SECURITY MATTER ───────────────────────────────── */}
      <section className="adg-c-section adg-c-bg-white" id="adg-c-privacy">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <h2 className="adg-c-h2">Privacy &amp; Security Matter</h2>
            <div className="adg-c-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                "Private villa rentals with dedicated staff",
                "Boutique luxury resorts with intimate atmospheres",
                "Private yacht charters away from crowded destinations",
                "Secure, discreet ground transportation",
                "Private airport transfers and arrival arrangements",
                "Complete disconnection from public life",
              ].map((label, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Shield size={16} strokeWidth={2.5} />
                  </span>
                  <span className="adg-c-overview-label">{label}</span>
                </div>
              ))}
            </div>

            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Star size={28} className="adg-c-callout-star" />
                  <p className="adg-c-callout-text">
                    Privacy isn't a luxury for many athletes — it's a necessity.
                    Families often prefer destinations and accommodations that
                    allow them to truly disconnect from public life without
                    sacrificing comfort.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={PrivacyImage}
                  alt="Private villa terrace with ocean view for athlete family travel"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    Complete Privacy, Total Peace of Mind
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p
            className="adg-c-body-text"
            style={{ marginTop: "2rem", textAlign: "center" }}
          >
            Luxury travel allows athletes to enjoy quality family time without
            feeling like they're constantly on display.
          </p>
        </div>
      </section>

      {/* ══ MAKING THE MOST OF THE OFF-SEASON ═══════════════════════ */}
      <section className="adg-c-section adg-c-bg-soft" id="off-season-planning">
        <div className="adg-c-container">
          <div className="adg-c-section-header">
            <span className="adg-c-eyebrow">Off-Season Planning</span>

            <h2 className="adg-c-h2">
              Making the Most <br /> of the Off-Season
            </h2>

            <div className="adg-c-accent-line"></div>

            <p className="Asc-section-intro">
              The off-season may last only a few weeks, making every day
              incredibly valuable. Expert planning allows athletes to begin
              relaxing the moment they leave home, with every itinerary designed
              around available schedules and family priorities.
            </p>
          </div>

          <div className="adg-c-venues-grid1">
            {[
              {
                id: 1,
                eyebrow: "Escape Type #1",
                name: "Caribbean & Mediterranean",
                highlight: "Sun, Sea, and Total Privacy",
                items: [
                  "Caribbean Island Escapes",
                  "Mediterranean Cruises",
                  "Private Beach Villas",
                  "Coastal Yacht Charters",
                ],
                callout:
                  "Warm-weather escapes remain the most requested off-season trips, combining relaxation with complete privacy.",
              },
              {
                id: 2,
                eyebrow: "Escape Type #2",
                name: "Cultural & Safari Adventures",
                highlight: "Immersive Family Experiences",
                items: [
                  "European Cultural Tours",
                  "African Safaris",
                  "Hawaiian Island Vacations",
                  "Guided Expeditions",
                ],
                callout:
                  "For families who've traveled everywhere for competition, culture and wildlife-focused trips create entirely new memories.",
              },
              {
                id: 3,
                eyebrow: "Escape Type #3",
                name: "Wellness & Ski Retreats",
                highlight: "Recovery Meets Relaxation",
                items: [
                  "Wellness Retreats",
                  "Ski Holidays",
                  "Spa-Focused Resorts",
                  "Mountain Villas",
                ],
                callout:
                  "Recovery doesn't have to stop for vacation — wellness and ski retreats blend downtime with physical restoration.",
              },
              {
                id: 4,
                eyebrow: "Escape Type #4",
                name: "Luxury Adventure Travel",
                highlight: "Once-in-a-Lifetime Journeys",
                items: [
                  "Bucket-List Expeditions",
                  "Private Island Journeys",
                  "Multi-Destination Itineraries",
                  "Milestone Celebration Trips",
                ],
                callout:
                  "When time allows, bucket-list adventures turn a short off-season into an unforgettable family journey.",
              },
            ].map((venue, i) => (
              <div
                key={venue.id}
                className={`adg-c-venue-card adg-c-venue-${(i % 5) + 1}`}
              >
                <div className="adg-c-venue-top">
                  <span className="adg-c-venue-eyebrow">{venue.eyebrow}</span>

                  <h3 className="adg-c-venue-name">{venue.name}</h3>

                  <p className="adg-c-venue-highlight">{venue.highlight}</p>
                </div>

                <ul className="adg-c-venue-list">
                  {venue.items.map((item, j) => (
                    <li key={j}>
                      <span className="adg-c-venue-dot"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="adg-c-venue-callout">
                  <span className="adg-c-venue-callout-bar"></span>
                  <p>{venue.callout}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUCKET-LIST ADVENTURES (TABBED) ─────────────────────────── */}
      <section className="luc-destinations-section" id="luc-bucket-list">
        <div className="luc-destinations-container">
          <div className="luc-destinations-header">
            <h2 className="luc-destinations-title">Bucket-List Adventures</h2>

            <div className="adg-c-accent-line"></div>

            <p className="luc-destinations-intro">
              Many athletes spend their careers traveling for competition but
              rarely have the opportunity to truly experience the world. The
              off-season provides the perfect opportunity for unforgettable
              adventures.
            </p>
          </div>

          <div className="luc-dest-layout">
            <nav className="luc-dest-nav">
              {bucketListTrips.map((item) => {
                const NavIcon = item.icon;
                const isActive = activeTrip === item.id;

                return (
                  <button
                    key={item.id}
                    className={`luc-dest-nav-btn ${
                      isActive ? "luc-dest-nav-btn--active" : ""
                    }`}
                    onClick={() => setActiveTrip(item.id)}
                  >
                    <div className="luc-dest-nav-icon-wrap">
                      <NavIcon size={16} strokeWidth={1.8} />
                    </div>

                    <span className="luc-dest-nav-label">{item.badge}</span>

                    {isActive && <div className="luc-dest-nav-pip"></div>}
                  </button>
                );
              })}
            </nav>

            <div className="luc-dest-panel" key={activeTrip}>
              <div className="luc-dest-img-wrap">
                <img
                  src={currentTrip.image}
                  alt={currentTrip.title}
                  className="luc-dest-img"
                />

                <div className="luc-dest-img-overlay">
                  <div className="luc-dest-img-icon">
                    <ActiveIcon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="luc-dest-img-title">
                    {currentTrip.title}
                  </span>
                </div>
              </div>

              <p className="luc-dest-panel-desc">
                <strong>{currentTrip.window}.</strong> {currentTrip.desc}
              </p>

              <div className="luc-dest-columns">
                {currentTrip.columns.map((col, cIdx) => (
                  <div key={cIdx} className="luc-dest-info-col">
                    <span className="luc-dest-info-label">{col.label}</span>

                    <div className="luc-dest-items-grid">
                      {col.items.map((item) => (
                        <div key={item} className="luc-dest-item">
                          <div className="luc-dest-item-dot"></div>
                          <span className="luc-dest-item-text">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="luc-dest-theme-box-note">
                <div className="luc-dest-theme-note-bar"></div>

                <div className="luc-dest-theme-note-content">
                  <span className="luc-dest-theme-note-label">
                    {currentTrip.themeLabel}
                  </span>

                  <p className="luc-dest-theme-note-text">
                    {currentTrip.themeText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LUXURY VILLAS: A HOME AWAY FROM HOME ────────────────────── */}
      <section
        className="ugt-components-section"
        id="luxury-villas"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="ugt-components-container">
          <div className="ugt-components-header">
            <h2 className="ugt-components-title">
              Luxury Villas: A Home Away From Home
            </h2>

            <div className="adg-c-accent-line"></div>
          </div>

          <div className="ugt-components-list">
            <div className="ugt-component-row">
              <div className="ugt-component-image-wrapper">
                <div className="ugt-component-image-container">
                  <img
                    src={VillaImage}
                    alt="Luxury villa with private chef and pool for athlete family travel"
                    className="ugt-component-image"
                  />
                </div>
              </div>

              <div className="ugt-component-content">
                <p className="ugt-component-text">
                  Many professional athletes choose private villas over
                  traditional hotels. Whether overlooking the Mediterranean,
                  nestled in the mountains, or located on a private island,
                  luxury villas create an environment where families can truly
                  unwind together.
                </p>

                <div className="ugt-questions-box">
                  <span className="ugt-questions-title">
                    A great villa should include:
                  </span>

                  <ul className="ugt-questions-list">
                    {[
                      "Complete Privacy",
                      "Multiple Bedrooms",
                      "Dedicated Staff",
                      "Private Chefs",
                      "Swimming Pools",
                      "Outdoor Entertainment Areas",
                      "Flexible Dining Schedules",
                      "Space for Extended Family",
                    ].map((item, idx) => (
                      <li key={idx} className="ugt-question-item">
                        <Check size={16} className="ugt-question-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p
                  className="ugt-component-footer"
                  style={{
                    backgroundColor: "var(--bg-white)",
                    padding: "12px",
                    borderRadius: "6px",
                  }}
                >
                  A villa's flexible dining and open layout give families room
                  to truly relax together, without the structure of a
                  traditional hotel stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIVATE JET TRAVEL ───────────────────────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-private-jet">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">Private Jet Travel</h2>
            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Flexible Departure Times",
                desc: "Fly on your own schedule, with direct flights that reduce total travel time.",
              },
              {
                title: "Greater Privacy",
                desc: "Faster boarding and private terminals keep families away from public attention.",
              },
              {
                title: "Easier Travel With Children",
                desc: "Simplified luggage handling and flexible timing make traveling with kids far less stressful.",
              },
              {
                title: "Personalized Onboard Service",
                desc: "Attentive, tailored service throughout the flight, start to finish.",
              },
            ].map((item, i) => (
              <div key={i} className="Lfsg-mistake-card">
                <div className="Lfsg-mistake-number">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="Lfsg-mistake-title">{item.title}</h4>
                <p className="Lfsg-mistake-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <p
            className="Lfsg-mistake-desc"
            style={{ textAlign: "center", marginTop: "2rem" }}
          >
            Time is one of the most valuable assets for any professional
            athlete. For athletes balancing tight schedules, private air travel
            can transform the entire vacation experience.
          </p>
        </div>
      </section>

      {/* ── WELLNESS RETREATS FOR RECOVERY ──────────────────────────── */}
      <section className="dmg-info-section dmg-bg-soft" id="dmg-wellness">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Wellness Retreats for Recovery</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Recovery doesn't stop when the season ends. Many athletes use
                vacations as an opportunity to focus on both physical and mental
                well-being — helping them return home refreshed while still
                enjoying quality family time.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Spa Treatments</h3>
                    <p className="dmg-info-feature-desc">
                      Sports massage, hydrotherapy, and personalized wellness
                      therapies.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Fitness Facilities
                    </h3>
                    <p className="dmg-info-feature-desc">
                      State-of-the-art gyms, yoga studios, and
                      performance-focused equipment.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">Healthy Dining</h3>
                    <p className="dmg-info-feature-desc">
                      Nutrition-focused menus designed around individual
                      preferences.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Mindfulness Programs
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Meditation, breathing sessions, and stress-reduction
                      experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={WellnessImage}
                  alt="Wellness retreat spa for professional athlete recovery"
                  className="dmg-media-img"
                      style={{ height: "700px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Recovery Meets Relaxation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAMILY CONCIERGE SERVICES ───────────────────────────────── */}
      <section className="dmg-info-section dmg-bg-white" id="family-concierge">
        <div className="dmg-info-container">
          <div className="dmg-info-grid">
            {/* Left Side Image */}
            <div className="dmg-info-media">
              <div className="dmg-media-wrapper">
                <img
                  src={ConciergeImage}
                  alt="Family concierge service for professional athlete travel"
                  className="dmg-media-img"
                      style={{ height: "650px" }}
                />
                <div className="dmg-media-overlay"></div>

                <div className="dmg-media-badge">
                  <span>Every Detail Managed</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="dmg-info-content">
              <h2 className="dmg-info-title">Family Concierge Services</h2>
              <div className="dmg-info-accent"></div>

              <p className="dmg-info-lead">
                Luxury travel is about far more than booking accommodations. A
                dedicated concierge can assist with nearly every aspect of the
                journey, so families can focus entirely on enjoying their time
                together.
              </p>

              <div className="dmg-info-features dmg-info-features-scrollable">
                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Flights &amp; Private Transfers
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Coordinated door-to-door travel from home to destination.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Dining, Guides &amp; Childcare
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Restaurant reservations, private guides, and trusted
                      childcare arrangements.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Yacht Charters &amp; Event Tickets
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Access to exclusive experiences and hard-to-get event
                      access.
                    </p>
                  </div>
                </div>

                <div className="dmg-info-feature-item">
                  <div className="dmg-info-icon-box">
                    <Check size={16} />
                  </div>
                  <div className="dmg-info-feature-texts">
                    <h3 className="dmg-info-feature-title">
                      Celebration Planning
                    </h3>
                    <p className="dmg-info-feature-desc">
                      Birthdays, anniversaries, and other milestones planned
                      down to the last detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* SPORTS EVENT TRAVEL & MULTI-GENERATIONAL FAMILY VACATIONS */}
      <section className="azs-entertainment-section" id="sports-event-travel">
        <div className="azs-container">
          <div className="azs-section-header">
            <h2 className="azs-section-title">
              Sports Event Travel & Multi-Generational Family Vacations
            </h2>
            <div className="azs-section-accent"></div>
            <p className="azs-section-subtitle">
              Exclusive sporting events and luxury family getaways designed for
              professional athletes and their loved ones.
            </p>
          </div>

          <div className="azs-entertainment-grid">
            {/* Sports Event Travel */}
            <div className="azs-entertainment-card azs-azamara-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Trophy size={24} className="azs-ent-icon" />
                </div>
                <h3 className="azs-ent-title">Sports Event Travel</h3>
              </div>

              <p className="azs-ent-intro">
                Professional athletes are passionate sports fans too. Luxury
                travel can include exclusive access to the world's most
                prestigious sporting events, combined with premium
                accommodations and VIP experiences.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">Popular Experiences:</h4>

                <ul className="azs-ent-list">
                  {[
                    "Wimbledon",
                    "The Masters",
                    "Monaco Grand Prix",
                    "Ryder Cup",
                    "Formula 1 weekends",
                    "UEFA Champions League Final",
                    "Super Bowl",
                    "Olympic Games",
                  ].map((item, idx) => (
                    <li key={idx} className="azs-ent-list-item">
                      <div className="azs-ent-list-icon-wrapper">
                        <Check size={14} className="azs-ent-list-icon" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="azs-ent-divider"></div>

                <div className="azs-ent-highlight-box azs-azamara-ent-highlight">
                  <p className="azs-ent-highlight-text">
                    Every itinerary can include luxury hotels, fine dining,
                    private transportation, VIP hospitality, and destination
                    sightseeing.
                  </p>
                </div>
              </div>
            </div>

            {/* Multi-Generational Family Vacations */}
            <div className="azs-entertainment-card azs-seabourn-ent">
              <div className="azs-ent-header">
                <div className="azs-ent-icon-circle">
                  <Users size={24} className="azs-ent-icon" />
                </div>
                <h3 className="azs-ent-title">
                  Multi-Generational Family Vacations
                </h3>
              </div>

              <p className="azs-ent-intro">
                The off-season is the perfect opportunity for professional
                athletes to reconnect with spouses, children, parents, and
                grandparents while enjoying a luxury vacation together.
              </p>

              <div className="azs-ent-body">
                <h4 className="azs-ent-group-title">
                  Why Luxury Travel Works:
                </h4>

                <ul className="azs-ent-list">
                  {[
                    "Large accommodations",
                    "Flexible activities",
                    "Multiple dining options",
                    "Relaxation for adults",
                    "Activities for children",
                    "Accessible transportation",
                  ].map((item, idx) => (
                    <li key={idx} className="azs-ent-list-item">
                      <div className="azs-ent-list-icon-wrapper">
                        <Star size={14} className="azs-ent-list-icon" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="azs-ent-divider"></div>

                <div className="azs-ent-highlight-box azs-seabourn-ent-highlight">
                  <p className="azs-ent-highlight-text">
                    Whether aboard a luxury cruise or relaxing in a private
                    villa, every generation can enjoy unforgettable experiences
                    together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* ── LUXURY CRUISES FOR ATHLETE FAMILIES ─────────────────────── */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-cruises"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Luxury Cruises for Athlete Families</h2>
            <div className="Asc-accent-line"></div>
          </div>

          <div className="adg-c-overview-layout">
            <div className="adg-c-overview-icons">
              {[
                {
                  title: "Spacious Suites",
                  desc: "Room for the whole family without feeling confined.",
                },
                {
                  title: "Personalized Service",
                  desc: "Attentive, individualized service throughout the voyage.",
                },
                {
                  title: "Fine Dining",
                  desc: "Multiple high-quality dining venues for every taste.",
                },
                {
                  title: "Wellness Facilities",
                  desc: "Recovery-focused amenities available onboard.",
                },
                {
                  title: "Quiet Public Spaces",
                  desc: "Room to relax without crowds or attention.",
                },
                {
                  title: "Destination-Focused Itineraries",
                  desc: "Meaningful port visits without repeatedly packing and unpacking.",
                },
                {
                  title: "Family-Friendly Experiences",
                  desc: "Activities and amenities suited to every generation.",
                },
              ].map((item, i) => (
                <div key={i} className="adg-c-overview-item">
                  <span className="adg-c-overview-icon">
                    <Ship size={16} strokeWidth={2.2} />
                  </span>
                  <span className="adg-c-overview-label">
                    <strong>{item.title}:</strong> {item.desc}
                  </span>
                </div>
              ))}
            </div>

            <div className="adg-c-overview-right">
              <div className="adg-c-overview-callout">
                <div className="adg-c-overview-callout-inner">
                  <Users size={28} className="adg-c-callout-star" />
                  <p className="adg-c-callout-text">
                    Unlike large cruise ships, smaller luxury vessels emphasize
                    personalized service and destination-focused itineraries,
                    simplifying travel by letting families explore multiple
                    destinations without repeatedly packing and unpacking.
                  </p>
                </div>
              </div>

              <div className="adg-c-overview-image-wrap">
                <img
                  src={CruiseImage}
                  alt="Luxury cruise suite for professional athlete family vacation"
                  className="adg-c-overview-img"
                />
                <div className="adg-c-overview-img-overlay">
                  <span className="adg-c-overview-img-label">
                    One Ship, Many Destinations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* ── WHY WORK WITH A LUXURY TRAVEL ADVISOR ───────────────────── */}
      <section className="adg-section" id="adg-advisor">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Why Work With a Luxury Travel Advisor?</h2>
            <div className="adg-accent-line"></div>
          </div>
          <div
            className="adg-split-layout"
            style={{ alignItems: "flex-start" }}
          >
            <div className="adg-content-card-side">
              <img
                src={AdvisorImage}
                alt="Luxury travel advisor planning an athlete family vacation"
                className="adg-side-image"
                style={{ height: "40vh"}}
              />
              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Award size={28} />
                  <span className="adg-meta-label">Trusted Expertise</span>
                </div>
                <p className="adg-card-lead">
                  Athletes rely on experts throughout their careers — coaches,
                  nutritionists, agents, and financial advisors. Travel should
                  be no different.
                </p>
                
              </div>
            </div>
            <div className="adg-list-side">
              {[
                {
                  title: "Time-Saving Planning",
                  icon: <CalendarClock size={20} />,
                },
                {
                  title: "Personalized Destination Recommendations",
                  icon: <Compass size={20} />,
                },
                {
                  title: "Exclusive Luxury Partnerships",
                  icon: <Sparkles size={20} />,
                },
                {
                  title: "Concierge-Level Service",
                  icon: <Gift size={20} />,
                },
                {
                  title: "Flexible Itinerary Management",
                  icon: <MapPin size={20} />,
                },
                {
                  title: "Access to Unique Experiences",
                  icon: <Anchor size={20} />,
                },
              ].map((item, i) => (
                <div key={i} className="adg-list-item-card">
                  <div className="adg-list-item-icon">{item.icon}</div>
                  <h4 className="adg-list-item-label">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CELEBRATING CAREER MILESTONES ───────────────────────────── */}
      <section className="ugt-advantage-section" id="career-milestones">
        <div className="ugt-advantage-container">
          <div className="ugt-advantage-header">
            <span className="ugt-advantage-eyebrow">
              Luxury Celebration Travel
            </span>

            <h2 className="ugt-advantage-title">
              Celebrating Career Milestones
            </h2>

            <div className="Asc-accent-line"></div>

            <p className="ugt-advantage-intro">
              Professional sports careers are filled with extraordinary moments
              worth celebrating. Luxury travel creates unforgettable experiences
              for every milestone, allowing athletes and their families to enjoy
              meaningful time together in exceptional destinations.
            </p>
          </div>

          <div className="ugt-advantage-grid">
            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Trophy size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Championship Victories</h4>

              <p className="ugt-card-desc">
                Celebrate an unforgettable season with family through a luxury
                vacation designed to honor your team's success.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Flag size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Retirement</h4>

              <p className="ugt-card-desc">
                Mark the beginning of a new chapter with a once-in-a-lifetime
                journey to a destination you've always dreamed of visiting.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <FileSignature size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Contract Signings</h4>

              <p className="ugt-card-desc">
                Celebrate career achievements with a meaningful getaway
                featuring luxury accommodations, fine dining, and exclusive
                experiences.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <Award size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Hall of Fame Recognition</h4>

              <p className="ugt-card-desc">
                Honor years of dedication with an unforgettable journey that
                reflects the significance of this remarkable achievement.
              </p>
            </div>

            <div className="ugt-advantage-card">
              <div className="ugt-icon-box">
                <PartyPopper size={28} strokeWidth={1.5} />
              </div>

              <h4 className="ugt-card-title">Family Milestones</h4>

              <p className="ugt-card-desc">
                Birthdays, anniversaries, graduations, and family reunions
                become even more memorable in extraordinary destinations shared
                with the people who matter most.
              </p>
            </div>
          </div>

          <div className="ugt-advantage-footer">
            <p className="ugt-advantage-intro">
              Every celebration deserves an itinerary as unique as the
              achievement itself, combining luxury accommodations, personalized
              experiences, and unforgettable memories.
            </p>
          </div>
        </div>
      </section>



      {/* ── ANGELA HUGHES AUTHORITY ────────────────────────────────── */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">
              Expert Insight From Angela Hughes
            </span>
            <h2 className="Adg-expert-title">Angela Hughes Luxury Authority</h2>
            <div className="Adg-expert-divider"></div>
          </div>

          <div className="Adg-expert-grid">
            <div className="Adg-expert-image-col">
              <div className="Adg-expert-portrait-wrap">
                <img
                  src={AboutImage}
                  alt="Angela Hughes Luxury Travel Expert"
                  className="Adg-expert-portrait"
                />
                <div className="Adg-expert-portrait-badge">
                  <Star size={14} />
                  <span>40+ Years Experience</span>
                </div>
              </div>

              <div className="Adg-expert-name-card">
                <h3 className="Adg-expert-name">Angela Hughes</h3>
                <p className="Adg-expert-role">
                  CEO of Trips &amp; Ships Luxury Travel
                </p>
                <div className="Adg-expert-name-divider"></div>
                <p className="Adg-expert-countries">
                  <MapPin size={14} />
                  Traveled to more than 121 countries
                </p>
              </div>
            </div>

            <div className="Adg-expert-content-col">
              <div className="Adg-expert-credentials-box">
                <h4 className="Adg-expert-credentials-title">
                  <Award size={16} />
                  Angela Hughes Luxury Authority
                </h4>

                <div className="Adg-expert-credentials-grid">
                  {[
                    {
                      icon: <Award size={16} />,
                      label: "CEO of Trips & Ships Luxury Travel",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Founder of Luxury Travel University",
                    },
                    {
                      icon: <Star size={16} />,
                      label: "Over 40 years in the travel industry",
                    },
                    {
                      icon: <MapPin size={16} />,
                      label: "Traveled to more than 121 countries",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Global luxury travel speaker and trainer",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Weekly travel industry columnist",
                    },
                    {
                      icon: <Users size={16} />,
                      label: "Travel Leaders Network Advisory Board member",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "2024 Luxury Travel Influencer of the Year",
                    },
                    {
                      icon: <Star size={16} />,
                      label:
                        "Named one of the Most Influential Women in Travel in 2026",
                    },
                    {
                      icon: <Award size={16} />,
                      label: "Featured in major travel publications worldwide",
                    },
                    {
                      icon: <Trophy size={16} />,
                      label:
                        "Specialist in private travel for professional athletes and their families",
                    },
                  ].map((item, i) => (
                    <div className="Adg-expert-list-item" key={i}>
                      <span className="Adg-expert-list-icon">{item.icon}</span>
                      <span className="Adg-expert-list-label">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <p
                  className="Adg-expert-role"
                  style={{ marginTop: "24px", lineHeight: "1.8" }}
                >
                  Angela Hughes and the team at Trips &amp; Ships Luxury Travel
                  help professional athletes and their families find the
                  smartest path to privacy, recovery, and unforgettable time
                  together — from villa selection and timing to private aviation
                  and concierge planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section className="Asc-section Asc-bg-white" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about planning luxury family travel as
              a professional athlete.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={CtaImage}
            alt="Professional athlete family luxury travel destination"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Personalized Luxury Travel Planning
                </span>
                <h2 className="Asc-help-h2">
                  Ready to Plan Your <br /> Athlete Family Vacation?
                </h2>
                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the expert team at Trips
                    &amp; Ships Luxury Travel for personalized guidance on
                    planning a private, flexible, and unforgettable family
                    vacation.
                  </p>

                  <p className="Asc-help-intro">
                    From villa selection and private aviation to wellness
                    retreats and milestone celebrations, expert support helps
                    athlete families make the most of every valuable moment
                    away.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you're celebrating a championship, planning an
                    off-season escape, or organizing a multi-generational
                    getaway, personalized planning makes all the difference.
                  </p>

                  <div className="Asc-help-btn-container">
                    <Link
                      to="/contact"
                      className="Asc-help-cta-btn"
                      style={{ textDecoration: "none" }}
                    >
                      Start Planning Your Family Journey
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Expert guidance includes:
                  </h3>
                  <ul className="Asc-help-bullets">
                    {[
                      "Private villa & resort recommendations",
                      "Private aviation coordination",
                      "Security-minded itinerary planning",
                      "Wellness & recovery retreat selection",
                      "Milestone celebration planning",
                      "Full concierge support, start to finish",
                    ].map((item, i) => (
                      <li key={i}>
                        <div className="Asc-bullet-icon">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="Asc-help-intro" style={{ marginTop: "20px" }}>
                    Trips &amp; Ships Luxury Travel specializes in helping
                    professional athletes and their families create highly
                    personalized, private travel experiences worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalAthleteFamilyTravel;
