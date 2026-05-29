import { useState, useEffect, useRef } from "react";
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
  Wine,
  ShieldCheck,
  Info,
  ConciergeBell,
  HeartPulse,
  HandCoins,
  Wifi,
  UtensilsCrossed,
  BedDouble,
  Plane,
  Crown,
  Gift,
  BadgeDollarSign,
  Utensils,
  Heart,
  Globe,
} from "lucide-react";
import Nav from "../../components/Navbar/Nav";
import "./ExploraJourneysCruises.css";
import AboutImage from "../../assets/AboutAngela.jpeg";
import CTAImage from "../../assets/ExploraJourneysCruises/Meridian-Lounge.webp";

import HeroImage1 from "../../assets/ExploraJourneysCruises/ExploraCruise.webp";
import HeroImage2 from "../../assets/ExploraJourneysCruises/ExploraCruise2.webp";
import HeroImage4 from "../../assets/ExploraJourneysCruises/ExploraCruise3.webp";
import AzamaraDietaryImage from "../../assets/ExploraJourneysCruises/Regent-Seven-Seas-Cruises.webp";
import ExploraPool from "../../assets/ExploraJourneysCruises/Explora-Journeys.webp";

import ExploraDetination from "../../assets/ExploraJourneysCruises/amalfi-coast-italy-mediterranean-hero-summer-2025.webp";
import ExploraDetination2 from "../../assets/ExploraJourneysCruises/explora-journeys-red-sea-luxury-cruise-oman.webp";
import ExploraDetination3 from "../../assets/ExploraJourneysCruises/allinn-estonia-old-town-summer-travel-aerial.webp";
import ExploraDetination4 from "../../assets/ExploraJourneysCruises/explora-journeys-canada-new-england-fall-cruise.webp";

import LuxuryOceanfrontSuites from "../../assets/ExploraJourneysCruises/Luxury-Oceanfront-Suites.webp";
import FineDining from "../../assets/ExploraJourneysCruises/Fine-Dining.webp";
import PremiumBeverages from "../../assets/ExploraJourneysCruises/Premium-Beverages.webp";
import ExperienceImage from "../../assets/ExploraJourneysCruises/Experience.webp";
import OnboardExperience from "../../assets/ExploraJourneysCruises/onboard-experience.webp";
import FitnessAccess from "../../assets/ExploraJourneysCruises/explora-journeys-luxury-fitness-center-gym.webp";
import SuiteServices from "../../assets/ExploraJourneysCruises/Suite-Services.webp";

import { Helmet } from "react-helmet-async";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Trips & Ships Luxury Travel",
      url: "https://tripsandships.com",
      logo: "https://tripsandships.com/logo.png",
    },

    {
      "@type": "TravelAgency",
      name: "Trips & Ships Luxury Travel",
      url: "https://tripsandships.com",
      description:
        "Luxury travel agency specializing in luxury cruises, safaris, expeditions, and premium travel experiences.",
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
      name: "What Is Included on Explora Journeys Cruises",
      url: "https://tripsandships.com/explora-journeys-cruise-inclusions",
      description:
        "Complete guide to what is included on Explora Journeys cruises.",
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
          name: "Luxury Cruises",
          item: "https://tripsandships.com/luxury-cruises",
        },

        {
          "@type": "ListItem",
          position: 3,
          name: "Explora Journeys Inclusions",
          item: "https://tripsandships.com/explora-journeys-cruise-inclusions",
        },
      ],
    },

    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Explora Journeys all inclusive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Explora Journeys is highly inclusive and includes dining, beverages, Wi-Fi, gratuities, and luxury accommodations, though some extras like excursions and spa treatments cost additional fees.",
          },
        },

        {
          "@type": "Question",
          name: "Are drinks included on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most wines, cocktails, premium spirits, specialty coffees, bottled water, and minibar beverages are included.",
          },
        },

        {
          "@type": "Question",
          name: "Does Explora Journeys include gratuities?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Gratuities are included in the cruise fare.",
          },
        },

        {
          "@type": "Question",
          name: "Is Wi-Fi included on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Unlimited high-speed Wi-Fi is included throughout the voyage.",
          },
        },

        {
          "@type": "Question",
          name: "Are shore excursions included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most shore excursions are not included and are purchased separately.",
          },
        },

        {
          "@type": "Question",
          name: "Does Explora Journeys include specialty dining?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Multiple fine dining venues are included without many of the upcharges common on mainstream cruise lines.",
          },
        },

        {
          "@type": "Question",
          name: "Are all rooms suites on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every accommodation onboard is an oceanfront luxury suite with a private terrace.",
          },
        },

        {
          "@type": "Question",
          name: "Is room service included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. In-suite dining and 24-hour room service are included.",
          },
        },

        {
          "@type": "Question",
          name: "Is Explora Journeys worth the price?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For travelers seeking luxury inclusions, spacious suites, and sophisticated onboard experiences, many travelers consider Explora Journeys an excellent luxury value.",
          },
        },

        {
          "@type": "Question",
          name: "What is not included on Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spa treatments, boutique purchases, casino spending, and many shore excursions are additional.",
          },
        },

        {
          "@type": "Question",
          name: "Is Explora Journeys family friendly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, though the atmosphere appeals more to sophisticated luxury travelers than families seeking heavy entertainment programming.",
          },
        },

        {
          "@type": "Question",
          name: "How does Explora compare to Regent Seven Seas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Regent includes more excursions, while Explora emphasizes modern European luxury design and lifestyle-focused cruising.",
          },
        },

        {
          "@type": "Question",
          name: "Does Explora Journeys include airport transfers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some promotions and suite categories may include transfers, but not all fares automatically include them.",
          },
        },

        {
          "@type": "Question",
          name: "Who should book Explora Journeys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Experienced luxury travelers, couples, affluent professionals, and travelers seeking relaxed upscale cruising are ideal candidates.",
          },
        },
      ],
    },
  ],
};

const inclusions = [
  {
    id: "suites",
    icon: BedDouble,
    title: "Luxury Oceanfront Suites",
    image: LuxuryOceanfrontSuites,
    note: "Unlike many competitors, there are no interior cabins.",
    items: [
      "Ocean views",
      "Private terraces",
      "Walk-in wardrobes",
      "Heated bathroom floors",
      "Luxury linens",
      "Spacious sitting areas",
      "Premium bath amenities",
    ],
  },
  {
    id: "dining",
    icon: UtensilsCrossed,
    title: "Fine Dining Across Multiple Restaurants",
    image: FineDining,
    note: "Onboard dining philosophy focuses on flexibility rather than rigid dining times.",
    items: [
      "Fine dining venues",
      "Global cuisine restaurants",
      "Mediterranean-inspired experiences",
      "Specialty restaurants without upcharges",
    ],
  },
  {
    id: "beverages",
    icon: Wine,
    title: "Premium Beverages",
    image: PremiumBeverages,
    note: "A major value advantage compared to many premium cruise lines.",
    items: [
      "Fine wines",
      "Premium spirits",
      "Champagne",
      "Specialty coffees",
      "Soft drinks & bottled water",
      "Cocktails",
      "In-suite minibar selections",
    ],
  },
  {
    id: "wifi",
    icon: Wifi,
    title: "Unlimited High-Speed Wi-Fi",
    image: ExperienceImage,
    note: "For executives, this inclusion alone significantly improves perceived value.",
    items: [
      "Stream content",
      "Work remotely",
      "Stay connected internationally",
      "Share experiences in real time",
    ],
  },
  {
    id: "gratuities",
    icon: HandCoins,
    title: "Gratuities Included",
    image: OnboardExperience,
    note: "Creates a smoother experience without constant tipping concerns that frustrate luxury travelers.",
    items: [
      "No tipping expectations",
      "Seamless onboard experience",
      "Fare fully covers service",
    ],
  },
  {
    id: "wellness",
    icon: HeartPulse,
    title: "Wellness & Fitness Access",
    image: FitnessAccess,
    note: "Spa treatments generally remain an additional cost.",
    items: [
      "Modern fitness facilities",
      "Group fitness classes",
      "Wellness programming",
      "Multiple pools",
      "Thermal areas",
      "Relaxation lounges",
    ],
  },
  {
    id: "inSuite",
    icon: ConciergeBell,
    title: "In-Suite Services",
    image: SuiteServices,
    note: "Personalized, attentive service woven throughout every aspect of the voyage.",
    items: [
      "24-hour room service",
      "In-suite dining",
      "Attentive housekeeping",
      "Personalized concierge support",
      "Luxury bedding & amenities",
    ],
  },
];

/* ── aac: IntersectionObserver Hook ─────────────────────────────── */
function useAacInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ── aac: Section 2 — Expert Insight ────────────────────────────── */
function AacExpertSection() {
  const [ref, inView] = useAacInView();

  return (
    <section className="aac-section aac-section-expert" ref={ref}>
      <div className="aac-container">
        <div className={`aac-expert-grid${inView ? " aac-animate-in" : ""}`}>
          {/* LEFT SIDE */}
          <div className="aac-expert-left">
            <p className="aac-eyebrow aac-eyebrow-light">
              Modern Luxury Cruising
            </p>

            <h2 className="aac-h2 aac-h2-white">
              Why Luxury Travelers Love Explora Journeys
            </h2>

            <div className="aac-accent-line aac-accent-white" />

            <p className="aac-expert-desc" style={{ marginTop: "18px" }}>
              Explora Journeys appeals strongly to travelers seeking a more
              refined, spacious, and contemporary luxury cruise experience.
            </p>

            <blockquote className="aac-expert-quote">
              “Explora Journeys especially resonates with affluent travelers who
              feel traditional luxury cruising has become either too formal or
              too commercialized.”
            </blockquote>

            <p className="aac-expert-desc" style={{ marginTop: "24px" }}>
              Angela Hughes frequently notes that Explora successfully blends
              modern European sophistication with a calmer and more personalized
              onboard atmosphere.
            </p>

            <div className="aac-expert-byline" style={{ marginTop: "30px" }}>
              <div className="aac-expert-avatar">AH</div>

              <div>
                <p className="aac-expert-name">Angela Hughes</p>

                <p className="aac-expert-role">
                  CEO, Trips &amp; Ships Luxury Travel
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="aac-expert-right">
            <p className="aac-insight-label">What Luxury Travelers Love Most</p>

            <div className="aac-insight-list">
              {[
                "Sophisticated European elegance",
                "Modern yacht-inspired design",
                "Less crowded ships",
                "Contemporary luxury",
                "Relaxed upscale atmosphere",
                "Exceptional culinary experiences",
                "Spacious accommodations",
              ].map((text, i) => (
                <div
                  key={i}
                  className="aac-insight-item"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="aac-insight-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <p className="aac-insight-text">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      q: "Is Explora Journeys all inclusive?",
      a: "Explora Journeys is highly inclusive and includes dining, beverages, Wi-Fi, gratuities, and luxury accommodations, though some extras like excursions and spa treatments cost additional fees.",
    },
    {
      q: "Are drinks included on Explora Journeys?",
      a: "Yes. Most wines, cocktails, premium spirits, specialty coffees, bottled water, and minibar beverages are included.",
    },
    {
      q: "Does Explora Journeys include gratuities?",
      a: "Yes. Gratuities are included in the cruise fare.",
    },
    {
      q: "Is Wi-Fi included on Explora Journeys?",
      a: "Yes. Unlimited high-speed Wi-Fi is included throughout the voyage.",
    },
    {
      q: "Are shore excursions included?",
      a: "Most shore excursions are not included and are purchased separately.",
    },
    {
      q: "Does Explora Journeys include specialty dining?",
      a: "Yes. Multiple fine dining venues are included without many of the upcharges common on mainstream cruise lines.",
    },
    {
      q: "Are all rooms suites on Explora Journeys?",
      a: "Yes. Every accommodation onboard is an oceanfront luxury suite with a private terrace.",
    },
    {
      q: "Is room service included?",
      a: "Yes. In-suite dining and 24-hour room service are included.",
    },
    {
      q: "Is Explora Journeys worth the price?",
      a: "For travelers seeking luxury inclusions, spacious suites, and sophisticated onboard experiences, many travelers consider Explora Journeys an excellent luxury value.",
    },
    {
      q: "What is not included on Explora Journeys?",
      a: "Spa treatments, boutique purchases, casino spending, and many shore excursions are additional.",
    },
    {
      q: "Is Explora Journeys family friendly?",
      a: "Yes, though the atmosphere appeals more to sophisticated luxury travelers than families seeking heavy entertainment programming.",
    },
    {
      q: "How does Explora compare to Regent Seven Seas?",
      a: "Regent includes more excursions, while Explora emphasizes modern European luxury design and lifestyle-focused cruising.",
    },
    {
      q: "Does Explora Journeys include airport transfers?",
      a: "Some promotions and suite categories may include transfers, but not all fares automatically include them.",
    },
    {
      q: "Who should book Explora Journeys?",
      a: "Experienced luxury travelers, couples, affluent professionals, and travelers seeking relaxed upscale cruising are ideal candidates.",
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
const ExploraJourneysCruises = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [active, setActive] = useState(inclusions[0].id);
  const current = inclusions.find((c) => c.id === active);
  const Icon = current.icon;

  const images = [HeroImage1, HeroImage4, HeroImage2];

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
          What Is Included on Explora Journeys Cruises? Complete Luxury
          Inclusions Guide
        </title>
        <meta
          name="title"
          content="What Is Included on Explora Journeys Cruises? | Luxury Cruise Expert Guide"
        />
        <meta
          name="description"
          content="Discover exactly what is included on Explora Journeys cruises including fine dining, beverages, gratuities, Wi-Fi, wellness, luxury suites, and exclusive onboard experiences. Expert insights from Angela Hughes of Trips & Ships Luxury Travel."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Nav />

      {/* HERO */}
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
          <h1>What Is Included on Explora Journeys Cruises?</h1>

          <p>
            Luxury travelers today expect more than beautiful ships and elegant
            suites. They want meaningful value, exceptional service, and a
            genuinely elevated experience from the moment they board.
          </p>

          <p>
            That is exactly why travelers continue asking one important
            question: “What is actually included on Explora Journeys cruises?”
          </p>

          {/* READ MORE CONTENT */}
          {readMore && (
            <>
              <p>
                The answer is far more impressive than many travelers realize.
              </p>

              <p>
                Unlike traditional premium cruise lines that add constant
                onboard charges, Explora Journeys was designed to create a
                seamless luxury lifestyle-at-sea experience with far fewer
                surprise expenses.
              </p>

              <p>
                According to luxury cruise expert Angela Hughes, one of the
                biggest reasons affluent travelers are gravitating toward
                Explora Journeys is the line’s balance between refined European
                luxury and transparent value.
              </p>

              <p>
                With more than 40 years in the travel industry, travel
                experience spanning over 121 countries, and recognition as the
                2024 Luxury Travel Influencer of the Year by Travel Leaders
                Network, Angela Hughes has become one of the most trusted voices
                in luxury cruising worldwide.
              </p>
            </>
          )}

          {/* READ MORE BUTTON */}
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

      <section className="Ejc-section">
        <div className="Ejc-container">
          {/* Header */}
          <div className="Ejc-header">
            <h2 className="Ejc-title">
              What Is Included in an <br /> Explora Journeys Cruise Fare?
            </h2>
            <div className="adg-accent-line"></div>
            <p className="Ejc-subtitle">
              Explora Journeys includes significantly more than many luxury
              travelers expect.
            </p>
          </div>

          {/* Layout */}
          <div className="Ejc-layout">
            {/* Sidebar nav */}
            <nav className="Ejc-nav">
              {inclusions.map((item) => {
                const NavIcon = item.icon;
                const isActive = active === item.id;
                return (
                  <button
                    key={item.id}
                    className={`Ejc-nav-btn ${isActive ? "Ejc-nav-btn--active" : ""}`}
                    onClick={() => setActive(item.id)}
                  >
                    <div className="Ejc-nav-icon-wrap">
                      <NavIcon size={16} strokeWidth={1.8} />
                    </div>
                    <span className="Ejc-nav-label">{item.title}</span>
                    {isActive && <div className="Ejc-nav-pip"></div>}
                  </button>
                );
              })}
            </nav>

            {/* Detail panel */}
            <div className="Ejc-panel" key={active}>
              {/* Image */}
              <div className="Ejc-img-wrap">
                <img
                  src={current.image}
                  alt={current.title}
                  className="Ejc-img"
                />
                <div className="Ejc-img-overlay">
                  <div className="Ejc-img-icon">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <span className="Ejc-img-title">{current.title}</span>
                </div>
              </div>

              {/* Items grid */}
              <div className="Ejc-items-grid">
                {current.items.map((item) => (
                  <div key={item} className="Ejc-item">
                    <div className="Ejc-item-dot"></div>
                    <span className="Ejc-item-text">{item}</span>
                  </div>
                ))}
              </div>

              {/* Note */}
              <div className="Ejc-note">
                <div className="Ejc-note-bar"></div>
                <p className="Ejc-note-text">{current.note}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
WHAT IS NOT INCLUDED ON EXPLORA JOURNEYS?
════════════════════════════════════════ */}
      <section className="adg-c-section adg-c-bg-dark" id="adg-not-included">
        <div className="adg-c-container">
          <div className="adg-c-why-grid">
            {/* LEFT — TEXT */}
            <div className="adg-c-why-left">
              <span className="adg-c-eyebrow adg-c-eyebrow-light">
                Luxury Cruise Planning
              </span>

              <h2 className="adg-c-h2 adg-c-h2-light">
                What Is NOT Included on Explora Journeys?
              </h2>

              <div className="adg-c-accent-line adg-c-accent-light"></div>

              <p className="adg-c-lead adg-c-lead-light">
                Even highly inclusive luxury cruise lines still have optional
                premium expenses travelers should plan for in advance.
              </p>

              <p className="adg-c-lead adg-c-lead-light">
                Understanding these distinctions helps travelers budget more
                effectively and avoid surprises during the voyage.
              </p>

              <p className="adg-c-lead adg-c-lead-light">
                According to Angela Hughes, one of the most common mistakes
                luxury travelers make is assuming all luxury cruise lines
                include the same things. In reality, inclusions vary
                significantly between brands.
              </p>
            </div>

            {/* RIGHT — FEATURE CARDS */}
            <div className="adg-c-why-right" style={{ marginTop: "41px" }}>
              <div className="adg-c-why-card">
                <span className="adg-c-why-card-label">
                  Typically NOT Included
                </span>

                <p className="adg-c-why-card-desc">
                  Even with strong luxury inclusions, these experiences often
                  remain additional:
                </p>

                <div className="adg-c-pill-grid">
                  {[
                    "Shore excursions",
                    "Spa treatments",
                    "Some ultra-premium wines or rare spirits",
                    "Boutique shopping",
                    "Casino spending",
                    "Private destination experiences",
                    "Certain exclusive culinary events",
                  ].map((item, i) => (
                    <div key={i} className="adg-c-pill">
                      <span className="adg-c-pill-check">
                        <Minus size={13} strokeWidth={3} />
                      </span>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IS EXPLORA JOURNEYS TRULY ALL INCLUSIVE? */}
      <section className="adg-section" id="adg-food-itineraries">
        <div className="adg-container">
          <div className="adg-section-header" style={{ marginBottom: "60px" }}>
            <h2 className="adg-h2">Is Explora Journeys Truly All Inclusive?</h2>

            <div className="adg-accent-line"></div>
          </div>

          <div className="adg-split-layout">
            {/* Left Content Column */}
            <div className="adg-content-card-side">
              <img
                src={AzamaraDietaryImage}
                alt="Explora Journeys luxury onboard experience"
                className="adg-side-image"
                style={{ height: "30vh" }}
              />

              <div className="adg-info-card">
                <div className="adg-card-meta">
                  <Compass size={28} />
                  <span className="adg-meta-label">
                    Luxury Inclusive Experience
                  </span>
                </div>

                <p className="adg-card-lead">
                  The short answer is: Mostly — but not completely.
                </p>

                <div className="adg-card-divider"></div>

                <p className="adg-card-subtext">
                  Explora Journeys is best described as “Luxury inclusive”
                  rather than fully ultra-all-inclusive.
                </p>

                <p className="adg-card-subtext" style={{ marginTop: "18px" }}>
                  Compared to mainstream cruise lines, the included value is
                  dramatically higher.
                </p>
              </div>
            </div>

            {/* Right Inclusions Grid Column */}
            <div className="adg-list-side">
              {[
                {
                  title: "Regent Seven Seas Cruises",
                  icon: <Ship size={20} />,
                },
                {
                  title: "Silversea Cruises",
                  icon: <Star size={20} />,
                },
                {
                  title: "Seabourn Cruise Line",
                  icon: <Compass size={20} />,
                },
                {
                  title: "Some shore excursions cost extra",
                  icon: <Minus size={20} />,
                },
                {
                  title: "Certain premium experiences remain additional",
                  icon: <Wine size={20} />,
                },
                {
                  title: "Luxury value remains exceptionally strong",
                  icon: <Check size={20} />,
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

      {/* FLEET OVERVIEW TABLE */}
      <section
        className="Asc-section Asc-bg-white"
        id="Asc-fleet"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Explora Journeys vs Other Luxury Cruise Lines
            </h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-table-wrapper">
            <table className="Asc-fleet-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Explora Journeys</th>
                  <th>Regent Seven Seas</th>
                  <th>Seabourn</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <strong>Fine Dining Included</strong>
                  </td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>

                <tr>
                  <td>
                    <strong>Premium Alcohol Included</strong>
                  </td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>

                <tr>
                  <td>
                    <strong>Wi-Fi Included</strong>
                  </td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>

                <tr>
                  <td>
                    <strong>Gratuities Included</strong>
                  </td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>

                <tr>
                  <td>
                    <strong>Shore Excursions Included</strong>
                  </td>
                  <td>Limited</td>
                  <td>Often Included</td>
                  <td>Select</td>
                </tr>

                <tr>
                  <td>
                    <strong>Luxury Suites Only</strong>
                  </td>
                  <td>Yes</td>
                  <td>Mostly</td>
                  <td>Mostly</td>
                </tr>

                <tr>
                  <td>
                    <strong>European Luxury Atmosphere</strong>
                  </td>
                  <td>Strong</td>
                  <td>Moderate</td>
                  <td>Moderate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== MODERN BENTO GRID GALLERY SHOWCASE ===== */}
      <section className="senianta-gallery-section" style={{ backgroundColor: "var(--bg-soft)" }}>
        <div className="senianta-gallery-inner">
          <div className="senianta-gallery-header">
            <h2 className="senianta-gallery-h2">Global Explorations</h2>
            <div className="senianta-gallery-divider"></div>
            <p className="senianta-gallery-p">
              From sun-drenched Mediterranean coastlines to the historic charm
              of Northern Europe, experience the world's most breathtaking
              destinations in absolute luxury.
            </p>
          </div>

          <div className="senianta-gallery-bento-grid">
            {/* 01: Large Featured Item - Amalfi Coast */}
            <div className="senianta-gallery-item senianta-gallery-feature">
              <div className="senianta-gallery-image-box">
                <img
                  src={ExploraDetination}
                  alt="Amalfi Coast Italy Mediterranean Summer"
                  className="senianta-gallery-img"
                />
                <div className="senianta-gallery-overlay">
                  <span className="senianta-gallery-badge">
                    Mediterranean Summer
                  </span>
                  <h3 className="senianta-gallery-h3">The Amalfi Coast</h3>
                  <p className="senianta-gallery-item-p">
                    Sail past dramatic cliffs and sun-bleached Italian villages
                    where timeless coastal luxury meets the azure horizon.
                  </p>
                </div>
              </div>
            </div>

            {/* 02: Vertical Item - Red Sea & Oman */}
            <div className="senianta-gallery-item senianta-gallery-tall">
              <div className="senianta-gallery-image-box">
                <img
                  src={ExploraDetination2}
                  alt="Explora Journeys Red Sea Luxury Cruise Oman"
                  className="senianta-gallery-img"
                />
                <div className="senianta-gallery-overlay">
                  <span className="senianta-gallery-badge">Arabian Luxury</span>
                  <h3 className="senianta-gallery-h3">Red Sea & Oman</h3>
                </div>
              </div>
            </div>

            {/* 03: Standard Item - Tallinn, Estonia */}
            <div className="senianta-gallery-item">
              <div className="senianta-gallery-image-box">
                <img
                  src={ExploraDetination3}
                  alt="Tallinn Estonia Old Town Summer Travel Aerial"
                  className="senianta-gallery-img"
                />
                <div className="senianta-gallery-overlay">
                  <span className="senianta-gallery-badge">
                    Northern Europe
                  </span>
                  <h3 className="senianta-gallery-h3">
                    Historic Tallinn Old Town
                  </h3>
                </div>
              </div>
            </div>

            {/* 04: Standard Item - Canada & New England */}
            <div className="senianta-gallery-item">
              <div className="senianta-gallery-image-box">
                <img
                  src={ExploraDetination4}
                  alt="Explora Journeys Canada New England Fall Cruise"
                  className="senianta-gallery-img"
                />
                <div className="senianta-gallery-overlay">
                  <span className="senianta-gallery-badge">
                    Autumn Journeys
                  </span>
                  <h3 className="senianta-gallery-h3">Canada & New England</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AacExpertSection />

      {/* VIDEO SECTION */}
      <section
        className="Asc-video-section"
        id="Asc-video"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Explora Journeys Video Experience</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Experience the elegance and celebration of the EXPLORA II Naming
              Ceremony by Explora Journeys — showcasing the brand’s modern
              luxury, sophisticated design, and immersive ocean travel
              experience.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/-MoZN-XQPLY"
                title="EXPLORA II Naming Ceremony I Explora Journeys"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* WHO SHOULD CHOOSE */}
      <section className="Asc-section Asc-bg-soft" id="Asc-who">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">
              Is Explora Journeys the Right Luxury Cruise for You?
            </h2>

            <div className="Asc-accent-line"></div>
          </div>

          <div className="Asc-who-grid">
            {/* BEST FOR */}
            <div className="Asc-who-card Asc-who-yes">
              <h3 className="Asc-who-title">Best For</h3>

              <ul className="Asc-who-list">
                {[
                  "Luxury couples",
                  "Sophisticated travelers",
                  "Food and wine enthusiasts",
                  "Experienced cruisers",
                  "Multi-generational luxury travel",
                  "Travelers seeking relaxed luxury",
                  "Affluent professionals",
                ].map((item, i) => (
                  <li key={i}>
                    <Check size={16} className="Asc-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* NOT IDEAL FOR */}
            <div className="Asc-who-card Asc-who-no">
              <h3 className="Asc-who-title">Not Best For</h3>

              <ul className="Asc-who-list">
                {[
                  "Budget travelers",
                  "Travelers seeking nonstop entertainment",
                  "Families wanting large waterparks",
                  "Travelers expecting fully included excursions",
                  "Party-focused cruise guests",
                ].map((item, i) => (
                  <li key={i}>
                    <Minus size={16} className="Asc-icon-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMON MISTAKES ───────────────────────────────────────── */}
      <section className="Lfsg-section Lfsg-bg-dark" id="Lfsg-mistakes">
        <div className="Lfsg-container">
          <div className="Lfsg-section-header">
            <h2 className="Lfsg-h2-white">Common Mistakes Travelers Make</h2>

            <div className="Lfsg-accent-line-white" />
          </div>

          <div className="Lfsg-mistakes-grid">
            {[
              {
                title: "Assuming All Luxury Cruises Are Identical",
                desc: "Luxury cruise lines differ dramatically in style, inclusions, onboard atmosphere, and overall travel experience.",
              },

              {
                title: "Booking the Wrong Suite Category",
                desc: "Not all suites offer the same value depending on itinerary, ship location, suite size, and personal travel style.",
              },

              {
                title: "Ignoring Destination Experience Costs",
                desc: "Excursions, private touring, wellness experiences, and premium dining upgrades can significantly impact the total trip cost.",
              },

              {
                title: "Waiting Too Long To Book",
                desc: "Luxury inventory on premium sailings and top suite categories can disappear quickly, especially on high-demand itineraries.",
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
        </div>
      </section>

      {/* ANGELA HUGHES AUTHORITY BOX */}
      <section className="Adg-expert-section" id="Asc-expert-insight">
        <div className="Asc-container">
          {/* TOP HEADING */}
          <div className="Adg-expert-heading">
            <span className="Adg-expert-eyebrow">
              Expert Insight From Angela Hughes
            </span>

            <h2 className="Adg-expert-title">Angela Hughes Luxury Authority</h2>

            <div className="Adg-expert-divider"></div>
          </div>

          {/* MAIN GRID */}
          <div className="Adg-expert-grid">
            {/* LEFT SIDE */}
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

            {/* RIGHT SIDE */}
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
                      icon: <Ship size={16} />,
                      label:
                        "Specialist in luxury cruises, expeditions, safaris, and premium travel experiences",
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
                  help travelers identify which luxury cruise experiences truly
                  align with their lifestyle, expectations, and travel goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANNING ADVICE BEFORE BOOKING */}
      <section
        className="Ejc-section Ejc-planning-section"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Ejc-container">
          {/* HEADER */}
          <div className="Ejc-header">
            <h2 className="Ejc-title">
              Planning Advice Before Booking Explora Journeys
            </h2>

            <div className="Ejc-accent-line"></div>
          </div>

          <div className="Ejc-grid">
            {/* LEFT SIDE */}
            <div className="Ejc-card Ejc-main-card">
              <h3 className="Ejc-card-title">
                What Luxury Travelers Should Evaluate
              </h3>

              <p className="Ejc-card-intro">
                Before reserving an Explora voyage, travelers should carefully
                evaluate several important factors that shape the overall luxury
                cruise experience.
              </p>

              <div className="Ejc-feature-list">
                {[
                  {
                    icon: <Compass size={18} />,
                    text: "Desired onboard atmosphere",
                  },
                  {
                    icon: <Star size={18} />,
                    text: "Included-value expectations",
                  },
                  {
                    icon: <MapPin size={18} />,
                    text: "Preferred destinations",
                  },
                  {
                    icon: <Utensils size={18} />,
                    text: "Dining priorities",
                  },
                  {
                    icon: <Heart size={18} />,
                    text: "Wellness preferences",
                  },
                  {
                    icon: <Ship size={18} />,
                    text: "Suite category strategy",
                  },
                  {
                    icon: <Globe size={18} />,
                    text: "Shore excursion budget",
                  },
                ].map((item, i) => (
                  <div key={i} className="Ejc-feature-item">
                    <span className="Ejc-feature-icon">{item.icon}</span>

                    <span className="Ejc-feature-text">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="Ejc-card Ejc-benefits-card">
              <h3 className="Ejc-card-title">
                Benefits of Working With a Luxury Cruise Advisor
              </h3>

              <p className="Ejc-card-intro">
                Working with an experienced luxury cruise advisor often unlocks
                valuable advantages and a more personalized planning experience.
              </p>

              <div className="Ejc-benefits-grid">
                {[
                  {
                    icon: <BadgeDollarSign size={18} />,
                    label: "Preferred pricing",
                  },
                  {
                    icon: <Gift size={18} />,
                    label: "Exclusive amenities",
                  },
                  {
                    icon: <BedDouble size={18} />,
                    label: "Suite recommendations",
                  },
                  {
                    icon: <Users size={18} />,
                    label: "Hosted departures",
                  },
                  {
                    icon: <Crown size={18} />,
                    label: "VIP perks",
                  },
                  {
                    icon: <Plane size={18} />,
                    label: "Personalized itinerary planning",
                  },
                ].map((item, i) => (
                  <div key={i} className="Ejc-benefit-card">
                    <div className="Ejc-benefit-icon">{item.icon}</div>

                    <span className="Ejc-benefit-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* VIDEO SECTION */}
      <section
        className="Asc-video-section"
        id="Asc-video"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Explore the Explora Journeys Experience</h2>

            <div className="Asc-accent-line"></div>

            <p className="Asc-video-intro">
              Journey through the beauty of the Caribbean with Explora Journeys
              as this cinematic experience captures crystal-clear waters,
              vibrant island culture, and the refined elegance of luxury ocean
              travel.
            </p>
          </div>

          <div className="Asc-video-wrapper">
            <div className="Asc-video-frame">
              <iframe
                src="https://www.youtube.com/embed/XrrbICIeWhQ"
                title="Chapter Two: Tales of the Caribbean Sea I Explora Journeys"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>


      {/* PLANNING ADVICE */}
      <section
        className="Avr-planning-section"
        id="Asc-planning-advice"
        style={{ backgroundColor: "var(--bg-white)" }}
      >
        <div className="Asc-container">
          {/* HEADING */}
          <div className="Avr-planning-heading">
            <span className="Avr-planning-eyebrow">Modern Luxury Cruising</span>

            <h2 className="Avr-planning-title">
              Why Explora Journeys Matters in Luxury Travel
            </h2>

            <div className="Avr-planning-divider"></div>
          </div>

          {/* TWO-PANEL GRID */}
          <div className="Avr-planning-grid">
            {/* LEFT PANEL */}
            <div className="Avr-planning-left">
              <div className="Avr-planning-left-deco">&ldquo;</div>

              <h3 className="Avr-planning-left-title">
                A Major Shift in Modern Luxury Cruising
              </h3>

              <p className="Avr-planning-left-body">
                Explora Journeys represents a new direction in luxury travel,
                focusing on sophisticated experiences designed for travelers who
                value elegance, space, and personalization over crowded
                entertainment-driven cruising.
              </p>

              <div className="Avr-planning-alert">
                <ShieldCheck size={18} className="Avr-planning-alert-icon" />

                <p className="Avr-planning-alert-text">
                  That positioning is precisely why many affluent travelers
                  compare Explora Journeys more closely to upscale private yacht
                  experiences than traditional cruise vacations.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="Avr-planning-right">
              <p className="Avr-planning-right-intro">
                Instead of emphasizing mass-market experiences, Explora focuses
                on:
              </p>

              <div className="Avr-planning-benefits-grid">
                {[
                  {
                    icon: <MapPin size={18} />,
                    label: "Space",
                  },
                  {
                    icon: <Compass size={18} />,
                    label: "Calm",
                  },
                  {
                    icon: <Ship size={18} />,
                    label: "Design",
                  },
                  {
                    icon: <Star size={18} />,
                    label: "Culinary excellence",
                  },
                  {
                    icon: <Award size={18} />,
                    label: "Elevated service",
                  },
                  {
                    icon: <Users size={18} />,
                    label: "Sophisticated travelers",
                  },
                ].map((item, i) => (
                  <div key={i} className="Avr-planning-benefit-card">
                    <span className="Avr-planning-benefit-icon">
                      {item.icon}
                    </span>

                    <span className="Avr-planning-benefit-label">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <p
                className="Avr-planning-right-intro"
                style={{ marginTop: "24px" }}
              >
                Explora Journeys continues attracting luxury travelers seeking a
                quieter, more refined, and contemporary approach to luxury
                cruising.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* final verdict */}

      <section
        className="Ejv-verdict-section"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="Ejv-verdict-container">
          {/* Header */}
          <div className="Ejv-verdict-header">
            <span className="Ejv-verdict-eyebrow">Final Thoughts</span>

            <h2 className="Ejv-verdict-title">Is Explora Journeys Worth It?</h2>

            <div className="Asc-accent-line"></div>
          </div>

          {/* Main card */}
          <div className="Ejv-verdict-card">
            {/* Left — Image */}
            <div className="Ejv-verdict-img-col">
              <img
                src={ExploraPool}
                alt="Explora Journeys luxury cruise experience"
                className="Ejv-verdict-img"
              />

              <div className="Ejv-verdict-img-badge">
                <span className="Ejv-verdict-badge-label">
                  Explora Journeys
                </span>

                <span className="Ejv-verdict-badge-sub">
                  Contemporary Luxury
                </span>
              </div>
            </div>

            {/* Right — Content */}
            <div className="Ejv-verdict-content">
              <p className="Ejv-verdict-intro">
                For travelers seeking refined, contemporary luxury at sea,
                Explora Journeys delivers one of the strongest included-value
                propositions in luxury cruising today.
              </p>

              <ul className="Ejv-verdict-list">
                {[
                  "Spacious accommodations",
                  "Fine dining",
                  "Premium beverages",
                  "Wellness experiences",
                  "Personalized service",
                  "Elegant European sophistication",
                ].map((item) => (
                  <li key={item} className="Ejv-verdict-list-item">
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      className="Ejv-verdict-check"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="Ejv-verdict-outcome">
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="Ejv-verdict-outcome-icon"
                />

                <p className="Ejv-verdict-outcome-text">
                  Explora successfully blends modern luxury with a more relaxed,
                  sophisticated atmosphere than many traditional luxury cruise
                  competitors.
                </p>
              </div>

              <div className="Ejv-verdict-divider"></div>

              <div className="Ejv-verdict-note">
                <Info
                  size={15}
                  strokeWidth={1.8}
                  className="Ejv-verdict-note-icon"
                />

                <p className="Ejv-verdict-note-text">
                  For travelers considering Explora Journeys, working with an
                  experienced luxury travel advisor like Angela Hughes can
                  dramatically improve both the booking experience and overall
                  voyage value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="Asc-section Asc-bg-white" id="Asc-faq">
        <div className="Asc-container">
          <div className="Asc-section-header">
            <h2 className="Asc-h2">Frequently Asked Questions</h2>
            <div className="Asc-accent-line"></div>
            <p className="Asc-faq-intro">
              Everything you need to know about choosing the right Azamara ship.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <section className="Asc-help-section">
        <div className="Asc-help-bg-wrap">
          <img
            src={CTAImage}
            alt="Explora Journeys luxury cruise"
            className="Asc-help-bg-img"
          />
          <div className="Asc-help-overlay"></div>
        </div>

        <div className="Asc-container">
          <div className="Asc-help-card">
            <div className="Asc-help-content">
              <div className="Asc-help-header">
                <span className="Asc-help-eyebrow">
                  Personalized Luxury Cruise Planning
                </span>

                <h2 className="Asc-help-h2">
                  Ready to Discover Whether Explora Journeys Is Right for You?
                </h2>

                <div className="Asc-help-accent"></div>
              </div>

              <div className="Asc-help-grid">
                <div className="Asc-help-info">
                  <p className="Asc-help-intro">
                    Connect with Angela Hughes and the expert team at Trips &
                    Ships Luxury Travel for personalized luxury cruise planning
                    tailored to your travel style and preferences.
                  </p>

                  <p className="Asc-help-intro">
                    From suite selection and destination planning to exclusive
                    amenities and insider guidance, expert support helps
                    travelers maximize the value of their Explora Journeys
                    experience.
                  </p>

                  <p className="Asc-help-intro">
                    Whether you are new to luxury cruising or an experienced
                    traveler seeking a more modern luxury experience,
                    personalized guidance can help you determine if Explora
                    Journeys is the ideal fit.
                  </p>

                  <div className="Asc-help-btn-container">
                    <button className="Asc-help-cta-btn">
                      Start Planning Your Explora Journey
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="Asc-help-list-box">
                  <h3 className="Asc-help-list-title">
                    Expert guidance includes:
                  </h3>

                  <ul className="Asc-help-bullets">
                    {[
                      "Personalized luxury cruise planning",
                      "Exclusive luxury travel benefits",
                      "Suite and itinerary recommendations",
                      "Destination-focused guidance",
                      "Luxury cruise comparison expertise",
                      "Tailored travel experiences",
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
                    Trips & Ships Luxury Travel specializes in helping
                    discerning travelers create highly personalized luxury
                    cruise experiences worldwide.
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

export default ExploraJourneysCruises;
